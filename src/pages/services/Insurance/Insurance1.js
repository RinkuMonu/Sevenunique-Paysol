import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQInsurancePayment from "./FAQInsurancePayment";
import "./Insurancee.css";
import LoginModal from "../../Login/LoginModal";

const Insurance1 = ({ 
  selectedCategory,
  onProceed,
  selectedOperator,
  setSelectedOperator,
  accountNumber,
  setAccountNumber,
  inputError,
  setInputError,
  operators,
  additionalFields,
  setAdditionalFields
}) => {
  const [formData, setFormData] = useState({
    operator: "",
    policyNumber: "",
    dateofBirth: "",
    emailId: "",
    mobileNumber: "",
  });
 
  const [currentOperator, setCurrentOperator] = useState(null);
  const [additionalFormFields, setAdditionalFormFields] = useState([]);
  const [isValidating, setIsValidating] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginCallback, setLoginCallback] = useState(null);
  const [showMobileNumber, setShowMobileNumber] = useState(false);

  // Function to format date from YYYY-MM-DD to DD-MM-YYYY
  const formatDateForAPI = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  };

  // Function to validate date format
  const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  };

  useEffect(() => {
    if (operators.length === 1 && !selectedOperator) {
      setSelectedOperator(operators[0].id);
      setFormData(prev => ({ ...prev, operator: operators[0].id }));
      setCurrentOperator(operators[0]);
    } else if (selectedOperator) {
      const operator = operators.find(op => op.id === selectedOperator);
      setCurrentOperator(operator);
    }
  }, [operators, selectedOperator, setSelectedOperator]);

  useEffect(() => {
    if (currentOperator) {
      const fields = [];
      let needsMobileNumber = false;
      
      for (let i = 1; i <= 3; i++) {
        const adName = currentOperator[`ad${i}_name`];
        const adDisplay = currentOperator[`ad${i}_d_name`];
        const adRegex = currentOperator[`ad${i}_regex`];
        
        if (adName && adDisplay) {
          let type = 'text';
          if (adName.toLowerCase().includes('date') || adDisplay.toLowerCase().includes('date')) {
            type = 'date';
          } else if (adName.toLowerCase().includes('email')) {
            type = 'email';
          } else if (adName.toLowerCase().includes('mobile') || adDisplay.toLowerCase().includes('mobile')) {
            type = 'tel';
            needsMobileNumber = true;
          }
          
          fields.push({
            id: adName,
            label: adDisplay,
            type: type,
            regex: adRegex,
            required: true
          });
        }
      }
      
      setAdditionalFormFields(fields);
      setShowMobileNumber(needsMobileNumber);
    }
  }, [currentOperator]);

  const handleOperatorChange = (e) => {
    const value = e.target.value;
    setFormData({
      operator: value,
      policyNumber: "",
      dateofBirth: "",
      emailId: "",
      mobileNumber: ""
    });
    setSelectedOperator(value);
    setAccountNumber("");
    setInputError("");
    
    const operator = operators.find(op => op.id === value);
    setCurrentOperator(operator);
  };

  const handlePolicyNumberChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, policyNumber: value }));
    setAccountNumber(value);
    
    if (currentOperator?.regex) {
      try {
        const regex = new RegExp(currentOperator.regex);
        if (value && !regex.test(value)) {
          setInputError(`Please enter a valid ${currentOperator.displayname || "policy number"}`);
        } else {
          setInputError("");
        }
      } catch (err) {
        console.error("Invalid regex pattern:", currentOperator.regex);
      }
    }
  };

  const handleAdditionalFieldChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    const field = additionalFormFields.find(f => f.id === id);
    if (field?.regex) {
      try {
        const regex = new RegExp(field.regex);
        if (value && !regex.test(value)) {
          setInputError(`Please enter a valid ${field.label}`);
        } else {
          setInputError("");
        }
      } catch (err) {
        console.error("Invalid regex pattern:", field.regex);
      }
    }
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, mobileNumber: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsValidating(true);

    const token = localStorage.getItem("token");
    if (!token) {
      setLoginCallback(() => () => {
        validateAndProceed();
      });
      setShowLoginModal(true);
      setIsValidating(false);
      return;
    }

    validateAndProceed();
  };

  const validateAndProceed = () => {
    if (!formData.operator) {
      setInputError("Please select an insurance provider");
      setIsValidating(false);
      return;
    }

    if (!formData.policyNumber) {
      setInputError(
        `Please enter your ${currentOperator?.displayname || "policy number"}`
      );
      setIsValidating(false);
      return;
    }

    if (currentOperator?.regex) {
      try {
        const regex = new RegExp(currentOperator.regex);
        if (!regex.test(formData.policyNumber)) {
          setInputError(
            `Please enter a valid ${currentOperator.displayname || "policy number"}`
          );
          setIsValidating(false);
          return;
        }
      } catch (err) {
        console.error("Invalid regex pattern:", currentOperator.regex);
        setInputError("Invalid validation pattern. Please contact support.");
        setIsValidating(false);
        return;
      }
    }

    if (showMobileNumber && (!formData.mobileNumber || formData.mobileNumber.length !== 10)) {
      setInputError("Please enter a valid 10-digit mobile number");
      setIsValidating(false);
      return;
    }

    for (const field of additionalFormFields) {
      if (field.required && !formData[field.id]) {
        setInputError(`Please enter ${field.label}`);
        setIsValidating(false);
        return;
      }
      
      if (field.regex && formData[field.id]) {
        try {
          const regex = new RegExp(field.regex);
          if (!regex.test(formData[field.id])) {
            setInputError(`Please enter a valid ${field.label}`);
            setIsValidating(false);
            return;
          }
        } catch (err) {
          console.error("Invalid regex pattern:", field.regex);
        }
      }

      if (field.type === 'date' && formData[field.id]) {
        if (!isValidDate(formData[field.id])) {
          setInputError(`Please enter a valid ${field.label} in YYYY-MM-DD format`);
          setIsValidating(false);
          return;
        }
      }
    }

    setInputError("");
    
    // Prepare additional fields data for parent component with formatted dates
    const additionalFieldsData = {};
    additionalFormFields.forEach(field => {
      if (formData[field.id]) {
        // Format date fields before sending to parent
        additionalFieldsData[field.id] = field.type === 'date' 
          ? formatDateForAPI(formData[field.id])
          : formData[field.id];
      }
    });
    
    // Update parent's additionalFields state
    setAdditionalFields(additionalFieldsData);
    
    // Call parent's proceed handler
    onProceed(additionalFieldsData);
    setIsValidating(false);
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    if (loginCallback) {
      loginCallback();
    }
  };

  const isFormValid = () => {
    const hasRequiredFieldsFilled = additionalFormFields.every(field => 
      !field.required || formData[field.id]
    );
    
    const mobileValid = !showMobileNumber || (formData.mobileNumber?.length === 10);
    
    return formData.operator && 
           formData.policyNumber && 
           mobileValid &&
           hasRequiredFieldsFilled &&
           !inputError;
  };

  return (
    <>
      <div className="p-5" style={{ backgroundColor: "#EFF8FF" }}>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{ color: "#001e50" }}>
              Insurance Payment Solution
            </h2>
            <h3>Pay Your Insurance Premiums Securely and On Time with ABDKS</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Home/insurance-vec.png"
                alt="insurance"
                height="300"
                className="item-center InsuranceeSideImg"
              />
            </div>
          </Col>

          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <h3
                className="mb-4"
                style={{ color: "#001e50", fontWeight: "bold" }}
              >
                Insurance Premium Payment Online
              </h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="operator">
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Label>Operator</Form.Label>
                    <img
                      height={25}
                      src="https://static.mobikwik.com/appdata/operator_icons/bbps_v2.png"
                      alt="BBPS"
                    />
                  </div>
                  <Form.Select
                    value={formData.operator}
                    onChange={handleOperatorChange}
                    required
                  >
                    <option value="">Select Operator</option>
                    {operators.map((operator) => (
                      <option key={operator.id} value={operator.id}>
                        {operator.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {formData.operator && (
                  <>
                    <Form.Group className="mb-3" controlId="policyNumber">
                      <Form.Label>
                        {currentOperator?.displayname || "Policy Number"}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={
                          currentOperator?.displayname 
                            ? `Enter ${currentOperator.displayname}`
                            : "Enter Policy Number"
                        }
                        value={formData.policyNumber}
                        onChange={handlePolicyNumberChange}
                        required
                      />
                    </Form.Group>

                    {additionalFormFields.map(field => (
                      <Form.Group key={field.id} className="mb-3" controlId={field.id}>
                        <Form.Label>{field.label}</Form.Label>
                        {field.type === 'date' ? (
                          <>
                            <Form.Control
                              type="date"
                              id={field.id} 
                              value={formData[field.id] || ''}
                              onChange={handleAdditionalFieldChange}
                              required={field.required}
                              max={new Date().toISOString().split('T')[0]}
                            />
                            <Form.Text className="text-muted">
                              Format: YYYY-MM-DD
                            </Form.Text>
                          </>
                        ) : field.type === 'tel' ? (
                          <Form.Control
                            type="tel"
                            placeholder={`Enter ${field.label}`}
                            value={formData[field.id] || ''}
                            onChange={handleAdditionalFieldChange}
                            required={field.required}
                            maxLength={10}
                          />
                        ) : (
                          <Form.Control
                            type={field.type}
                            id={field.id}
                            placeholder={`Enter ${field.label}`}
                            value={formData[field.id] || ''}
                            onChange={handleAdditionalFieldChange}
                            required={field.required}
                          />
                        )}
                      </Form.Group>
                    ))}

                    {showMobileNumber && (
                      <Form.Group className="mb-3" controlId="mobileNumber">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Enter 10-digit mobile number"
                          value={formData.mobileNumber}
                          onChange={handleMobileNumberChange}
                          maxLength={10}
                          required
                        />
                      </Form.Group>
                    )}

                    {inputError && (
                      <div className="alert alert-danger">{inputError}</div>
                    )}
                  </>
                )}

                {formData.operator && (
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    style={{ backgroundColor: "#001e50", color: "white" }}
                    disabled={!isFormValid() || isValidating}
                  >
                    {isValidating ? "Validating..." : "Proceed"}
                  </Button>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <FAQInsurancePayment />
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default Insurance1;
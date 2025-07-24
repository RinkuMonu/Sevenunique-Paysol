import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQLoanEMIPayments from "./FAQLoanEMIPayments";
import Swal from "sweetalert2";
import LoginModal from "../../Login/LoginModal";

const Emi1 = ({ 
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
  setAdditionalFields,
  currentOperatorDetails
}) => {
  const [formData, setFormData] = useState({
    operator: "",
    applicationId: "",
  });
  const [isValidating, setIsValidating] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginCallback, setLoginCallback] = useState(null);

  // Set default operator if only one exists
  useEffect(() => {
    if (operators.length === 1 && !selectedOperator) {
      setSelectedOperator(operators[0].id);
      setFormData(prev => ({ ...prev, operator: operators[0].id }));
    }
  }, [operators, selectedOperator, setSelectedOperator]);

  useEffect(() => {
    if (selectedOperator) {
      // Reset additional fields when operator changes
      setAdditionalFields({
        ad1: "",
        ad2: "",
        ad3: ""
      });
    }
  }, [selectedOperator, setAdditionalFields]);

  const handleOperatorChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, operator: value, applicationId: "" }));
    setSelectedOperator(value);
    setAccountNumber("");
    setInputError("");
  };

  const handleApplicationIdChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, applicationId: value }));
    setAccountNumber(value);
    
    // Validate input if operator has regex
    if (currentOperatorDetails?.regex) {
      try {
        const regex = new RegExp(currentOperatorDetails.regex);
        if (!regex.test(value)) {
          setInputError(`Please enter a valid ${currentOperatorDetails.displayname || "application ID"}`);
        } else {
          setInputError("");
        }
      } catch (err) {
        console.error("Invalid regex pattern:", currentOperatorDetails.regex);
      }
    }
  };

  const handleAdditionalFieldChange = (fieldName, value) => {
    setAdditionalFields(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const validateInput = (value, regexPattern) => {
    if (!value || !regexPattern) return true;
    
    try {
      const cleanPattern = regexPattern.replace(/\\/g, "\\");
      const regex = new RegExp(cleanPattern);
      return regex.test(value);
    } catch (err) {
      console.error("Invalid regex pattern:", regexPattern);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsValidating(true);

    // 1. Check if user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      // Store the callback function to proceed after login
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
    // 2. Validate operator is selected
    if (!formData.operator) {
      setInputError("Please select an operator");
      setIsValidating(false);
      return;
    }

    // 3. Validate application ID is entered
    if (!formData.applicationId) {
      setInputError(
        `Please enter your ${currentOperatorDetails?.displayname || "application ID"}`
      );
      setIsValidating(false);
      return;
    }

    // 4. Validate against regex pattern if exists
    if (currentOperatorDetails?.regex) {
      try {
        const regex = new RegExp(currentOperatorDetails.regex);
        if (!regex.test(formData.applicationId)) {
          setInputError(
            `Please enter a valid ${currentOperatorDetails.displayname || "application ID"}`
          );
          setIsValidating(false);
          return;
        }
      } catch (err) {
        console.error("Invalid regex pattern:", currentOperatorDetails.regex);
        setInputError("Invalid validation pattern. Please contact support.");
        setIsValidating(false);
        return;
      }
    }

    // 5. Validate additional fields if they exist
    if (currentOperatorDetails?.ad1_name && currentOperatorDetails?.ad1_regex) {
      if (!validateInput(additionalFields.ad1, currentOperatorDetails.ad1_regex)) {
        setInputError(`Please enter a valid ${currentOperatorDetails.ad1_d_name}`);
        setIsValidating(false);
        return;
      }
    }
    
    if (currentOperatorDetails?.ad2_name && currentOperatorDetails?.ad2_regex) {
      if (!validateInput(additionalFields.ad2, currentOperatorDetails.ad2_regex)) {
        setInputError(`Please enter a valid ${currentOperatorDetails.ad2_d_name}`);
        setIsValidating(false);
        return;
      }
    }

    // 6. Clear any previous errors if all validations pass
    setInputError("");

    // 7. Only proceed if all validations pass
    if (formData.operator && formData.applicationId && !inputError) {
      onProceed();
    }

    setIsValidating(false);
  };

  const renderAdditionalFields = () => {
    if (!currentOperatorDetails) return null;

    return (
      <>
        {currentOperatorDetails.ad1_name && (
          <Form.Group className="mb-3" controlId="additionalField1">
            <Form.Label>{currentOperatorDetails.ad1_d_name}</Form.Label>
            <Form.Control
              type="text"
              placeholder={`Enter ${currentOperatorDetails.ad1_d_name}`}
              value={additionalFields.ad1}
              onChange={(e) => handleAdditionalFieldChange("ad1", e.target.value)}
              className={
                currentOperatorDetails.ad1_regex && 
                additionalFields.ad1 && 
                !validateInput(additionalFields.ad1, currentOperatorDetails.ad1_regex) 
                  ? "is-invalid" 
                  : ""
              }
            />
            {currentOperatorDetails.ad1_regex && additionalFields.ad1 && (
              <Form.Text className={
                !validateInput(additionalFields.ad1, currentOperatorDetails.ad1_regex) 
                  ? "text-danger" 
                  : "text-muted"
              }>
                {!validateInput(additionalFields.ad1, currentOperatorDetails.ad1_regex)
                  ? `Invalid ${currentOperatorDetails.ad1_d_name} format`
                  : currentOperatorDetails.ad1_regex === "dd-mm-yyyy"
                    ? "Format: DD-MM-YYYY"
                    : ""}
              </Form.Text>
            )}
          </Form.Group>
        )}

        {currentOperatorDetails.ad2_name && (
          <Form.Group className="mb-3" controlId="additionalField2">
            <Form.Label>{currentOperatorDetails.ad2_d_name}</Form.Label>
            <Form.Control
              type="text"
              placeholder={`Enter ${currentOperatorDetails.ad2_d_name}`}
              value={additionalFields.ad2}
              onChange={(e) => handleAdditionalFieldChange("ad2", e.target.value)}
              className={
                currentOperatorDetails.ad2_regex && 
                additionalFields.ad2 && 
                !validateInput(additionalFields.ad2, currentOperatorDetails.ad2_regex) 
                  ? "is-invalid" 
                  : ""
              }
            />
            {currentOperatorDetails.ad2_regex && additionalFields.ad2 && (
              <Form.Text className={
                !validateInput(additionalFields.ad2, currentOperatorDetails.ad2_regex) 
                  ? "text-danger" 
                  : "text-muted"
              }>
                {!validateInput(additionalFields.ad2, currentOperatorDetails.ad2_regex)
                  ? `Invalid ${currentOperatorDetails.ad2_d_name} format`
                  : ""}
              </Form.Text>
            )}
          </Form.Group>
        )}

        {currentOperatorDetails.ad3_name && (
          <Form.Group className="mb-3" controlId="additionalField3">
            <Form.Label>{currentOperatorDetails.ad3_d_name}</Form.Label>
            <Form.Control
              type="text"
              placeholder={`Enter ${currentOperatorDetails.ad3_d_name}`}
              value={additionalFields.ad3}
              onChange={(e) => handleAdditionalFieldChange("ad3", e.target.value)}
              className={
                currentOperatorDetails.ad3_regex && 
                additionalFields.ad3 && 
                !validateInput(additionalFields.ad3, currentOperatorDetails.ad3_regex) 
                  ? "is-invalid" 
                  : ""
              }
            />
            {currentOperatorDetails.ad3_regex && additionalFields.ad3 && (
              <Form.Text className={
                !validateInput(additionalFields.ad3, currentOperatorDetails.ad3_regex) 
                  ? "text-danger" 
                  : "text-muted"
              }>
                {!validateInput(additionalFields.ad3, currentOperatorDetails.ad3_regex)
                  ? `Invalid ${currentOperatorDetails.ad3_d_name} format`
                  : ""}
              </Form.Text>
            )}
          </Form.Group>
        )}
      </>
    );
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    if (loginCallback) {
      loginCallback();
    }
  };

  return (
    <>
      <div className="p-5" style={{ backgroundColor: "#EFF8FF" }}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{ color: "#001e50" }}>
              Pay Your Loan EMIs Online Quickly, Securely & Hassle-Free with ABDKS
            </h2>
            <h3>One Platform to Manage All Your EMI Payments</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Home/emi-vec.png"
                alt="EMI"
                height="300"
                className="item-center"
              />
            </div>
          </Col>

          {/* Right Side Form */}
          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <h3
                className="mb-4"
                style={{ color: "#001e50", fontWeight: "bold" }}
              >
                Loan EMI Payment Online
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
                    <Form.Group className="mb-3" controlId="applicationId">
                      <Form.Label>
                        {currentOperatorDetails?.displayname || "Application ID"}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={
                          currentOperatorDetails?.displayname 
                            ? `Enter ${currentOperatorDetails.displayname}`
                            : "Enter Application ID"
                        }
                        value={formData.applicationId}
                        onChange={handleApplicationIdChange}
                        className={inputError ? "is-invalid" : ""}
                        required
                      />
                      {/* {currentOperatorDetails?.regex && (
                        <Form.Text className="text-muted">
                          Required format: {currentOperatorDetails.regex}
                        </Form.Text>
                      )} */}
                      {inputError && (
                        <div className="text-danger">{inputError}</div>
                      )}
                    </Form.Group>

                    {/* Render additional fields if they exist */}
                    {renderAdditionalFields()}
                  </>
                )}

                {formData.operator && formData.applicationId && (
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    style={{ backgroundColor: "#001e50", color: "white" }}
                    disabled={
                      !!inputError || 
                      isValidating ||
                      (currentOperatorDetails?.ad1_name && !additionalFields.ad1) ||
                      (currentOperatorDetails?.ad2_name && !additionalFields.ad2)
                    }
                  >
                    {isValidating ? "Validating..." : "Confirm"}
                  </Button>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <FAQLoanEMIPayments />
      <LoginModal
        show={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default Emi1;
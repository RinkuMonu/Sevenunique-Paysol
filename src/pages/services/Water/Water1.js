import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQWaterBillPayment from "./FAQWaterBillPayment";
import LoginModal from "../../Login/LoginModal";

const Water1 = ({ 
  selectedCategory,
  onProceed,
  selectedOperator,
  setSelectedOperator,
  accountNumber,
  setAccountNumber,
  inputError,
  setInputError,
  operators
}) => {
  const [formData, setFormData] = useState({
    operator: "",
    accountNumber: "",
    additionalField1: "",
  });
  const [currentOperator, setCurrentOperator] = useState(null);
  const [isValidating, setIsValidating] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginCallback, setLoginCallback] = useState(null);
  const [errors, setErrors] = useState({
    accountNumber: "",
    additionalField1: "",
  });

  // Set default operator if only one exists
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

  const handleOperatorChange = (e) => {
    const value = e.target.value;
    setFormData({
      operator: value,
      accountNumber: "",
      additionalField1: ""
    });
    setSelectedOperator(value);
    setAccountNumber("");
    setInputError("");
    setErrors({
      accountNumber: "",
      additionalField1: "",
    });
    
    const operator = operators.find(op => op.id === value);
    setCurrentOperator(operator);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === "accountNumber") {
      setAccountNumber(value);
    }
    
    // Validate input in real-time
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let error = "";
    
    if (fieldName === "accountNumber" && currentOperator?.regex) {
      try {
        const regex = new RegExp(currentOperator.regex.trim());
        if (value && !regex.test(value)) {
          error = `Please enter a valid ${currentOperator.displayname}`;
        }
      } catch (err) {
        console.error("Invalid regex pattern:", currentOperator.regex);
      }
    }
    
    if (fieldName === "additionalField1" && currentOperator?.ad1_regex) {
      try {
        const regex = new RegExp(currentOperator.ad1_regex.trim());
        if (value && !regex.test(value)) {
          error = `Please enter a valid ${currentOperator.ad1_d_name}`;
        }
      } catch (err) {
        console.error("Invalid regex pattern:", currentOperator.ad1_regex);
      }
    }
    
    setErrors(prev => ({ ...prev, [fieldName]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsValidating(true);

    // Validate all fields
    validateField("accountNumber", formData.accountNumber);
    if (currentOperator?.ad1_name) {
      validateField("additionalField1", formData.additionalField1);
    }

    // Check if there are any errors
    const hasErrors = Object.values(errors).some(error => error) || 
      (currentOperator?.ad1_name && !formData.additionalField1);
    
    if (hasErrors) {
      setIsValidating(false);
      return;
    }

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

    // If user is logged in, proceed with validation
    validateAndProceed();
  };

  const validateAndProceed = () => {
    // 2. Validate operator is selected
    if (!formData.operator) {
      setInputError("Please select a water provider");
      setIsValidating(false);
      return;
    }

    // 3. Validate account number is entered
    if (!formData.accountNumber) {
      setInputError(
        `Please enter your ${currentOperator?.displayname || "account number"}`
      );
      setIsValidating(false);
      return;
    }

    // 4. Validate additional field if required
    if (currentOperator?.ad1_name && !formData.additionalField1) {
      setInputError(
        `Please enter your ${currentOperator.ad1_d_name}`
      );
      setIsValidating(false);
      return;
    }

    // All validations passed
    setInputError("");
    onProceed();
    setIsValidating(false);
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
              Pay your water bills online - safe, fast and discomfort free
            </h2>
            <h3>Simplified Water Bill Payments Across India</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Home/water-vec.png"
                alt="water bill"
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
                Online Water Bill Payment
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
                    <Form.Group className="mb-3" controlId="accountNumber">
                      <Form.Label>
                        {currentOperator?.displayname || "Account Number"}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="accountNumber"
                        placeholder={
                          currentOperator?.displayname 
                            ? `Enter ${currentOperator.displayname}`
                            : "Enter Account Number"
                        }
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                        required
                        isInvalid={!!errors.accountNumber}
                      />
                      {errors.accountNumber && (
                        <Form.Control.Feedback type="invalid">
                          {errors.accountNumber}
                        </Form.Control.Feedback>
                      )}
                      {/* {currentOperator?.regex && (
                        <Form.Text className="text-muted">
                          Format: {currentOperator.regex}
                        </Form.Text>
                      )} */}
                    </Form.Group>

                    {/* Additional Field 1 - for operators like Jalandhar and Ludhiana */}
                    {currentOperator?.ad1_name && (
                      <Form.Group className="mb-3" controlId="additionalField1">
                        <Form.Label>{currentOperator.ad1_d_name}</Form.Label>
                        <Form.Control
                          type={currentOperator.ad1_name === "mobileNumber" ? "tel" : "text"}
                          name="additionalField1"
                          placeholder={`Enter ${currentOperator.ad1_d_name}`}
                          value={formData.additionalField1}
                          onChange={handleInputChange}
                          required
                          isInvalid={!!errors.additionalField1}
                        />
                        {errors.additionalField1 && (
                          <Form.Control.Feedback type="invalid">
                            {errors.additionalField1}
                          </Form.Control.Feedback>
                        )}
                        {/* {currentOperator.ad1_regex && (
                          <Form.Text className="text-muted">
                            Format: {currentOperator.ad1_regex}
                          </Form.Text>
                        )} */}
                      </Form.Group>
                    )}
                  </>
                )}

                {formData.operator && formData.accountNumber && (
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    style={{ backgroundColor: "#001e50", color: "white" }}
                    disabled={
                      !!errors.accountNumber || 
                      (currentOperator?.ad1_name && !!errors.additionalField1) ||
                      isValidating
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
      <FAQWaterBillPayment />
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default Water1;
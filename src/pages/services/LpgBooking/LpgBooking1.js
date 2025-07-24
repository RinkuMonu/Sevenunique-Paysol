import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQLpgGasBooking from './FAQLpgGasBooking';
import LoginModal from '../../Login/LoginModal';

const LpgBooking1 = ({
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
  const [formData, setFormData] = useState({});
  const [currentOperator, setCurrentOperator] = useState(null);
  const [additionalFields, setAdditionalFields] = useState([]);
  const [mainFieldName, setMainFieldName] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginCallback, setLoginCallback] = useState(null);

  useEffect(() => {
    if (operators.length === 1 && !selectedOperator) {
      initializeOperator(operators[0]);
    } else if (selectedOperator) {
      const operator = operators.find(op => op.id === selectedOperator);
      if (operator) initializeOperator(operator);
    }
  }, [operators, selectedOperator, setSelectedOperator]);

  const generateInitialFormData = (operator) => {
    const mainField = operator.displayname === "Registered Contact Number"
      ? "registeredContactNumber"
      : "mainField";

    const data = {
      operator: operator.id,
      registeredContactNumber: "",
      [mainField]: ""
    };

    if (operator.ad1_name) data[operator.ad1_name] = "";
    if (operator.ad2_name) data[operator.ad2_name] = "";
    if (operator.ad3_name) data[operator.ad3_name] = "";

    return { data, mainField };
  };

  const initializeOperator = (operator) => {
    setSelectedOperator(operator.id);
    setCurrentOperator(operator);
    setInputError("");

    const { data, mainField } = generateInitialFormData(operator);
    setFormData(data);
    setMainFieldName(mainField);
    setAccountNumber("");

    const fields = [];
    if (operator.ad1_name) fields.push(createFieldConfig(operator, 'ad1'));
    if (operator.ad2_name) fields.push(createFieldConfig(operator, 'ad2'));
    if (operator.ad3_name) fields.push(createFieldConfig(operator, 'ad3'));
    setAdditionalFields(fields);
  };

  const createFieldConfig = (operator, prefix) => ({
    name: operator[`${prefix}_name`],
    displayName: operator[`${prefix}_d_name`],
    regex: operator[`${prefix}_regex`]
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (inputError) setInputError("");
  };

  const validateField = (value, regex) => {
    if (!regex) return true;
    try {
      return new RegExp(regex).test(value);
    } catch (err) {
      console.error("Invalid regex pattern:", regex);
      return false;
    }
  };

  const isFormValid = () => {
    if (!formData.operator || !formData.registeredContactNumber.trim()) return false;

    const mainInputValue = formData[mainFieldName];
    if (currentOperator?.regex && !validateField(mainInputValue, currentOperator.regex)) {
      return false;
    }

    return additionalFields.every(field =>
      !field.regex || validateField(formData[field.name], field.regex)
    );
  };

  const handleOperatorChange = (e) => {
    const operator = operators.find(op => op.id === e.target.value);
    if (operator) initializeOperator(operator);
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
    if (!validateField(formData.registeredContactNumber, "^[0-9]{10}$")) {
      setInputError("Please enter a valid 10-digit contact number");
      setIsValidating(false);
      return;
    }

    const mainValue = formData[mainFieldName];
    if (currentOperator?.regex && !validateField(mainValue, currentOperator.regex)) {
      setInputError(`Please enter a valid ${currentOperator.displayname}`);
      setIsValidating(false);
      return;
    }

    for (const field of additionalFields) {
      if (field.regex && !validateField(formData[field.name], field.regex)) {
        setInputError(`Please enter a valid ${field.displayName}`);
        setIsValidating(false);
        return;
      }
    }

    setInputError("");
    setAccountNumber(mainValue);
    onProceed();
    setIsValidating(false);
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    if (loginCallback) loginCallback();
  };

  const renderMainInputField = () => {
    if (!currentOperator) return null;

    return (
      <Form.Group className="mb-3" controlId={mainFieldName}>
        <Form.Label>{currentOperator.displayname}</Form.Label>
        <Form.Control
          type={currentOperator.displayname.includes("Contact") ? "tel" : "text"}
          placeholder={`Enter ${currentOperator.displayname}`}
          value={formData[mainFieldName] || ""}
          onChange={handleChange}
          maxLength={currentOperator.displayname.includes("Contact") ? 10 : undefined}
          required
        />
        {currentOperator.regex && (
          <Form.Text className="text-muted">
            Format: {currentOperator.regex}
          </Form.Text>
        )}
      </Form.Group>
    );
  };

  return (
    <>
      <div className="p-5" style={{ backgroundColor: "#EFF8FF" }}>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{ color: "#001e50" }}>
              Book Your LPG Gas Cylinder Online
            </h2>
            <div className="d-flex justify-content-center align-items-center">
              <img src="/assets/Home/lpg-vec.png" alt="LPG Booking" height="300" />
            </div>
          </Col>

          <Col md={6}>
            <div className="p-4 rounded bg-white shadow" style={{ maxWidth: "500px", margin: "0 auto" }}>
              <h3 className="mb-4" style={{ color: "#001e50", fontWeight: "bold" }}>
                Gas Booking Online
              </h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="operator">
                  <Form.Label>Operator</Form.Label>
                  <Form.Select
                    value={formData.operator || ""}
                    onChange={handleOperatorChange}
                    required
                  >
                    <option value="">Select Operator</option>
                    {operators.map(operator => (
                      <option key={operator.id} value={operator.id}>
                        {operator.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {renderMainInputField()}

                {additionalFields.map(field => (
                  <Form.Group key={field.name} className="mb-3" controlId={field.name}>
                    <Form.Label>{field.displayName}</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={`Enter ${field.displayName}`}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      required={!!field.regex}
                    />
                    {field.regex && (
                      <Form.Text className="text-muted">
                        Format: {field.regex}
                      </Form.Text>
                    )}
                  </Form.Group>
                ))}

                {/* {currentOperator?.displayname !== "Registered Contact Number" && (
                  <Form.Group className="mb-3" controlId="registeredContactNumber">
                    <Form.Label>Registered Contact Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.registeredContactNumber || ""}
                      onChange={handleChange}
                      maxLength="10"
                      required
                    />
                  </Form.Group>
                )} */}

                {inputError && <div className="text-danger mb-3">{inputError}</div>}

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: '#001e50', color: 'white' }}
                  disabled={!isFormValid() || isValidating}
                >
                  {isValidating ? "Validating..." : "Confirm"}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <FAQLpgGasBooking />
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default LpgBooking1;

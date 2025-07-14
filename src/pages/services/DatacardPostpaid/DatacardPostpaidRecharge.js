import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQDatacardPostpaid from "./FAQDatacardPostpaid";
import Swal from "sweetalert2";

const DatacardPostpaidRecharge = ({
  selectedCategory,
  onProceed,
  selectedOperator,
  setSelectedOperator,
  accountNumber,
  setAccountNumber,
  inputError,
  setInputError,
  operators = []
}) => {
  const [formData, setFormData] = useState({
    operator: selectedOperator || "",
    mobileNumber: accountNumber || "",
  });
  const [currentOperator, setCurrentOperator] = useState(null);

  const filteredOperators = operators.filter(op => op.category === "Datacard Postpaid");

  useEffect(() => {
    if (selectedOperator) {
      const operator = filteredOperators.find(op => op.id === selectedOperator);
      setCurrentOperator(operator);
      setFormData(prev => ({
        ...prev,
        operator: selectedOperator,
        mobileNumber: accountNumber || ""
      }));
    } else if (filteredOperators.length === 1) {
      const operator = filteredOperators[0];
      setFormData(prev => ({ ...prev, operator: operator.id }));
      setSelectedOperator(operator.id);
      setCurrentOperator(operator);
    }
  }, [selectedOperator, filteredOperators, setSelectedOperator, accountNumber]);

  const handleOperatorChange = (e) => {
    const value = e.target.value;
    const operator = filteredOperators.find(op => op.id === value);

    setFormData(prev => ({
      ...prev,
      operator: value,
      mobileNumber: ""
    }));
    setSelectedOperator(value);
    setAccountNumber("");
    setInputError("");
    setCurrentOperator(operator);
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    setFormData(prev => ({ ...prev, mobileNumber: value }));
    setAccountNumber(value);

    if (currentOperator?.regex) {
      try {
        const regex = new RegExp(currentOperator.regex);
        if (!regex.test(value)) {
          setInputError(`Please enter a valid ${currentOperator.displayname || "mobile number"}`);
        } else {
          setInputError("");
        }
      } catch (err) {
        console.error("Invalid regex pattern:", currentOperator.regex);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        title: "Login Required",
        text: "Please login to continue with Datacard Postpaid bill payment.",
        icon: "warning",
        confirmButtonColor: "#001e50",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      });
      return;
    }
    if (!formData.operator || !formData.mobileNumber) {
      setInputError("Please fill all required fields");
      return;
    }

    if (inputError) return;

    onProceed();
  };

  if (selectedCategory !== "Datacard Postpaid") return null;

  return (
    <>
      <div className="p-5" style={{ backgroundColor: "#F5F9FF" }}>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold" style={{ color: "#002244" }}>
              Datacard Postpaid Recharge
            </h2>
            <h3>Recharge Your Datacard Postpaid Connection with ABDKS</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Home/datacard-vec.png"
                alt="Datacard Recharge"
                height="300"
                className="item-center postpaidSideImg"
                loading="lazy"
              />
            </div>
          </Col>

          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <h3 className="mb-4" style={{ color: "#002244", fontWeight: "bold" }}>
                Pay Your Datacard Postpaid Bill
              </h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="operator">
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Label>Operator</Form.Label>
                    <img
                      height={25}
                      src="images/sevenpostpaid1.png"
                      alt="BBPS"
                      loading="lazy"
                    />
                  </div>
                  <Form.Select
                    value={formData.operator}
                    onChange={handleOperatorChange}
                    disabled={filteredOperators.length === 0}
                  >
                    <option value="">Select Operator</option>
                    {filteredOperators.map((operator) => (
                      <option key={operator.id} value={operator.id}>
                        {operator.name}
                      </option>
                    ))}
                  </Form.Select>
                  {filteredOperators.length === 0 && (
                    <Form.Text className="text-danger">
                      No datacard postpaid operators available
                    </Form.Text>
                  )}
                </Form.Group>

                {formData.operator && (
                  <Form.Group className="mb-3" controlId="mobileNumber">
                    <Form.Label>
                      {currentOperator?.displayname || "Mobile Number"}
                    </Form.Label>
                    <div className="input-group">
                      {currentOperator?.displayname?.includes("+91") && (
                        <span className="input-group-text">+91</span>
                      )}
                      <Form.Control
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder={
                          currentOperator?.displayname
                            ? `Enter ${currentOperator.displayname.replace("(+91)", "").trim()}`
                            : "Enter Mobile Number"
                        }
                        value={formData.mobileNumber}
                        onChange={handleMobileChange}
                        maxLength={10}
                        isInvalid={!!inputError}
                      />
                    </div>
                    {currentOperator?.regex && (
                      <Form.Text className="text-muted">
                        {currentOperator.displayname ? `${currentOperator.displayname} format: ` : "Format: "}
                        {currentOperator.regex === "^[6789][0-9]{9}$"
                          ? "10 digit number starting with 6,7,8 or 9"
                          : currentOperator.regex}
                      </Form.Text>
                    )}
                    <Form.Control.Feedback type="invalid">
                      {inputError}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mt-3"
                  style={{ backgroundColor: "#002244", color: "white" }}
                  disabled={!formData.operator || !formData.mobileNumber || !!inputError}
                >
                  Proceed to Recharge
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <FAQDatacardPostpaid />
    </>
  );
};

export default DatacardPostpaidRecharge;
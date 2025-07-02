import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FAQMoneyTransfer from "./FAQMoneyTransfer";

const TransferToBank = () => {
  const [formData, setFormData] = useState({
    beneficiaryName: "",
    accountNumber: "",
    ifscCode: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Only allow letters in beneficiaryName
    if (id === "beneficiaryName") {
      const lettersOnly = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData({ ...formData, [id]: lettersOnly });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const isFormValid =
    formData.beneficiaryName &&
    formData.accountNumber &&
    formData.ifscCode &&
    formData.amount;

  return (
    <>
      <div className="p-5 marginTop" style={{ backgroundColor: "#EFF8FF" }}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold text-orange">Online Money Transfer</h2>
            <h3>Send Money Securely Across India—Powered by Sevenunique</h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Home/transfer-vec.png"
                alt="Image"
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
              <Form>
                <Form.Group className="mb-3" controlId="beneficiaryName">
                  <Form.Label>Beneficiary Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name on Bank Account"
                    value={formData.beneficiaryName}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="accountNumber">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Account Number"
                    value={formData.accountNumber}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ifscCode">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="IFSC Code"
                    value={formData.ifscCode}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="₹ Amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: "#b53008", color: "white" }}
                  disabled={!isFormValid}
                >
                  Go
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <FAQMoneyTransfer />
    </>
  );
};

export default TransferToBank;

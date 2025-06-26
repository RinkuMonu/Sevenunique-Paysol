import React, { useState } from 'react';
import {  Row, Col, Form, Button } from "react-bootstrap";
import FAQCreditCardPayment from './FAQCreditCardBill';

const CreditCardPayment = () => {
  const [formData, setFormData] = useState({
    creditCard: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.creditCard && formData.amount;

  return (
    <>
      <div className="p-5" style={{backgroundColor:"#EFF8FF"}}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold text-orange">Credit Card Bills via SevenUnique BBPS</h2>
            <h3>
              Pay your credit card bills online using the BBPS-powered service.
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Home/card-vec.png"
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
              <h3 className="mb-4 text-orange fw-bold">Credit Card Payment</h3>
              <Form>
                <Form.Group className="mb-3" controlId="creditCard">
                  <Form.Label>Credit Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Credit Card Number"
                    value={formData.creditCard}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Bill Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="₹ Bill Amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 border-none"
                  style={{ backgroundColor: '#b53008', color: 'white' }}
                  disabled={!isFormValid}
                >
                  Confirm
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <FAQCreditCardPayment />
    </>
  );
};

export default CreditCardPayment;

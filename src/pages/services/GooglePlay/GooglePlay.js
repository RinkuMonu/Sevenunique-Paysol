import React, { useState } from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQGooglePlayPayments from './FAQGooglePlayPayments';

const GooglePlay = () => {
  const [formData, setFormData] = useState({
    amount: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.amount && !isNaN(formData.amount) && formData.amount >= 10 && formData.amount <= 5000;

  return (
    <>
      <div className="p-5" style={{backgroundColor:"#EFF8FF"}}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold text-orange"> Google Play Top-Up </h2>
            <h3>
              Instant Google Play Top-Up with our platform – Fast, Reliable & 24x7
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Home/google-vec.png"
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
              <h3 className="mb-4 text-orange fw-bold">Online Google Play Recharge</h3>
              <Form>
                <Form.Group className="mb-3" controlId="operator">
                  <Form.Label>Operator</Form.Label>
                  <Form.Select>
                    <option>Google Play Recharge Code</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount (₹ 10 - ₹ 5000)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Amount (₹ 10 - ₹ 5000)"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
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
      <FAQGooglePlayPayments />
    </>
  );
};

export default GooglePlay;

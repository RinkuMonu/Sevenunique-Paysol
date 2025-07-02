/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import {  Row, Col, Form, Button } from "react-bootstrap";
import FAQWaterBillPayment from './FAQWaterBillPayment';

const Water = () => {
  const [formData, setFormData] = useState({
    operator: "",
    rrNumber: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.operator && formData.rrNumber;

  return (
    <>
      <div className="p-5" style={{backgroundColor:"#EFF8FF"}}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold text-orange">Pay water bills via the SevenUnique BBPS platform. </h2>
            <h3>
              Use our BBPS portal for easy and secure water bill payments.
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Home/water-vec.png"
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
              <h3 className="mb-4 text-orange fw-bold">Online Water Bill Payment</h3>
              <Form>
                <Form.Group className="mb-3" controlId="operator">
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Label>Operator</Form.Label>
                    <img
                      height={20}
                      src="https://static.mobikwik.com/appdata/operator_icons/bbps_v2.png"
                      alt="BBPS"
                    />
                  </div>
                  <Form.Select
                    value={formData.operator}
                    onChange={handleChange}
                  >
                    <option value="">Select Operator</option>
                    <option value="Airtel">Airtel</option>
                    <option value="Jio">Jio</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="rrNumber">
                  <Form.Label>RR Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="RR Number"
                    value={formData.rrNumber}
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
      <FAQWaterBillPayment />
    </>
  );
};

export default Water;

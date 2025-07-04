import React, { useState } from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import FAQLandline from './FAQLandline';

const Landline = () => {
  const [formData, setFormData] = useState({
    operator: "",
    landlineNumber: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.operator && formData.landlineNumber;

  return (
    <>
      <div className="p-5" style={{backgroundColor:"#EFF8FF"}}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold text-orange"> Landline Bill Pay with Sevenunique BBPS </h2>
            <h3>
              Use the BBPS service to pay BSNL & MTNL landline bills instantly.
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Home/landline-vec.png"
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
              <h3 className="mb-4 text-orange fw-bold">Online Landline Bill Payment</h3>
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

                <Form.Group className="mb-3" controlId="landlineNumber">
                  <Form.Label>Landline Number (with STD Code)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Landline Number (with STD Code)"
                    value={formData.landlineNumber}
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
      <FAQLandline />
    </>
  );
};

export default Landline;

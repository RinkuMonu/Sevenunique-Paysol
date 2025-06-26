import React, { useState } from "react";
import {  Row, Col, Form, Button } from "react-bootstrap";
import FAQElectricityBill from "./FAQElectricityBill";

const ElectricityBillPayment = () => {
  const [formData, setFormData] = useState({
    operator: "",
    consumerNumber: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = formData.operator && formData.consumerNumber;






  return (
    <>
      <div className="p-5" style={{backgroundColor:"#EFF8FF"}}>
        <Row>
          {/* Left Side Content */}
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold fs-2 text-orange"> Pay Electricity Bills on SevenUnique BBPS</h2>
            <h3>
              Use the platform for fast, secure electricity bill payments via BBPS.

            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Home/electricity-vec.png"
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
              <h3 className="mb-4 text-orange fw-bold">Electricity bill payment online- BBPS- Powered, safe, and immediate</h3>
              <p>Immediately pay electricity bills across India with the SevenUnique reliable BBPS platform that offers real-time updates, zero additional fees, and multi-operator coverage.</p>

<div className="text-center text-orange">
<h4>Pay the electricity bill online</h4>
<p>It is the days of standing in queues to pay electricity bills. You can immediately make your electricity bill payment online through our safe and BBPS-integrated platform. Whether you are looking for a customer facility or a retailer offering services, simplifies electricity bill payment in all major cities in India.</p>
</div>
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
                <Form.Group className="mb-3" controlId="consumerNumber">
                  <Form.Label>Consumer Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Consumer Number"
                    value={formData.consumerNumber}
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
                  Confirm
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <FAQElectricityBill />
    </>


  );
};

export default ElectricityBillPayment;

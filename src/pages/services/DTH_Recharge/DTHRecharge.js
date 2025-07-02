/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import FAQDthRecharge from "./FAQDthRecharge";
import DTHBrowsePlans from "./DTHBrowsePlans";

const DTHRecharge = () => {
  const [showModal, setShowModal] = useState(false);
    const [operatorcheck, setoperatorCheck]=useState()

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const [formData, setFormData] = useState({
    operator: "",
    customerId: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const isFormValid = formData.operator && formData.customerId && formData.amount;

  return (
    <>
      <div className="p-5" style={{backgroundColor:"#EFF8FF"}}>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <h2 className="fw-bold text-orange">
             DTH recharge services with SevenUnique

            </h2>
            <h3>
              Recharge your DTH connection instantly with our BBPS-compliant platform.


            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Home/dth-vec.png"
                alt="Image"
                height="300"
                className="item-center"
              />
            </div>
          </Col>

          <Col md={6}>
            <div
              className="p-4 rounded bg-white shadow"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <h3 className="mb-4 text-orange fw-bold">DTH Recharge</h3>
              <Form onSubmit={handleSubmit}>
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
                    <option value="Airtel">Airtel DTH</option>
                    <option value="DishTv">Dish TV</option>
                    <option value="SunDirectTv">Sun Direct TV</option>
                    <option value="TataPlay">TATA Play</option>
                    <option value="d2h">d2h</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="customerId">
                  <Form.Label>Customer id</Form.Label>
                  <Form.Control
  type="text"
  placeholder="Mobile Number"
  value={operatorcheck}
  inputMode="numeric"
  pattern="[0-9]*"
  maxLength={10} // optional
  onChange={(e) => {
    const onlyDigits = e.target.value.replace(/\D/g, '');
    setoperatorCheck(onlyDigits);
  }}
/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type="number"
                      placeholder="₹ Amount"
                      value={formData.amount}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      aria-label="Check Plans"
                      onClick={handleModalOpen}
                    >
                      Check Plans
                    </button>
                  </div>
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
      <FAQDthRecharge />
      <Modal show={showModal} onHide={handleModalClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Browse Plans</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DTHBrowsePlans />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DTHRecharge;

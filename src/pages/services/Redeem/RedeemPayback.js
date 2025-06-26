import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


const RedeemPayback = () => {
  return (
    <>

    <Container className="py-5 marginTop">
      <Row>
        {/* Left Side Content */}
        <Col md={6} className="text-center text-md-start">
          <h2 className="fw-bold text-theme" >
           The Best Reward for Loyalty? Real Money.
          </h2>
          <h3>
           Redeem Your Payback Points Instantly with ABDKS Solutions Pvt. Ltd.

          </h3>
        </Col>

        {/* Right Side Content */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
        
          <div
            className="p-4 rounded bg-white shadow text-center"
            style={{ maxWidth: "400px" }}
          >
           
            <h3 className='fw-bold text-theme' >Login with phone number linked with PAYBACK </h3>
            
      <ul className="list-unstyled mt-3">
      <li>✔ Quick Redemption Process</li>
      <li>✔ Instant Discount on Transactions</li>
      <li>✔ No Hidden Charges</li>
      <li>✔ Works Across All ABDKS Partnered Services</li>
    </ul>
    <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
      <a href="#check-balance" className="btn btn-light border-light  text-theme fw-semibold px-4 py-2 rounded-pill">
        Check Payback Balance
      </a>
      <a href="#redeem" className="btn border-light text-theme fw-semibold px-4 py-2 rounded-pill">
        Redeem Now
      </a>
    </div>

          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default RedeemPayback
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


const RedeemPayback = () => {
  return (
    <>

    <Container id="redeemtop" className="py-5 marginTop">
      <Row>
        {/* Left Side Content */}
        <Col md={6} className="text-center text-md-start">
          <h2 className="fw-bold text-theme" >
           The Best Reward for Loyalty? Real Money.
          </h2>
          <h3>
           Redeem Your Payback Points Instantly with our platform </h3>
           <div className="d-flex justify-content-center align-items-center">
              <img
                src="/assets/Home/redeem-vec.png"
                alt="Image"
                height="300"
                className="item-center"
              />
              </div>
        </Col>

        {/* Right Side Content */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
        
          <div
            className="p-4 rounded bg-white shadow text-center"
            style={{ maxWidth: "400px" }}
          >
           
            <h3 className='fw-bold text-theme' >Turn your loyalty into instant savings! </h3>
            <p>Now you can redeem your Payback Points directly through our platform. and use them for mobile recharges, utility bill payments, DTH, and more.</p>

      <ul className="list-unstyled mt-3">
      <li>✔ Quick Redemption Process</li>
      <li>✔ Instant Discount on Transactions</li>
      <li>✔ No Hidden Charges</li>
      <li>✔ Available Across All our Partnered Services</li>
    </ul>
    <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
      <a href="#check-balance" className="btn custombtn-hover">
        Check Payback Balance
      </a>
      <a href="#redeem" className="btn custombtn-hover">
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
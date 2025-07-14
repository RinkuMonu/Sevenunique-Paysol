import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const RedeemPayback = () => {
  return (
    <Container id="redeemtop" className="py-5 my-5">
      <Row className="align-items-center">
        {/* Left Side Content */}
        <Col lg={6} className="mb-5 mb-lg-0 mt-5">
          <div className="position-relative">
            <h2 className="fw-bold display-5 ">
              The Best Reward for Loyalty? <span className="text-theme">Real Money.</span>
            </h2>
            <h3 className="h4 text-muted mb-4">
              Redeem Your Payback Points Instantly with our platform
            </h3>
            
            <div className="d-none d-lg-block">
              <div className="position-absolute start-0 bottom-0 w-100" style={{ zIndex: -1 }}>
                <div className=" bg-opacity-10 rounded-circle" style={{
                  width: '500px',
                  height: '500px',
                  transform: 'translate(-20%, 10%)',
                  background:"rgba(181, 48, 8, 0.1)"
                }}></div>
              </div>
              <img
                src="/assets/Home/redeem-vec.png"
                alt="Redeem Points"
                className="img-fluid mt-4 ps-4"
                style={{ maxHeight: '350px' }}
              />
            </div>
          </div>
        </Col>

        {/* Right Side Content */}
        <Col lg={6}>
          <div className="p-4 p-lg-5 rounded-4 bg-white shadow-lg border border-2 border-primary border-opacity-10">
            <div className="text-center mb-4">
              <div className="  rounded-circle d-inline-flex p-3 mb-3" style={{background:"rgba(181, 48, 8, 0.1)"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#b53008" viewBox="0 0 16 16">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm1-8a1 1 0 0 0-1-1H6.5a1 1 0 1 0 0 2H8v2.5a1 1 0 1 0 2 0V8z"/>
                </svg>
              </div>
              <h3 className="fw-bold text-theme mb-3">Turn your loyalty into instant savings!</h3>
              <p className="text-muted">Now you can redeem your Payback Points directly through our platform and use them for mobile recharges, utility bill payments, DTH, and more.</p>
            </div>

            <ul className="list-unstyled mb-4">
              {[
                "Quick Redemption Process",
                "Instant Discount on Transactions",
                "No Hidden Charges",
                "Available Across All our Partnered Services"
              ].map((item, index) => (
                <li key={index} className="mb-2 d-flex align-items-start">
                  <span className=" bg-opacity-10 text-theme rounded-circle p-1 me-2 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' ,background:"rgba(181, 48, 8, 0.1)"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <Button variant="primary" size="lg" className="btn btn-light text-theme fw-semibold px-4 py-2 rounded-pill shadow-sm">
                Check Payback Balance
              </Button>
              <Button  size="lg" className="btn btn-light text-theme fw-semibold px-4 py-2 rounded-pill shadow-sm">
                Redeem Now
              </Button>
            </div> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RedeemPayback;
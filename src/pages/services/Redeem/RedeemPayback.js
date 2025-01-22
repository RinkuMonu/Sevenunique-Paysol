import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


const RedeemPayback = () => {
  return (
    <>

    <Container className="py-5 marginTop">
      <Row>
        {/* Left Side Content */}
        <Col md={6} className="text-center text-md-start">
          <h2 className="fw-bold" style={{color:"#664A86"}}>
            The best reward for loyalty? Money.
          </h2>
          <h3>
            Redeem your Payback Points at MobiKwik!
          </h3>
        </Col>

        {/* Right Side Content */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
        
          <div
            className="p-4 rounded bg-white shadow text-center"
            style={{ maxWidth: "400px" }}
          >
           
            <h5>Login with phone number linked with</h5>
            <h3 className="fw-bold">PAYBACK</h3>
            <Button
              variant="primary"
              className="mt-3 w-100"
              style={{ backgroundColor: "#664A86", color: "white" }}
            >
              Login
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default RedeemPayback
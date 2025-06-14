import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';


import {
  FaBolt,
  FaShieldAlt,
  FaMoneyCheckAlt,
  FaMobileAlt,
  FaSyncAlt,
  FaChartLine,

} from "react-icons/fa";
import { FaUserTie, FaStore, FaUsers, FaUserCheck } from "react-icons/fa";
import {
  FaCheckCircle,
  FaMoneyBillWave,
  FaStar,
  FaThumbsUp
} from "react-icons/fa";





const WalletTransfer = () => {

    const [formData, setFormData] = useState({
        mobileNumber: '',
        amount: '',
        beneficiaryName: '',
        accountNumber: '',
        ifscCode: ''
      });
    
      const [activeTab, setActiveTab] = useState('wallet');
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };
    
      const handleTabChange = (tab) => {
        setActiveTab(tab);
      };
    
      const isWalletFormValid = formData.mobileNumber && formData.amount;
      const isBankFormValid = formData.beneficiaryName && formData.accountNumber && formData.ifscCode && formData.amount;


     const features = [
  {
    text: "Instant Recharge & Bill Payments",
    icon: <FaBolt className="text-theme fs-3 me-2" />
  },
  {
    text: "Secure BBPS & AEPS Services",
    icon: <FaShieldAlt className="text-theme fs-3 me-2" />
  },
  {
    text: "Money Transfer with Receipt",
    icon: <FaMoneyCheckAlt className="text-theme fs-3 me-2" />
  },
  {
    text: "Mobile and DTH Recharges",
    icon: <FaMobileAlt className="text-theme fs-3 me-2" />
  },
  {
    text: "Real-Time Settlement & Updates",
    icon: <FaSyncAlt className="text-theme fs-3 me-2" />
  },
  {
    text: "Track Commissions & Performance",
    icon: <FaChartLine className="text-theme fs-3 me-2" />
  }
];


const steps = [
  'Log in to your ABDKS dashboard',
  'Go to the Wallet Transfer section',
  'Enter the recipient’s ABDKS Wallet ID / User ID',
  'Enter the transfer amount',
  'Confirm with your transaction PIN / OTP',
  'Amount is credited instantly to the recipient wallet'
];


const roles = [
  {
    title: "Retailers",
    description: "Local shop owners who offer digital financial services to customers.",
    icon: <FaStore style={{ color: "#872D67" }} className="fs-3 me-3" />
  },
  {
    title: "Distributors",
    description: "Agents managing a network of retailers and monitoring performance.",
    icon: <FaUserTie style={{ color: "#872D67" }} className="fs-3 me-3" />
  },
  {
    title: "Customers",
    description: "End-users who need fast, secure, and reliable transactions.",
    icon: <FaUsers style={{ color: "#872D67" }} className="fs-3 me-3" />
  },
  {
    title: "Verified Agents",
    description: "KYC-compliant agents authorized for wallet transactions.",
    icon: <FaUserCheck style={{ color: "#872D67" }} className="fs-3 me-3" />
  }
];

const benefits = [
  {
    text: "Fast and hassle-free transactions",
    icon: <FaBolt  className="fs-4 me-3 text-theme" />
  },
  {
    text: "Secure wallet-to-wallet money transfer",
    icon: <FaShieldAlt  className="fs-4 me-3 text-theme" />
  },
  {
    text: "Instant settlements and transaction alerts",
    icon: <FaCheckCircle className="fs-4 me-3 text-theme" />
  },
  {
    text: "User-friendly interface for all retailers",
    icon: <FaThumbsUp className="fs-4 me-3 text-theme" />
  },
  {
    text: "Real-time performance tracking",
    icon: <FaChartLine className="fs-4 me-3 text-theme" />
  },
  {
    text: "Attractive commission benefits",
    icon: <FaMoneyBillWave  className="fs-4 me-3 text-theme" />
  }
];


const faqs = [
  {
    question: 'Is there a fee for wallet transfer?',
    answer: 'No, wallet-to-wallet transfers within ABDKS are completely free of charge.'
  },
  {
    question: 'Is there a daily limit?',
    answer: 'Limits may apply based on your user role (retailer/distributor) and KYC level.'
  },
  {
    question: 'Can I reverse a wallet transfer?',
    answer: 'Wallet transfers are instant and cannot be reversed automatically. Please contact support if there’s an issue.'
  },
  {
    question: 'Do both users need to be on ABDKS?',
    answer: 'Yes. Wallet transfers are possible only between registered ABDKS users.'
  }
];



  return (
    <>

    
<Container className="py-5 marginTop">
      <Row>
        {/* Left Side Content */}
        <Col md={6} className="text-center text-md-start">
          <h2 className="fw-bold" style={{color:"#872D67"}}>
            Wallet Transfer
          </h2>
          <h3>
            Transfer Funds Between ABDKS Wallets – Instantly & Securely
<p className='fs-4'>Seamless Wallet-to-Wallet Transfers for Retailers & Users</p>
<p className='fs-6'>ABDKS Solutions Pvt. Ltd. empowers users and retailers with a fast and secure wallet transfer feature. Whether you’re distributing commission, transferring balance between sub-users, or managing operational funds, our wallet-to-wallet transfer system makes it easy.
Perfect for agents, super distributors, and retailers looking to maintain seamless financial operations within the ABDKS ecosystem.
</p>

          </h3>
        </Col>

        {/* Right Side Form */}
        <Col md={6}>
          <div
            className="p-4 rounded bg-white shadow"
            style={{ maxWidth: "400px", margin: "0 auto" }}
          >
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'wallet'}
                  onClick={() => handleTabChange('wallet')}
                >
                  <i className="bi bi-wallet"></i> Send To Wallet
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'bank'}
                  onClick={() => handleTabChange('bank')}
                >
                  <i className="bi bi-bank"></i> Send To Bank
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {activeTab === 'wallet' && (
              <Form>
                <Form.Group className="mb-3" controlId="mobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="₹ Enter Amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: "#872D67", color: "white" }}
                  disabled={!isWalletFormValid}
                >
                  Go
                </Button>
              </Form>
            )}

            {activeTab === 'bank' && (
              <Form>
                <Form.Group className="mb-3" controlId="beneficiaryName">
                  <Form.Label>Beneficiary Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name on Bank Account"
                    value={formData.beneficiaryName}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="accountNumber">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Account Number"
                    value={formData.accountNumber}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ifscCode">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="IFSC Code"
                    value={formData.ifscCode}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="₹ Enter Amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: "#872D67", color: "white" }}
                  disabled={!isBankFormValid}
                >
                  Confirm
                </Button>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>

<div className="container my-5">
  <h3 className="text-center fw-bold mb-5 wallet-heading" style={{ color: "#872D67" }}>
    Key Features
  </h3>
  <div className="row g-4">
    {features.map((feature, index) => (
      <div className="col-md-6" key={index}>
        <div className="wallet-feature-card p-4 rounded-4 h-100 shadow-sm d-flex align-items-start">
          <div className="me-3">{feature.icon}</div>
          <p className="mb-0 fw-medium feature-text">{feature.text}</p>
        </div>
      </div>
    ))}
  </div>
</div>




<div className="container p-5 rounded light-bg">
  <h3 className="text-center fw-bold  wallet-users-heading">
    Who Can Use Wallet Transfer?
  </h3>
  <div className="row g-4">
    {roles.map((role, index) => (
      <div className="col-md-6" key={index}>
        <div className="wallet-user-card p-4 rounded-4 shadow-sm  d-flex  service-item style-1">
          <div className=" service-item-inner service-active">
          <div>{role.icon}</div>
          <div>
            <h5 className="fw-bold mb-2">{role.title}</h5>
            <p className="mb-0">{role.description}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



<div className="container my-5 bg p-4 rounded">
      <h3 className="text-center fw-bold mb-5 wallet-transfer-heading">
        How Wallet Transfer Works
      </h3>
      <div className="row g-4 justify-content-center">
        {steps.map((step, index) => (
          <div className="col-md-6 " key={index}>
            <div className="step-box p-4 rounded-4 h-100 d-flex">
              <div className="step-number me-3">{index + 1}</div>
              <div className="step-text">{step}</div>
            </div>
          </div>
        ))}
      </div>
    </div>


<div className="container my-5 grediant-bg p-5 rounded">
  <h3 className="text-center fw-bold mb-5 wallet-benefits-heading" style={{ color: "#872D67" }}>
    Benefits
  </h3>
  <div className="row g-3">
    {benefits.map((benefit, index) => (
      <div className="col-12" key={index}>
        <div className="benefit-card p-4 rounded-4 shadow-sm d-flex align-items-start service-item style-1">
          <div className=" service-item-inner service-active">
          <div>{benefit.icon}</div>
          <p className="mb-0 benefit-text">{benefit.text}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>




 <div className="container my-5 p-4 rounded shadow light-bg">
      <h3 className="text-center fw-bold mb-5 faq-title">Frequently Asked Questions</h3>
      <div className="row g-4">
        {faqs.map((faq, index) => (
          <div className="col-md-6" key={index}>
            <div className="faq-card p-4 rounded-4 shadow-sm h-75 service-item style-1">
              <div className=" service-item-inner service-active">
              <h5 className="fw-bold faq-question">{faq.question}</h5>
              <p className="mb-0 faq-answer">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

<div className='container mb-5 text-center p-4'>
<h4 className='text-muted fs-4'>Simplify Internal Fund Movement with ABDKS Wallet Transfer</h4>
<p className='fs-6'>Whether you're growing a network of agents or managing a local team, ABDKS Wallet Transfer helps you move funds instantly, securely, and with full control.
</p>
<p>[Login to Transfer Wallet Funds]  [Become a Distributor]
</p>
</div>


    </>
  )
}

export default WalletTransfer
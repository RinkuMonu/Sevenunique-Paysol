import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {
  FaReceipt,
  FaClock,
  FaHome,
  FaMoneyBillAlt,
  FaShieldAlt,
  FaChartLine,
  FaStore,
} from "react-icons/fa";

const housingSteps = [
  "Visit the Bill Payment section on the ABDKS website or mobile app.",
  "Choose Housing / Society Bill from the service list.",
  "Select your society or property management organization.",
  "Enter your Flat Number / Account ID / Mobile Number.",
  "View your latest dues and billing history (if enabled).",
  "Proceed with payment using UPI, card, wallet, or net banking.",
  "Receive real-time payment confirmation and downloadable receipt.",
];

const housingServices = [
  "Monthly Maintenance Charges",
  "Water & Utility Charges",
  "Parking & Security Fees",
  "Clubhouse or Facility Usage Fees",
  "Building Repair Fund Contributions",
  "Rental Charges (if applicable)",
  "Penalties or Late Fees (if any)",
];

const housingSupport = [
  "Registered Housing Societies",
  "Gated Communities",
  "Resident Welfare Associations (RWAs)",
  "Cooperative Housing Boards",
  "Apartment Management Portals",
  "Private Property Management Firms",
];

const housingFeatures = [
  {
    icon: <FaClock />,
    title: "24x7 Online Payment Access",
    desc: "Pay anytime, even on weekends and holidays.",
  },
  {
    icon: <FaReceipt />,
    title: "No Paperwork Needed",
    desc: "Digital receipts are generated instantly after payment.",
  },
  {
    icon: <FaMoneyBillAlt />,
    title: "Multiple Payment Options",
    desc: "Pay via UPI, cards, net banking, or digital wallets.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Secure Transactions",
    desc: "Protected by PCI-DSS compliant encryption.",
  },
  {
    icon: <FaHome />,
    title: "Transparent Billing History",
    desc: "Track your payments anytime in the dashboard.",
  },
];

const retailerBenefits = [
  {
    icon: <FaStore />,
    title: "Expand Your Services",
    desc: "Help society residents pay their dues and grow your customer base.",
  },
  {
    icon: <FaChartLine />,
    title: "Earn Commissions",
    desc: "Get rewarded for each successful payment processed.",
  },
  {
    icon: <FaReceipt />,
    title: "Easy Setup & Support",
    desc: "Minimal training and full-time assistance provided.",
  },
];

const housingFAQs = [
  {
    title: "Can I pay my housing maintenance bill online with ABDKS?",
    content: "Yes. If your housing society is partnered with ABDKS, you can pay directly online.",
  },
  {
    title: "What details do I need to pay my society bill?",
    content: "Usually your flat number, society name, or account ID is sufficient.",
  },
  {
    title: "Can I pay multiple bills at once?",
    content: "Yes, if the bills are grouped under a single statement, you can pay them together.",
  },
  {
    title: "Are payments updated in real-time?",
    content: "Yes. Both you and the society receive instant confirmations.",
  },
];

const FAQHousingBillPayments = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <>
       {/* Hero */}
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Pay Housing Society Bills Online</h1>
          <p className="lead mt-3">
            Fast, paperless, and secure payments for your apartment, society, or complex.
          </p>
        </div>
      </section>

      {/* What You Can Pay */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">What Can You Pay?</h2>
          <div className="row g-3">
            {housingServices.map((item, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="p-3 bg-white rounded shadow-sm h-100">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Entities */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Housing Systems</h2>
          <div className="row justify-content-center">
            {housingSupport.map((type, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="primary-bg text-white p-3 rounded shadow-sm fs-5">
                  {type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Pay */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">How to Pay Housing Bills</h2>
          <div className="row g-4">
            {housingSteps.map((step, i) => (
              <div key={i} className="col-md-6">
                <div className="p-3 shadow-sm rounded-4 bg-white h-100 d-flex align-items-start" style={{ borderLeft: "4px solid #b53008" }}>
                  <div className="me-3 fs-4 fw-bold text-theme">{i + 1}</div>
                  <div>{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Why Use ABDKS?</h2>
          <div className="row g-4">
            {housingFeatures.map((f, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-light p-4 rounded-4 shadow-sm text-center h-100">
                  <div className="text-theme fs-2 mb-3">{f.icon}</div>
                  <h5 className="fw-semibold">{f.title}</h5>
                  <p className="text-muted small">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Retailers */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">For Retailers & Agents</h2>
          <p className="lead mb-5">Add housing payments to your digital services and grow income.</p>
          <div className="row g-4">
            {retailerBenefits.map((r, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-light p-4 rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{r.icon}</div>
                  <h5>{r.title}</h5>
                  <p className="small text-muted">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
          {isMobile ? (
            <Accordion>
              {housingFAQs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="row">
              {housingFAQs.map((faq, i) => (
                <div key={i} className="col-md-6 mb-4">
                  <div className="p-3 bg-light shadow-sm rounded border h-100">
                    <h5 className="fw-bold">{faq.title}</h5>
                    <p className="text-muted small">{faq.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 grediant-bg2 text-white text-center mb-3">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">Make Housing Payments Easy</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Say goodbye to late fees and paperwork. Pay securely with ABDKS.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Pay Housing Bill Now</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Become a Service Partner</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQHousingBillPayments;

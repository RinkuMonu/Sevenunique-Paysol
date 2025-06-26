import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {
  FaHeartbeat,
  FaCar,
  FaHome,
  FaUmbrella,
  FaClock,
  FaShieldAlt,
  FaMobileAlt,
  FaMoneyBillWave,
  FaUserTie,
  FaReceipt,
} from "react-icons/fa";

const insuranceTypes = [
  "Life Insurance",
  "Health Insurance",
  "Motor Insurance (Car/Bike)",
  "Travel Insurance",
  "Home & Property Insurance",
];

const insuranceProviders = [
  "LIC (Life Insurance Corporation of India)",
  "ICICI Prudential",
  "HDFC Life",
  "SBI Life Insurance",
  "Max Life",
  "Kotak Life Insurance",
  "Reliance General Insurance",
  "Star Health Insurance",
  "Bajaj Allianz",
  "Future Generali",
];

const insuranceSteps = [
  "Go to the Bill Payment section on the ABDKS app or website.",
  "Select Insurance as the bill category.",
  "Choose your insurance provider from the list.",
  "Enter your policy number or customer ID.",
  "The system will auto-fetch your premium details.",
  "Confirm the amount and complete the payment via UPI, card, wallet, or net banking.",
  "Receive instant payment confirmation and digital receipt.",
];

const insuranceBenefits = [
  {
    icon: <FaClock />,
    title: "24x7 Payment Availability",
    desc: "Pay anytime — day or night — even on holidays.",
  },
  {
    icon: <FaReceipt />,
    title: "Instant Policy Updates",
    desc: "Premiums updated in real time with receipts.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Encrypted",
    desc: "Fully compliant with RBI and data security norms.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Multiple Payment Modes",
    desc: "Supports UPI, card, wallet, and internet banking.",
  },
  {
    icon: <FaUmbrella />,
    title: "Covers All Insurers",
    desc: "Government & private insurance providers supported.",
  },
  {
    icon: <FaMobileAlt />,
    title: "User-Friendly Platform",
    desc: "Easy to use for users and service partners alike.",
  },
];

const insuranceRetailerInfo = [
  {
    icon: <FaUserTie />,
    title: "Add Value to Your Shop",
    desc: "Offer insurance services and attract more footfall.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Earn Commission",
    desc: "Get paid for every premium processed.",
  },
  {
    icon: <FaReceipt />,
    title: "Full Tracking",
    desc: "Real-time updates and receipts for every payment.",
  },
];

const insuranceFAQs = [
  {
    title: "Can I pay premiums for LIC and private insurers?",
    content: "Yes, we support both government (like LIC) and private insurers.",
  },
  {
    title: "How fast is the payment processed?",
    content: "Payments are completed instantly and updated in real-time.",
  },
  {
    title: "Can I pay for someone else’s insurance?",
    content: "Yes, just enter their policy number or customer ID.",
  },
  {
    title: "Are there any extra charges?",
    content: "No, we do not charge any additional service fees.",
  },
];

const FAQInsurancePayment = () => {
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
    
       {/* Hero Section */}
      <section className="py-5  text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Insurance Premium Payments Simplified</h1>
          <p className="lead mt-3">
            One secure platform for all your life, health, motor, and other insurance needs.
          </p>
        </div>
      </section>

      {/* Payment Steps */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">How to Pay Insurance Premiums</h2>
          <div className="row g-4">
            {insuranceSteps.map((step, i) => (
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

      {/* Insurance Types */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Types of Insurance Supported</h2>
          <div className="row justify-content-center">
            {insuranceTypes.map((type, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">{type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Top Insurance Companies We Support</h2>
          <div className="row justify-content-center">
            {insuranceProviders.map((provider, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="bg-white rounded p-3 shadow-sm fs-6">{provider}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Use ABDKS for Insurance Payments?</h2>
          <div className="row g-4">
            {insuranceBenefits.map((item, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-light p-4 text-center rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p className="small text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Retailers */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Retailers & Service Centers</h2>
          <p className="lead mb-5">
            Provide insurance premium payment services and grow your digital offerings.
          </p>
          <div className="row g-4">
            {insuranceRetailerInfo.map((info, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{info.icon}</div>
                  <h5>{info.title}</h5>
                  <p className="small text-muted">{info.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
          {isMobile ? (
            <Accordion>
              {insuranceFAQs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="row">
              {insuranceFAQs.map((faq, i) => (
                <div key={i} className="col-md-6 mb-4">
                  <div className="p-3 bg-white rounded shadow-sm border h-100">
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
      <section className="py-5 grediant-bg2 mb-3 text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">Pay Your Insurance Premium Easily</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            No delays, no hassles. Use ABDKS to stay on top of your insurance renewals.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Pay Insurance Now</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Become a Service Partner</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQInsurancePayment;

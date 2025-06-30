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
  FaQuestion
} from "react-icons/fa";

import { FaHandshake } from "react-icons/fa6";
import { MdMoneyOff } from "react-icons/md";
import { Link } from 'react-router-dom';







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
  "and many more",
];

const insuranceSteps = [
  "Go to the Bill Payment section on the app or website.",
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
    desc: "Pay anytime, even during non-banking hours.",
  },
  {
    icon: <FaReceipt />,
    title: "Instant Policy Updates",
    desc: "No delays in premium acknowledgment",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Encrypted",
    desc: "RBI-authorized, secure payment gateways",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Multiple Payment Modes",
    desc: "UPI, debit/credit card, wallet, net banking supported",
  },
  {
    icon: <FaUmbrella />,
    title: "Wide Insurer Network",
    desc: "Covers all major insurance providers",
  },
  {
    icon: <FaMobileAlt />,
    title: "User-Friendly Interface",
    desc: "Easy to use for both individual users and retailers",
  },
];


const insuranceRetailerInfo = [
  {
    icon: <FaUserTie />,
    title: "Attract more customers with value-added services",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Earn commissions on every insurance premium paid",
  },
  {
    icon: <FaHandshake />,
    title: "Support your community by simplifying policy renewals",
  },
{
    icon: <FaReceipt />,
    title: "Get full transaction tracking and real-time reporting",
  },
  {
    icon: <MdMoneyOff />,
    title: "Expand your fintech service portfolio with zero investment",
  },
];

const insuranceFAQs = [
  {
    title: "Can I pay premiums for LIC and private insurers?",
    content: "Yes, we support both government and private insurance providers.",
  },
  {
    title: "How fast is the payment processed?",
    content: "Payments are processed instantly and updated against the policy in real time.",
  },
  {
    title: "Can I pay for another person’s insurance?",
    content: "Yes. You just need the correct policy number or customer ID.",
  },
  {
    title: "Are there extra charges for insurance payments?",
    content: "No, Sevenunique does not charge additional service fees for standard insurance premium payments.",
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
          <h1 className="display-5 fw-bold">One Platform for All Your Insurance Payment Needs</h1>
          <p className="lead mt-3">
            We offer a fast, reliable, and secure solution to pay your insurance premiums online. Whether you’re paying for life, health, or vehicle insurance, our platform is designed to help you make payments effortlessly — with instant confirmation and support for leading insurers in India.
          </p>
        </div>
      </section>

      {/* Payment Steps */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">How to Pay Insurance Premiums Online with our platform</h2>
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
          <p>Using our platform, you can pay premiums for:</p>
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
          <h2 className="fw-bold mb-4 text-theme">Insurance Providers Supported</h2>
          <p>We support payments to major insurance companies including:</p>
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
          <h2 className="text-center fw-bold mb-5">Key Features</h2>
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
          <h2 className="fw-bold mb-4">Benefits for Retailers & Digital Service Centers
</h2>
          <p className="lead mb-5">
            Offer insurance payment services at your shop and:
          </p>
          <div className="row g-4">
            {insuranceRetailerInfo.map((info, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{info.icon}</div>
                  <h5>{info.title}</h5>

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
                   <h5 className="fw-bold">
                                        <FaQuestion className="me-2 text-theme" />
                                        {faq.title}
                                      </h5>
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
          <h2 className="display-5 fw-bold mb-3 text-white">Pay Insurance Premiums Easily with our platform.</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Never miss a renewal again. Whether you're paying for yourself or assisting customers, our platform makes insurance payments smooth, secure, and on time.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="#top" className="btn btn-light text-theme fw-bold px-4 py-2">Pay Insurance Now</a>
            <Link to="/registerform" className="btn btn-outline-light fw-bold px-4 py-2">Become a Service Partner</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQInsurancePayment;

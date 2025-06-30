import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  FaGasPump,
  FaShieldAlt,
  FaReceipt,
  FaClock,
  FaMobileAlt,
  FaUserTie,
  FaMoneyBillWave,
  FaQuestion
} from "react-icons/fa";
import { TiStarburst } from "react-icons/ti";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from 'react-router-dom';

const gasProviders = [
  "Indraprastha Gas Limited (IGL)",
  "Mahanagar Gas Limited (MGL)",
  "Gujarat Gas",
  "Adani Total Gas",
  "GAIL Gas",
  "HP Gas",
  "Bharat Gas",
  "Indian Oil (Indane)",
  "Tripura Natural Gas Company",
  "Assam Gas Company",
  "and other regional piped gas boards",
];

const gasSteps = [
  "Visit the Bill Payment section on the website or app.",
  "Select Gas as the category.",
  "Choose your service provider from the dropdown.",
  "Enter your Consumer Number / Customer ID.",
  "View bill details fetched automatically.",
  "Confirm the amount and pay via UPI, card, wallet, or net banking.",
  "Receive instant confirmation and digital receipt.",
];

const gasBenefits = [
  {
    icon: <FaClock />,
    title: "Available 24/7",
    desc: " Make payments anytime, even on holidays",
  },
  {
    icon: <FaReceipt />,
    title: "Instant Confirmation",
    desc: "Payment processed in seconds",
  },
  {
    icon: <FaGasPump />,
    title: "Supports LPG & Piped Gas Bills",
    desc: "One platform for all types of connections",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Multiple Payment Modes",
    desc: "UPI, debit/credit card, wallet, and internet banking.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe and Secure",
    desc: "Encrypted transactions with RBI-authorized gateways",
  },
  {
    icon: <FaMobileAlt />,
    title: "User-Friendly Design ",
    desc: "Optimized for mobile and desktop users alike",
  },
];

const gasRetailerInfo = [
  {
    icon: <FaUserTie />,
    title: "Increase walk-in customers",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Earn commission on every successful payment",
  },
  {
    icon: <TiStarburst />,
    title: "Provide value-added services in your area",
  },
   {
    icon: <FaReceipt />,
    title: "Access detailed reports and dashboards",
  },
   {
    icon: <MdOutlineSupportAgent />,
    title: "Get real-time support from the SevenUnique team",
  },
];

const gasFAQs = [
  {
    title: "Which gas companies are supported for bill payment?",
    content:"We support major LPG and piped gas providers including IGL, MGL, Adani Gas, Bharat Gas, Indane, and more.",
  },
  {
    title: "How soon is the payment confirmed?",
    content: "Payments are confirmed instantly, and digital receipts are generated in real time.",
  },
  {
    title: "Can I use Sevenunique to pay someone else’s gas bill?",
    content: "Yes, simply enter the correct consumer number and proceed with the payment.",
  },
  {
    title: "Are there any additional charges?",
    content:"No extra transaction fees are charged on gas bill payments made via.",
  },
];

const FAQGasBillPayment = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

return (
    <>

       {/* Hero */}
      <section className="py-5  text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Hassle-Free Piped and LPG Gas Bill Payments</h1>
          <p className="lead mt-3">
            Managing your household gas connection is now easier than ever with our platform. Whether it’s a piped gas bill or an LPG gas booking, our platform offers a secure, fast, and convenient way to make your payments online—anytime, from anywhere.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">How to Pay Gas Bills Online Using our platform </h2>
          <div className="row g-4">
            {gasSteps.map((step, i) => (
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

      {/* Supported Providers */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Gas Providers</h2>
          <p>Our platform supports bill payments and bookings for major gas service providers, including:
</p>
          <div className="row justify-content-center">
            {gasProviders.map((provider, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">{provider}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Key Features & Benefits</h2>
          <div className="row g-4">
            {gasBenefits.map((benefit, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm text-center h-100">
                  <div className="text-theme fs-2 mb-3">{benefit.icon}</div>
                  <h5 className="fw-semibold">{benefit.title}</h5>
                  <p className="text-muted small">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retailers */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Benefits for Retailers & Local Agents</h2>
          <p className="lead mb-5">If you run a digital service center, shop, or kiosk, offer gas bill payment services through our platform:</p>
          <div className="row g-4">
            {gasRetailerInfo.map((item, i) => (
              <div key={i} className="col-md-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{item.icon}</div>
                  <h5>{item.title}</h5>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
          {isMobile ? (
            <Accordion>
              {gasFAQs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="row">
              {gasFAQs.map((faq, i) => (
                <div key={i} className="col-md-6 mb-4">
                  <div className="p-3 bg-white shadow-sm rounded border h-100">
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
      <section className="py-5 grediant-bg2 text-white text-center mb-3">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">Pay Your Gas Bill in Minutes with our Platform</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Stay safe, save time, and never miss a due date again. With SevenUnique , paying gas bills is quick, convenient, and secure.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="#top" className="btn btn-light text-theme fw-bold px-4 py-2">Pay Your Gas Bill Now</a>
            <Link to="/registerform" className="btn btn-outline-light fw-bold px-4 py-2">Join as a Retailer</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQGasBillPayment;

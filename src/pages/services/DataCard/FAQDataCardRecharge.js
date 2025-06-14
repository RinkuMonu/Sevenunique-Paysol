import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  FaWifi,
  FaLock,
  FaClock,
  FaMobileAlt,
  FaUsers,
  FaWallet,
} from "react-icons/fa";

const datacardOperators = [
  "JioFi Datacard",
  "Airtel 4G Datacard",
  "VI Dongle / Internet Stick",
  "BSNL Data Card",
  "MTNL Dongle",
];

const datacardSteps = [
  "Visit the Recharge section on ABDKS website or app.",
  "Select Datacard Recharge as the category.",
  "Choose your datacard operator.",
  "Enter your datacard number or registered mobile number.",
  "Enter amount or choose from available plans.",
  "Pay using UPI, card, wallet, or net banking.",
  "Receive instant confirmation and continue browsing.",
];

const datacardBenefits = [
  {
    icon: <FaClock />,
    title: "24x7 Recharge Availability",
    desc: "Recharge anytime, from any device.",
  },
  {
    icon: <FaWifi />,
    title: "Instant Confirmation",
    desc: "Get real-time success messages and receipts.",
  },
  {
    icon: <FaLock />,
    title: "Secure Transactions",
    desc: "Encrypted payments ensure your safety.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile-Friendly Design",
    desc: "Optimized for smartphones and low-bandwidth usage.",
  },
  {
    icon: <FaUsers />,
    title: "Multi-Operator Support",
    desc: "Supports Jio, Airtel, VI, BSNL, MTNL & more.",
  },
  {
    icon: <FaWallet />,
    title: "Retailer Benefits",
    desc: "Earn commission on every successful recharge.",
  },
];

const datacardFAQs = [
  {
    title: "How long does a datacard recharge take?",
    content:
      "Most recharges are processed instantly and balance reflects within minutes.",
  },
  {
    title: "Can I recharge a JioFi device or Airtel dongle?",
    content:
      "Yes, ABDKS supports all leading datacard and dongle providers like JioFi, Airtel, VI, and BSNL.",
  },
  {
    title: "Is there any extra charge on datacard recharge?",
    content: "No. There are no hidden charges on recharges done through ABDKS.",
  },
  {
    title: "Can I check available datacard plans?",
    content:
      "Yes. The platform fetches operator-specific plans after entering your datacard number.",
  },
];
const FAQDataCardRecharge = () => {
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
      
      <section className="py-5 text-center ">
        <div className="container">
          <h1 className="display-5 fw-bold">Datacard Recharge Made Easy</h1>
          <p className=" mt-3 fs-6">
            Fast, secure, and real-time internet datacard recharge — anytime, anywhere.
          </p>
        </div>
      </section>

      {/* How To Steps */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">How to Recharge Your Datacard</h2>
          <div className="row g-4">
            {datacardSteps.map((step, i) => (
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

      {/* Supported Operators */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Datacard Operators</h2>
          <div className="row justify-content-center">
            {datacardOperators.map((op, idx) => (
              <div key={idx} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">
                  {op}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Why Choose ABDKS?</h2>
          <div className="row g-4">
            {datacardBenefits.map((b, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                  <div className="text-theme fs-2 mb-3">{b.icon}</div>
                  <h5 className="fw-semibold">{b.title}</h5>
                  <p className="text-muted small">{b.desc}</p>
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
              {datacardFAQs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="row">
              {datacardFAQs.map((faq, i) => (
                <div key={i} className="col-md-6 mb-4">
                  <div className="p-3 border rounded shadow-sm bg-white h-100">
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
      <section className="grediant-bg2 text-white py-5 text-center mb-3">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">Stay Connected, Always</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Keep your internet running with fast and reliable datacard recharges from ABDKS.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Recharge Now</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Join as a Retailer</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQDataCardRecharge;

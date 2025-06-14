import React from "react";
import { useEffect, useState } from "react";
import {
  FaMobileAlt,
  FaClock,
  FaMoneyBillWave,
  FaCheckCircle,
  FaLock,
  FaCreditCard,
  FaUsers,
  FaChartLine,
  FaPhoneAlt,
} from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";

const mobileOperators = ["Jio", "Airtel", "VI (Vodafone Idea)", "BSNL"];

const rechargeSteps = [
  "Go to the Recharge section on the ABDKS website or app.",
  "Choose Mobile Recharge option.",
  "Select your operator and circle (region).",
  "Enter your 10-digit mobile number.",
  "Choose a plan or manually enter the amount.",
  "Complete payment via UPI, card, net banking, or wallet.",
  "Receive instant confirmation and a digital receipt.",
];

const rechargeFeatures = [
  {
    icon: <FaCheckCircle />,
    title: "Instant Recharge Processing",
    desc: "Get recharge confirmation in seconds with real-time status.",
  },
  {
    icon: <FaClock />,
    title: "Available 24x7",
    desc: "Recharge anytime, including weekends and holidays.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Prepaid & Postpaid Support",
    desc: "Recharge prepaid or pay postpaid bills easily.",
  },
  {
    icon: <FaCreditCard />,
    title: "Multiple Payment Options",
    desc: "Use UPI, credit/debit card, wallet, or net banking.",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Mobile-Friendly Interface",
    desc: "Seamless recharge from any smartphone or tablet.",
  },
  {
    icon: <FaLock />,
    title: "Secure & Encrypted",
    desc: "All transactions are protected via RBI-authorized gateways.",
  },
];

const retailerBenefits = [
  {
    icon: <FaChartLine />,
    title: "Earn Commissions",
    desc: "Get paid for every successful mobile recharge.",
  },
  {
    icon: <FaUsers />,
    title: "No Technical Setup",
    desc: "Start offering services instantly via our web dashboard.",
  },
  {
    icon: <FaMobileAlt />,
    title: "All Major Operators",
    desc: "Recharge for Jio, Airtel, VI, and BSNL in one place.",
  },
];

const mobileFAQs = [
  {
    title: "Is mobile recharge on ABDKS secure?",
    content:
      "Yes, all transactions are encrypted and processed via RBI-authorized payment channels.",
  },
  {
    title: "Can I recharge for others?",
    content:
      "Yes, you can recharge for anyone by entering their number and selecting a plan.",
  },
  {
    title: "Are there extra charges for mobile recharges?",
    content:
      "No, ABDKS does not add any hidden transaction fees on recharges.",
  },
  {
    title: "What payment methods are accepted?",
    content:
      "You can pay via UPI, debit/credit cards, net banking, and wallet balance.",
  },
];

const FAQMobileRecharge = () => {
    const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return (
    <>
      {/* Hero */}
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Mobile Recharge Services</h1>
          <p className="lead mt-3">
            Quick, Secure & Real-Time Mobile Recharges with ABDKS
          </p>
        </div>
      </section>

      {/* Operators */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Operators</h2>
          <div className="row justify-content-center">
            {mobileOperators.map((operator, i) => (
              <div key={i} className="col-md-3 mb-3">
                <div className="primary-bg text-white p-3 rounded shadow-sm fs-5 transition-hover ">
                  {operator}
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted mt-3 small">
            We support both prepaid recharges and postpaid bill payments.
          </p>
        </div>
      </section>

      {/* How to Recharge */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            How to Recharge Mobile with ABDKS
          </h2>
          <div className="row g-4">
            {rechargeSteps.map((step, i) => (
              <div key={i} className="col-md-6">
                <div className="p-3 shadow-sm rounded-4 bg-light d-flex align-items-start h-100 recharge-step-hover" style={{ borderLeft: "4px solid #b53008" }}>
                  <div className="me-3 fs-4 fw-bold text-theme">{i + 1}</div>
                  <div>{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 bg-light">
        <div className="bg-white p-4 rounded-4 shadow-sm text-center h-100 card-hover">
          <h2 className="fw-bold text-center mb-5">
            Key Features of Mobile Recharge
          </h2>
          <div className="row g-4">
            {rechargeFeatures.map((f, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-light p-4 rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{f.icon}</div>
                  <h5 className="fw-semibold">{f.title}</h5>
                  <p className="text-muted small">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retailer Benefits */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Benefits for Retailers & Agents</h2>
          <p className="lead mb-5">
            Expand your income by offering recharge services to your customers.
          </p>
          <div className="row g-4">
            {retailerBenefits.map((r, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-light p-4 rounded-4 shadow-sm text-center h-100 card-hover">
                  <div className="text-theme fs-2 mb-3">{r.icon}</div>
                  <h5>{r.title}</h5>
                  <p className="text-muted small">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
       <section className="py-5 bg-white">
      <div className="p-3 bg-light shadow-sm rounded border h-100 faq-card-hover">
        <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
        {isMobile ? (
          <Accordion>
            {mobileFAQs.map((faq, i) => (
              <Accordion.Item eventKey={i.toString()} key={i}>
                <Accordion.Header>{faq.title}</Accordion.Header>
                <Accordion.Body>{faq.content}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        ) : (
          <div className="row">
            {mobileFAQs.map((faq, i) => (
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
          <h2 className="display-5 fw-bold mb-3 text-white">
            Start Recharging with ABDKS Today
          </h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Whether you're a user or a business, ABDKS makes mobile recharges simple, secure, and profitable.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Recharge Now</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Become a Recharge Partner</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQMobileRecharge;

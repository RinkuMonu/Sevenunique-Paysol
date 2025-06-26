import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

import {
  FaCreditCard,
  FaLock,
  FaClock,
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaUserFriends,
  FaWallet,
} from "react-icons/fa";



const banks = [
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "SBI Card",
  "Kotak Bank",
  "RBL Bank",
  "Standard Chartered",
  "Yes Bank",
];

const billSteps = [
  "Go to the Bill Payment section on ABDKS app or website.",
  "Select Credit Card category.",
  "Choose your issuing bank.",
  "Enter credit card number and bill amount.",
  "Pay using UPI, card, net banking, or wallet.",
  "Receive instant confirmation and receipt.",
];

const billBenefits = [
  {
    icon: <FaClock />, title: "Instant Processing", desc: "No late fees – real-time updates."
  },
  {
    icon: <FaLock />, title: "Secure Payments", desc: "End-to-end encrypted transactions."
  },
  {
    icon: <FaWallet />, title: "Payment Flexibility", desc: "UPI, card, net banking, wallets supported."
  },
  {
    icon: <FaMobileAlt />, title: "24x7 Availability", desc: "Pay anytime from any device."
  },
  {
    icon: <FaUserFriends />, title: "Pay for Others", desc: "Pay your friends' or family’s bills too."
  },
  {
    icon: <FaMoneyCheckAlt />, title: "Retailer Commissions", desc: "Earn on every customer transaction."
  },
];

const FAQCreditCardPayment = () => {
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

       <section className="py-5 text-center position-relative " >
        <div className="container position-relative z-2">
          <h1 className="display-4 fw-bold mb-3">Credit Card Bill Payments Made Easy</h1>
          <p className="fs-6 mb-0 col-md-8 mx-auto ">
            Pay securely for all major banks or help your customers do it through ABDKS.
          </p>
        </div>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.1, backgroundImage: "url('/assets/credit-bg.svg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">How to Pay Credit Card Bills</h2>
          <div className="row g-4">
            {billSteps.map((step, idx) => (
              <div key={idx} className="col-md-6">
                <div className="p-3 shadow-sm rounded-4 bg-white h-100 d-flex align-items-start" style={{ borderLeft: "4px solid #b53008" }}>
                  <div className="me-3 fs-4 fw-bold text-theme">{idx + 1}</div>
                  <div className="text-dark fw-medium">{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Supported Banks</h2>
          <div className="row justify-content-center">
            {banks.map((bank, i) => (
              <div key={i} className="col-md-3 mb-3">
                <div className="primary-bg text-white p-3 rounded shadow-sm fs-6">{bank}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Use ABDKS?</h2>
          <div className="row g-4">
            {billBenefits.map((b, i) => (
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

      <section className="py-5 grediant-bg2 text-white text-center mb-3">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">Start Smart Bill Payments with ABDKS</h2>
          <p className="lead mb-4 col-lg-8 mx-auto">
            Provide value to yourself and your customers with our secure, commission-based credit card bill platform.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Pay Now</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Become a Partner</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQCreditCardPayment;

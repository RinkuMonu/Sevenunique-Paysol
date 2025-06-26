import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaGift, FaGoogle, FaBolt, FaMoneyCheckAlt, FaMobileAlt, FaLock, FaAndroid, FaStore, FaQuestion } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt />,
    title: "Instant Delivery",
    desc: "No delays — your code is generated within seconds after payment.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Multiple Payment Options",
    desc: "Supports UPI, wallet, credit/debit cards, and more.",
  },
  {
    icon: <FaLock />,
    title: "Safe & Secure",
    desc: "Encrypted, RBI-compliant payments for worry-free transactions.",
  },
  {
    icon: <FaAndroid />,
    title: "Universal Compatibility",
    desc: "Redeem on any Android device — phone, tablet, or web.",
  },
  {
    icon: <FaStore />,
    title: "Retailer Benefits",
    desc: "Sell codes to customers, track orders, and earn commissions.",
  },
];

const steps = [
  "Visit the Recharge section on the ABDKS website or app.",
  "Select 'Google Play Recharge'.",
  "Choose a recharge amount: ₹100, ₹200, ₹500, or ₹1000.",
  "Pay using UPI, card, wallet, or net banking.",
  "Receive your gift code instantly on screen and via SMS/email.",
  "Redeem the code on the Google Play Store with your account.",
];

const faqs = [
  {
    question: "What is the validity of Google Play recharge codes?",
    answer: "Codes generally do not expire once generated.",
  },
  {
    question: "Can I use this for YouTube Premium or in-game purchases?",
    answer: "Yes. Google Play balance works across all Google Play services.",
  },
  {
    question: "What denominations are available?",
    answer: "₹100, ₹200, ₹500, ₹1000 — subject to availability.",
  },
  {
    question: "Can I send the code as a gift?",
    answer: "Yes, just share the code via SMS, WhatsApp, or email.",
  },
];

const FAQGooglePlayPayments = () => {
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
      <section className="py-5 text-center bg-light">
        <div className="container">
          <h1 className="display-5 fw-bold">Google Play Recharge</h1>
          <p className="lead mt-3">
            Instant Google Play Top-Up with ABDKS – Fast, Reliable & 24x7
          </p>
          <p className="col-lg-8 mx-auto">
            Buy apps, games, in-game currency, or subscriptions without a credit card.
            Perfect for personal use or for reselling as a retailer.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Why Use Google Play Recharge?</h2>
          <div className="row g-4">
            {features.map((item, i) => (
              <div className="col-md-4" key={i}>
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

      {/* Steps Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">How to Buy Google Play Recharge</h2>
          <div className="row g-4">
            {steps.map((step, i) => (
              <div className="col-md-6" key={i}>
                <div className="p-3 bg-white shadow-sm rounded-4 d-flex align-items-start h-100" style={{ borderLeft: "4px solid #b53008" }}>
                  <div className="me-3 fs-4 fw-bold text-theme">{i + 1}</div>
                  <div>{step}</div>
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
          <div className="row g-4">
            {faqs.map((faq, i) => (
              <div className="col-md-6" key={i}>
                <div className="p-3 bg-white rounded shadow-sm border h-100">
                  <h5 className="fw-bold">
                    <FaQuestion className="me-2 text-theme" />
                    {faq.question}
                  </h5>
                  <p className="text-muted small">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center grediant-bg2 mb-3 text-white">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">Recharge Google Play Instantly</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Whether you're topping up for yourself or offering recharges to customers, do it all with ABDKS.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Buy Now</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Register as a Retailer</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQGooglePlayPayments;
    
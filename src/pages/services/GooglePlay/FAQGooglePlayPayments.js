import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaGift, FaGoogle, FaBolt, FaMoneyCheckAlt, FaMobileAlt, FaLock, FaAndroid, FaStore, FaQuestion } from "react-icons/fa";

import {
  FaCarCrash,
  FaReceipt,
  FaShieldAlt,
  FaCheckCircle,
  FaClock,
  FaFileInvoiceDollar,
  FaUserCheck,
  FaMoneyBillWave
} from "react-icons/fa";
import { FaTruckPlane } from "react-icons/fa6";
import { GrServers } from "react-icons/gr";
import { TbArrowsCross } from "react-icons/tb";





const features = [
  {
    icon: <FaBolt />,
    title: "Purchase paid apps & games",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Subscribe to YouTube Premium, Google One, and other service",
  },
  {
    icon: <FaLock />,
    title: "Buy in-app items, coins, gems, or game passes",
  },
  {
    icon: <FaAndroid />,
    title: "Rent or buy movies and books from the Play Store",
  },
  {
    icon: <FaStore />,
    title: "Send a gift code to someone",
  },
];

const steps = [
  "Visit the Recharge section on the website or app.",
  "Select 'Google Play Recharge'.",
  "Choose the recharge amount (e.g., ₹100, ₹200, ₹500, ₹1000)",
  "Complete the  payment using UPI, card, net banking, or wallet",
  "Receive your Google Play gift code instantly on screen and via SMS/email",
  "Redeem it on the Play Store using your Google account",
];


const faqs = [
  {
    question: "What is the validity of Google Play recharge codes?",
    answer: " Codes typically do not expire once generated.",
  },
  {
    question: "Can I use this for YouTube Premium or in-game purchases?",
    answer: " Yes. Play Store balance works across all Google Play services.",
  },
  {
    question: "What denominations are available?",
    answer: "Common options include ₹100, ₹200, ₹500, ₹1000 and may vary by availability.",
  },
  {
    question: "Can I send the code as a gift?",
    answer: "Yes, just share the code via SMS, WhatsApp, or email.",
  },
];


const keyfeatures = [
  {
    icon: <FaClock />,
    title: "Instant Delivery",
    desc: "No delay, code received in seconds",
  },
  {
    icon: <FaShieldAlt />,
    title: "Multiple Payment Options",
    desc: "UPI, wallet, credit/debit cards, and more",
  },
  {
    icon: <FaCheckCircle />,
    title: "Safe & Secure",
    desc: "Payments processed over encrypted RBI-compliant channels",
  },
  {
    icon: <FaMobileAlt />,
    title: "Works for Any Android Device",
    desc: "Redeem on smartphones, tablets, or the web.",
  },
  {
    icon: <FaTruckPlane />,
    title: "No Travel Needed",
    desc: "Skip the hassle of going to courts or offices. You can clear your challan right from the comfort of your home or workplace—saving you time, money, and energy.",
  },
   {
    icon: <FaUserCheck />,
    title: "Retailer Access",
    desc: "Resell codes to customers and earn commission",
  },
];

const retailerBenefits = [
  {
    icon: <FaStore />,
    title: "Offer a high-demand digital product",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Sell Google Play codes and boost walk-ins",
  },
   {
    icon: <FaMoneyBillWave />,
    title: "Earn a profit margin per code sold",
  },
   {
    icon: <GrServers />,

    title: "Simple dashboard access to recharge orders and history",
  },
   {
    icon: <TbArrowsCross />,
    title: "No technical setup required",
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
          <h1 className="display-5 fw-bold">Recharge Your Google Play Balance Anytime, Anywhere! </h1>
          <p className="lead mt-3">
            Getting your Google Play recharge codes is super easy, safe, and available 24/7. Whether you’re looking to buy apps, games, in-game currency, or subscriptions, our platform lets you quickly top up your Google Play account without needing a debit or credit card. It’s perfect for personal use or for retailers catering to walk-in customers!

          </p>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Why Use Google Play Recharge?</h2>
          <p className="text-center fs-5">Google Play credit allows you to:</p>
          <div className="row g-4">
            {features.map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="bg-light p-4 text-center rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{item.icon}</div>
                  <h5>{item.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">How to Buy Google Play Recharge using our platform</h2>
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



      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Key Features</h2>
          <div className="row g-4">
            {keyfeatures.map((f, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm text-center h-100">
                  <div className="text-theme fs-2 mb-3">{f.icon}</div>
                  <h5 className="fw-semibold">{f.title}</h5>
                  <p className="text-muted small">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



<section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">For Retailers & Agents</h2>

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
          <h2 className="display-5 fw-bold mb-3 text-white">Recharge Google Play Instantly with our platform </h2>
          <p className="lead col-lg-8 mx-auto mb-4">
           Whether for your own use or as a retailer service, Google Play recharge through our platform is fast, reliable, and always available.
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
    
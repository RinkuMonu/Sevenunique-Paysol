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
  FaExternalLinkSquareAlt,
  FaQuestion
} from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";

const mobileOperators = ["Jio", "Airtel", "Vodafone Idea (VI)", "BSNL"];

const rechargeSteps = [
  "Go to the mobile recharge section",
  "Select your telecom operator and field/circle",
  "Please enter the mobile number",
  "Choose a recharge plan or manually enter an amount",
  "Pay through UPI, Debit/Credit Card, Wallet, or Net Banking",
  "Get immediate recharge confirmation and a digital receipt",
];

const rechargeFeatures = [
  {
    icon: <FaCheckCircle />,
    title: "Instant Recharge Processing",
    desc: "Immediate recharge BBPS integration - No delay, real-time update",
  },
  {
    icon: <FaClock />,
    title: "Available 24x7",
    desc: "24x7 recharge access - available on weekends and holidays",
  },
  {
    icon: <FaMobileAlt />,
    title: "Prepaid & Postpaid Support",
    desc: "Prepaid and Postpaid Support - BBPS Bill Payment for all types.",
  },
  {
    icon: <FaCreditCard />,
    title: "Multiple Payment Options",
    desc: "Multiple payment methods - UPI, card, net banking, and wallet.",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Mobile-Friendly Interface",
    desc: "Mobile-friendly interface—anyone can work on an Android smartphone",
  },
  {
    icon: <FaLock />,
    title: "Secure & Encrypted",
    desc: "End-to-end security-RBI-defined and encrypted transactions",
  },
];

const retailerBenefits = [
  {
    icon: <FaChartLine />,
    title: "Earn commission on every prepaid and postpaid transaction",
  },
  {
    icon: <FaUsers />,
    title: "No basic structure cost - just a mobile phone and internet",
  },
  {
    icon: <FaMobileAlt />,
    title: "Serve all major Indian networks with a single BBPS interface"
  },
   {
    icon: <FaExternalLinkSquareAlt />,
    title: "Real times access to the commission and transaction logs"
  },
   {
    icon: <FaMobileAlt />,
    title: "Jaipur-based aid team dedicated for training and issues"
  },
];

const mobileFAQs = [
  {
    title: "Is mobile recharge safe through SevenUnique ?",
    content:
      "Yes. Our BBPS recharge platform uses the RBI-authorized payment gateway with full encryption.",
  },
  {
    title: "Can I recharge other people's numbers?",
    content:
      "Yes, retailers and individuals can recharge for any mobile user in India.",
  },
  {
    title: "Are there additional charges for mobile recharge?",
    content:
      "No. SevenUnique does not impose any hidden fees on mobile recharge BBPS transactions.",
  },
  {
    title: "Which payment methods are supported?",
    content:
      "UPI, debit/credit card, net banking, and wallet—all are available for convenience.",
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
<div>
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Mobile Recharge Services</h1>
          <p className="lead mt-3">
           Quick, safe, and Real-Time Recharge with SevenUnique
          </p>
          <p>Experience uninterrupted recharge using India's reliable BBPS recharge system.We provides a fully integrated mobile recharge BBPS platform, designed for individuals, retailers and fintech entrepreneurs. With support to all major telecommunications networks and real-time recharge confirmation, you can serve customers anytime, anywhere.</p>
        </div>
      </section>

      {/* Operators */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Operator supported across India</h2>
           <p className="text-muted mt-3 small">
            Our prepaid recharge BBPS platform and postpaid mobile bill payment system support all major telecom operators:
          </p>
          <div className="row justify-content-center">
            {mobileOperators.map((operator, i) => (
              <div key={i} className="col-md-3 mb-3">
                <div className="primary-bg text-white p-3 rounded shadow-sm fs-5 transition-hover ">
                  {operator}
                </div>
              </div>
            ))}
            <p>Support includes mobile recharge, BBPS postpaid bill payment, and integration with our comprehensive utility bill payment software.</p>
          </div>

        </div>
      </section>

      {/* How to Recharge */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            How to recharge using SevenUnique BBPS
          </h2>
          <p className="pb-2 text-center">Follow these simple steps on the our platform or mobile dashboard:</p>
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
        <p className="mt-5 text-center">All transactions are processed through our RBI-anonymous BBPS recharge system.</p>
      </section>

      {/* Features */}
      <section className="py-5 bg-light">
        <div className="bg-white p-4 rounded-4 shadow-sm text-center h-100 card-hover">
          <h2 className="fw-bold text-center mb-5">
           Major features of our mobile recharge BBPS platform
          </h2>
          <div className="row g-4">
            {rechargeFeatures.map((f, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-light p-4 rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{f.icon}</div>

                  <p className="text-muted fw-bold fs-5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retailer Benefits */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Why retailers choose SevenUnique for mobile recharge</h2>
          <p className="lead mb-5">
            Expand your service offerings and create a revenue stream with our mobile recharge BBPS solution:
          </p>
          <div className="row g-4">
            {retailerBenefits.map((r, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-light p-4 rounded-4 shadow-sm text-center h-100 card-hover">
                  <div className="text-theme fs-2 mb-3">{r.icon}</div>
                  <h5>{r.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4 text-theme">Perfect for:</h2>
          <p className="lead mb-5">
             Kirana stores || Recharge shops || Cyber cafés ||  Jan Seva Kendra operators ||  and digital entrepreneurs.
          </p>
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
          <h2 className="display-5 fw-bold mb-3 text-white">
            Start Mobile Recharge BBPS Business
          </h2>
          <p className="lead col-lg-8 mx-auto mb-4">
           Whether you're a new retailer or want to add services to your existing shop, SevenUnique makes mobile recharges fast, secure, and commission-generating. Tap into India’s growing demand for digital transactions with our prepaid recharge BBPS and postpaid payment tools.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="#top" className="btn btn-light text-theme fw-bold px-4 py-2">Recharge Now</a>
            <a href="/registerform" className="btn btn-outline-light fw-bold px-4 py-2">Become a BBPS Recharge Partner</a>
          </div>
        </div>
      </section>
</div>
    </>
  );
};

export default FAQMobileRecharge;

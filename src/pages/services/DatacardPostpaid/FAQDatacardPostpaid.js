import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaClock,
  FaWifi,
  FaCreditCard,
  FaUsers,
  FaChartLine,
  FaQuestion,
  FaStore
} from "react-icons/fa";

const FAQDatacardPostpaid = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const supportedOperators = [
    "Airtel Datacard",
    "JioFi (Jio Datacard)",
    "Vi (Vodafone Idea Dongle)",
    "BSNL Datacard"
  ];

  const rechargeSteps = [
    "Select the 'Datacard Postpaid' category on the ABDKS platform",
    "Choose your operator from the list",
    "Enter your registered Datacard number or mobile number",
    "Review the bill details, if auto-fetched",
    "Proceed with payment using UPI, card, wallet, or net banking",
    "Receive instant confirmation upon successful transaction"
  ];

  const features = [
    {
      icon: <FaCheckCircle />,
      title: "Fast Payments",
      desc: "Complete recharge in under a minute"
    },
    {
      icon: <FaClock />,
      title: "Available 24/7",
      desc: "Recharge anytime, even at midnight"
    },
    {
      icon: <FaCreditCard />,
      title: "Safe & Secure",
      desc: "Encrypted transactions via trusted gateways"
    },
    {
      icon: <FaWifi />,
      title: "Real-time Bill Fetch",
      desc: "View exact dues instantly"
    },
    {
      icon: <FaStore />,
      title: "Retailer Panel",
      desc: "Offer recharges from your local store"
    }
  ];

  const faqs = [
    {
      title: "What number do I need to enter for datacard postpaid recharge?",
      content: "Usually, the mobile number linked with your datacard or the unique ID provided by the operator. Refer to your bill or contact customer care for clarification."
    },
    {
      title: "Can I pay for someone else's datacard?",
      content: "Yes, as long as you have their correct operator and datacard/account number."
    },
    {
      title: "Are receipts or confirmations provided?",
      content: "Yes, you will receive an on-screen confirmation along with an SMS or email receipt (if registered)."
    },
    {
      title: "Is this service available in all locations?",
      content: "Yes, ABDKS provides online datacard postpaid recharge services across India."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Why Choose ABDKS for Datacard Postpaid Recharge?</h1>
          <p className="lead mt-3 fw-bold fs-4">
            With ABDKS Solutions Pvt. Ltd., you can recharge your Datacard postpaid plans with speed, reliability, and ease.
          </p>
          <p className="fs-5">
            Our platform supports secure and real-time bill payments.
            Enjoy flexible payment options, instant bill fetch, and confirmation – all from the comfort of your device.
          </p>
        </div>
      </section>

      {/* Supported Operators */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Datacard Postpaid Operators</h2>
          <p className="text-muted mt-3 fs-5">
            You can pay Datacard postpaid bills for leading service providers such as:
          </p>
          <div className="row justify-content-center">
            {supportedOperators.map((operator, i) => (
              <div key={i} className="col-md-3 mb-3">
                <div className="primary-bg text-white p-3 rounded shadow-sm fs-5 transition-hover">
                  {operator}
                </div>
              </div>
            ))}
            <p className="text-muted mt-3 fs-5">
              <em>Operator support may vary depending on region and account type.</em>
            </p>
          </div>
        </div>
      </section>

      {/* How to Recharge */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Steps to Pay Datacard Postpaid Bills
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
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Features of Our Platform
          </h2>
          <div className="row g-4">
            {features.map((f, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm h-100 card-hover">
                  <div className="text-theme fs-2 mb-3">{f.icon}</div>
                  <h5>{f.title}</h5>
                  <p className="text-muted">{f.desc}</p>
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
          <div className="row">
            {faqs.map((faq, i) => (
              <div key={i} className="col-md-6 mb-4">
                <div className="p-3 bg-light shadow-sm rounded border h-100 faq-card-hover">
                  <h5 className="fw-bold">
                    <FaQuestion className="me-2 text-theme" />
                    {faq.title}
                  </h5>
                  <p className="text-muted">{faq.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 start-bgg text-white text-center mb-3">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">
            Start Recharging Now
          </h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Don't let your datacard run out of balance. Recharge it easily with ABDKS and stay connected.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="#top" className="btn custombtn-hover">Recharge Now</Link>
            <Link to="/createaccount" className="btn custombtn-hover">Become a Partner</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQDatacardPostpaid;
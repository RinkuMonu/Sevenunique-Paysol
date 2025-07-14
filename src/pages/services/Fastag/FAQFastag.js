import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaClock,
  FaMobileAlt,
  FaCreditCard,
  FaUsers,
  FaChartLine,
  FaQuestion
} from "react-icons/fa";

const FAQFastag = () => {
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

  const supportedIssuers = [
    "ICICI Bank FASTag",
    "HDFC Bank FASTag",
    "Axis Bank FASTag",
    "SBI FASTag",
    "Paytm FASTag",
    "IDFC First Bank FASTag",
    "Bank of Baroda FASTag",
    "And more..."
  ];

  const rechargeSteps = [
    "Go to the Recharge section on the ABDKS website or app",
    "Select \"FASTag\" as the recharge category",
    "Choose your issuing bank/operator",
    "Enter your vehicle number linked to FASTag",
    "View the recharge amount or enter a custom value",
    "Proceed with UPI, debit/credit card, wallet, or net banking",
    "Receive instant recharge confirmation and receipt"
  ];

  const features = [
    {
      icon: <FaCheckCircle />,
      title: "Instant Recharge",
      desc: "Recharge your FASTag in seconds"
    },
    {
      icon: <FaCreditCard />,
      title: "Secure Payments",
      desc: "End-to-end encrypted transactions"
    },
    {
      icon: <FaClock />,
      title: "24/7 Access",
      desc: "Recharge anytime, from any device"
    },
    {
      icon: <FaMobileAlt />,
      title: "Multiple Operators",
      desc: "Supports all major banks and providers"
    },
    {
      icon: <FaUsers />,
      title: "Responsive Design",
      desc: "Mobile-friendly and fast interface"
    }
  ];

  const retailerBenefits = [
    {
      icon: <FaChartLine />,
      title: "Provide value-added services for drivers and fleet owners"
    },
    {
      icon: <FaCreditCard />,
      title: "Earn commission on every recharge"
    },
    {
      icon: <FaCheckCircle />,
      title: "Real-time transaction tracking and reporting"
    },
    {
      icon: <FaMobileAlt />,
      title: "Easy setup with the ABDKS retailer dashboard"
    }
  ];

  const faqs = [
    {
      title: "Which banks do you support for FASTag recharge?",
      content: "We support all major FASTag issuing banks like ICICI, SBI, HDFC, Axis, Paytm, and more."
    },
    {
      title: "How much time does it take to reflect the recharge?",
      content: "Recharge is usually processed instantly, and your FASTag balance is updated within minutes."
    },
    {
      title: "Can I recharge someone else's FASTag?",
      content: "Yes, simply enter the correct vehicle number or account ID linked to the FASTag and proceed."
    },
    {
      title: "Is there any convenience fee for FASTag recharge?",
      content: "No, ABDKS does not charge any additional convenience fee for FASTag recharges."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Hassle-Free FASTag Recharge</h1>
          <p className="lead mt-3 fw-bold fs-4">
            With ABDKS Solutions Private Ltd., recharging your FASTag is quick,
            easy, and secure.
          </p>
          <p className="fs-5">
            Avoid toll booth delays and keep your FASTag active with our seamless online recharge service.
            We support major FASTag issuing banks and provide instant recharge
            confirmation with secure transactions across devices.
          </p>
        </div>
      </section>

      {/* Supported Issuers */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported FASTag Issuers</h2>
          <p className="text-muted mt-3 fs-5">
            Recharge your FASTag from these supported banks and issuers:
          </p>
          <div className="row justify-content-center">
            {supportedIssuers.map((issuer, i) => (
              <div key={i} className="col-md-3 mb-3">
                <div className="primary-bg text-white p-3 rounded shadow-sm fs-5 transition-hover">
                  {issuer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Recharge */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            How to Recharge FASTag Online
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
            Key Features
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

      {/* Retailer Benefits */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">For Retailers and Service Points</h2>
          <p className="lead mb-5">
            Offer FASTag recharge services at your retail outlet and increase customer footfall:
          </p>
          <div className="row g-4">
            {retailerBenefits.map((r, i) => (
              <div key={i} className="col-md-3">
                <div className="bg-light p-4 rounded-4 shadow-sm text-center h-100 card-hover">
                  <div className="text-theme fs-2 mb-3">{r.icon}</div>
                  <h5>{r.title}</h5>
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
            Never Miss a Toll Again
          </h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Ensure smooth highway travel and avoid penalty charges with timely FASTag recharges through ABDKS.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="#top" className="btn custombtn-hover">Recharge FASTag Now</Link>
            <Link to="/createaccount" className="btn custombtn-hover">Become a Recharge Partner</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQFastag;
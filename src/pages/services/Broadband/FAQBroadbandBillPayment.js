import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  FaWifi,
  FaShieldAlt,
  FaReceipt,
  FaClock,
  FaMobileAlt,
  FaUserTie,
  FaMoneyBillWave,
} from "react-icons/fa";

const broadbandISPs = [
  "Airtel Broadband",
  "ACT Fibernet",
  "BSNL Broadband",
  "JioFiber",
  "Hathway",
  "Tikona",
  "YOU Broadband",
  "MTNL",
  "Excitel",
  "RailWire",
];

const broadbandSteps = [
  "Go to the Bill Payment section on the ABDKS website or mobile app.",
  "Select Broadband as the service category.",
  "Choose your operator from the list.",
  "Enter your Account Number or User ID.",
  "System will fetch your current bill details.",
  "Confirm the amount and complete the payment using preferred mode.",
  "Receive instant confirmation and digital receipt.",
];

const broadbandBenefits = [
  {
    icon: <FaClock />,
    title: "24x7 Bill Payment",
    desc: "Recharge or pay bills anytime, even on holidays.",
  },
  {
    icon: <FaReceipt />,
    title: "Real-Time Confirmation",
    desc: "Get instant status updates after payment.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Multiple Payment Methods",
    desc: "UPI, debit/credit card, wallet, or net banking.",
  },
  {
    icon: <FaWifi />,
    title: "All Major ISPs Supported",
    desc: "Pay for Airtel, BSNL, JioFiber, ACT & more.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Encrypted Transactions",
    desc: "Secure gateways and full compliance with banking norms.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Optimized for Mobile",
    desc: "Works perfectly on Android, iOS, and desktops.",
  },
];

const broadbandRetailerInfo = [
  {
    icon: <FaUserTie />,
    title: "Attract Digital Customers",
    desc: "Offer broadband bill services to nearby users.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Earn Commission",
    desc: "Get paid for each successful bill transaction.",
  },
  {
    icon: <FaReceipt />,
    title: "No Technical Skills Needed",
    desc: "Start easily with our plug-and-play dashboard.",
  },
];

const broadbandFAQs = [
  {
    title: "How quickly is the broadband bill paid?",
    content:
      "Most broadband payments are completed in real-time with instant confirmation.",
  },
  {
    title: "Which broadband providers are supported?",
    content:
      "We support Airtel, BSNL, JioFiber, ACT Fibernet, Hathway, Tikona, and more.",
  },
  {
    title: "Can I pay broadband bills for others?",
    content:
      "Yes, you just need their Account Number or User ID to make the payment.",
  },
  {
    title: "Are there extra charges?",
    content: "No, ABDKS does not charge any additional transaction fees.",
  },
];


const FAQBroadbandBillPayment = () => {
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
     

       {/* Hero Section */}
      <section className="py-5  text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Fast & Secure Broadband Bill Payments</h1>
          <p className="lead mt-3">Pay broadband bills online anytime, anywhere with ABDKS.</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">How to Pay Your Broadband Bill</h2>
          <div className="row g-4">
            {broadbandSteps.map((step, i) => (
              <div key={i} className="col-md-6" >
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
          <h2 className="fw-bold mb-4">Supported Broadband Providers</h2>
          <div className="row justify-content-center">
            {broadbandISPs.map((isp, i) => (
              <div key={i} className="col-md-4 mb-3" >
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg" >{isp}</div>
              </div>
            ))}
          </div>
          <p className="text-muted mt-3">*Coverage may vary based on region and provider.</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Key Benefits of Using ABDKS</h2>
          <div className="row g-4">
            {broadbandBenefits.map((benefit, i) => (
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
          <h2 className="fw-bold mb-4">Retailers & Business Agents</h2>
          <p className="lead mb-5">Grow your services by offering broadband bill payments in your area.</p>
          <div className="row g-4">
            {broadbandRetailerInfo.map((item, i) => (
              <div key={i} className="col-md-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p className="small text-muted">{item.desc}</p>
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
              {broadbandFAQs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="row">
              {broadbandFAQs.map((faq, i) => (
                <div key={i} className="col-md-6 mb-4">
                  <div className="p-3 bg-white shadow-sm rounded border h-100">
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
          <h2 className="display-5 fw-bold mb-3 text-white">Never Miss a Broadband Due Date Again</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Whether you're a user or a service partner, ABDKS makes internet bill payments seamless.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Pay Now</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Join as a Partner</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQBroadbandBillPayment;

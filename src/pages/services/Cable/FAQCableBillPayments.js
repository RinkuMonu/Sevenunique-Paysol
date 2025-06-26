import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  FaTv,
  FaClock,
  FaMobileAlt,
  FaShieldAlt,
  FaRupeeSign,
  FaUserFriends,
  FaReceipt,
  FaMoneyBillWave,
  FaHandshake,
  FaQuestion
} from "react-icons/fa";

const cableOperators = [
  "GTPL",
  "DEN Networks",
  "Hathway",
  "Digi Cable",
  "Siti Cable",
  "InCable",
  "Asianet",
  "Fastway",
  "NXT Digital",
  "And more, depending on your region",
];

const paymentSteps = [
  "Go to the Bill Payment section on the website or mobile app.",
  "Select Cable TV or Cable Bill from the service category",
  "Choose your Cable Operator from the dropdown list",
  "Enter your Subscriber ID / Customer Number",
  "The system auto-fetches the current bill amount",
  "Complete payment using UPI, debit/credit card, wallet, or internet banking",
  "Get instant confirmation and a digital receipt",
];

const benefits = [
  {
    icon: <FaClock />,
    title: "24x7 Availability",
    desc: "Pay anytime, anywhere.",
  },
  {
    icon: <FaTv />,
    title: "All Major Operators Supported",
    desc: "Serve urban and rural connections",
  },
  {
    icon: <FaReceipt />,
    title: "Instant Confirmation",
    desc: "Real-time payment status updated",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Payments",
    desc: "Encrypted & RBI-compliant payment infrastructure",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Friendly Platform",
    desc: "Optimized for quick use on mobile devices",
  },
  {
    icon: <FaRupeeSign />,
    title: "Multi-Payment Options",
    desc: "UPI, cards, wallet, and net banking",
  },
];

const retailerBenefits = [
  {
    icon: <FaUserFriends />,
    title: "Provide a valuable service in your local area",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Earn commissions on each successful cable bill payment",
  },
  {
    icon: <FaReceipt />,
    title: "Attract more footfall to your digital service point",
  },
  {
    icon: <FaMobileAlt />,
    title: "Get a dedicated dashboard with full transaction logs",
  },
  {
    icon: <FaClock />,
    title: "Access 24/7 support from the sevenunique backend team",
  },
];

const faqs = [
  {
    title: "Can I pay for any cable operator?",
    content:
      "Yes, we support a wide range of regional and national cable TV providers.",
  },
  {
    title: "Is the payment confirmed instantly?",
    content:
      "Yes. Once paid, the status is updated instantly, and a digital receipt is issued.",
  },
  {
    title: "Are there extra fees for paying a cable bill through sevenUnique?",
    content:
      " No additional charges are applied for standard cable bill payments.",
  },
  {
    title: "Can I pay for someone else’s cable connection?",
    content: "Yes, just enter their correct Subscriber ID or customer number.",
  },
];

const FAQCableBillPayments = () => {
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
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">
            Simplifying Cable TV Payments for Every Household
          </h1>
          <p className="lead mt-3">
            You can now pay your cable TV bills online in just a few simple
            steps. Whether you're paying for your home connection or helping a
            customer as a digital service retailer, we ensure smooth, secure,
            and real-time bill payments.
            <br />
            Avoid missed deadlines, late penalties, and long queues—make your
            cable bill payments digitally with ease.
          </p>
        </div>
      </section>

      {/* Payment Steps */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            How to Pay Cable Bills with our platform
          </h2>
          <div className="row g-4">
            {paymentSteps.map((step, i) => (
              <div key={i} className="col-md-6">
                <div
                  className="p-3 shadow-sm rounded-4 bg-white h-100 d-flex align-items-start"
                  style={{ borderLeft: "4px solid #b53008" }}
                >
                  <div className="me-3 fs-4 fw-bold text-theme">{i + 1}</div>
                  <div>{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Cable Operators */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Cable Operators</h2>
          <div className="row justify-content-center">
            {cableOperators.map((op, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">
                  {op}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Users */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Why Use Our Platform for Cable Bill Payment?
          </h2>
          <div className="row g-4">
            {benefits.map((item, i) => (
              <div key={i} className="col-md-4">
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

      {/* Benefits for Retailers */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">
            Benefits for Retailers & CSC Operators
          </h2>

          <div className="row g-4">
            {retailerBenefits.map((info, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{info.icon}</div>
                  <h5>{info.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Frequently Asked Questions
          </h2>
          {isMobile ? (
            <Accordion>
              {faqs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="row">
              {faqs.map((faq, i) => (
                <div key={i} className="col-md-6 mb-4">
                  <div className="p-3 bg-white rounded shadow-sm border h-100">
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
      <section className="py-5 grediant-bg2 mb-3 text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">
            Pay Your Cable TV Bill Without Any Delay
          </h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Choose our platform to simplify your entertainment bill
            payments—quickly, securely, and without hassle.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">
              Pay Cable Bill Now
            </button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">
              Become a Retail Partner
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQCableBillPayments;

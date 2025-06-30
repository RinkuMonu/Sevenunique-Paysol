import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  FaTv,
  FaMoneyCheck,
  FaMobileAlt,
  FaRocket,
  FaRupeeSign,
  FaWallet,
  FaQuestion,
} from "react-icons/fa";

const operators = [
  "Airtel Digital TV",
  "Tata Play (Tata Sky)",
  "Dish TV",
  "D2H (Videocon D2H)",
  "Sun Direct",
];
const steps = [
  "Recharge and Bill Pay Section on our platform",
  "Select DTH as your service category",
  "Choose your DTH operator (eg, Airtel DTH, Tata Play)",
  "Enter your 10-conductive customer ID or registered number",
  "Select or enter your desired recharge amount",
  "Pay through UPI, Credit/Debit Card, Wallet or Net Banking",
  "Get confirmation of immediate recharge and continue watching TV uninterruptedly",
];
const benefits = [
  {
    icon: <FaMoneyCheck />,
    title: "Zero Transaction Fee",
    desc: "No extra charges on any DTH recharge",
  },
  {
    icon: <FaWallet />,
    title: "Multiple Payment Modes",
    desc: "UPI, credit card, debit card, wallet, net banking",
  },
  {
    icon: <FaRocket />,
    title: "Fast & Secure Processing",
    desc: "Recharges are completed in real-time",
  },
  {
    icon: <FaTv />,
    title: "All Major Operators Supported",
    desc: "One platform for all DTH services",
  },
  {
    icon: <FaMobileAlt />,
    title: "User-Friendly Dashboard",
    desc: "Mobile-optimized and step-by-step interface",
  },
  {
    icon: <FaRupeeSign />,
    title: "Seasonal Cashback & Offers",
    desc: "Enjoy deals on select plans and top-ups",
  },
];

const FAQDthRecharge = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size change
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as per your design
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileFAQs = [
    {
      title: "How long does a DTH recharge take?",
      content:
        "Recharges are processed within seconds and typically reflect immediately in your DTH account.",
    },
    {
      title: "Which DTH providers are supported?",
      content:
        "We support Airtel DTH, Tata Play, Dish TV, Videocon d2h, and Sun Direct.",
    },
    {
      title: "How do I check my DTH balance?",
      content:
        "You can check your balance using your DTH provider's app, website, or customer care number.",
    },
    {
      title: "What payment options are available?",
      content:
        " You can pay using UPI, debit/credit card, net banking, wallet, or ZIP pay later options.",
    },
  ];

  return (
    <>
      <section className="py-5 text-center ">
        <div className="container">
          <h1 className="display-5 fw-bold fs-2">
            Uninterrupted entertainment begins here
          </h1>
          <p className="lead fs-5 mt-3">
            Enjoy non-stop TV entertainment by recharging your DTH connection in
            seconds. We provide a reliable, secure, and easy-to-use DTH recharge
            BBPS platform for individual users and retailers across India.
            Recharge any major DTH operator immediately and keep watching your
            favorite channels without delay.
          </p>
        </div>
      </section>

      {/* How to Recharge */}
      <section className="py-5 bg-light px-3">
        <div className="row justify-content-center mb-5">
          <h2 className="text-center fw-bold mb-5">
            How to recharge a DTH with online
          </h2>
          <div className="col-lg-10">
            <div className="row g-4">
              {steps.map((step, i) => (
                <div key={i} className="col-md-6">
                  <div
                    className="d-flex align-items-start p-3 shadow-sm rounded-4 bg-light h-100"
                    style={{
                      borderLeft: "4px solid #b53008",
                    }}
                  >
                    <div className="me-3 fs-4 fw-bold text-theme">{i + 1}</div>
                    <div className="text-dark fw-medium">{step}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supported Operators */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Supported DTH Operators</h2>
          <p>
            We support immediate recharge for all major DTH service providers in
            India:
          </p>
          <div className="row justify-content-center ">
            {operators.map((op, idx) => (
              <div key={idx} className="col-md-4 mb-3 ">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">
                  {op}
                </div>
              </div>
            ))}
          </div>
          <p>
            Whether you are a customer or a digital retailer, our DTH recharge
            BBPS system ensures easy access to all platforms.
          </p>
        </div>
      </section>

      {/* Why Choose ABDKS */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Why Choose SevenUniqe for DTH Recharge?
          </h2>
          <div className="row g-4">
            {benefits.map((b, i) => (
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

      <section className="py-5 bg-white">
        <div className="p-3 bg-light shadow-sm rounded border h-100 faq-card-hover">
          <h2 className="fw-bold text-center mb-5">
            Frequently Asked Questions
          </h2>
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
      <section className="grediant-bg2 text-white py-5 text-center mb-3">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">
            Start Earning with DTH Recharge Services
          </h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            If you're a retailer, cyber café operator, or small business owner,
            offer DTH recharge BBPS services through SevenUnique and earn
            commission on every transaction. Our platform is fast, secure, and
            ready to power your digital service business.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="/registerform" className="btn btn-light text-theme fw-bold px-4 py-2">
              Become a Partner
            </a>
            <a href="#top" className="btn btn-outline-light fw-bold px-4 py-2">
              Recharge Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQDthRecharge;

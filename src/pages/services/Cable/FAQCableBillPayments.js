import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
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
];

const paymentSteps = [
  "Go to the Bill Payment section on the ABDKS website or app.",
  "Select 'Cable TV' from the service categories.",
  "Choose your Cable Operator from the dropdown.",
  "Enter your Subscriber ID or Customer Number.",
  "Your bill amount will be auto-fetched.",
  "Pay using UPI, card, wallet, or net banking.",
  "Get instant confirmation and a digital receipt.",
];

const benefits = [
  {
    icon: <FaClock />,
    title: "24x7 Availability",
    desc: "Pay your cable bill anytime, without delays.",
  },
  {
    icon: <FaTv />,
    title: "Major Operators Supported",
    desc: "From GTPL to Hathway and beyond — we've got it covered.",
  },
  {
    icon: <FaReceipt />,
    title: "Instant Confirmation",
    desc: "Payment status updated in real-time with digital receipt.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Payments",
    desc: "Encrypted and RBI-compliant infrastructure for peace of mind.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Friendly",
    desc: "Fast, simple, and optimized for smartphone users.",
  },
  {
    icon: <FaRupeeSign />,
    title: "Multiple Payment Options",
    desc: "Choose UPI, card, wallet, or net banking.",
  },
];

const retailerBenefits = [
  {
    icon: <FaUserFriends />,
    title: "Serve Your Community",
    desc: "Offer cable bill payments to your customers easily.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Earn Commissions",
    desc: "Get paid for every successful cable bill payment.",
  },
  {
    icon: <FaHandshake />,
    title: "24x7 Backend Support",
    desc: "Always-on help from the ABDKS team and dashboard access.",
  },
];

const faqs = [
  {
    title: "Can I pay for any cable operator?",
    content:
      "Yes, ABDKS supports a wide range of regional and national cable TV providers.",
  },
  {
    title: "Is the payment confirmed instantly?",
    content:
      "Yes. Once the transaction is completed, the payment status updates in real-time.",
  },
  {
    title: "Are there extra fees for paying a cable bill through ABDKS?",
    content:
      "No, we do not apply any additional charges for standard cable bill payments.",
  },
  {
    title: "Can I pay for someone else’s cable connection?",
    content:
      "Yes. You just need the correct Subscriber ID or customer number of the person.",
  },
];

const FAQCableBillPayments = () => {
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
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Cable Bill Ease</h1>
          <p className="lead mt-3">
            Pay Your Cable TV Bills Online with ABDKS – Quick, Secure & Hassle-Free
          </p>
          <p className="col-lg-9 mx-auto">
            Whether you're paying for your home connection or helping a customer
            as a digital retailer, ABDKS ensures smooth, secure, and real-time
            bill payments.
          </p>
        </div>
      </section>

      {/* Payment Steps */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">How to Pay Cable Bills</h2>
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
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">{op}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Users */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Use ABDKS for Cable Bill Payments?</h2>
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
          <h2 className="fw-bold mb-4">Retailer & CSC Operator Benefits</h2>
          <p className="lead mb-5">
            Expand your service offerings and boost your income with every cable bill you process.
          </p>
          <div className="row g-4">
            {retailerBenefits.map((info, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{info.icon}</div>
                  <h5>{info.title}</h5>
                  <p className="small text-muted">{info.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
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
      <section className="py-5 grediant-bg2 mb-3 text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">Pay Your Cable TV Bill Without Delay</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Choose ABDKS to simplify your entertainment bill payments — quickly, securely, and without hassle.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Pay Cable Bill Now</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Become a Retail Partner</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQCableBillPayments;

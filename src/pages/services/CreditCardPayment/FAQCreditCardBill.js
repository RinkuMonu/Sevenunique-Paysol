import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from 'react-router-dom';

import {
  FaCreditCard,
  FaLock,
  FaClock,
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaUserFriends,
  FaWallet,
  FaQuestion
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
  "Kotak Mahindra Bank",
  "American Express",
  "Canara Bank",
  "And many other private and public banks",
];

const billSteps = [
  "Visit the website or open the mobile app",
  "Login using your mobile number and OT",
  "Go to Recharge & Bill Pay, then select Credit Card Payment",
  "Choose your bank from the dropdown",
  "Enter your credit card number and bill amount",
  "Apply available coupon codes (if any)",
  "Select your preferred payment method (UPI, card, net banking, wallet)",
  "Click “Pay Now” and receive instant confirmation with a digital receipt",
];

const billBenefits = [
  {
    icon: <FaClock />,
    title: "Instant Processing",
    desc: "Avoid late fees with real-time confirmation.",
  },
  {
    icon: <FaLock />,
    title: "Encrypted Payments",
    desc: "100% secure and RBI-authorized BBPS gateway.",
  },
  {
    icon: <FaMobileAlt />,
    title: "24x7 Availability",
    desc: "Pay bills anytime, including weekends and holidays.",
  },
  {
    icon: <FaWallet />,
    title: "Multiple Payment Modes",
    desc: "UPI, net banking, debit/credit cards, and wallets.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile-Friendly",
    desc: "Seamless experience on both Android and iOS.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "No Extra Charges",
    desc: "Pay bills with zero convenience or processing fees.",
  },
  {
    icon: <FaUserFriends />,
    title: "Real-Time Receipts",
    desc: "Get detailed transaction history instantly.",
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

  const mobileFAQs = [
    {
      title: "Is it safe to pay my credit card bill on SevenUnique?",
      content:
        " Yes. uses encrypted, RBI-analog system to safely process your payment.",
    },
    {
      title: "Can I pay someone else's credit card bill?",
      content: "Yes. All you need is the right credit card number and amount.",
    },
    {
      title: "How fast the payment is processed?",
      content:
        "Most payment reflects within minutes. Some banks may take 2-3 commercial days for final disposal.",
    },
    {
      title: "Can I only pay the minimum amount payable?",
      content:
        " Yes, but doing so regularly can affect your credit score. Full payment is always recommended.",
    },
  ];

  return (
    <>
      <section className="py-5 text-center position-relative ">
        <div className="container position-relative z-2">
          <h1 className="display-4 fw-bold mb-3">
            About Credit Card Bill Payment
          </h1>
          <p className="fs-6 mb-0 col-md-10 mx-auto ">
            A credit card gives you access to short-term credit for immediate
            payments. However, forgetting your bill date can result in interest
            charges, late fees, and even a lower credit score. That’s why timely
            bill payment is crucial.
            <br />
            We offer a fast, secure, and seamless way to pay your credit card
            bills online—helping you avoid penalties, improve credit health, and
            manage your finances more effectively.
            <br />
            Our platform supports credit card bill payments for all major Indian
            banks, powered by BBPS (Bharat Bill Payment System) infrastructure
            for reliability and speed.
          </p>
        </div>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            opacity: 0.1,
            backgroundImage: "url('/assets/credit-bg.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </section>


      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            How to Pay Credit Card Bills
          </h2>
          <p>
            Paying your credit card bill using our platform is quick and easy.
            Follow these steps:
          </p>
          <div className="row g-4">
            {billSteps.map((step, idx) => (
              <div key={idx} className="col-md-6">
                <div
                  className="p-3 shadow-sm rounded-4 bg-white h-100 d-flex align-items-start"
                  style={{ borderLeft: "4px solid #b53008" }}
                >
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
          <h2 className="fw-bold mb-4">Supported Credit Card Issuers</h2>
          <p>You can make credit card bill payments for a wide range of banks and institutions, including:</p>
          <div className="row justify-content-center">
            {banks.map((bank, i) => (
              <div key={i} className="col-md-3 mb-3">
                <div className="primary-bg text-white p-3 rounded shadow-sm fs-6 h-100">
                  {bank}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Key Benefits of Paying Credit Card Bills </h2>
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




<section className="py-5">
        <div className="container">
          <h4 className="fw-bold mb-4 text-center text-theme">Retailer & Agent Benefits</h4>
          <p className="text-center col-md-8 mx-auto mb-3">
            If you're a retailer, CSC operator, or local service provider, helps you offer credit card bill payment services to your customers:

          </p>
          <div class="d-flex justify-content-center">
  <ul class="list-unstyled text-center">
    <li>Earn commission on every bill paid</li>
    <li>Attract more walk-ins by offering value-added services</li>
    <li>No technical setup required – start with just a smartphone</li>
    <li>Real-time tracking via your partner dashboard</li>
    <li>Support from our Jaipur-based team</li>
  </ul>
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

      <section className="py-5 grediant-bg2 text-white text-center mb-3">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">
            Start Paying Smart – Use SevenUnique for Credit Card Bill Payments
          </h2>
          <p className="lead mb-4 col-lg-8 mx-auto">
            Whether for personal use or retail business, it makes credit card
            bill payment secure, fast, and reliable — powered by BBPS and
            trusted across India.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">

<a href="#top" className="btn btn-light text-theme fw-bold px-4 py-2">
              Pay Now
            </a>
           <Link to="/registerform">
            <button className="btn btn-outline-light fw-bold px-4 py-2">
              Become a Partner
            </button></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQCreditCardPayment;

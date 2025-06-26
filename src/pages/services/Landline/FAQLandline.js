import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  FaUniversity,
  FaHandHoldingUsd,
  FaMobileAlt,
  FaReceipt,
  FaLock,
  FaStore,
  FaChartLine,
} from "react-icons/fa";

const emiSteps = [
  "Visit the EMI Payment section on the ABDKS website or mobile app.",
  "Select the financial institution or NBFC.",
  "Enter your loan/account number or registered mobile number.",
  "View your outstanding EMI amount and due date.",
  "Proceed to pay using UPI, debit/credit card, wallet, or net banking.",
  "Receive instant confirmation and digital receipt.",
];

const loanTypes = [
  "Personal Loans",
  "Business Loans",
  "Home Loans",
  "Car or Bike Loans",
  "Consumer Durable Loans",
  "Education Loans",
  "Gold Loans",
  "Digital Credit Cards (BNPL / Pay Later)",
];

const emiFeatures = [
  {
    icon: <FaHandHoldingUsd />,
    title: "Instant Payment & Confirmation",
    desc: "No delays — pay and get receipts instantly.",
  },
  {
    icon: <FaMobileAlt />,
    title: "24x7 Access",
    desc: "Make EMI payments anytime, even on holidays.",
  },
  {
    icon: <FaLock />,
    title: "Secure Transactions",
    desc: "Bank-grade encryption for safe payments.",
  },
  {
    icon: <FaUniversity />,
    title: "All Major Lenders Supported",
    desc: "From Bajaj to HDFC, we cover leading NBFCs & banks.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile-Friendly Design",
    desc: "Easy-to-use UI for all smartphones.",
  },
];

const emiRetailerPoints = [
  {
    icon: <FaStore />,
    title: "Serve More Customers",
    desc: "Add high-demand EMI services to your offering.",
  },
  {
    icon: <FaChartLine />,
    title: "Earn Commissions",
    desc: "Get paid on every EMI you collect.",
  },
  {
    icon: <FaReceipt />,
    title: "Real-Time Dashboard",
    desc: "Track payments and earnings with ease.",
  },
];

const emiFAQs = [
  {
    title: "Can I pay EMI for any NBFC or bank through ABDKS?",
    content: "We support most major NBFCs and banks. You can check the partner list in the portal.",
  },
  {
    title: "Do I get a receipt for my EMI payment?",
    content: "Yes, a digital receipt is generated and sent via SMS/email immediately after payment.",
  },
  {
    title: "Can I pay for someone else’s loan EMI?",
    content: "Yes. Just enter their valid account/loan number or registered mobile number.",
  },
  {
    title: "Is there any extra charge for using ABDKS?",
    content: "No additional service charge is applied for standard EMI payments.",
  },
];


const FAQLandline = () => {
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
          <h1 className="display-5 fw-bold">Pay Your Loan EMIs Online Quickly & Securely</h1>
          <p className="lead mt-3">
            One platform to manage all your EMI payments with ABDKS.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">How to Pay EMIs</h2>
          <div className="row g-4">
            {emiSteps.map((step, i) => (
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

      {/* Supported Loan Types */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Loan Types</h2>
          <div className="row justify-content-center">
            {loanTypes.map((type, idx) => (
              <div key={idx} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">{type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Why Choose ABDKS for EMI Payments?</h2>
          <div className="row g-4">
            {emiFeatures.map((feature, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm text-center h-100">
                  <div className="text-theme fs-2 mb-3">{feature.icon}</div>
                  <h5 className="fw-semibold">{feature.title}</h5>
                  <p className="text-muted small">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retailers Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">For Retailers and Business Points</h2>
          <p className="lead mb-5">
            Start offering EMI payment services and grow your income.
          </p>
          <div className="row g-4">
            {emiRetailerPoints.map((point, i) => (
              <div key={i} className="col-md-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{point.icon}</div>
                  <h5>{point.title}</h5>
                  <p className="small text-muted">{point.desc}</p>
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
              {emiFAQs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="row">
              {emiFAQs.map((faq, i) => (
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
          <h2 className="display-5 fw-bold mb-3 text-white">Stay On Track with Your EMI Payments</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Avoid late fees and maintain a good credit score by paying EMIs on time — powered by ABDKS.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Pay EMI Now</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Become a Retail Partner</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQLandline;

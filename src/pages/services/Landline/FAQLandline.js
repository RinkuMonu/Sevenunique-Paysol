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
  FaClock,
  FaWallet,
   FaQuestion
} from "react-icons/fa";
import { TbArrowsCross } from "react-icons/tb";
import { Link } from 'react-router-dom';

const emiSteps = [
  "Go to the bill payment section on website or mobile app.",
  "Select the landline as a bill category.",
  "Enter your landline number or account ID.",
  "The system will receive your current bill details.",
  "Confirm the bill and pay through UPI, Debit/Credit Card, Wallet or Net Banking.",
  "Get a quick confirmation and digital receipt.",
];

const loanTypes = [
  "BSNL landline",
  "MTNL (Delhi & Mumbai)",
  "Airtel Landline",
  "Tata Tele Services",
  "Reliance Communications (if available)",
];

const emiFeatures = [
  {
    icon: <FaHandHoldingUsd />,
    title: "Quick status and receipts",
    desc: "Confirm real-time payment and get auto-borne digital receipts.",
  },
  {
    icon: <FaClock />,
    title: "24x7 bill payment access",
    desc: " Never pay the bill including weekends and holidays.",
  },
  {
    icon: <FaLock />,
    title: "Safe payment option",
    desc: " All payments are encrypted and rooted through the RBI-authorized gateway.",
  },
  {
    icon: <FaUniversity />,
    title: "Supports all major operators",
    desc: "Pay for a personal or business landline connection.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile-friendly design",
    desc: "Easy navigation on mobile, tablet and desktop devices.",
  },
];

const emiRetailerPoints = [
  {
    icon: <FaStore />,
    title: "Draw more walk-in customers",
  },
  {
    icon: <FaChartLine />,
    title: "Increase your earnings through utility bill services",
  },
  {
    icon: <TbArrowsCross />,
    title: "Easy onboarding, no technical skills require",
  },
   {
    icon: <FaReceipt />,
    title: "Real -time reports and our support via dashboard",
  },
];

const emiFAQs = [
 {
    title: "Which operators can I pay landline bills for?",
    content: "Our platform supports major operators like BSNL, MTNL, Airtel, and more, depending on your region.",
  },
  {
    title: "Is there a charge to pay landline bills?",
    content: "There are no extra charges for bill payments through our platform.",
  },
  {
    title: "How soon is the landline bill payment confirmed?",
    content: "Usually within a few minutes. Confirmation is shown instantly and also sent via SMS/email.",
  },
  {
    title: "Can I pay someone else's landline bill?",
    content: "Yes, just enter their landline/account number and proceed with the payment.",
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
          <h1 className="display-5 fw-bold">Stay connected with uninterrupted landline bill payment</h1>
          <p className="lead mt-3">
            Now you can pay your landline phone bills online—anywhere, anytime. Our platform supports major telecom operators across India, providing real-time bills, several payment modes, and immediate confirmation.
            <br />
Whether you are managing individual bills or a retailer offering services in your area, they ensure trouble-free landline bill payment with complete security.

          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">How to pay online landline bills with our BBPS service
</h2>
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
          <h2 className="fw-bold mb-4">We supported the landline operator
</h2>
<p>Our system allows for landline bill payment.</p>
          <div className="row justify-content-center">
            {loanTypes.map((type, idx) => (
              <div key={idx} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">{type}</div>
              </div>
            ))}
          </div>
        </div>
        <p>Coverage expands as per regional service availability.</p>
      </section>

      {/* Key Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Key Features</h2>
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
          <h2 className="fw-bold mb-4">For retailers and business points</h2>
          <p className="lead mb-5">
            Provide landline bill payment services at your retail shop and earn commission:
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
          <h2 className="display-5 fw-bold mb-3 text-white">Pay Landline Bills on Time, Every Time</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Avoid missed deadlines and late fees. With our platform, landline bill payments are quick, convenient, and accessible anytime — even from your mobile.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="#top" className="btn btn-light text-theme fw-bold px-4 py-2">Pay Your Landline Bill Now</a>
            <Link to="/registerform" className="btn btn-outline-light fw-bold px-4 py-2">Become a Service Partner</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQLandline;

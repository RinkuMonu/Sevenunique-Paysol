import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";


import {
  FaCarCrash,
  FaReceipt,
  FaShieldAlt,
  FaCheckCircle,
  FaClock,
  FaMobileAlt,
  FaStore,
  FaFileInvoiceDollar,
  FaQuestion
} from "react-icons/fa";
import { FaArrowTrendUp ,FaHandshake } from "react-icons/fa6";
import { GrServers } from "react-icons/gr";
import { TbFileReport } from "react-icons/tb";

const challanSteps = [
"Log in to our platform dashboard or mobile app",
"Navigate to the Money Transfer/DMT section",
"Enter the recipient’s name, bank account number, and IFSC code",
"Enter the amount to be transferred",
"Choose your preferred transfer method: IMPS, NEFT, or UPI",
"Confirm payment using your wallet balance or linked payment method",
"Receive instant confirmation and transaction ID",
];

const challanTypes = [
  "E-Challans issued by traffic police",
  "Speeding fines",
  "Red light violations",
  "No parking penalties",
  "Helmet/seatbelt violations",
  "Vehicle document-related fines",
  "Road tax-related challans (supported regions)",
];


const supportedStates = [
"Individuals looking to send money to family or friends",
"Migrant workers sending remittances",
"Small business owners paying vendors or employees",
"Retailers offering cash-to-bank services",
"Jan Seva Kendra & CSC operators",
"Financial service providers in rural areas",

];


const features = [
  {
    icon: <FaClock />,
    title: "Instant Fund Transfe",
    desc: "Real-time settlement to any Indian bank",
  },
  {
    icon: <FaShieldAlt />,
    title: "Supports All Banks",
    desc: "Compatible with IMPS, NEFT, and UPI rails",
  },
  {
    icon: <FaCheckCircle />,
    title: "Aadhaar-Based Transfers",
    desc: "AEPS-enabled transfers for rural inclusion",
  },
  {
    icon: <FaMobileAlt />,
    title: "24x7 Availability",
    desc: "Transfer money anytime, including weekends & holidays",
  },
  {
    icon: <GrServers />,
    title: "Retailer Dashboard",
    desc: "Simple, secure, and accessible even from mobile devices",
  },
   {
    icon: <FaReceipt />,
    title: "High Transaction Success Rate",
    desc: "Industry-leading uptime and confirmation rate",
  },
];

const retailerBenefits = [
  {
    icon: <FaStore />,
    title: "Provide essential financial services in your locality",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Earn commission on each successful transaction",
  },
   {
    icon: <FaArrowTrendUp />,
    title: "Increase footfall to your shop or digital center",
  },
   {
    icon: <TbFileReport />,
    title: "Access full transaction history and daily reports",
  },
   {
    icon: <FaHandshake />,
    title: "Get onboarding, support, and tools from our platfrom",
  },
];

const faqs = [
  {
    title: "Can I transfer money to any bank in India?",
    content: "Yes. we supports transfers to all major banks using IMPS, NEFT, and UPI.",
  },
  {
    title: "Can I pay a challan for someone else?",
    content: " Yes, as long as you have their vehicle number or challan number.",
  },
  {
    title: "What is the transaction limit?",
    content: "Limits vary based on the payment method and KYC level. IMPS usually supports ₹1 to ₹2,00,000 per transaction.",
  },
  {
    title: "Is the service available 24x7?",
    content: "Yes. You can transfer funds anytime, even on weekends and public holidays.",
  },
  {
    title: "Is my money safe?",
    content: " Yes. All transactions are encrypted and processed through certified, RBI-compliant channels.",
  },
  {
    title: "Can retailers offer money transfer services?",
    content: "Yes. Retailers can become our agents and provide cash deposit & money transfer services to customers.",
  },
];


const FAQMoneyTransfer = () => {
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


  return (
    <>
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Fast, Reliable & Compliant Domestic Money Transfers</h1>
          <p className="lead mt-3">
          We offer a robust, bank-grade platform for secure online domestic money transfers. Whether you're transferring funds to a friend, sending money home, or helping customers with bank transactions as a retailer, we enable real-time money transfers to any bank account in India.
          <br />
Our service is designed for both individual users and digital agents looking to provide value-added financial services at scale.


          </p>
        </div>
      </section>

      {/* What Can You Pay */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">What Can You Pay?</h2>
          <p>Our platform supports the settlement of:</p>
          <div className="row justify-content-center">
            {challanTypes.map((type, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="primary-bg text-white p-3 rounded shadow-sm">
                  {type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">How to Send Money Online via our platform </h2>
          <div className="row g-4">
            {challanSteps.map((step, i) => (
              <div key={i} className="col-md-6">
                <div className="p-3 bg-light rounded-4 shadow-sm h-100 d-flex align-items-start" style={{ borderLeft: "4px solid #b53008" }}>
                  <div className="me-3 fs-4 fw-bold text-theme">{i + 1}</div>
                  <div>{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Regions */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Who Can Use This Service?</h2>
          <p>Our platform integrates with official traffic departments in:</p>
          <div className="row justify-content-center">
            {supportedStates.map((state, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="bg-light p-3 rounded shadow-sm">{state}</div>
              </div>
            ))}
          </div>
          <p>Coverage expands based on the availability of the traffic department.
</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Key Features</h2>
          <div className="row g-4">
            {features.map((f, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm text-center h-100">
                  <div className="text-theme fs-2 mb-3">{f.icon}</div>
                  <h5 className="fw-semibold">{f.title}</h5>
                  <p className="text-muted small">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retailers */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Benefits for Retailers & Agents</h2>
          <div className="row g-4">
            {retailerBenefits.map((r, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-light p-4 rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{r.icon}</div>
                  <h5>{r.title}</h5>
                  <p className="small text-muted">{r.desc}</p>
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
          <h2 className="display-5 fw-bold mb-3 text-white">Send Money Online with Confidence</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Whether you're transferring funds for family, business, or community support — trust Sevenunique for fast, secure, and compliant online money transfers across India.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Send Money Now</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Become a Money Transfer Agent</button>
          </div>
        </div>
      </section>
    </>
  );
};


export default FAQMoneyTransfer;
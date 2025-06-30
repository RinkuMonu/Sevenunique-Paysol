import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {
  FaCarCrash,
  FaReceipt,
  FaShieldAlt,
  FaCheckCircle,
  FaClock,
  FaMobileAlt,
  FaStore,
  FaFileInvoiceDollar,
  FaCode,
  FaQuestion
} from "react-icons/fa";
import { FaTruckPlane } from "react-icons/fa6";
import { MdIntegrationInstructions } from "react-icons/md";
import { RiCustomerService2Fill,} from "react-icons/ri";
import { GrServers } from "react-icons/gr";
import { Link } from 'react-router-dom';

const challanSteps = [
  "Go to the challan payment section on the app or website",
  "Enter your vehicle number or challan number",
  "System estimates auto",
  "Verify the fine details and zodiac sign",
  "Pay using UPI, Debit/Credit Card, wallet, or Net Banking",
  "Get immediate confirmation and a digital receipt",
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
  "Rajasthan (Jaipur, Jodhpur, Udaipur, etc.)",
  "Delhi Traffic Police",
  "Maharashtra (Mumbai, Pune)",
  "Uttar Pradesh",
  "Telangana",
  "Karnataka",
  "And other states via Parivahan portal integration",
];
const features = [
  {
    icon: <FaClock />,
    title: "Anytime, Anywhere Access",
    desc: "Pay your challan easily from your mobile or desktop—day or night, 24/7. No time constraints, no waiting in lines, just complete freedom.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Encrypted Transactions",
    desc: "Make your payments with peace of mind using RBI-compliant, secure gateways that keep your financial information fully protected and encrypted.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Instant Status Updates",
    desc: "Receive real-time confirmation as soon as your challan is processed. No delays, no uncertainty—know right away when your payment is successful.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Choose Your Payment Method",
    desc: "Whether it’s UPI, debit/credit cards, e-wallets, or internet banking—select the option that works best for you for quick, smooth, and flexible payments.",
  },
  {
    icon: <FaTruckPlane />,
    title: "No Travel Needed",
    desc: "Skip the hassle of going to courts or offices. You can clear your challan right from the comfort of your home or workplace—saving you time, money, and energy.",
  },
   {
    icon: <MdIntegrationInstructions />,
    title: "Retailer-Friendly Integration",
    desc: "Agents and local retailers can easily integrate and provide challan payment services—making it accessible in every neighborhood.",
  },
];

const retailerBenefits = [
  {
    icon: <FaStore />,
    title: "Help customers resolve challans easily",
  },
  {
    icon: <RiCustomerService2Fill />,
    title: "Increase daily footfall and trust",
  },
   {
    icon: <FaFileInvoiceDollar />,
    title: "Earn small margins or service fees",
  },
   {
    icon: <GrServers />,
    title: "Access all transactions via our dashboard",
  },
   {
    icon: <FaCode />,
    title: "Get full training and backend support",
  },
];


const faqs = [
  {
    title: "Is it safe to pay traffic fines through Sevenunique?",
    content: " Yes. All payments are processed securely via official government-authorized channels.",
  },
  {
    title: "Can I pay a challan for someone else?",
    content: " Yes, as long as you have their vehicle number or challan number.",
  },
  {
    title: "Is my payment updated with the government?",
    content: "Yes, the payment is automatically updated on the official traffic police or Parivahan record.",
  },
  {
    title: "Are there any extra charges?",
    content: " SevenUnique does not charge additional service fees for standard challan payments.",
  },
];

const FAQeChallanPayments = () => {
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
      {/* Hero */}
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Clear Traffic Fines in Just a Few Clicks</h1>
          <p className="lead mt-3">
           We provide a fast and secure way to settle your traffic challans online. Whether you've gotten an e-challan for speeding, running a red light, or any other violations, our platform allows you to pay your traffic fines instantly, no matter where you are, without the hassle of visiting a traffic office.
           <br />
Our mission is to make digital traffic fine payments easy, transparent, and stress-free for every citizen and local retailer.

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
          <h2 className="fw-bold text-center mb-5">How to organize a traffic invoice with our platform</h2>
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
          <h2 className="fw-bold mb-4">Supported States & Traffic Authorities</h2>
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
          <h2 className="fw-bold text-center mb-5">Why use our platform for challan payment?</h2>
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
          <h2 className="fw-bold mb-4">Benefits for Retailers & Digital Service Points</h2>
          <p className="lead mb-5">Offer traffic fine settlement services at your store or kiosk.</p>
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
          <h2 className="display-5 fw-bold mb-3 text-white">Settle Traffic Fines Online—The Smart Way</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Avoid delays, penalties, or legal issues. Choose our platform for hassle-free, secure, and verified traffic challan settlement—available 24x7 for individuals and retailers alike.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="#top" className="btn btn-light text-theme fw-bold px-4 py-2">Pay Traffic Challan Now</a>
            <Link to="/registerform" className="btn btn-outline-light fw-bold px-4 py-2">Become a Digital Partner</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQeChallanPayments;

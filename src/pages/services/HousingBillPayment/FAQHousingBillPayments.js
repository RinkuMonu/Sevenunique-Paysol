import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {
  FaReceipt,
  FaClock,
  FaHome,
  FaMoneyBillAlt,
  FaShieldAlt,
  FaChartLine,
  FaStore,
  FaQuestion
} from "react-icons/fa";
import {
  FaTools,
  FaWater,
  FaCarAlt,
  FaBuilding,
  FaMoneyBillWave,
  FaExclamationTriangle,
} from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";


const housingSteps = [
  "Visit the Bill Payment section on the website or mobile app.",
  "Choose Housing / Society Bill from the service list.",
  "Select your society or property management organization.",
  "Enter your Flat Number / Account ID / Mobile Number.",
  "View your latest dues and billing history (if enabled).",
  "Proceed with payment using UPI, card, wallet, or net banking.",
  "Receive real-time payment confirmation and downloadable receipt.",
];

const housingServices = [
  {
    icon: <FaTools/>,
    title: "Monthly Maintenance Charges",
  },
  {
    icon: <FaWater />,
    title: "Water & Utility Charges",
  },
  {
    icon: <FaCarAlt />,
    title: "Parking & Security Fees",
  },
  {
    icon: <FaBuilding />,
    title: "Clubhouse or Facility Usage Fees",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Building Repair Fund Contributions",
  },
  {
    icon: <FaHome />,
    title: "Rental Charges (if applicable)",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Penalties or Late Fees (if any)",
  },
];

const housingSupport = [
  "Registered Housing Societies",
  "Gated Communities",
  "Resident Welfare Associations (RWAs)",
  "Cooperative Housing Boards",
  "Apartment Management Portals",
  "Private Property Management Firms",
];

const housingFeatures = [
  {
    icon: <FaClock />,
    title: "24x7 Online Payment Access",
  },
  {
    icon: <FaReceipt />,
    title: "No Paper Receipts Needed – Get instant digital proof",
  },
  {
    icon: <FaMoneyBillAlt />,
    title: "Multiple Payment Options – UPI, cards, net banking, wallets supported",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Secure Transactions – PCI-DSS compliant encryption",
  },
  {
    icon: <FaHome />,
    title: "Supports Individual & Retailer Use",
  },
    {
    icon: <FaHome />,
    title: "Transparent Billing & History – Track your past payments anytime",
  },
];

const retailerBenefits = [
  {
    icon: <FaStore />,
    title: "Help tenants and homeowners pay their dues",
  },
  {
    icon: <FaChartLine />,
    title: "Earn a commission on every transaction",
  },
  {
    icon: <FaUsersViewfinder />,
    title: "Attract recurring users in your locality",
  },
   {
    icon: <FaReceipt />,
    title: "Access real-time reports and payment logs",
  },
   {
    icon: <FaClock />,
    title: "Easy setup, training, and 24x7 support",
  },
];


const housingFAQs = [
  {
    title: "Can I pay my housing maintenance bill online with ABDKS?",
    content: "Yes. If your housing society is partnered with our system, you can pay directly.",
  },
  {
    title: "What details do I need to pay my society bill?",
    content: "Typically your flat number, society name, or account ID.",
  },
  {
    title: "Can I pay multiple bills at once?",
    content: " Yes, you can pay multiple charges (maintenance, water, etc.) together if they’re grouped under one bill.",
  },
  {
    title: "Are payments updated in real-time?",
    content: "Yes. Once paid, both the resident and the society receive instant confirmation.",
  },
];

const FAQHousingBillPayments = () => {
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

          <p className="lead mt-3">
           Streamline Your Monthly Housing Payments with One Easy Digital Platform
           <br />
We make it a breeze for residents, tenants, and housing society members to pay their housing bills online—safely, swiftly, and without the hassle of paperwork. Whether you're dealing with maintenance fees, parking charges, or monthly service dues, our platform keeps you informed and ensures you pay on time.
<br />

With our platform, paying your housing society bills is not just convenient, but also contactless and secure.

          </p>
        </div>
      </section>

      {/* What You Can Pay */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">What Can You Pay?</h2>
          <div className="row g-3">
            {housingServices.map((item, i) => (
              <div key={i} className="col-md-6 col-lg-4">

                <div className="p-3 bg-white rounded shadow-sm h-100 text-center ">
                   <div className='text-center text-theme fs-1'>{item.icon}</div>
                   {item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Entities */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Housing & Property Management Systems
</h2>
<p className='text-center text-theme fs-5'>Our platform supports direct payments to:
</p>
          <div className="row justify-content-center">
            {housingSupport.map((type, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="primary-bg text-white p-3 rounded shadow-sm fs-5">
                  {type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Pay */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">How to Pay Housing Bills via our software</h2>
          <div className="row g-4">
            {housingSteps.map((step, i) => (
              <div key={i} className="col-md-6">
                <div className="p-3 shadow-sm rounded-4 bg-white h-100 d-flex align-items-start" style={{ borderLeft: "4px solid #b53008" }}>
                  <div className="me-3 fs-4 fw-bold text-theme">{i + 1}</div>
                  <div>{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Key Benefits</h2>
          <div className="row g-4">
            {housingFeatures.map((f, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-light p-4 rounded-4 shadow-sm text-center h-100">
                  <div className="text-theme fs-2 mb-3">{f.icon}</div>
                  <h5 className="fw-semibold">{f.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Retailers */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">For Retailers & Digital Agents</h2>
          <p className="lead mb-5">Add value to your business by offering housing society payment services throughout platform :</p>
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
              {housingFAQs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="row">
              {housingFAQs.map((faq, i) => (
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
          <h2 className="display-5 fw-bold mb-3 text-white">Make Housing Payments Easy with our platform</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
           Avoid late fees and manual paperwork. Choose our platform for fast, secure, and easy housing society bill payments — for yourself or your customers.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Pay Housing Bill Now</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Become a Service Partner</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQHousingBillPayments;

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
} from "react-icons/fa";

const challanSteps = [
  "Visit the Challan Payment section on the ABDKS app or website.",
  "Enter your vehicle number or challan number.",
  "The system auto-fetches any pending fines.",
  "Verify the fine details and amount.",
  "Make payment using UPI, debit/credit card, wallet, or net banking.",
  "Receive instant confirmation and digital receipt.",
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
  "Delhi",
  "Maharashtra (Mumbai, Pune)",
  "Uttar Pradesh",
  "Telangana",
  "Karnataka",
  "Other states via Parivahan integration",
];

const features = [
  {
    icon: <FaClock />,
    title: "24x7 Access",
    desc: "Pay fines anytime, on any device – mobile or desktop.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Transactions",
    desc: "Encrypted payments via RBI-compliant gateways.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Real-Time Status",
    desc: "Fines updated instantly on government records.",
  },
  {
    icon: <FaMobileAlt />,
    title: "No Office Visit Needed",
    desc: "Skip the traffic police station – pay from home.",
  },
  {
    icon: <FaReceipt />,
    title: "Digital Receipts",
    desc: "Get immediate proof of payment after each transaction.",
  },
];

const retailerBenefits = [
  {
    icon: <FaStore />,
    title: "Serve Local Customers",
    desc: "Help walk-in customers settle fines from your shop.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Earn Margins",
    desc: "Get commissions on each successful challan payment.",
  },
];

const faqs = [
  {
    title: "Is it safe to pay traffic fines through ABDKS?",
    content: "Yes. All transactions are securely routed through official government-authorized portals.",
  },
  {
    title: "Can I pay a challan for someone else?",
    content: "Yes. You just need their vehicle number or challan number.",
  },
  {
    title: "Is the payment updated with the government?",
    content: "Yes. The settlement is reflected in the respective traffic police system immediately.",
  },
  {
    title: "Are there any extra charges?",
    content: "No. ABDKS does not charge additional service fees for standard challan payments.",
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
          <h1 className="display-5 fw-bold">Hassle-Free Traffic Ticket Settlement</h1>
          <p className="lead mt-3">
            Pay traffic challans instantly online – fast, safe, and fully verified with ABDKS.
          </p>
        </div>
      </section>

      {/* What Can You Pay */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">What Can You Pay?</h2>
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
          <h2 className="fw-bold text-center mb-5">How to Pay Traffic Challan via ABDKS</h2>
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
          <div className="row justify-content-center">
            {supportedStates.map((state, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="bg-light p-3 rounded shadow-sm">{state}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Why Use ABDKS for Challan Payment?</h2>
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
          <h2 className="fw-bold mb-4">For Retailers & Digital Partners</h2>
          <p className="lead mb-5">Offer traffic fine settlement services from your store or CSC center.</p>
          <div className="row g-4">
            {retailerBenefits.map((r, i) => (
              <div key={i} className="col-md-6">
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
          <h2 className="display-5 fw-bold mb-3 text-white">Settle Traffic Fines Online – The Smart Way</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Avoid penalties and clear your challans instantly with ABDKS.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Pay Traffic Challan Now</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Become a Digital Partner</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQeChallanPayments;

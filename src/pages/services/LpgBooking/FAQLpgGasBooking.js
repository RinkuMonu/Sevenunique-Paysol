import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  FaGasPump,
  FaCalendarCheck,
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaStore,
  FaUsers,
} from "react-icons/fa";

const gasSteps = [
  "Visit the Gas Booking section on the ABDKS app or website.",
  "Select your LPG Provider (e.g., Indane, HP, Bharat).",
  "Enter your Consumer Number / Registered Mobile Number.",
  "Confirm your booking details and delivery address.",
  "Choose your payment method (if required).",
  "Submit the request and receive instant confirmation via SMS/email.",
];

const gasProviders = ["Indane (Indian Oil)", "HP Gas (Hindustan Petroleum)", "Bharat Gas (Bharat Petroleum)"];

const gasFeatures = [
  {
    icon: <FaCalendarCheck />,
    title: "24x7 Booking Access",
    desc: "Book gas refills anytime, even on weekends and holidays.",
  },
  {
    icon: <FaGasPump />,
    title: "Supports All Major LPG Agencies",
    desc: "Book with Indane, Bharat Gas, and HP Gas using one platform.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile-Friendly Interface",
    desc: "Easy to book gas from your smartphone or tablet.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Digital Receipt Generation",
    desc: "Instantly download or share your booking confirmation.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Secure System",
    desc: "All bookings are encrypted and fully protected.",
  },
];

const retailerBenefits = [
  {
    icon: <FaUsers />,
    title: "Serve Local Customers",
    desc: "Book gas cylinders for customers who don’t use smartphones.",
  },
  {
    icon: <FaStore />,
    title: "Earn Commissions",
    desc: "Get paid for every successful gas refill booked.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Easy Integration",
    desc: "Manage gas bookings through the ABDKS dashboard easily.",
  },
];

const gasFAQs = [
  {
    title: "Can I book gas for any LPG provider?",
    content: "Yes. ABDKS supports bookings for Indane, Bharat Gas, and HP Gas.",
  },
  {
    title: "Do I get a confirmation after booking?",
    content: "Yes. You will receive an instant confirmation via SMS and email.",
  },
  {
    title: "Can I book gas for someone else?",
    content: "Yes. You can book using their consumer number and address.",
  },
  {
    title: "Are there extra charges for booking?",
    content: "There are no hidden charges for standard gas bookings.",
  },
];


const FAQLpgGasBooking = () => {
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
       {/* Hero */}
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Quick Gas Booking Service</h1>
          <p className="lead mt-3">
            Book LPG cylinders online instantly with ABDKS – no agency visits, no waiting.
          </p>
        </div>
      </section>

      {/* Providers */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Gas Providers</h2>
          <div className="row justify-content-center">
            {gasProviders.map((provider, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="primary-bg text-white p-3 rounded shadow-sm fs-5">
                  {provider}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-muted small">
            Booking support available for both regular and subsidized LPG connections.
          </p>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">How to Book Your Cylinder</h2>
          <div className="row g-4">
            {gasSteps.map((step, i) => (
              <div key={i} className="col-md-6">
                <div className="p-3 shadow-sm rounded-4 bg-light h-100 d-flex align-items-start" style={{ borderLeft: "4px solid #b53008" }}>
                  <div className="me-3 fs-4 fw-bold text-theme">{i + 1}</div>
                  <div>{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Why Use ABDKS for Gas Booking?</h2>
          <div className="row g-4">
            {gasFeatures.map((f, i) => (
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

      {/* Retailer Benefits */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">For Retailers & Agents</h2>
          <p className="lead mb-5">Add essential services and grow your digital business.</p>
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
              {gasFAQs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="row">
              {gasFAQs.map((faq, i) => (
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
          <h2 className="display-5 fw-bold mb-3 text-white">Book Your Gas Cylinder the Smart Way</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Fast, secure, and available 24x7 – LPG booking made easy by ABDKS.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Book Now</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Become a Gas Booking Agent</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQLpgGasBooking;

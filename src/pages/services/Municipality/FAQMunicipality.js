import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaBuilding, FaFaucet, FaRecycle, FaMapMarkerAlt, FaShieldAlt, FaGlobeAsia, FaRupeeSign, FaQuestionCircle } from "react-icons/fa";

const services = [
  { icon: <FaBuilding />, title: "Property Tax" },
  { icon: <FaFaucet />, title: "Water Tax" },
  { icon: <FaRecycle />, title: "Sewerage Charges" },
  { icon: <FaRecycle />, title: "Solid Waste Management Fees" },
  { icon: <FaShieldAlt />, title: "Trade License Renewal" },
  { icon: <FaGlobeAsia />, title: "Development & Civic Charges" },
];

const steps = [
  "Visit the Bill Payment section on the ABDKS app or website.",
  "Choose 'Municipal Bill' from the service categories.",
  "Select your city or municipality.",
  "Enter property ID, account number, or consumer number.",
  "Verify bill details fetched from the system.",
  "Make payment via UPI, cards, wallet, or net banking.",
  "Receive instant confirmation and receipt.",
];

const faqs = [
  {
    question: "Can I pay property tax online through ABDKS?",
    answer: "Yes. You can pay property tax and other civic dues for supported municipalities.",
  },
  {
    question: "What details are required to pay a municipal bill?",
    answer: "Usually, your property ID, account number, or consumer ID is needed.",
  },
  {
    question: "Are municipal payments processed instantly?",
    answer: "Yes. Confirmation is shared immediately after payment via SMS/email.",
  },
  {
    question: "Is there a service charge for municipal bill payment?",
    answer: "No extra charges for standard bill payments via ABDKS.",
  },
];


const FAQMunicipality = () => {
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

  const content = [
    {
      title: 'Pay Your Municipal Property Tax Online',
      body: (
        <>
          <p>
            Gone are the days when you had to stand in a queue for making your Municipal Property Tax payments. SEVENUNIQUE TECH SOLUTION PRIVATE LIMITED. . now brings house tax payment facilities for you at your fingertips. You can now make your property tax payment at any time and any place.
          </p>
          <p>
            You also have the added benefit of using secure payment options for municipal property tax payment online through debit/credit card or through net banking.
          </p>
        </>
      ),
    },
    {
      title: 'Safe and Secure Property Tax Payment',
      body: (
        <>
          <p>
            SEVENUNIQUE TECH SOLUTION PRIVATE LIMITED. . ensures secure and hassle-free transactions for municipal property tax payments. All payment options such as debit cards, credit cards, and net banking are routed through secure servers, providing the highest level of data protection.
          </p>
          <p>
            Your personal information, including email addresses, phone numbers, and banking details, is encrypted and accessible only by you, ensuring maximum privacy.
          </p>
        </>
      ),
    },
    {
      title: 'Steps to Pay Property Tax Using SEVENUNIQUE TECH SOLUTION PRIVATE LIMITED. .',
      body: (
        <>
          <ol>
            <li>Download & log in to the SEVENUNIQUE TECH SOLUTION PRIVATE LIMITED. . app.</li>
            <li>Select the 'Recharge and Bill Pay' option.</li>
            <li>Choose 'Property Tax' as the category.</li>
            <li>Enter your municipal corporation and property details.</li>
            <li>Verify the tax amount fetched by the system.</li>
            <li>Choose your preferred payment method and complete the transaction.</li>
          </ol>
        </>
      ),
    },
    {
      title: 'FAQs',
      body: (
        <ul>
          <li>
            <strong>Is it safe to pay property taxes online using SEVENUNIQUE TECH SOLUTION PRIVATE LIMITED. .?</strong><br />
            Yes, SEVENUNIQUE TECH SOLUTION PRIVATE LIMITED. . offers encrypted payment gateways and keeps all user data secure.
          </li>
          <li>
            <strong>Can I pay property taxes for any municipal corporation?</strong><br />
            Yes, SEVENUNIQUE TECH SOLUTION PRIVATE LIMITED. . supports property tax payments for multiple municipal corporations across the country.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      {isMobile ? (
        <Accordion>
          {content.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : (
        <div className='p-5'>
          {content.map((item, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <h3>{item.title}</h3>
              {item.body}
            </div>
          ))}
        </div>
      )}

        {/* Hero Section */}
      <section className="py-5 text-center bg-light">
        <div className="container">
          <h1 className="display-5 fw-bold">Municipal Bill Payments</h1>
          <p className="lead mt-3">
            Pay Your Municipal Taxes and Bills Online with ABDKS
          </p>
          <p className="col-lg-8 mx-auto">
            From property tax to sewerage fees — pay it all online, securely and instantly, with real-time updates and zero hassle.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Types of Municipal Bills You Can Pay</h2>
          <div className="row g-4">
            {services.map((service, i) => (
              <div className="col-md-4" key={i}>
                <div className="bg-light p-4 text-center rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{service.icon}</div>
                  <h6>{service.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">How to Pay Municipal Bills</h2>
          <div className="row g-4">
            {steps.map((step, i) => (
              <div className="col-md-6" key={i}>
                <div className="p-3 bg-white shadow-sm rounded-4 d-flex align-items-start h-100" style={{ borderLeft: "4px solid #b53008" }}>
                  <div className="me-3 fs-4 fw-bold text-theme">{i + 1}</div>
                  <div>{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
          <div className="row g-4">
            {faqs.map((faq, i) => (
              <div className="col-md-6" key={i}>
                <div className="p-3 bg-white rounded shadow-sm border h-100">
                  <h5 className="fw-bold">
                    <FaQuestionCircle className="me-2 text-theme" />
                    {faq.question}
                  </h5>
                  <p className="text-muted small">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center grediant-bg2 text-white mb-3">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">Make Civic Payments Simple & Stress-Free</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Pay your civic dues without queues. Fast, secure, and available 24x7 — whether you're a resident or a service partner.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Pay Municipal Bill Now</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Become a Service Partner</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQMunicipality;

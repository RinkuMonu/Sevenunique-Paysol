import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaBuilding, FaFaucet, FaRecycle, FaMapMarkerAlt, FaShieldAlt, FaGlobeAsia, FaRupeeSign, FaQuestionCircle ,FaClock ,FaMobileAlt ,FaUserCheck,} from "react-icons/fa";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";

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
    answer: "Typically, your property ID, account number, or consumer ID is required.",
  },
  {
    question: "Are municipal payments processed instantly?",
    answer: "Yes. Once paid, the confirmation is generated instantly and shared via email/SMS.",
  },
  {
    question: "Is there a service charge for municipal bill payment?",
    answer: "There are no additional service charges for standard municipal bill payments.",
  },
];

const support = [
"Jaipur Municipal Corporation",
"Delhi MCD (North, South, East)",
"Pune Municipal Corporation",
"Chennai Corporation",
"Greater Hyderabad Municipal Corporation (GHMC)",
"Bhopal Municipal Corporation",
"And many others based on regional coverage",
]


const munfeatures = [
  {
    icon: <FaClock />,
    title: "24x7 Availability",
    desc: "Pay your bills anytime, from any location",
  },
 {
  icon: <BiSolidSelectMultiple />,
    title: "Multiple Services in One Place",
    desc: "Pay property tax, water bills, and more",
  },
  {
    icon: <MdOutlineSecurityUpdateGood />,
    title: "Instant Updates",
    desc: "View current dues and receive instant confirmations",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Payment Gateway",
    desc: "RBI-authorized, encrypted transactions",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile-Friendly Interface",
    desc: "Seamless experience on mobile or desktop",
  },
  {
    icon: <FaUserCheck />,
    title: "Retailer Access",
    desc: "Offer civic payment services in your shop or center",
  },
];

const retailer = [
"Increase customer footfall and revenue",
"Offer value-added services to residents",
"Earn a commission on every successful payment",
"View and manage transactions easily from your dashboard",
"Greater Hyderabad Municipal Corporation (GHMC)",
"Get real-time support from our local Jaipur-based team",
]


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



  return (
    <>

      <section className="py-5 text-center bg-light">
        <div className="container">
          <h1 className="display-5 fw-bold">Introducing a Convenient, Transparent & Instant Civic Bill Payment Solution!</h1>
          <p className="lead mt-3">
             We’re all about making life easier for citizens and retailers alike. Our platform offers a straightforward and secure way to handle municipal payments online. Whether you need to pay property tax, water tax, sewerage charges, or municipal service fees, our digital solution lets you make quick payments and get real-time updates on your status—no more waiting in long lines!
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Types of Municipal Bills You Can Pay</h2>
          <p className='text-center fs-5 text-theme'>Expand your digital services by offering municipal bill payments to your community:</p>
          <div className="row g-4">
            {services.map((service, i) => (
              <div className="col-md-4" key={i}>
                <div className="bg-light p-4 text-center rounded-4 shadow-sm h-100">
<h6 className='text-theme fs-2'>{service.icon}</h6>
                  <h6>{service.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section>
   <div className="container">
          <h2 className="fw-bold mb-4 text-center">Supported Municipal Corporations</h2>
          <p className='fs-5 text-center'>
           We support municipal bill payments across major city and district boards, including:

          </p>
          <div className="row justify-content-center">
            {support.map((support, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">
                  {support}
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



 <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Why Use Our Software for Municipal Payments?</h2>
          <div className="row g-4">
            {munfeatures.map((feature, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm text-center h-100">
 <h5 className="fw-semibold text-theme fs-2">{feature.icon}</h5>
                  <h5 className="fw-semibold text-theme">{feature.title}</h5>
                  <p className="text-muted small">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



<section>
   <div className="container">
          <h2 className="fw-bold mb-4 text-center">For Retailers & Digital Entrepreneurs
</h2>
          <p className='fs-5 text-center'>
           Expand your digital services by offering municipal bill payments to your community:

          </p>
          <div className="row justify-content-center">
            {retailer.map((retailer, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">
                  {retailer}
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
          <h2 className="display-5 fw-bold mb-3 text-white">Make Civic Payments Simple & Stress-Free</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
           Whether you're a resident or a digital retailer, our platform helps you manage all your civic dues from one trusted platform—quickly, securely, and without delay.

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

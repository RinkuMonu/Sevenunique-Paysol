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
  FaQuestion
} from "react-icons/fa";
import { BiSolidCylinder } from "react-icons/bi";
import { RiTeamFill,RiCustomerService2Fill } from "react-icons/ri";
import { MdIntegrationInstructions } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const gasSteps = [
  " Head over to the Gas Booking section on the app or website.",
  " Pick your LPG provider (like Indane, HP, or Bharat).",
  " Enter your Consumer Number or Registered Mobile Number.",
  " Double-check your booking details and delivery address.",
  " Select your payment method if needed.",
  " Hit submit, and you’ll get instant confirmation via SMS or email!",
];

const gasProviders = ["Indane (Indian Oil)", "HP Gas (Hindustan Petroleum)", "Bharat Gas (Bharat Petroleum)"];


const gasFeatures = [
  {
    icon: <FaCalendarCheck />,
    title: "24x7 Booking Access",
    desc: "You can book gas refills anytime, even on holidays!",
  },
  {
    icon: <FaGasPump />,
    title: "No Manual Visit Needed",
    desc: "Enjoy a completely digital process from start to finish.",
  },
  {
    icon: <BiSolidCylinder />,
    title: "Supports All Major LPG Agencies",
    desc: "One convenient platform for all your needs.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Digital Receipt Generation ",
    desc: "Instantly download or share your booking details with ease.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Secure System",
    desc: " Rest assured, all your data and transactions are encrypted.",
  },
    {
    icon: <FaMobileAlt />,
    title: "Mobile-Friendly Interface",
    desc: "Designed for a smooth experience on any device.",
  },
];

const retailerBenefits = [
  {
    icon: <FaUsers />,
    title: "Help your local customers book LPG refills effortlessly.",
  },
  {
    icon: <FaStore />,
    title: "Earn small commissions on each successful booking.",
  },
  {
    icon: <RiTeamFill />,
    title: "Boost customer traffic by offering essential services.",
  },
   {
    icon: <MdIntegrationInstructions />,
    title: "Enjoy simple integration with our dashboard.",
  },
   {
    icon: <FaPeopleGroup />,
    title: "Get onboarding and support from our dedicated team.",
  },
];

const gasFAQs = [
  {
    title: "Can I book gas for any LPG provider?",
    content: "Absolutely! With our platform , you can book gas for Indane, Bharat Gas, and HP Gas.",
  },
  {
    title: "Do I get a confirmation after booking?",
    content: "Yes, you will receive a confirmation right away via SMS and email.",
  },
  {
    title: "Can I book gas for someone else?",
    content: "Of course! Just provide their valid consumer number and delivery details.",
  },
  {
    title: "Are there extra charges for booking?",
    content: "Nope! There are no hidden fees for standard LPG bookings through our software .",
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
          <h1 className="display-5 fw-bold">Say goodbye to the hassle of booking LPG refills!</h1>
          <p className="lead mt-3">
           We make it super easy to order LPG gas cylinders online from all the major providers in India. With our Quick Gas Booking Service, you can arrange for a cylinder refill whenever you need it—no more trips to the gas agency or waiting in those long lines. Whether you're filling up for your home or assisting customers as a retailer, our platform guarantees a smooth, secure, and instant booking experience, complete with digital confirmation.

          </p>
        </div>
      </section>

      {/* Providers */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Looking to book a gas cylinder? </h2>
          <p>Our platform has got you covered with major LPG distributors like </p>
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
            You can easily book both regular and subsidized connections.
          </p>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Here’s how to book your gas cylinder using our platform :
</h2>
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
          <h2 className="fw-bold text-center mb-5">Discover the amazing features of Gas Booking! </h2>
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
          <h2 className="fw-bold mb-4">Benefits for Retailers & Service Agents</h2>
          <p className="lead mb-5">If you own a shop, CSC center, or digital service outlet, consider adding gas booking to your services: </p>
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
          <h2 className="display-5 fw-bold mb-3 text-white">Book Your Gas Cylinder the Smart Way</h2>
          <p className="lead col-lg-8 mx-auto mb-4">Choose our BBPS platform for quick, reliable, and secure LPG gas booking — available 24x7 for you and your customers.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="#top" className="btn btn-light text-theme fw-bold px-4 py-2">Book Now</a>
            <Link to="/registerform" className="btn btn-outline-light fw-bold px-4 py-2">Become a Gas Booking Agent</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQLpgGasBooking;

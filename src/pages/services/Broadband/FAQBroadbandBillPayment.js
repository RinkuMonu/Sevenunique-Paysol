import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  FaWifi,
  FaShieldAlt,
  FaReceipt,
  FaClock,
  FaMobileAlt,
  FaUserTie,
  FaMoneyBillWave,
  FaQuestion
} from "react-icons/fa";
import { TbArrowsCross } from "react-icons/tb";
import { FaLocationCrosshairs } from "react-icons/fa6";


const broadbandISPs = [
  "Airtel Broadband",
  "ACT Fibernet",
  "BSNL Broadband",
  "JioFiber",
  "Hathway",
  "Tikona",
  "YOU Broadband",
  "MTNL",
  "Excitel",
  "RailWire",
];


const broadbandSteps = [
  "Go to the Bill Payment section on the ABDKS website or mobile app.",
  "Choose broadband as service category.",
  "Choose your operator from the list.",
  "Enter your account number/user ID.",
  "The system automatically receives your current bill details",
  "Confirm the amount and complete the payment using UPI, Debit/Credit Card, Wallet or Internet banking.",
  "Get immediate payment confirmation and digital receipt.",
];

const broadbandBenefits = [
  {
    icon: <FaClock />,
    title: "24x7 Bill Payment",
    desc: "Recharge or Pay your Internet bill anytime.",
  },
  {
    icon: <FaReceipt />,
    title: "Real-Time Confirmation",
    desc: "Get updates immediately after real-time confirmation.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Many payment methods",
    desc: "UPI, card, wallet and net banking supported.",
  },
  {
    icon: <FaWifi />,
    title: "All major ISP supported",
    desc: "manage all broadband bills at one place.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe and encrypted transactions ",
    desc: "complete compliance with banking security criteria.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Customized for mobile",
    desc: "Android works easily on iOS and desktop devices.",
  },
];

const broadbandRetailerInfo = [
  {
    icon: <FaUserTie />,
    title: "Attract digital customers in your area",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Offer bill payment for homes, offices and hostels",
  },
  {
    icon: <TbArrowsCross />,
    title: "No technical skill is necessary",
  },
  {
    icon: <FaReceipt />,
    title: "Earn commission on every transaction",
  },
  {
    icon: <FaLocationCrosshairs />,
    title: "Real-time support from our Jaipur-based team",
  },
];

const broadbandFAQs = [
  {
    title: "How quickly is the broadband bill paid?",
    content:
      "Most payments are completed in real-time with instant status confirmation.",
  },
  {
    title: "Which broadband providers are supported?",
    content:
      "We support Airtel, BSNL, JioFiber, ACT, Hathway, Tikona, and more.",
  },
  {
    title: "Can I pay broadband bills for others?",
    content:
      "Yes, you can pay bills for any broadband account using valid details.",
  },
  {
    title: "Are there extra charges?",
    content:
      "No additional transaction fees are charged for bill payments on the platform.",
  },
];



const FAQBroadbandBillPayment = () => {
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
      <section className="py-5  text-center">
        <div className="container">
          <h3 className="text-theme fw-bold fs-2">Broadband bill payment</h3>
          <h4 className="fw-bold">Fast, secure, and convenient internet bill payment with our platform</h4>
          <p className="lead mt-3">Easily pay your broadband bill online .
            <br />
            Stay connected without hindrance. We offer a safe and spontaneous platform to pay your broadband bills online—anytime, anywhere. Whether you are managing your home Wi-Fi or offering bill payment services at a retail shop, Sevenunique ensures smooth transactions with immediate confirmation.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold ">How to pay a broadband bill with Our platform </h2>
          <div className="row g-4 pt-4">
            {broadbandSteps.map((step, i) => (
              <div key={i} className="col-md-6" >
                         <div className="p-3 shadow-sm rounded-4 bg-white h-100 d-flex align-items-start" style={{ borderLeft: "4px solid #b53008" }}>
                  <div className="me-3 fs-4 fw-bold text-theme">{i + 1}</div>
                  <div>{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Operators */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Broadband Service Providers</h2>
          <div className="row justify-content-center">
            {broadbandISPs.map((isp, i) => (
              <div key={i} className="col-md-4 mb-3" >
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg" >{isp}</div>
              </div>
            ))}
          </div>
          <p className="text-muted mt-3">*Coverage may vary based on region and provider.</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Key Benefits</h2>
          <div className="row g-4">
            {broadbandBenefits.map((benefit, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm text-center h-100">
                  <div className="text-theme fs-2 mb-3">{benefit.icon}</div>
                  <h5 className="fw-semibold">{benefit.title}</h5>
                  <p className="text-muted small">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retailers */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">For retailers and agents</h2>
<p>Add broadband bill payment services to your current setup:</p>
          <div className="row g-4">
            {broadbandRetailerInfo.map((item, i) => (
              <div key={i} className="col-md-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{item.icon}</div>
                  <h5>{item.title}</h5>

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
              {broadbandFAQs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="row">
              {broadbandFAQs.map((faq, i) => (
                <div key={i} className="col-md-6 mb-4">
                  <div className="p-3 bg-white shadow-sm rounded border h-100">
                    <h5 className="fw-bold">
                                        <FaQuestion className="me-2 text-theme" />
                                        {faq.title}
                                      </h5>
                    {/* <h5 className="fw-bold">{faq.title}</h5> */}
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
          <h2 className="display-5 fw-bold mb-3 text-white">Never Miss a Broadband Due Date Again</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Whether you're a user or a digital service provider, we helps you stay connected with fast, secure broadband bill payments—all in one place.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="#top" className="btn btn-light text-theme fw-bold px-4 py-2">Pay Now</a>
            <a href="/registerform" className="btn btn-outline-light fw-bold px-4 py-2">Join as a Partner</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQBroadbandBillPayment;

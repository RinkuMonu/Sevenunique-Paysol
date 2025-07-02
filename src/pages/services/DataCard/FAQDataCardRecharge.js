import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  FaWifi,
  FaLock,
  FaClock,
  FaMobileAlt,
  FaUsers,
  FaWallet,
  FaQuestion,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const datacardOperators = [
  "JioFi Datacard",
  "Airtel 4G Dongle / Hotspot",
  "VI Dongle (Vodafone Idea",
  "BSNL Data Card",
  "MTNL Dongle",
  "And other prepaid internet providers",
];

const datacardSteps = [
  "Visit the Recharge section on ABDKS website or app.",
  "Select Datacard Recharge as the category.",
  "Choose your datacard operator.",
  "Enter your datacard number or registered mobile number.",
  "Enter amount or choose from available plans.",
  "Pay using UPI, card, wallet, or net banking.",
  "Receive instant confirmation and continue browsing.",
];

const datacardBenefits = [
  {
    icon: <FaClock />,
    desc: "BBPS-supported platform-RBI-authorized and safe digital payment ecosystem",
  },
  {
    icon: <FaWifi />,
    desc: "Instant Recharge-Right-Time Payment Success and Balance Update",
  },
  {
    icon: <FaLock />,
    desc: "Multi-operator support-Recharge for any major data provider in India",
  },
  {
    icon: <FaMobileAlt />,
    desc: "Mobile-friendly interface-cum customized for bandwidth and mobile use",
  },
  {
    icon: <FaUsers />,
    desc: "No additional fee - no hidden transaction fee",
  },
  {
    icon: <FaWallet />,
    desc: "Attractive offers, cashbacks, supercash, and coupon-based awards are available",
  },
];

const datacardFAQs = [
  {
    title: "How do I recharge my internet dongle?",
    content:
      "Log in to SevenUnique , choose 'Datacard Recharge', select your operator, enter your device number, and complete the payment.",
  },
  {
    title: "What is a datacard?",
    content:
      "A datacard is a device or card that provides internet connectivity through mobile networks. It can be USB-based, SIM-based, or wireless.",
  },
  {
    title: " Is dongle recharge the same as datacard recharge?",
    content:
      "Yes. In most cases, dongles (Wi-Fi or USB sticks) are referred to as datacards, and recharge plans are similar.",
  },
  {
    title: "Is dongle internet faster than mobile internet?",
    content:
      "Speed varies by operator, location, and device. Dongles offer stable access for laptops and desktops, while mobile internet supports all-day use on phones.",
  },
  {
    title: "Are there any extra charges on SevenUnique?",
    content: " No. offers datacard and dongle recharges with zero hidden fees.",
  },
  {
    title: "Can I check available datacard recharge plans?",
    content:
      " Yes. After entering your datacard number and operator, available plans will be displayed automatically.",
  },
];

const FAQDataCardRecharge = () => {
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
      <section className="py-5 text-center ">
        <div className="container">
          <h4 className="display-5 fw-bold">
            Data card recharge was simplified with SevenUnique.
          </h4>
          <p className=" mt-3 fs-5">
            In today's digital-first world, uninterrupted internet is
            non-parasitic. Whether you are streaming, working from afar,
            participating in online classes, or gaming, your internet dongle or
            data card should be active.
            <br />
            Our platform provides a sharp, safe, and easy-to-use platform to
            recharge any prepaid data card or dongle—any prepaid data card or
            dongle-anywhere in India, any prepaid data card or dongle.
            <br />
            Supported by BBPS (India Bill Payment System), it ensures real-time
            recharge confirmation and complete operator coverage.
          </p>
        </div>
      </section>

      {/* How To Steps */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            How to Recharge Your Datacard
          </h2>
          <div className="row g-4">
            {datacardSteps.map((step, i) => (
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

      {/* Supported Operators */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">
            Supported Datacard & Dongle Operators
          </h2>
          <p classname="fs-5">
            Recharge supported for all major devices and internet providers:
          </p>
          <div className="row justify-content-center">
            {datacardOperators.map((op, idx) => (
              <div key={idx} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">
                  {op}
                </div>
              </div>
            ))}
          </div>
          <p className="fs-5">
            Whether it’s a USB modem, Wi-Fi dongle, or 4G stick, it enables
            secure online recharge with a few simple steps.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Why choose SevenUnique for Datakard Recharge?
          </h2>
          <div className="row g-4">
            {datacardBenefits.map((b, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                  <div className="text-theme fs-2 mb-3">{b.icon}</div>
                  <h5 className="fw-semibold">{b.title}</h5>
                  <p className="text-muted fs-6">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h4 className="fw-bold mb-4 text-center text-theme">
            For Retailers & Digital Service Points
          </h4>
          <p className="text-center col-md-8 mx-auto mb-3 fs-5">
            If you run a cyber café, recharge shop, CSC center, or local store,
            you can earn by offering datacard recharge services :
          </p>

          <div class="d-flex justify-content-center">
            <ul class="list-unstyled text-center">
              <li>Serve internet users in your locality</li>
              <li>Add a high-demand digital service to your offering</li>
              <li>No technical setup required – just login and start</li>
              <li>Track commissions and reports in real-time</li>
              <li>Get onboarding and support from our Jaipur-based team</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Frequently Asked Questions
          </h2>
          {isMobile ? (
            <Accordion>
              {datacardFAQs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="row">
              {datacardFAQs.map((faq, i) => (
                <div key={i} className="col-md-6 mb-4">
                  <div className="p-3 border rounded shadow-sm bg-white h-100">
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
      <section className="start-bgg text-white py-5 text-center mb-3">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">
            Keep Your Internet Running with SevenUnique{" "}
          </h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Whether you're at home, traveling, or running a business, the
            datacard recharge system keeps your internet running smoothly.
            <br />
            Recharge online in seconds and enjoy uninterrupted browsing—anytime,
            anywhere.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="#top" className="btn custombtn-hover">
              Recharge Now
            </a>
            <Link to="/registerform" className="btn custombtn-hover">
              Join as a Retailer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQDataCardRecharge;

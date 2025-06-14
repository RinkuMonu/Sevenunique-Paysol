import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  FaBolt,
  FaMoneyCheck,
  FaClock,
  FaWallet,
  FaMobileAlt,
  FaLock,
} from "react-icons/fa";

const electricitySteps = [
  "Visit the ‘Recharge & Bill Payment’ section on the ABDKS website or app.",
  "Select ‘Electricity’ as the bill category.",
  "Choose your Electricity Board/Operator from the dropdown.",
  "Enter your Consumer/Account Number.",
  "The system will automatically fetch your latest bill.",
  "Click ‘Continue’ and verify bill details.",
  "Select your preferred payment method and click ‘Make Payment’.",
  "Receive instant confirmation and access your digital receipt via email or app.",
];

const electricityBoards = [
  "JVVNL, AVVNL, JDVVNL (Rajasthan)",
  "BSES Rajdhani / Yamuna (Delhi)",
  "TNEB, MSEB, PSPCL, UPPCL",
  "BESCOM, MESCOM, HESCOM, APSPDCL, APEPDCL",
  "WBSEDCL, CESC, NBPDCL, SBPDCL, DGVCL, UGVCL, PGVCL",
  "And many more state-regulated DISCOMs",
];

const electricityBenefits = [
  {
    icon: <FaBolt />,
    title: "BBPS-Compliant Platform",
    desc: "Secure, real-time connection to all major boards.",
  },
  {
    icon: <FaMoneyCheck />,
    title: "Zero Transaction Charges",
    desc: "No hidden fees. What you see is what you pay.",
  },
  {
    icon: <FaClock />,
    title: "24/7 Access",
    desc: "Pay anytime, even during holidays.",
  },
  {
    icon: <FaWallet />,
    title: "Multiple Payment Modes",
    desc: "Supports UPI, cards, wallets, and net banking.",
  },
  {
    icon: <FaMobileAlt />,
    title: "User-Friendly Interface",
    desc: "Seamless experience on both mobile and desktop.",
  },
  {
    icon: <FaLock />,
    title: "RBI-Approved Security",
    desc: "Encrypted, fraud-proof transactions always.",
  },
];

const electricityFAQs = [
  {
    title: "How can I check my electricity bill online?",
    content:
      "Open the ABDKS app or website, go to ‘Electricity’, select your operator, and enter your account details to fetch your latest bill.",
  },
  {
    title: "Is online electricity bill payment secure on ABDKS?",
    content:
      "Yes. ABDKS uses RBI-authorized, BBPS-integrated, encrypted infrastructure to ensure secure and fraud-proof payments.",
  },
  {
    title: "How quickly is my bill payment updated?",
    content:
      "Almost instantly. Most electricity boards reflect payments in real-time with a confirmation message and digital receipt.",
  },
  {
    title: "What if the payment fails?",
    content:
      "In case of a failed transaction, your amount is auto-refunded. Our 24x7 Jaipur-based support team is always available to assist you.",
  },
  {
    title: "Can I pay bills for others?",
    content:
      "Yes. Just enter the correct consumer/account number and proceed with the payment.",
  },
];

const FAQElectricityBill = () => {
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
       {/* Hero */}
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">
            Electricity Bill Payment Online – BBPS-Powered, Secure & Instant
          </h1>
          <p className="mt-3 fs-6">
            Pay electricity bills across India instantly with ABDKS – a trusted BBPS
            platform offering real-time updates, zero extra charges, and
            multi-operator coverage.
          </p>
        </div>
      </section>

      {/* How To Steps */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            How to Pay Your Electricity Bill via ABDKS
          </h2>
          <div className="row g-4">
            {electricitySteps.map((step, i) => (
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

      {/* Supported Boards */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Electricity Boards</h2>
          <div className="row justify-content-center">
            {electricityBoards.map((board, idx) => (
              <div key={idx} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">
                  {board}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Why Choose ABDKS for Electricity Bill Payment?
          </h2>
          <div className="row g-4">
            {electricityBenefits.map((b, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                  <div className="text-theme fs-2 mb-3">{b.icon}</div>
                  <h5 className="fw-semibold">{b.title}</h5>
                  <p className="text-muted small">{b.desc}</p>
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
              {electricityFAQs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="row">
              {electricityFAQs.map((faq, i) => (
                <div key={i} className="col-md-6 mb-4">
                  <div className="p-3 border rounded shadow-sm bg-white h-100">
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
      <section className="grediant-bg2 text-white py-5 text-center mb-3">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">Pay Electricity Bills the Smart Way</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Whether you're in Rajasthan, Delhi, Maharashtra, or Karnataka, ABDKS
            offers a fast, secure, and commission-free BBPS electricity bill
            payment solution.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">
              Pay Your Electricity Bill Now
            </button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">
              Become a BBPS Partner
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQElectricityBill;
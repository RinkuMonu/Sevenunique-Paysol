import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  FaMoneyBillWave,
  FaUniversity,
  FaClock,
  FaLock,
  FaWallet,
  FaMobileAlt,
   FaQuestion
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const emiTypes = [
  "Personal Loans",
  "Business Loans",
  "Home Loans",
  "Car or Bike Loans",
  "Consumer Durable Loans",
  "Education Loans",
  "Gold Loans",
  "Digital Credit Cards (BNPL / Pay Later)",
];

const emiPartners = [
  "Bajaj Finserv",
  "HDFC Bank",
  "IDFC First Bank",
  "Capital Float",
  "Tata Capital",
  "Indiabulls",
  "Home Credit",
  "Kissht",
  "FlexPay",
  "ZestMoney",
  "Paysense",
  "and other major NBFCs and fintech lenders",
];

const emiSteps = [
  "Visit the EMI Payment section on the ABDKS website or mobile app.",
  "Select the financial institution or NBFC.",
  "Enter your loan/account number or mobile number.",
  "View the outstanding EMI and due date (auto-fetched).",
  "Proceed to pay via UPI, debit/credit card, wallet, or net banking.",
  "Receive instant payment confirmation and digital receipt.",
];

const emiBenefits = [
  {
    icon: <FaMoneyBillWave />,
    title: "Instant Payment & Confirmation",
    desc: "EMI reflects immediately with digital receipt.",
  },
  {
    icon: <FaClock />,
    title: "24x7 Access",
    desc: "Pay EMIs anytime, even during holidays.",
  },
  {
    icon: <FaLock />,
    title: "Secure Transactions",
    desc: "Encrypted and compliant with banking regulations",
  },
  {
    icon: <FaWallet />,
    title: "Multiple Payment Modes",
    desc: "Choose what suits you best",
  },
  {
    icon: <FaUniversity />,
    title: "Supports All Major NBFCs & Lenders",
    desc: "Works with NBFCs, fintechs & banks.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile-Friendly Interface",
    desc: "Recharge on-the-go from your smartphone",
  },
];


const emiFAQs = [
  {
    title: "Can I pay EMI for any NBFC or bank through SevenUnique?",
    content:
      "We support most major NBFCs and banks. You can check the partner list in the portal.",
  },
  {
    title: "Do I get a receipt for my EMI payment?",
    content:
      "Yes, a digital receipt is generated and sent via SMS/email immediately after payment.",
  },
  {
    title: "Can I pay for someone else’s loan EMI?",
    content:
      "Yes. Just enter their valid account/loan number or registered mobile number.",
  },
  {
    title: "Is there any extra charge for using SevenUnique?",
    content:
      "No additional service charge is applied for standard EMI payments.",
  },
];

const retailer = [
"Serve more customers who need to pay monthly EMIs",
"Earn commissions on every EMI transaction",
"Easy setup via our dashboard",
"Real-time reports and support",
"Increase footfall and income with high-demand utility services",
]


const emisteps = [
"1 . Visit the EMI Payment section on the website or mobile app",
"2 . Select the financial institution or NBFC",
"3 . Enter your loan/account number or mobile number",
"4 . View the outstanding EMI and due date (auto-fetched)",
"5 . Proceed to pay via UPI, debit/credit card, wallet, or net banking",
"6 . Receive instant payment confirmation and digital receipt",
]


const FAQLoanEMIPayments = () => {
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
  
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-6 fw-bold">Discover the ultimate solution for managing all your EMI payments
</h1>
          <p className="mt-3 fs-5">
            Now, you can effortlessly pay your loan EMIs from the comfort of your home or at your nearest digital service point. Whether you have a personal loan, vehicle loan, home loan, or consumer durable loan, we guarantee secure, instant, and reliable EMI transactions with all major NBFCs and banks.
            <br />

Say goodbye to missed due dates, long lines, and payment delays. With our platform, your EMI payments are just a few clicks away!

          </p>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            How to Pay EMI via ABDKS
          </h2>
          <div className="row g-4">
            {emiSteps.map((step, index) => (
              <div className="col-md-6" key={index}>
                <div className="p-3 shadow-sm rounded-4 bg-white h-100 d-flex align-items-start" style={{ borderLeft: "4px solid #b53008" }}>
                  <div className="me-3 fs-4 fw-bold text-theme">{index + 1}</div>
                  <div>{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Loan Types</h2>
          <p className="fs-5">You can pay EMIs for:</p>
          <div className="row justify-content-center">
            {emiTypes.map((type, idx) => (
              <div key={idx} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">
                  {type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Partnered NBFCs & Banks
</h2>
<p className="fs-5">Our platform supports EMI collections for leading financial institutions like:
</p>
          <div className="row justify-content-center">
            {emiPartners.map((partner, idx) => (
              <div key={idx} className="col-md-4 mb-3">
                <div className="bg-white shadow-sm p-3 rounded fs-6">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




<section>
   <div className="container">
          <h2 className="fw-bold mb-4 text-center">How to Pay EMI Online via  our platform</h2>


          <div className="row justify-content-center">
            {emisteps.map((emisteps, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg h-100">
                  {emisteps}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
           Features & Benefits

          </h2>
          <div className="row g-4">
            {emiBenefits.map((b, i) => (
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




      <section>
   <div className="container">
          <h2 className="fw-bold mb-4 text-center">For Retailers & Agents
</h2>
          <p className='fs-5 text-center'>
           Expand your fintech offerings by adding EMI payment services through our platform :


          </p>
          <div className="row justify-content-center">
            {retailer.map((retailer, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg h-100">
                  {retailer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
          {isMobile ? (
            <Accordion>
              {emiFAQs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="row">
              {emiFAQs.map((faq, i) => (
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

      <section className="start-bgg text-white py-5 text-center mb-3">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">Stay On Track with Your EMI Payments
</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Avoid late fees and maintain a good credit score by paying EMIs on time — powered by SevenUnique.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="#top" className="btn custombtn-hover">
              Pay EMI Now
            </a>
            <Link to="/registerform" className="btn custombtn-hover">
              Become a Retail Partner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQLoanEMIPayments;

import React from "react";
import "./styles/bbps.css";
import { FaCheckCircle } from "react-icons/fa";
const features = [
  "Electricity Bill Payments",
  "Piped and LPG Gas Bills",
  "Water Supply Bill Payments",
  "Mobile Postpaid Bill Payments",
  "DTH Recharge Services",
  "Broadband and Landline Bills",
  "Insurance Premium Payments",
  "Loan EMI Payments",
  "Municipal Tax and Water Bills",
  "FASTag Recharge Services",
];

const benefits = [
  "Instant Payment Confirmation with digital receipts",
  "RBI-Compliant Secure Transactions",
  "Pan India Bill Coverage",
  "24x7 Service Availability",
  "Earn Commission Per Transaction",
  "Jaipur-Based Retailer Support",
];

const users = [
  "Kirana Stores",
  "Mobile Recharge Points",
  "Cyber Cafés",
  "Jan Seva Kendras (CSC)",
  "Utility Counters",
  "Rural Distributors",
  "Local Retail Shops",
  "Digital Entrepreneurs",
];

const steps = [
  "Register as a BBPS Retail Partner",
  "Complete KYC with PAN and Aadhaar",
  "Get Activated Within 24 Hours",
  "Start Accepting Utility and Recharge Payments Instantly",
  "Track Earnings Through a Real-Time Dashboard",
];

const reasons = [
  "Jaipur-based fintech company with Pan India presence",
  "7+ years of digital solution experience",
  "High uptime, instant settlement, and real-time dashboard",
  "100+ BBPS biller integrations and seamless UI",
];

const BBPS = () => {

  return (
    <div>
      <section className="page-title  border-0">
        <img
          src="/images/BBPSBG.svg"
          alt="Contact Us"
          className="full-width-image"
        />
      </section>

      <section class=" bbps">
        <div class="container">
          <section className="mb- 5">
            <h2 className="mb-3 d-flex align-items-center gap-2">
              <span className="material-icons text-theme" aria-hidden="true">info</span>
              What is BBPS?
            </h2>
            <p className="fs-5">
              BBPS (Bharat Bill Payment System) is a centralized payment platform approved by RBI and NPCI, offering a unified system for all utility bill payments.
              With ABDKS, you get direct access to BBPS infrastructure, allowing you to deliver trusted digital services like utility bill payments, DTH recharge, and mobile postpaid payments through a single platform.
            </p>
          </section>

          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12">
              <div class="shape-img-bg">
                <img class="mask-img1" src="/images/BBPS.svg" alt="bbps vector" />
              </div>
            </div>
            <div class="col-lg-6 col-md-12  ">
              <div class="theme-title mb-4">
                <h3 className="fw-semibold mt-5">What is BBPS?</h3>
                <p>
                  BBPS (Bharat Bill Payment System) is a centralized platform approved by RBI and NPCI for utility
                  payments. ABDKS gives you direct access to deliver trusted services like utility, DTH, and
                  mobile postpaid payments via one portal.
                </p>
                <h4 className="fw-semibold mt-4">Supported Bill Categories</h4>
                <ul className="row list-unstyled">
                  {features.map((item, i) => (
                    <li className="col-md-6 mb-2 d-flex align-items-start" key={i}>
                      <FaCheckCircle className="me-2 text-success" /> {item}
                    </li>
                  ))}
                </ul>
                <h4 className="fw-semibold mt-5">Benefits of Using BBPS with ABDKS</h4>
                <ul className="row list-unstyled">
                  {benefits.map((item, i) => (
                    <li className="col-md-6 mb-2 d-flex align-items-start" key={i}>
                      <FaCheckCircle className="me-2 text-success" /> {item}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        </div>


        <section className="container py-5">
          <h3 className="fw-bold text-center mb-4">Who Can Use This Platform?</h3>
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {users.map((u, i) => (
              <span
                key={i}
                className="badge bg-secondary bg-opacity-10 text-theme p-3 fs-6 rounded-pill"
              >
                {u}
              </span>
            ))}
          </div>

          <h3 className="fw-bold text-center mb-4">How to Get Started</h3>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="row g-4">
                {steps.map((step, i) => (
                  <div key={i} className="col-md-6">
                    <div
                      className="d-flex align-items-start p-3 shadow-sm rounded-4 bg-light h-100"
                      style={{
                        borderLeft: "4px solid #b53008",
                      }}
                    >

                      <div className="me-3 fs-4 fw-bold text-theme">{i + 1}</div>
                      <div className="text-dark fw-medium">{step}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <h3 className="fw-bold text-center mb-4">Why Choose ABDKS?</h3>
          <div className="row justify-content-center mb-5">
            <div className="col-md-8">
              <ul className="list-unstyled">
                {reasons.map((reason, i) => (
                  <li key={i} className="mb-3 d-flex align-items-start">
                    <FaCheckCircle className="text-success me-2 mt-1" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center bg-light p-5 rounded-4 shadow-sm">
            <h4 className="fw-bold mb-3">Start Your BBPS Business with ABDKS</h4>
            <p className="mb-4">
              Join the network and offer government-backed BBPS services from anywhere in India.
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <button className="btn  primary-bg px-4 py-2 rounded-pill text-white">
                Become a BBPS Partner
              </button>
              <button className="btn  px-4 py-2 rounded-pill text-theme" style={{
                border: "1px solid #b53008",
              }}>
                Talk to Our Team
              </button>
            </div>
          </div>
        </section>
      </section>

    </div>
  );
};

export default BBPS;

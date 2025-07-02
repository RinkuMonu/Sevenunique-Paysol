import React from "react";
import "./styles/bbps.css";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
  {
    title: "Instant Payment Confirmation",
    desc: "Every bill payment is processed in real-time and comes with a digital receipt.",
  },
  {
    title: "RBI-Compliant Secure Transactions",
    desc: "All payments are processed through encrypted channels and authorized by BBPS protocols.",
  },
  {
    title: "Pan India Bill Coverage",
    desc: "Accept and process payments from over 100 national and regional billers under BBPS.",
  },
  {
    title: "24x7 Service Availability",
    desc: "Services operate round-the-clock, even on weekends and public holidays.",
  },
  {
    title: "Earn Commission Per Transaction",
    desc: "Get paid for every successful BBPS transaction with a transparent commission system.",
  },
  {
    title: "Jaipur-Based Retailer Support",
    desc: "Local support team available for onboarding assistance and technical guidance.",
  },
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
  "Get Active within 24 hours",
  "Start accepting utility and recharge payments immediately",
  "Track the earnings through a real-time dashboard",
];

const reasons = [
  "7+ Years of Industry Legacy",
  "Trusted by 1000+ Retailers in Jaipur",
  "24x7 Multilingual Customer Support",
  "Fast Onboarding & Transparent Commissions",
];

const BBPS = () => {
  return (
    <div>
      <section className="page-title  border-0">
        <img
          src="/assets/Home/bbps-banner.jpg"
          alt="Contact Us"
          className="full-width-image"
        />
         <h1
            className="text-white text-right fw-bold"
            style={{
              position: "absolute",
              top: "34%",
              left: "24%",
              transform: "translate(-50%, 0%)",
              fontSize: "8rem",
              zIndex: 2,
            }}
          >
BBPS
          </h1>
      </section>

      <div class="">
        <div class="container">
          <section className="">
            <h2 className="text-theme fw-bold text-center">
              BBPS - Bharat Bill Payment System by SevenUnique
            </h2>
            <p className="fs-5 text-center">
              Immediate, safe, and profitable bill payment for retailers across
              India
              <br />
              Looking for a digital business to start? Want to offer utility
              bill payment services in your local store?
              <br />
              SevenUnique provides a fully integrated, government-official BBPS
              platform that enables safe and real-time bill payment across
              India. Made for retailers, entrepreneurs, and rural service
              providers, this is your opportunity to tap into India's growing
              digital economy.
            </p>
          </section>

          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12">
              <div class="shape-img-bg">
                <img
                  class="mask-img1"
                  src="/images/BBPS.svg"
                  alt="bbps vector"
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-12  ">
              <div class="mb-4">
                <h3 className="text-theme fw-bold">What is BBPS?</h3>
                <p className="fs-5">
                  BBPS (Bharat Bill Payment System) is a centralized payment
                  platform approved by the RBI and NPCI, offering an integrated
                  system for all utility bill payments. With SevenUnique, you
                  get direct access to the BBPS infrastructure, allowing you to
                  distribute reliable digital services such as utility bill
                  payment, DTH recharge, and mobile postpaid payment through the
                  same platform.
                </p>
                <h4 className="fw-bold mt-4 fs-3">
                  Bill Categories Support On SevenUnique BBPS
                </h4>
                <p className="mb-3 fs-5">SevenUnique supports all major BBPS biller categories:</p>
                <ul className="row list-unstyled">
                  {features.map((item, i) => (
                    <li
                      className="col-md-6 mb-2 d-flex align-items-start"
                      key={i}
                    >
                      <FaCheckCircle className="me-2 text-success" /><span className="fs-5"> {item}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="fw-bold mt-4 fs-3">
                  Benefits of Using BBPS with SevenUnique
                </h4>
                <p className="mb-3 fs-5">
                  Delivering BBPS services via SevenUnique provides retailers
                  and agents with several key benefits:
                </p>
                <ul className="row list-unstyled">
                  {benefits.map((item, i) => (
                    <li
                      className="col-md-6 mb-2 d-flex align-items-start"
                      key={i}
                    >
                      <FaCheckCircle className="me-2 mt-1 text-success fs-3" />
                      <div className="fw-bold pt-2 fs-5">{item.title}
                      <div className="text-muted pt-2 fs-6">{item.desc}</div>

                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className="container py-5">
          <h3 className="fw-bold text-center mb-4">
            Who Can Use SevenUnique BBPS Platform?
          </h3>
          <p className="text-center fs-5">
            Our BBPS solution is ideal for a wide variety of businesses and
            service providers:
          </p>
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

          <h3 className="fw-bold text-center mb-4 px-2 mt-5">
            How to Start with SevenUnique BBPS
          </h3>
          <p className="text-center fs-5">Being a BBPS partner with SevenUnique is quick and easy:</p>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="row g-4 px-3">
                {steps.map((step, i) => (
                  <div key={i} className="col-md-6">
                    <div
                      className="d-flex align-items-start p-3 shadow-sm rounded-4 bg-light h-100"
                      style={{
                        borderLeft: "4px solid #b53008",
                      }}
                    >
                      <div className="me-3 fs-4 fw-bold text-theme">
                        {i + 1}
                      </div>
                      <div className="text-dark fw-medium fs-5">{step}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="fw-bold mb-4">Why Choose SevenUnique?</h3>
          <div className="row mb-5">
            <div className="col-md-12">
              <ul className="list-unstyled px-2">
                {reasons.map((reason, i) => (
                  <li key={i} className="mb-3 d-flex">
                    <FaCheckCircle className="text-theme fs-4 me-2 mt-1 a" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center bg-light p-5 rounded-4 shadow-sm">
            <h4 className="fw-bold mb-3 fs-3">
            Start your BBPS business
            </h4>
            <p className="mb-4 fs-5">
              Join SevenUnique Network and provide official, government-backed BBPS services to your customers. Whether you are in a city or village, you can create a powerful digital payment business, increase footfall, and earn a recurring commission through every transaction.
 </p>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
             <Link to="/registerform" >
              <button className="btn custombtn-hover">
                Be BBPS Partner
              </button></Link>
              <Link to="/ContactUs">
              <button
                className="btn custombtn-hover"
                style={{
                  border: "1px solid #b53008",
                }}
              >
                Talk to Our team
              </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BBPS;

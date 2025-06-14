import React from 'react'
import ServiceItem from "./ServiceItem"
import "./OurService.css"
import { FaReceipt, FaMobileAlt, FaCreditCard, FaUniversity, FaFingerprint, FaIdCard, FaShieldAlt, FaHandHoldingUsd , FaCheckCircle } from 'react-icons/fa';

const reasons = [
  "Comprehensive Service Suite: A one-stop platform for all digital financial services.",
  "Secure Transactions: Advanced encryption and compliance with regulatory standards.",
  "User-Friendly Interface: Intuitive design ensuring ease of use for all users.",
  "24/7 Support: Dedicated customer service to assist with any queries or issues.",
  "Competitive Commissions: Attractive earnings for retailers and partners.",
];


function OurService() {
  
  const services = [
  {
    icon: <FaReceipt />,
    title: "Bharat Bill Payment System (BBPS)",
    subtitle: "Simplify Utility Bill Payments",
    features: [
      "Electricity Bills", "Water Bills", "Gas Bills",
      "Broadband and Landline Bills", "Insurance Premiums",
      "Loan EMIs", "Municipal Taxes", "Fastag Recharge"
    ],
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile and DTH Recharge Services",
    subtitle: "Stay Connected with Ease",
    features: [
      "Prepaid Mobile Recharges", "Postpaid Mobile Bill Payments", "DTH Recharges"
    ],
  },
  {
    icon: <FaCreditCard />,
    title: "Credit Card Payment Acceptance",
    subtitle: "Expand Payment Options for Your Customers",
    features: [
      "Instant Transaction Processing", "Secure Payment Gateway", "Detailed Transaction Reports"
    ],
  },
  {
    icon: <FaUniversity />,
    title: "Micro ATM Services",
    subtitle: "Bring Banking Services to Your Doorstep",
    features: ["Cash Withdrawals", "Balance Enquiries", "Mini Statements"],
  },
  {
    icon: <FaFingerprint />,
    title: "Aadhaar Enabled Payment System (AEPS)",
    subtitle: "Secure and Convenient Banking Transactions",
    features: ["Cash Withdrawals", "Balance Checks", "Fund Transfers"],
  },
  {
    icon: <FaIdCard />,
    title: "PAN Card Services",
    subtitle: "Simplify PAN Card Applications",
    features: [
      "Hassle-Free Application Process", "Timely Updates and Notifications", "Guidance and Support"
    ],
  },
  {
    icon: <FaShieldAlt />,
    title: "Insurance Services",
    subtitle: "Offer Comprehensive Insurance Solutions",
    features: ["Life Insurance", "Health Insurance", "General Insurance"],
  },
  {
    icon: <FaHandHoldingUsd />,
    title: "Loan Services",
    subtitle: "Facilitate Access to Financial Assistance",
    features: ["Personal Loans", "Business Loans", "Home Loans"],
  },
];

  return (
    <>
       <section className="page-title ">
      <img src="/assets/SERVICE.svg" alt="services" />
    </section>
   

    <section className=" text-col marginTop">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-md-12">
            <div className="theme-title">
              <h2 className='fw-400'>
                Services that we offer to our clients at a glance. We have
                earned 3+ years expertise in fintech services. You just need to
                tell us about your requirements, we will strictly take care of
                that.
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-5">
          {services.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
          />
        ))}
        </div>
      </div>
    </section>
      <section className="container my-5">
      <h3 className="fw-bold text-center mb-4">Why Choose ABDKS?</h3>

      <div className="d-flex flex-wrap gap-3 mb-5">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="d-flex align-items-start bg-light p-3 rounded-3 shadow-sm flex-fill"
            style={{ minWidth: "280px", maxWidth: "48%" }}
          >
            <FaCheckCircle className="text-success me-2 mt-1 flex-shrink-0" />
            <span>{reason}</span>
          </div>
        ))}
      </div>

     
    </section>
    <div className="text-center mb-3 pt-4 border-top">
        <h5 className="fw-bold mb-3"> Partner With Us</h5>
        <p className="text-muted small">
        Become a part of the growing network of ABDKS partners and offer essential financial services to your community. Enhance your business offerings, increase customer footfall, and contribute to the digital empowerment of India.

        </p>
        <button className="btn text-theme fw-semibold rounded-pill px-4 ">Become a Partner →</button>
                  <button className="btn  px-4 text-theme rounded-pill" style={{
                border: "1px solid #b53008",
              }}>Contact Us</button>
      </div>
    </>
  )
}

export default OurService

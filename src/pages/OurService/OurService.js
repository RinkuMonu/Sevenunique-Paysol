import React from "react";
import ServiceItem from "./ServiceItem";
import "./OurService.css";
import {
  FaReceipt,
  FaMobileAlt,
  FaCreditCard,
  FaUniversity,
  FaFingerprint,
  FaIdCard,
  FaShieldAlt,
  FaHandHoldingUsd,
  FaCheckCircle,
} from "react-icons/fa";

const reasons = [
  "Comprehensive service suite: BBPS, recharge, banking, and financial services at one place.",
  "Safe transactions: All services are encrypted and comply with RBI/BBPS criteria.",
  "User-friendly interface: Simple dashboard designed for ease of use for all user types.",
  "24/7 Support: Assistance is available for both technical and operational questions.",
  "Attractive Commission: A complete margin is paid for every transaction completed.",
];

function OurService() {
  const services = [
    {
      icon: <FaReceipt />,
      title: "Bharat Bill Payment System (BBPS)",
      subtitle: "Simplify Utility Bill Payments",
      description:
        " Enable your customers to pay bills in real time with our safe, NPCI-demonstrated BBPS recharge system. Supported categories include:",
      features: [
        "Electricity Bills",
        "Water Bills",
        "Gas Bills",
        "Broadband and Landline Bills",
        "Insurance Premiums",
        "Loan EMIs",
        "Municipal Taxes",
        "Fastag Recharge",
      ],
      line: "Our platform improves real-time updates, digital receipts, and complete BBPS compliance and satisfaction of business trusts.",
      btn: "/BBPS",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile and DTH Recharge Services",
      subtitle: "Recharge with speed and accuracy .",
      description:
        "Provide prepaid and postpaid mobile recharge and DTH services in all major networks through our fast BBPS-supported backend:",
      features: [
        "Prepaid Mobile Recharges",
        "Postpaid Mobile Bill Payments",
        "DTH Recharges",
      ],
      line: "Ensure quick processing and high uptime reliability, while competitive commissions help increase your revenue.",
      btn: "/recharge/dth",
    },
    {
      icon: <FaCreditCard />,
      title: "Credit Card Payment Acceptance",
      subtitle: "Enable card transactions easily .",
      description:
        "Accept the credit card payment from customers safely through our integrated payment gateway:",
      features: [
        "Instant Transaction Processing",
        "Secure Payment Gateway",
        "Detailed Transaction Reports",
      ],
      line: "Provide flexibility to customers by achieving professional credibility for your business.",
      btn: "/recharge/credit-card",
    },
    {
      icon: <FaUniversity />,
      title: "Micro ATM Services",
      subtitle: "Bring banking to your storefront .",
      description:
        "With our micro ATM solutions, distribute banking services to low financial access areas:",
      features: ["Cash Withdrawals", "Balance Enquiries", "Mini Statements"],
      line: "Become a financial center for your territory and increase your store footfall.",
      btn: "/recharge/electricity",
    },
    {
      icon: <FaFingerprint />,
      title: "Aadhaar Enabled Payment System (AEPS)",
      subtitle: "Biometric Banking with Ease .",
      description:
        "Use AEPS authentication to provide secure transactions to users without debit cards or internet access:",
      features: ["Cash Withdrawals", "Balance Checks", "Fund Transfers"],
      line: "All transactions are authenticated via biometric devices — perfect for semi-urban and rural use cases.",
      btn: "/recharge/electricity",
    },
    {
      icon: <FaIdCard />,
      title: "PAN Card Services",
      subtitle: "Simplify PAN Card Issuance & Correction",
      description:
        "Help customers with new PAN card applications or corrections, including:",
      features: [
        "Hassle-Free Application Process",
        "Timely Updates and Notifications",
        "Guidance and Support",
      ],
      line: "Deliver value by enabling access to essential government documentation.",
      btn: "/recharge/electricity",
    },
    {
      icon: <FaShieldAlt />,
      title: "Insurance Services",
      subtitle: "Distribute reliable insurance products .",
      description:
        "Participate with top insurers to offer several schemes from your local store:",
      features: ["Life Insurance", "Health Insurance", "General Insurance"],
      line: "Extend your business with highly deserved financial products supported by reliable providers.",
      btn: "/recharge/insurance",
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "Credit services",
      subtitle: "Credit gap for your customers.",
      description:
        " Enable your customers to apply for a loan directly from your platform:",
      features: ["Personal Loans", "Business Loans", "Home Loans"],
      line: "Our directed application systems help users complete the eligibility check and easily use funding.",
      btn: "/recharge/credit-card",
    },
  ];

  return (
    <>
      <section className="page-title ">
        <div className="position-relative w-100">
          <img
            src="/assets/Home/service-banner.jpg"
            alt="Banner"
            className="img-fluid w-100"
            style={{ objectFit: "cover", height: "100%", minHeight: "500px" }}
          />

          <h1
            className="text-white text-right fw-bold"
            style={{
              position: "absolute",
              top: "40%",
              left: "25%",
              transform: "translate(-50%, 0%)",
              fontSize: "6rem",
              zIndex: 2,
            }}
          >
            OUR SERVICES
          </h1>
        </div>
      </section>

      <section className=" text-col">
        <div className="container">
          <h2 className="text-center text-theme fw-bold">Our Services</h2>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-12">
              <div className="theme-title">
                <h3 className="fw-400">
                  Empower digital transactions across India
                </h3>
              </div>
            </div>
          </div>
          <div className="row gy-5">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                features={service.features}
                line={service.line}
                btn={service.btn}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="container">
        <h2 className="fw-bold text-center mb-4">Why choose SevenUnique?</h2>

        <div className="d-flex flex-wrap gap-3">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="d-flex align-items-center bg-light p-3 rounded-3 shadow-sm flex-fill ms-4 "
              // style={{ minWidth: "280px", maxWidth: "48%" }}
            >
              <FaCheckCircle className="text-success me-2 mt-1 flex-shrink-0" />
              <span className="fs-5">{reason}</span>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center mb-3 pt-4 border-top">
        <h3 className="fw-bold mb-3 text-theme"> Partner With Us</h3>
        <p className="text-muted fs-5">
          Join the digital financial Revolution
          <br />
          To become a certified SevenUnique retailer or distributor and increase
          your business by offering government-approved BBPS and digital
          services. Serve your community, increase footfall, and earn with every
          transaction.
        </p>
        <div className="d-grid gap-3 d-md-flex justify-content-center">
          <a
            href="/registerform"
            className="btn custombtn-hover"
          >
            Be a Partner
          </a>
          <a
            href="/ContactUs"
            className="btn custombtn-hover"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}

export default OurService;

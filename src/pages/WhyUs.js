import React from "react";
import "./styles/whyUs.css"
const WhyUs = () => {
  const features = [
    {
      icon:"",
      title: "Comprehensive BBPS Suite",
      desc: "Single-window platform for BBPS biller, recharge, credit card, micro ATM & more — pan-India coverage.",
    },
    {
      icon: "",
      title: "Robust Transaction Security",
      desc: "Fully encrypted, industry-compliant bill payment software with built-in fraud protection.",
    },
    {
      icon:"",
      title: "Easy BBPS Dashboard",
      desc: "Prepaid/postpaid, DTH & utility tracking made simple for both new and pro digital retailers.",
    },
    {
      icon: "",
      title: "24x7 Retailer Support",
      desc: "Multilingual, round-the-clock onboarding & payout help to keep your service uninterrupted.",
    },
    {
      icon: "",
      title: "Transparent Commissions",
      desc: "Real-time margins & payouts — drive trust and profitability for every transaction.",
    },
  ];
  return (
    <div>
      <section className="page-title border-0">
        <img
          src="/images/whyBG.svg"
          alt="Contact Us"
          className="full-width-image"
        />
      </section>

     
        {/* Unique Value Proposition */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold display-6 mb-4 text-theme">Our Unique Value Proposition</h2>
          <p className="text-muted mb-5 fs-5">Why thousands of BBPS retailers trust <strong>ABDKS</strong> across India</p>

          <div className="row g-4">
            {features.map((f, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="h-100 shadow-sm p-4 rounded-4 bg-light text-start position-relative hover-shadow transition-all">
                  <div className="d-flex align-items-center mb-3 text-theme " >
                    <div className="bg-theme bg-opacity-10 p-3 rounded-circle me-3 bg-secondary">{f.icon}</div>
                    <h5 className="fw-bold mb-0 text-grey">{f.title}</h5>
                  </div>
                  <p className="text-muted small">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment & CTA */}
      <section className="py-5 text-white text-center primary-bg mb-2" >
        <div className="container">
          <h2 className="fw-bold mb-3 text-white">Our Commitment to BBPS Excellence</h2>
          <p className="fs-5 mb-4">
            Since 2024, we’ve helped thousands of small retailers and large distributors grow through secure, innovative BBPS digital services.
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <button className="btn btn-light text-theme fw-semibold px-4 py-2 rounded-pill shadow-sm">
              Become a BBPS Partner
            </button>
            <button className="btn btn-outline-light fw-semibold px-4 py-2 rounded-pill shadow-sm">
              Contact ABDKS Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;

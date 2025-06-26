import React from "react";
import "./styles/whyUs.css"


import {
  FaShieldAlt,
  FaUserCheck,
  FaClock
} from "react-icons/fa";
import { LuBaggageClaim } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";


const WhyUs = () => {
  const features = [
    {
      icon:<LuBaggageClaim />,
      title: "Comprehensive BBPS service suite",
      desc: "From BBPS biller recharge system to mobile and DTH recharge BBPS, credit card payment, and micro ATM services, SevenUnique offers a single-window platform to handle all necessary digital financial operations across India.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Strong & safe Transaction Infrastructure",
      desc: "Security is at the center of every transaction. Our utility bills comply with the standards of the payment software industry and take advantage of strong encryption protocols, ensuring fraud prevention and spontaneous processing.",
    },
    {
      icon:<FaUserCheck />,
      title: "Easy-to-use BBPS Retailer Dashboard",
      desc: "Whether you are managing prepaid and postpaid recharge BBPS, DTH, or utility payments, our intuitive dashboard is made equally for users and experienced digital retailers for the first time to ensure a mixing service flow and easy disposal tracking",
    },
    {
      icon: <FaClock />,
      title: "for BBPS & Retail partners. 24x7 support",
      desc: "Our multilingual support team is available around the clock for assistance with onboarding, recharge queries, and payout tracking. We make sure that your BBPS bills run without payment disruption.",
    },
    {
      icon: <GiReceiveMoney />,
      title: "Transparent & competitive commission",
      desc: "Earn a high margin with every BBPS transaction. Our partners benefit from a fast BBPS recharge solution with real-time commission and timely payment-which helps you grow your business with confidence and transparency.",
    },
  ];


  return (
    <div>

<div className="position-relative w-100 mt-5">
          <img
            src="/assets/Home/whyus-banner.jpg"
            alt="Banner"
            className="img-fluid w-100"
            style={{ objectFit: "cover", height: "100%", minHeight: "500px" }}
          />

          {/* <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center text-white px-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="container">
              <h1 className="fw-bold text-white mb-3 fs-3 fs-md-1">
                India’s Trusted BBPS Platform for All Bill Payments
              </h1>

              <p className="fs-6 fs-md-5 mb-4">
                Recharge mobile, DTH & pay electricity, gas, credit card bills – all in one place.
              </p>
            </div>
          </div> */}
        </div>



     
        {/* Unique Value Proposition */}
      <section className="py-5 bg-white">
        <div className="container text-center">
<h4 className="fw-bold display-6 mb-4 fs-4 text-theme">Why choose SevenUnique?</h4>
<h5>Empower India's BBPS-Inaccred Digital Payment Ecosystem</h5>
<p className="mb-5">At  SevenUnique Tech Solutions Private Limited, we are secure, scalable, and user-friendly BBPS recharge solutions changing the digital finance landscape. From recharge to utility bill collection, our goal is to serve retailers, distributors, and customers across India through reliable fintech infrastructure and smart automation.</p>
          <h2 className="fw-bold display-6 mb-4 text-theme">Our Unique Value Proposition</h2>


          <div className="row g-4">
            {features.map((f, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="h-100 shadow-sm p-4 rounded-4 bg-light text-start position-relative hover-shadow transition-all">
                  <div className="d-flex align-items-center mb-3 text-theme " >
                    <div className="bg-theme bg-opacity-10 p-2 px-3 fs-3 rounded-circle me-3 bg-secondary">{f.icon}</div>
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
            SevenUnique has been committed to democratizing access to BBPS-operated digital services across India. With a focus on speed, innovation, and partner-first, we have become a reliable name for small retailers and large-scale distributors.
          </p>

        </div>
      </section>

       <section className="py-5 bg-white">
        <div className="container text-center">
<h4 className="fw-bold display-6 mb-4 fs-4 text-theme">Join  SevenUnique Network
</h4>
<p className="mb-5">Be a part of India's growing BBPS digital revolution. Participate with SevenUnique today to distribute fast, safe, and profitable financial services - and empower your customers with every transaction.</p>
 <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <button className="btn btn-light text-theme fw-semibold px-4 py-2 rounded-pill shadow-sm">
              Be a BBPS partner
            </button>
            <button className="btn btn-light text-theme fw-semibold px-4 py-2 rounded-pill shadow-sm">
              contact support
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default WhyUs;

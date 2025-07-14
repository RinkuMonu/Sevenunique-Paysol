import React from "react";
import "./AboutUs.css";

import {
  FaStar,
  FaHandsHelping,
  FaShieldAlt,
  FaLightbulb,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import {
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaBolt,
  FaUniversity,
  FaWallet,
  FaIdCard,
  FaBullseye,
} from "react-icons/fa";
import { FaUserPlus, FaCheckCircle } from "react-icons/fa";
import {
  FaRupeeSign,
  FaUserCheck,
  FaSyncAlt,
  FaThumbsUp,
} from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const listItems = [
    {
      text: "Instant and Secure Transactions",
      icon: <FaBolt className="me-2 text-theme" />,
    },
    {
      text: "100% Verified & Trusted Platform",
      icon: <FaShieldAlt className="me-2 text-theme" />,
    },
    {
      text: "Best Commission Structures",
      icon: <FaRupeeSign className="me-2 text-theme" />,
    },
    {
      text: "Seamless KYC & Onboarding",
      icon: <FaUserCheck className="me-2 text-theme" />,
    },
    {
      text: "BBPS, AEPS, DMT & Utility Services",
      icon: <FaSyncAlt className="me-2 text-theme" />,
    },
    {
      text: "Trusted by Thousands of Retailers",
      icon: <FaThumbsUp className="me-2 text-theme" />,
    },
  ];

  const coreValues = [
    {
      title: "Excellence",
      description:
        "We provide BBPS-operated fintech solutions that set benchmarks for speed, reliability, and scale.",
      icon: <FaStar className="me-2 text-theme" />,
    },
    {
      title: "Collaboration",
      description:
        "We flourish by partnering with retailers, distributors, and stakeholders to expand the entire India.",
      icon: <FaHandsHelping className="me-2 text-theme" />,
    },
    {
      title: "Integrity",
      description:
        "We maintain transparency, morality, and data security in every transaction and relationship.",
      icon: <FaShieldAlt className="me-2 text-theme" />,
    },
    {
      title: "Innovation",
      description:
        "We continuously upgrade our BBPS platforms and services using the latest technologies and smart automation.",
      icon: <FaLightbulb className="me-2 text-theme" />,
    },
    {
      title: "Customer Centricity",
      description:
        "We prefer user needs by offering a spontaneous dashboard, quick settlements, and real value construction.",
      icon: <FaUsers className="me-2 text-theme" />,
    },
    {
      title: "Continuous Education",
      description:
        "We grow through continuous market research, user response, and team dismissal to live fintech-red.",
      icon: <FaRocket className="me-2 text-theme" />,
    },
  ];

  const services = [
    {
      title: "Prepaid & Postpaid Recharge BBPS",
      description:
        "Fast mobile recharge solutions for all telecom providers with real-time confirmation.",
      icon: <FaMobileAlt className="fs-2 text-white" />,
    },
    {
      title: "DTH Recharge BBPS Platform",
      description:
        "Recharge all major DTH services instantly using our secure BBPS-powered platform.",
      icon: <FaBolt className="fs-2 text-white" />,
    },
    {
      title: "BBPS Utility Bill Payments in Rajasthan",
      description:
        "Pay electricity, gas, water, insurance, and broadband bills through our unified BBPS system.",
      icon: <FaUniversity className="fs-2 text-white" />,
    },
    {
      title: "Card Swipe Solutions for Local Retailers",
      description:
        " Accept secure card payments with fast settlements and simplified merchant onboarding.",
      icon: <FaIdCard className="fs-2 text-white" />,
    },
    {
      title: "Utility Bill Payment Software",
      description:
        "Offer customers seamless bill payment via debit cards, credit cards, and UPI – powered by BBPS.",
      icon: <FaMoneyCheckAlt className="fs-2 text-white" />,
    },
  ];

  const features = [
    "Instant Activation with PAN/Aadhaar",
    "Secure & Encrypted Transactions",
    "User-Friendly Dashboard for Merchants",
    "Real-Time Settlement Reports",
    "Works on Any Android Device in Local Stores",
    "Highest Market Commissions in Jaipur",
  ];

  const steps = [
    {
      title: "Register with PAN & Aadhaar",

      icon: <FaUserPlus className="text-theme fs-1 mb-3" />,
    },
    {
      title: "Get Activated in 24 Hours",

      icon: <FaIdCard className="text-theme fs-1 mb-3" />,
    },
    {
      title: "Start Earning via BBPS Today",

      icon: <FaCheckCircle className="text-theme fs-1 mb-3" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "I started with SevenUnique in 2024, and now I handle 300 BBPS transactions daily. The stage is fast, and the support team is excellent.",
      name: "Ravi Kumar",
      role: "Retailer – Delhi",
    },
    {
      quote:
        "BBPS recharge and utility bill payment setup was so simple. My customers love instant service.",
      name: "Neha Verma",
      role: "Shop Owner – Jaipur",
    },
    {
      quote:
        "The Android app is smooth, and the commission is more satisfied with others. SevenUnique is very satisfied.",
      name: "Mohit Meena",
      role: "Retail Merchant  – Bihar",
    },

  ];

  return (
    <>
      <div>
        <div
          className="position-relative w-100 mt-5"
          style={{ position: "relative" }}
        >
          <img
            src="/assets/Home/about-banner.jpg"
            alt="Banner"
            className="img-fluid w-100"
            style={{ objectFit: "cover", height: "100%", minHeight: "500px" }}
          />
<h1
            className="text-white text-right fw-bold"
            style={{
              position: "absolute",
              top: "40%",
              right: "0%",
              transform: "translate(-50%, 0%)",
              fontSize: "6rem",
              zIndex: 2,
            }}
          >
            ABOUT US
          </h1>
        </div>

        <h6 className="fz40 text-center mt-5 fw-bold">ABOUT US</h6>
        <div className="container my-5">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="card-title text-center mb-4 fw-bold text-theme">
                From Vision to Fintech Powerhouse—The SevenUnique Story
              </h2>
              <p className="fs-5">
                Fintech innovators <strong>Mr. Dinesh Kumar</strong> and{" "}
                <strong> Mr. Amit Balotia</strong> founded{" "}
                <strong>SevenUnique Tech Solutions Private Limited</strong>,
                ABDKS Solutions Pvt. Ltd. which was born with a bold mission: to
                simplify and score BBPS-smooth digital financial services across
                India. The beginning that started as a centered initiative has
                developed as a reliable platform, offering Semales Utility Bill
                Payments, Mobile and DTH Recharge BBPS, and Credit Card Swipe
                Solutions.
              </p>
              <p className="fs-5">
                At <strong>SevenUnique Tech Solutions</strong>, we believe in
                innovation, transparency, and influence. Our goal is to lead
                India's digital payment revolution - a BBPS transaction at a
                time.
              </p>
              <p className="fs-5">
                With <strong>innovation</strong>, <strong>integrity</strong>,
                and <strong>impact-driven results</strong> at the core, we aim
                to lead India’s fintech evolution —{" "}
                <em>one transaction at a time</em>.
              </p>
            </div>
          </div>
        </div>

<div className="container">
  <h4 className="text-theme fs-4 text-center fw-bold pt-3">WHO WE ARE</h4>
                    <p className="fs-5 pt-3">
                      We are happy to introduce you about SEVENUNIQUE TECH
                      SOLUTIONS PRIVATE LIMITED. , is service provider company
                      which is providing Recharge and BillPayment - BBPS
                      services to our valuable retailers/merchants
                    </p>
                    <p className="fs-5">
                      SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. has taken a
                      step forward in the field of Financial Inclusion through a
                      partnership with Multiple Banks &amp; Other Parties.
                    </p>
</div>







        {/* <div className="container my-5 bgcolor shadow-lg p-4 rounded">
          <div className="bg-white border rounded-4 p-5">
            <h3 className="fw-bold mb-4 text-center text-theme">
              Why Choose ABDKS?
            </h3>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {listItems.map((item, index) => (
                <div key={index} className="col">
                  <div className="p-3 border-start border-4 border-theme bg-light rounded-3 d-flex align-items-start service-item style-1">
                    <div className=" service-item-inner service-active">
                      <div className="d-flex">
                        <div className="fs-5">{item.icon}</div>
                        <p className="mb-0 ms-2">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <div className="page-content">
          <section className="pb-0">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="shape-img-bg">
                    <img
                      className="mask-img1"
                      src="/assets/ABOUT2.svg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 mt-6 mt-lg-0 ps-lg-10 text-secondary px-3">
                  <div className="theme-title mb-4 ">
                    <h4 className="text-theme mt-3 fs-3 fw-bold">
                      <FaEye className="text-theme fs-2 pb-1 flex items-center me-2" />
                      OUR VISION
                    </h4>
                    <p className="fw-bold fs-4">
                      Creating a digital future that works for everyone
                    </p>
                    <p className="fs-5">
                      At SevenUnique, we imagine a future where every
                      Indian-oriented retailer to remote consumers can access
                      and benefit from BBPS-operated digital services. With
                      mobile recharge, utility bill payment software, and DTH
                      recharge BBPS platforms, such as sharp, safe, and easily
                      used solutions, we are shaping India's digital payment
                      landscape.
                      <br />
                      Our long-term goal: Fantech access was given by 2040 to
                      run India's rise as a global economic leader, fueled by
                      platform scalable platform and nationwide BBPS innovation.
                    </p>
                    <h4 className="text-theme mt-3 fs-3 fw-bold">
                      <FaBullseye className="text-theme fs-2 pb-1 flex items-center me-2" />
                      OUR MISSION
                    </h4>
                    <p className="fw-bold fs-4">
                      Empowering businesses with BBPS-operated Technology
                    </p>
                    <p className="fs-5">
                      Our mission is to provide a strong, reliable, and
                      transparent BBPS recharge platform that empowers Indian
                      retailers, shop owners, and local traders. Whether you are
                      a small business or a distributor in a remote area,
                      SevenUnique offers comfortable digital equipment to help
                      you grow.
                      <br />
                      We are solving real financial constraints by enabling
                      mobile recharge BBPS, utility bill payment, and safe
                      credit transactions, which are bringing cashless
                      facilities for weak communities and carrying forward
                      India's digital changes through scalable fintech
                      infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container my-5">
              <h3 className="text-center fw-bold mb-4 text-theme">
                Our Core Values
              </h3>
              <h4 className="text-center mb-5 fs-5">
                The main principle that powers SevenUnique{" "}
              </h4>
              <div className="row g-4">
                {coreValues.map((value, index) => (
                  <div className="col-md-6 col-lg-4" key={index}>
                    <div className="card h-100 shadow-sm border-0 rounded-4 p-3 service-item style-1">
                      <div className="card-body service-item-inner service-active">
                        <h5 className="card-title fw-semibold text-theme d-flex align-items-center">
                          {value.icon}
                        <span className="fs-4">  {value.title}</span>
                        </h5>
                        <p className="fs-5">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bgcolor p-2">
            <div className="container my-5">
              <h3 className="text-center fw-bold mb-5 text-white">
                Services Overview
              </h3>
              <h4 className="text-center mb-5 fw-bold text-white">
                Our Core Fintech Services in India
              </h4>
              <div className="row g-4">
                {services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="d-flex align-items-start gap-3 border rounded-4 p-4 shadow-sm h-100">
                      <div className="icon-box">{service.icon}</div>
                      <div>
                        <h5 className="mb-2 fw-semibold text-white">
                          {service.title}
                        </h5>
                        <p className="mb-0 text-white fw-bold">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="container my-5">
            <h3 className="text-center fw-bold mb-4 text-theme pt-5">
              Key Features
            </h3>
            <h4 className="text-center mb-5 fs-4">
              Built for Simplicity & Speed – Trusted in India
            </h4>
            <div className="row g-4 border rounded shadow mt-3">
              {features.map((feature, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="feature-card d-flex align-items-start gap-3 p-4 rounded-4 h-100">
                    <div className="rounded-circle d-flex align-items-center fs-1 text-theme">
                      {index + 1}
                    </div>
                    <p className="mb-1 mx-2 feature-text fw-semibold fs-4 text-black">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="howitworks container my-5 bg rounded p-3 pt-5 mt-4">
            <h3 className="text-center text-theme fw-bold">HOW IT WORKS</h3>
            <h4 className="text-center fw-bold fs-4 pt-4">
              Get Started in 3 Simple Steps – Join as a BBPS Retailer Across
              India
            </h4>
            <div className="row g-4 justify-content-center pt-3">
              {steps.map((step, index) => (
                <div className="col-md-4" key={index}>
                  <div className="step-card p-4 text-center rounded-4 h-100 text-theme fs-5">
                    <span className="ms-5"> {step.icon}</span>
                    <div className="d-flex">
                      <span className="step-number align-item fw-bold fs-4 mb-2">
                     {index + 1}
                    </span>
                    <h5 className="fw-bold mb-2">{step.title}</h5>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container  mt-5">
            <h3 className="text-theme mt-5 fw-bold">Reviews section </h3>
            <h4 className="mt-3 fw-bold mb-4 testimonials-heading fs-4">
              What our Jaipur retailers say about SevenUnique Sample Review:
            </h4>
            <div className="row g-4 justify-content-center">
              {testimonials.map((testimonial, index) => (
                <div className="col-md-6" key={index}>
                  <div className="testimonial-card p-4 rounded-4 shadow-sm h-100">
                    <p className="testimonial-quote mb-4 fs-6">
                      "{testimonial.quote}"
                    </p>
                    <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.role}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-section text-center py-5 bgcolor mt-5">
            <div className="container">
              <h4 className="cta-heading mb-3 fw-bold text-white fs-2">
                Start your digital BBPS Journey with SevenUnique
              </h4>
              <p className="cta-subtext mb-4 fs-4 text-white mx-5">
                Become a part of fastest-growing BBPS and utility bill payment
                network. Easily activate fast, and start earning today.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
               <Link to="/registerform" > <button className="btn custombtn-hover border border-light">
  Now join as a BBPS Retailer
</button></Link>
                <Link to="/contactus" >
                <button className="btn custombtn-hover border border-light">
                  A demo schedule as Distributor
                </button>
                </Link>
              </div>
            </div>
          </div>

          <section>
            <div className="container text-secondary">
              <div className="row">
                <div className="col-lg-12 col-md-12 text-left">
                  <div className="service-item style-2">
                    <div className="service-desc abt">
                      <div className="service-title">
                        <h4>WHAT WE DO</h4>
                      </div>
                      <p>
                        SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. is easy to
                        operate but also it makes your easier and faster. We are
                        providing the best services to our customers. Whether
                        it’s IT Services &amp; Banking Services.
                      </p>
                      <div className="service-title">
                        <h4>24X7 SUPPORT</h4>
                      </div>
                      <p>
                        "Our customer service is best in class and commited to
                        serve you 24x7 for your queries and questions."
                      </p>
                      <div className="service-title">
                        <h4>100% QUALITY ASSURANCE</h4>
                      </div>
                      <p>
                        Quality is characterized through joint efforts with our
                        customers. While certain parts of value are steady,
                        others are customer particular.
                      </p>
                      <div className="service-title">
                        <h4>OUR PROMISE</h4>
                      </div>
                      <p>
                        We promise to deliberately join forces with each
                        customer. we are managed the chance to work with
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

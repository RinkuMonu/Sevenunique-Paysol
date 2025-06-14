import React from "react";
import "./AboutUs.css";




import { FaStar, FaHandsHelping, FaShieldAlt, FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";
import {
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaBolt,
  FaUniversity,
  FaWallet,
  FaIdCard
} from "react-icons/fa";
import { FaUserPlus,  FaCheckCircle } from "react-icons/fa";
import {
  FaRupeeSign,
  FaUserCheck,
  FaSyncAlt,
  FaThumbsUp
} from "react-icons/fa";





const AboutUs = () => {
  const listItems = [
  {
    text: "Instant and Secure Transactions",
    icon: <FaBolt className="me-2 text-theme" />
  },
  {
    text: "100% Verified & Trusted Platform",
    icon: <FaShieldAlt className="me-2 text-theme" />
  },
  {
    text: "Best Commission Structures",
    icon: <FaRupeeSign className="me-2 text-theme" />
  },
  {
    text: "Seamless KYC & Onboarding",
    icon: <FaUserCheck className="me-2 text-theme" />
  },
  {
    text: "BBPS, AEPS, DMT & Utility Services",
    icon: <FaSyncAlt className="me-2 text-theme" />
  },
  {
    text: "Trusted by Thousands of Retailers",
    icon: <FaThumbsUp className="me-2 text-theme" />
  }
];

   const coreValues = [
  {
    title: "Excellence",
    description: "We strive to deliver outstanding services and set high standards in everything we do.",
    icon: <FaStar className="me-2 text-theme" />
  },
  {
    title: "Collaboration",
    description: "We believe in working together—internally and with our partners—for mutual growth.",
    icon: <FaHandsHelping className="me-2 text-theme" />
  },
  {
    title: "Integrity",
    description: "Honesty and transparency are at the heart of all our interactions and decisions.",
    icon: <FaShieldAlt className="me-2 text-theme" />
  },
  {
    title: "Innovation",
    description: "We embrace new ideas and technologies to provide smart and scalable solutions.",
    icon: <FaLightbulb className="me-2 text-theme" />
  },
  {
    title: "Customer Centricity",
    description: "Our customers' needs and satisfaction drive our strategy and operations.",
    icon: <FaUsers className="me-2 text-theme" />
  },
  {
    title: "Growth",
    description: "We aim to empower all stakeholders with tools and opportunities for growth.",
    icon: <FaRocket className="me-2 text-theme" />
  }
];


 const services = [
  {
    title: "Mobile & DTH Recharge",
    description: "Instant prepaid recharges for all major operators.",
    icon: <FaMobileAlt className="fs-2 text-white" />
  },
  {
    title: "Utility Bill Payments",
    description: "Electricity, water, gas bill payments made easy.",
    icon: <FaBolt className="fs-2 text-white" />
  },
  {
    title: "Money Transfer (DMT)",
    description: "Secure bank transfers using IMPS/NEFT.",
    icon: <FaUniversity className="fs-2 text-white" />
  },
  {
    title: "AEPS & Cash Withdrawal",
    description: "Aadhaar-based transactions and balance inquiry.",
    icon: <FaIdCard className="fs-2 text-white" />
  },
  {
    title: "BBPS Services",
    description: "Bharat BillPay services for multiple categories.",
    icon: <FaMoneyCheckAlt className="fs-2 text-white" />
  },
  {
    title: "Wallet Management",
    description: "Add, use, and track your wallet funds easily.",
    icon: <FaWallet className="fs-2 text-white" />
  }
];


const features = [
  'Instant Activation with PAN/Aadhaar',
  'Secure & Encrypted Transactions',
  'User-Friendly Dashboard for Jaipur Merchants',
  'Real-Time Settlement Reports',
  'Works on Any Android Device in Local Stores',
  'Highest Market Commissions in Jaipur'
];

const steps = [
  {
    title: "Register",
    description: "Sign up as a retailer with your mobile number and basic details.",
    icon: <FaUserPlus className="text-theme fs-1 mb-3" />
  },
  {
    title: "KYC Verification",
    description: "Submit Aadhaar, PAN, and a live selfie for instant verification.",
    icon: <FaIdCard className="text-theme fs-1 mb-3" />
  },
  {
    title: "Start Earning",
    description: "Access all services and begin earning commissions instantly.",
    icon: <FaCheckCircle className="text-theme fs-1 mb-3" />
  }
];


const testimonials = [
  {
    quote:
      'I started with ABDKS in 2024 and now handle 300+ transactions a day. Amazing support and payouts!',
    name: 'Ravi Kumar',
    role: 'Retailer – Patna'
  },
  {
    quote:
      'BBPS integration was so simple. My customers love the instant bill payments.',
    name: 'Neha Verma',
    role: 'Shop Owner – Jaipur'
  }
];



  return (
    <>
      <div>
       <div className="position-relative w-100">
  <img
    src="/assets/aboutbg2.svg"
    alt="Banner"
    className="img-fluid w-100"
    style={{ objectFit: "cover", height: "100%", minHeight: "500px" }}
  />

  <div
    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center text-white px-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
  >
    <div className="container">
      <h1 className="fw-bold text-white mb-3 fs-3 fs-md-1 about-heading">
        Empowering Jaipur's Retailers with Seamless Digital Payments

      </h1>

      <p className="fs-6 fs-md-5 mb-4">
        Recharge, Pay Bills & Earn Commissions with One Powerful Platform in Jaipur

      </p>

      <div className="d-grid gap-3 d-md-flex justify-content-center">
        <a href="#" className="btn text-white btn-lg px-4 primary-bg fs-6">
          Start Your Digital Business in Jaipur
        </a>
        <a href="#"className="btn btn-light btn-lg text-theme  fs-6">
          Become a Retail Partner
        </a>
      </div>

      <p className="pt-md-5 fs-6 text-light mb-5">
        Fast. Secure. Scalable. Trusted by 1000+ Retailers Across Rajasthan.
      </p>
    </div>
  </div>
</div>
        <h6 className="fz40 text-center mt-5 fw-bold">ABOUT US</h6>
        <div className="container my-5">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="card-title text-center mb-4 fw-bold text-theme">
                From Vision to Fintech Transformation – The ABDKS Story
              </h2>
              <p className="card-text">
                Founded in <strong>2024</strong> by fintech visionaries{" "}
                <strong>Mr. Dinesh Kumar</strong> and{" "}
                <strong>Mr. Amit Balotiya</strong>,
                <strong> ABDKS Solutions Pvt. Ltd.</strong> emerged with a
                mission to simplify and scale digital financial services across
                India. What started as a focused goal in Jaipur has now evolved
                into a growing fintech force making digital payments accessible
                to businesses and individuals alike.
              </p>
              <p className="card-text">
                Backed by the legacy of{" "}
                <strong>SevenUnique Tech Solutions</strong>, ABDKS has expanded
                rapidly across Rajasthan, providing smart solutions like{" "}
                <strong>BBPS</strong>, mobile & DTH recharges, utility bill
                payments, and secure credit card transactions.
              </p>
              <p className="card-text">
                With <strong>innovation</strong>, <strong>integrity</strong>,
                and <strong>impact-driven results</strong> at the core, we aim
                to lead India’s fintech evolution —{" "}
                <em>one transaction at a time</em>.
              </p>
            </div>
          </div>
        </div>

       <div className="container my-5 bgcolor shadow-lg p-4 rounded">
  <div className="bg-white border rounded-4 p-5">
    <h3 className="fw-bold mb-4 text-center text-theme">Why Choose ABDKS?</h3>
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {listItems.map((item, index) => (
        <div key={index} className="col">
          <div className="p-3 border-start border-4 border-theme bg-light rounded-3 d-flex align-items-start service-item style-1">
            <div className=" service-item-inner service-active">
            <div className="fs-5">{item.icon}</div>
            <p className="mb-0 ms-2">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

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
                    <h2>WHO WE ARE</h2>
                    <p>
                      We are happy to introduce you about SEVENUNIQUE TECH
                      SOLUTIONS PRIVATE LIMITED. , is service provider company
                      which is providing Recharge and BillPayment - BBPS
                      services to our valuable retailers/merchants
                    </p>
                    <p>
                      SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. has taken a
                      step forward in the field of Financial Inclusion through a
                      partnership with Multiple Banks &amp; Other Parties.
                    </p>
                    <h2>OUR VISION</h2>
                    <p className="fw-bold">
                      Creating a Digital Future That Works for Everyone
                    </p>
                    <p>
                      At ABDKS, we envision a world where every business and
                      individual can confidently participate in the digital
                      economy. Through secure, fast, and user-friendly
                      solutions, we are shaping India’s digital payment
                      landscape. Our ultimate goal: to contribute to India’s
                      transformation into the world’s leading economy by 2040 —
                      powered by fintech innovation, accessibility, and
                      inclusive growth.
                    </p>
                    <h2>OUR MISSION</h2>
                    <p className="fw-bold">
                      Empowering Businesses Through Technology
                    </p>
                    <p>
                      Our mission is to build trust, foster innovation, and
                      provide robust digital payment infrastructure that helps
                      Indian retailers grow. Whether you are a local merchant in
                      Jaipur or a rural distributor, ABDKS is here to power your
                      digital growth. We’re solving real-world financial
                      challenges with tech-first thinking — bringing digital
                      services to underserved communities, bridging gaps in
                      cashless ecosystems, and building resilient financial
                      tools that serve both economic and social goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

         <section>
  <div className="container my-5">
    <h3 className="text-center fw-bold mb-4 text-theme">Our Core Values</h3>
    <h4 className="text-center mb-5">The Principles That Power ABDKS</h4>
    <div className="row g-4">
      {coreValues.map((value, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <div className="card h-100 shadow-sm border-0 rounded-4 p-3 service-item style-1">
            <div className="card-body service-item-inner service-active">
              <h5 className="card-title fw-semibold text-theme d-flex align-items-center">
                {value.icon}
                {value.title}
              </h5>
              <p className="card-text">{value.description}</p>
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
      Our Core Fintech Services in Jaipur
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
      <h3 className="text-center fw-bold mb-5 section-heading text-white">
        Key Features
      </h3>
      <h4 className="text-center mb-5">Built for Simplicity & Speed – Trusted in Jaipur
</h4>
      <div className="row g-4">
        {features.map((feature, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="feature-card d-flex align-items-start gap-3 p-4 rounded-4 h-100">
              <div className="rounded-circle d-flex align-items-center fs-1 text-theme">
                {index + 1}
              </div>
              <p className="mb-0 feature-text fw-semibold fs-4 text-black">{feature}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


<div className="container my-5 bg rounded p-3">
  <h3 className=" text-center text-theme fw-bold">HOW IT WORKS</h3>
  <p className="text-center fw-bold howit-heading">
    Get Started in 3 Simple Steps – Join as a Jaipur Retailer
  </p>
  <div className="row g-4 justify-content-center">
    {steps.map((step, index) => (
      <div className="col-md-4" key={index}>
        <div className="step-card p-4 text-center rounded-4 h-100 text-theme fs-5">
          {step.icon}
          <div className="step-number fw-bold fs-4 mb-2">Step {index + 1}</div>
          <h5 className="fw-bold mb-2">{step.title}</h5>
          <p className="mb-0">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


    <div className="container  mt-5">
      <h3 className="text-theme mt-5">Testimonials</h3>
      <h4 className="mt-5 fw-bold mb-4 testimonials-heading">
        What Our Jaipur Partners Say
      </h4>
      <div className="row g-4 justify-content-center">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-6" key={index}>
            <div className="testimonial-card p-4 rounded-4 shadow-sm h-100">
              <p className="testimonial-quote mb-4">"{testimonial.quote}"</p>
              <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
              <small className="text-muted">{testimonial.role}</small>
            </div>
          </div>
        ))}
      </div>
    </div>




<div className="cta-section text-center py-5 bgcolor mt-5">
      <div className="container">
        <h4 className="cta-heading mb-3 text-white">
          Start Your Digital Journey in Jaipur with ABDKS
        </h4>
        <p className="cta-subtext mb-4 fw-bold fs-4 text-white">
          Become a part of Jaipur's fastest-growing fintech network.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button className="btn btn-primary-custom">Join Now</button>
          <button className="btn btn-outline-custom">Schedule a Demo in Jaipur</button>
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

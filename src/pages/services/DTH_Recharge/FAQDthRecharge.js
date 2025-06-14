import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  FaTv,
  FaMoneyCheck,
  FaMobileAlt,
  FaRocket,
  FaRupeeSign,
  FaWallet,
} from "react-icons/fa";


  const operators = [
    "Airtel Digital TV",
    "Tata Play (formerly Tata Sky)",
    "Dish TV",
    "d2h (Videocon d2h)",
    "Sun Direct",
  ];
const steps = [
  "Visit the Recharge section on ABDKS platform.",
  "Select DTH from the categories.",
  "Choose your DTH operator.",
  "Enter your 10-digit customer ID.",
  "Enter amount or choose plan.",
  "Pay using UPI, card, or wallet.",
  "Enjoy instant recharge confirmation.",
];
  const benefits = [
    {
      icon: <FaMoneyCheck />,
      title: "No Transaction Fee",
      desc: "Recharge at no additional cost.",
    },
    {
      icon: <FaWallet />,
      title: "Multiple Payment Modes",
      desc: "UPI, cards, wallet, net banking.",
    },
    {
      icon: <FaRocket />,
      title: "Fast & Secure",
      desc: "Real-time, encrypted transactions.",
    },
    {
      icon: <FaTv />,
      title: "All Major Operators",
      desc: "Supports Airtel, Tata Play, Dish TV, & more.",
    },
    {
      icon: <FaMobileAlt />,
      title: "User-Friendly",
      desc: "Step-by-step, mobile-optimized experience.",
    },
    {
      icon: <FaRupeeSign />,
      title: "Cashback Offers",
      desc: "Get seasonal discounts and rewards.",
    },
  ];


const FAQDthRecharge = () => {
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
 
      <section className="py-5 text-center ">
        <div className="container">
          <h1 className="display-5 fw-bold">DTH Recharge – Uninterrupted Entertainment Starts Here</h1>
          <p className="lead fs-5 mt-3">
            Recharge any DTH connection instantly with ABDKS and keep the entertainment going.
          </p>
        </div>
      </section>

      {/* How to Recharge */}
         <section className="py-5 bg-light">
     <div className="row justify-content-center mb-5">
       <h2 className="text-center fw-bold mb-5">How to Recharge DTH with ABDKS</h2>
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
    </section>

      {/* Supported Operators */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Supported DTH Operators</h2>
          <div className="row justify-content-center ">
            {operators.map((op, idx) => (
              <div key={idx} className="col-md-4 mb-3 ">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">{op}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ABDKS */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Why Choose ABDKS?</h2>
          <div className="row g-4">
            {benefits.map((b, i) => (
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

      {/* CTA */}
      <section className="grediant-bg2 text-white py-5 text-center mb-3">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">Start Earning with DTH Recharge</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Offer DTH recharge services in your store and earn commissions on every successful transaction.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Become a Partner</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Recharge Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQDthRecharge;
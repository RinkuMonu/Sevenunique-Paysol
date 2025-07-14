import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaClock,
  FaMobileAlt,
  FaCreditCard,
  FaUsers,
  FaChartLine,
  FaQuestion
} from "react-icons/fa";

const FAQPostpaid = () => {
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

  const supportedOperators = ["Airtel Postpaid", "Jio Postpaid", "Vi (Vodafone Idea) Postpaid", "BSNL Postpaid"];

  const rechargeSteps = [
    "Go to the Postpaid Recharge section on the ABDKS platform",
    "Select your mobile operator",
    "Enter your mobile number",
    "Review the fetched bill details (if supported)",
    "Choose a payment method — UPI, credit/debit card, wallet, or net banking",
    "Complete payment and get instant confirmation"
  ];

  const features = [
    {
      icon: <FaCheckCircle />,
      title: "Instant Bill Fetching",
      desc: "View real-time dues before paying"
    },
    {
      icon: <FaClock />,
      title: "24/7 Availability",
      desc: "Recharge anytime, from anywhere"
    },
    {
      icon: <FaMobileAlt />,
      title: "Multiple Operators",
      desc: "Manage multiple connections easily"
    },
    {
      icon: <FaCreditCard />,
      title: "Secure Transactions",
      desc: "Protected by RBI-authorized payment gateways"
    }
  ];

  const retailerBenefits = [
    {
      icon: <FaChartLine />,
      title: "Increase footfall at your retail outlet"
    },
    {
      icon: <FaUsers />,
      title: "Earn a commission on every bill paid"
    },
    {
      icon: <FaMobileAlt />,
      title: "Access to transaction reports and a user-friendly dashboard"
    },
    {
      icon: <FaCheckCircle />,
      title: "Onboard easily without any technical setup"
    }
  ];

  const faqs = [
    {
      title: "Which operators can I pay postpaid bills for?",
      content: "ABDKS supports Airtel, Jio, Vodafone Idea, BSNL, and other major operators."
    },
    {
      title: "Are there any extra charges for postpaid bill payment?",
      content: "No. We do not charge extra fees for processing postpaid bill payments."
    },
    {
      title: "Can I pay someone else's mobile bill?",
      content: "Yes, just enter the correct mobile number and operator, and complete the payment."
    },
    {
      title: "How will I get payment confirmation?",
      content: "You will receive an instant confirmation via SMS and email, along with a digital receipt."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Why Choose ABDKS for Postpaid Bill Payment?</h1>
          <p className="lead mt-3 fw-bold fs-4">
            Pay your postpaid mobile bills conveniently through ABDKS Solutions Private Ltd.
            
          </p>
          <p className="fs-5">
            We offer fast, secure, and user-friendly postpaid recharge services for all major operators in India.
             Enjoy real-time bill fetching, instant confirmation, and flexible payment options — all on one platform.
          </p>
        </div>
      </section>

      {/* Supported Operators */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Mobile Operators</h2>
          <p className="text-muted mt-3 fs-5">
            You can recharge your postpaid numbers from all leading telecom operators including:
          </p>
          <div className="row justify-content-center">
            {supportedOperators.map((operator, i) => (
              <div key={i} className="col-md-3 mb-3">
                <div className="primary-bg text-white p-3 rounded shadow-sm fs-5 transition-hover">
                  {operator}
                </div>
              </div>
            ))}
            <p className="text-muted mt-3 fs-5">
              Operator availability may vary by region.
            </p>
          </div>
        </div>
      </section>

      {/* How to Pay */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Steps to Recharge Postpaid Number
          </h2>
          <div className="row g-4">
            {rechargeSteps.map((step, i) => (
              <div key={i} className="col-md-6">
                <div className="p-3 shadow-sm rounded-4 bg-light d-flex align-items-start h-100 recharge-step-hover" style={{ borderLeft: "4px solid #b53008" }}>
                  <div className="me-3 fs-4 fw-bold text-theme">{i + 1}</div>
                  <div>{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Top Features
          </h2>
          <div className="row g-4">
            {features.map((f, i) => (
              <div key={i} className="col-md-3">
                <div className="bg-white p-4 rounded-4 shadow-sm h-100 card-hover">
                  <div className="text-theme fs-2 mb-3">{f.icon}</div>
                  <h5>{f.title}</h5>
                  <p className="text-muted">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retailer Benefits */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Retailer Benefits</h2>
          <p className="lead mb-5">
            Want to offer mobile postpaid bill payment services?
          </p>
          <div className="row g-4">
            {retailerBenefits.map((r, i) => (
              <div key={i} className="col-md-3">
                <div className="bg-light p-4 rounded-4 shadow-sm text-center h-100 card-hover">
                  <div className="text-theme fs-2 mb-3">{r.icon}</div>
                  <h5>{r.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
          <div className="row">
            {faqs.map((faq, i) => (
              <div key={i} className="col-md-6 mb-4">
                <div className="p-3 bg-light shadow-sm rounded border h-100 faq-card-hover">
                  <h5 className="fw-bold">
                    <FaQuestion className="me-2 text-theme" />
                    {faq.title}
                  </h5>
                  <p className="text-muted">{faq.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 start-bgg text-white text-center mb-3">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">
            Recharge Your Mobile Today
          </h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Never miss a due date again! Pay your mobile postpaid bills securely and instantly with ABDKS.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="/billpayment" className="btn custombtn-hover">Recharge Now</Link>
            <Link to="/createaccount" className="btn custombtn-hover">Become a Service Partner</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPostpaid;
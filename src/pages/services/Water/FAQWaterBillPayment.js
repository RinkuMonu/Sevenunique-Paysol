import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  FaHeartbeat,
  FaCar,
  FaHome,
  FaUmbrella,
  FaClock,
  FaShieldAlt,
  FaMobileAlt,
  FaMoneyBillWave,
  FaUserTie,
  FaReceipt,
  FaQuestion,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { RiCustomerService2Fill, RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const insuranceTypes = [
  "Jal Board (Delhi)",
  "Rajasthan PHED – Jaipur & other districts",
  "BWSSB – Bengaluru Water Supply",
  "Pune Municipal Corporation",
  "Hyderabad Metropolitan Water Supply",
  "And many more state & municipal water departments",
];

const insuranceSteps = [
  "Visit the Bill Payment section on the app or website",
  "Select Water Bill as your service category",
  "Choose your city or water board.",
  "Enter your consumer number/account ID",
  "View the current bill amount (auto-fetched from the provider)",
  "Proceed to payment using UPI, credit/debit card, wallet, or net banking",
  "Get instant confirmation and a downloadable digital receipt",
];

const insuranceBenefits = [
  {
    icon: <FaClock />,
    title: "Instant Payment Updates",
    desc: "Bill status updated in real-time",
  },
  {
    icon: <FaReceipt />,
    title: "Available 24x7",
    desc: "Pay your bill anytime, even on holidays",
  },
  {
    icon: <FaShieldAlt />,
    title: "Supports All Major Cities",
    desc: "Single platform for national utility payments",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Multiple Payment Methods",
    desc: "Choose from UPI, cards, net banking, wallet",
  },
  {
    icon: <FaUmbrella />,
    title: "Mobile-Friendly Experience",
    desc: "Works smoothly on phones and tablets",
  },
  {
    icon: <MdHealthAndSafety />,
    title: "Safe & Secure",
    desc: "Encrypted and RBI-authorized payment gateways",
  },
];

const insuranceRetailerInfo = [
  {
    icon: <FaUserTie />,
    title: "Offer utility services to more customers",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Earn commission on each water bill transaction",
  },
  {
    icon: <RiCustomerService2Fill />,
    title: "Improve daily customer footfall and repeat visits",
  },
  {
    icon: <FaReceipt />,
    title: "Get access to full transaction reports and instant support",
  },
  {
    icon: <RiMoneyRupeeCircleFill />,
    title: "No setup cost — just register and start earning",
  },
];

const insuranceFAQs = [
  {
    title: "Which water boards are supported on SevenUnique?",
    content:
      " Our platform supports Jal Boards and PHEDs in major cities and states including Delhi, Rajasthan, Karnataka, Telangana, Tamil Nadu, and more.",
  },
  {
    title: "How quickly is the payment confirmed?",
    content:
      "Payment is processed and confirmed instantly. The bill record is updated in real time.",
  },
  {
    title: "Can I pay someone else’s water bill?",
    content:
      " Yes, just enter the correct consumer number for the respective provider.",
  },
  {
    title: "Is there a charge for water bill payment?",
    content:
      "There is no additional service fee charged for standard water bill payments.",
  },
];

const FAQWaterBillPayment = () => {
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

  return (
    <>
      <section className="py-5 text-center">
        <div className="container">
          <p className="lead mt-3">
            We provide a secure and efficient platform to pay your water bills
            online. Whether it is for a residential or commercial connection,
            our digital bill payment solution helps you to avoid long queues,
            missed deadlines, and late penalties.
          </p>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            How to Pay Your Water Bill with our platform
          </h2>
          <div className="row g-4">
            {insuranceSteps.map((step, i) => (
              <div key={i} className="col-md-6">
                <div
                  className="p-3 shadow-sm rounded-4 bg-white h-100 d-flex align-items-start"
                  style={{ borderLeft: "4px solid #b53008" }}
                >
                  <div className="me-3 fs-4 fw-bold text-theme">{i + 1}</div>
                  <div>{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Water Boards</h2>
          <p>
            Our platform supports water bill payments for multiple state and
            city water supply departments, including:
          </p>
          <div className="row justify-content-center">
            {insuranceTypes.map((type, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">
                  {type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Key Benefits</h2>
          <div className="row g-4">
            {insuranceBenefits.map((item, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-light p-4 text-center rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p className="small text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">
            Retailers: Add Water Bill Services to Your Shop
          </h2>
          <div className="row g-4">
            {insuranceRetailerInfo.map((info, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{info.icon}</div>
                  <h5>{info.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Frequently Asked Questions
          </h2>
          {isMobile ? (
            <Accordion>
              {insuranceFAQs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="row">
              {insuranceFAQs.map((faq, i) => (
                <div key={i} className="col-md-6 mb-4">
                  <div className="p-3 bg-white rounded shadow-sm border h-100">
                    <h5 className="fw-bold">
                      <FaQuestion className="me-2 text-theme" />
                      {faq.title}
                    </h5>
                    <p className="text-muted small">{faq.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-5 grediant-bg2 mb-3 text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">
            Pay Water Bills Effortlessly with our platform
          </h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Avoid late fees, save time, and pay securely with Sevenunique — your
            trusted digital utility payment partner.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="#top" className="btn btn-light text-theme fw-bold px-4 py-2">
              Pay Now
            </a>
            <Link to="/registerform" className="btn btn-outline-light fw-bold px-4 py-2">
              Join as a Retail Partner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQWaterBillPayment;

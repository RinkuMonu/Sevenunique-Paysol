import React from "react";
import { Link } from "react-router-dom";
import {
  FaWifi,
  FaMobileAlt,
  FaSearch,
  FaInfoCircle,
  FaUndo,
  FaCheck
} from "react-icons/fa";

const FAQDatacardPrepaid = () => {
  const faqs = [
    {
      icon: <FaWifi />,
      title: "What is a Datacard Prepaid recharge?",
      content: "A Datacard Prepaid recharge is used to top up your internet balance for wireless data cards like JioFi or other prepaid dongle devices. It allows continued access to internet services based on your plan."
    },
    {
      icon: <FaMobileAlt />,
      title: "How do I recharge my Datacard Prepaid online?",
      content: "Simply select your Datacard operator, enter the datacard/mobile number linked with your device, validate it, and proceed to make the payment. The recharge is usually processed instantly."
    },
    {
      icon: <FaSearch />,
      title: "What details are required to recharge a datacard?",
      content: "You typically need to select your operator and enter the mobile number associated with the datacard. Some operators may require additional details such as the device ID or registered number."
    },
    {
      icon: <FaInfoCircle />,
      title: "How do I find my Datacard number?",
      content: "You can find your datacard number by checking your device dashboard, user manual, or the SIM card associated with the datacard. For JioFi and similar devices, the number is usually the mobile number linked to the SIM inside the dongle."
    },
    {
      icon: <FaUndo />,
      title: "What if my recharge fails?",
      content: "If your recharge fails but payment is deducted, the amount is usually refunded automatically within 3–5 business days. You can also contact our support team with your transaction ID for assistance."
    },
    {
      icon: <FaCheck />,
      title: "Which operators are supported?",
      content: "We support major prepaid datacard operators including JioFi, Airtel, Vi, BSNL, and more. Availability may vary based on your region and the operator's online recharge services."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold" >
            Datacard Prepaid Recharge - Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {faqs.map((faq, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 faq-card-hover">
                  <div className="d-flex align-items-center mb-3">
                    <div className="text-theme me-3 fs-3">
                      {faq.icon}
                    </div>
                    <h4 className="fw-bold mb-0">{faq.title}</h4>
                  </div>
                  <p className="text-muted">{faq.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-5 start-bgg  text-white text-center">
        <div className="container">
          <h2 className="fw-bold text-white mb-4">Need more help with your Datacard recharge?</h2>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="#top" className="btn btn-light btn-md">Contact Support</Link>
            <Link to="/recharge" className="btn btn-outline-light btn-md">Recharge Now</Link>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default FAQDatacardPrepaid;
import {
  FaUserCheck,
  FaClock,
  FaMoneyCheckAlt,
  FaQuoteLeft,
} from "react-icons/fa";

export default function StepsComponent() {
  const steps = [
    {
      icon: <FaUserCheck />,
      title: "Register",
      desc: "Complete your KYC using PAN and Aadhaar.",
    },
    {
      icon: <FaClock />,
      title: "Activate",
      desc: "Get verified and onboarded within 24 hours.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Transact & Earn",
      desc: "Start recharging and earning on every transaction in Jaipur.",
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
        " BBPS recharge and utility bill payment setup was so simple. My customers love instant service.",
      name: "Neha Verma",
      role: "Shop Owner – Jaipur",
    },
    {
      quote:
        " The Android app is smooth, and the commission is more satisfied with others. SevenUnique is very satisfied.",
      name: "Mohit Meena",
      role: "Retail Merchant – Bihar",
    },
  ];

  return (
    <>
      {/* Steps Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h4 className="fw-bold display-5 mb-2">Get Started in 3 Simple Steps</h4>
          <p className="text-muted fs-5">
            Join as a <span className="text-theme"> Retailer</span>
          </p>
          <div className="row g-4 mt-4">
            {steps.map((step, idx) => (
              <div key={idx} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                  <div
                    className="d-flex justify-content-center align-items-center bg-secondary bg-opacity-10 text-theme rounded-circle mx-auto mb-3"
                    style={{ width: 60, height: 60, fontSize: "1.5rem" }}
                  >
                    {step.icon}
                  </div>
                  <h5 className="fw-bold fs-5">{step.title}</h5>
                  <p className="text-muted fs-6">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h4 className="fw-bold display-5 mb-5">What Our Partners Say</h4>

          <div className="row g-4">
            {testimonials.map((t, i) => (
              <div key={i} className="col-md-6">
                <div className="bg-light p-4 rounded-4 shadow h-100 position-relative text-start">
                  <FaQuoteLeft
                    className="text-theme position-absolute"
                    style={{ fontSize: "1.25rem", top: 20, left: 20 }}
                  />
                  <p className="mb-4 mt-4 fs-6">{t.quote}</p>
                  <h6 className="fw-semibold mb-0 fs-6">{t.name}</h6>
                  <small className="text-muted">{t.role}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="grediant-bg2 py-3 text-white position-relative mb-3">
        <div className="container py-5 position-relative">
          <div className="text-center mb-5">
            <h4 className="display-4 text-white fw-bold mb-4">
              Start Your Digital Journey with Sevenunique
            </h4>
            <p className="lead fs-5 mb-5 col-lg-8 mx-auto">
              Become a part of fastest-growing fintech network.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-3">
              <button className="btn primary-bg text-white btn-lg px-5 py-3 fw-bold fs-6">
                Join Now
              </button>
              <button className="btn border-light text-theme btn-lg px-5 py-3 fw-bold fs-6">
                Schedule a Demo in Jaipur
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

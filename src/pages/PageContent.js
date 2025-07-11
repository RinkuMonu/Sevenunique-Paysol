/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style/Home.css";
import FeaturesSection from "./FeatureIconsComponent";
import { Link } from "react-router-dom";

function PageContent() {
  return (
    <div className="page-content">
      {/* About Section */}
      <section style={{ background: "#f5f5f5" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="shape-img-bg">
                <img
                  className="mask-img"
                  src="/assets/Home/01.jpg"
                  alt="About"
                />
                <div className="img-bg-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 288 288"
                  >
                    <linearGradient
                      id="imagewave"
                      x1="70.711%"
                      x2="0%"
                      y1="70.711%"
                      y2="0%"
                    >
                      <stop
                        class="stop-color2"
                        offset="0%"
                        stop-opacity="1"
                      ></stop>
                      <stop
                        class="stop-color1"
                        offset="100%"
                        stop-opacity="1"
                      ></stop>
                    </linearGradient>
                    <path fill="url(#imagewave)">
                      <animate
                        repeatCount="indefinite"
                        attributeName="d"
                        dur="5s"
                        values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                                    c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                                    c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                                    c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
                                    M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
                                    c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
                                    c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
                                    C48.9,198.6,57.8,191,51,171.3z;
                                    M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
                                    c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
                                    c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
                                    c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z  "
                      ></animate>
                    </path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-6 mt-lg-0 ps-lg-10">
              <div className="theme-title mb-4">
                <h6 className="theme-title fs-2">About Us</h6>
                <h2 className="fs-3">
                  Fast BBPS recharge solution to provide Your digital business
                  in India
                </h2>
                <p className="fs-5">
                  Sevenunique is a Jaipur-based fintech platform that is
                  changing how retail vendors have distributed the BBPS biller
                  recharge system. We offer a fast DTH recharge BBPS platform,
                  prepaid and postpaid recharge BBPS, and seamless utility bill
                  payment software to empower traders to operate smartly.
                  <br></br>
                  We are dedicated to the creation of BBPS solutions with
                  secure, scalable and intuitive BBPS solutions for digital
                  financial development all over India.
                </p>
              </div>
              <div className="row">
                <p className="fs-4 text-theme fw-bold">Why Choose ABDKS?</p>
                <div className="col-sm-6 mb-3">
                  <ul className="list-unstyled list-icon style-1">
                    <li>
                      <i className="bi bi-check2"></i> Backed by 7+ Years of
                      Industry Experience via Seven Unique
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 mb-3">
                  <ul className="list-unstyled list-icon style-1">
                    <li>
                      <i className="bi bi-check2"></i> Trusted by 1000+
                      Retailers
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 mb-3">
                  <ul className="list-unstyled list-icon style-1">
                    <li>
                      <i className="bi bi-check2"></i> 24x7 Dedicated
                      Multilingual Support
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="list-unstyled list-icon style-1">
                    <li>
                      <i className="bi bi-check2"></i> Transparent Commissions &
                      Easy Onboarding
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step Process Section */}
      <section className="step-process-area position-relative MB50">
        <div className="container">
          <div className="row">
            <div className="col-md-12 MB40">
              <h4 className="fs-3">The Next Generation Payment Method</h4>
              <p className="fs-5">
                Accept Payments easily & globally. The one single integration
                platform that you control in your new life.
              </p>
              <h4 className="fs-3">Growth Is Our Only Obsession</h4>
              <p className="fs-5">
                Sevenunique makes your work easier and faster. Our strongest
                motive is to provide the best possible services to our
                customers.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mt-6 mt-lg-0 mb-4">
              <div className="step-item style-1 text-white">
                <div className="step-icon">
                  <img src="/assets/Home/identity.png" alt="IDENTITY CARD" />
                </div>
                <h4>IDENTITY CARD</h4>
                <span>1st Step</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-6 mt-lg-0 mb-4">
              <div className="step-item style-1 text-white step-bg">
                <div className="step-icon">
                  <img src="/assets/Home/pancard.png" alt="VALID PAN CARD" />
                </div>
                <h4>VALID PAN CARD</h4>
                <span style={{ marginLeft: "27px" }}>2nd Step</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-6 mt-lg-0 mb-4">
              <div className="step-item style-1 text-white">
                <div className="step-icon">
                  <img src="/assets/Home/secure.png" alt="SECURE PAYMENT" />
                </div>
                <h4>SECURE PAYMENT</h4>
                <span>3rd Step</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-6 mt-lg-0 mb-4">
              <div className="step-item style-1 text-white step-bg">
                <div className="step-icon">
                  <img
                    src="/assets/Home/quality.png"
                    alt="100% QUALITY ASSURANCE"
                  />
                </div>
                <h4>100% QUALITY ASSURANCE</h4>
                <span>4th Step</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="dark-bg ht-bg-move"
          style={{
            transformOrigin: "50% 50%",
            transform: "translate3d(0px, 0px, 0px) scale(0.959, 1)",
            borderRadius: "25px",
          }}
        ></div>
      </section>
      <section className="bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1">
              <img
                className="img-fluid"
                src="/assets/Home/SERVICE1.svg"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-12 mt-6 mt-lg-0 ps-lg-10">
              {/* First Featured Item */}
              <div className="featured-item style-3 mb-5 ms-lg-7">
                <div className="featured-icon grediant-bg3">
                  <img
                    src="/assets/Home/moniter.png"
                    width={33}
                    className="img-fluid flaticon flaticon-social-media-marketing"
                  />
                </div>
                <div className="featured-desc">
                  <div className="featured-title">
                    <h4 className="fs-4">
                      Explore Unlimited Business Opportunities
                    </h4>
                  </div>
                  <p className="fs-5">
                    Sevenunique is easy to operate and it also makes your work
                    easier and faster. We will always have a wide variety of
                    options as per your needs. You are always privileged to
                    choose how to go forward. After all, You are Important to
                    us.
                  </p>
                </div>
              </div>

              {/* Second Featured Item */}
              <div className="featured-item style-3 mb-5 me-lg-7">
                <div className="featured-icon grediant-bg2">
                  <img
                    src="/assets/Home/advertisements.png"
                    width={33}
                    className="img-fluid flaticon flaticon-social-media-marketing"
                  />
                </div>
                <div className="featured-desc">
                  <div className="featured-title">
                    <h4 className="fs-4">Supportive Team</h4>
                  </div>
                  <p className="fs-5">
                    Our customer service is best in class and committed to serve
                    you 24x7 for your queries and questions. We're just one call
                    away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <section>
          <div
            className="p-5 h-100 d-flex flex-column justify-content-center align-items-center text-center text-white mx-5 rounded shadow-lg"
            style={{ backgroundColor: "rgb(202, 110, 68)" }}
          >
            <div className="container">
              <h1 className="fw-bold text-white mb-3 fs-2 fs-md-1">
                Empowering Jaipur's Retailers with Seamless Digital Payments
              </h1>

              <p className="fs-5 fs-md-5 mb-4">
                Recharge, Pay Bills & Earn Commissions with One Powerful
                Platform in India
              </p>

              <div className="d-grid gap-3 d-md-flex justify-content-center">
                <Link to="/ContactUs" className="btn custombtn-hover">
                  Start Your Digital Business
                </Link>
                <Link
                  to="/createaccount?role=Retailer"
                  className="btn custombtn-hover"
                >
                  Become a Retail Partner
                </Link>
              </div>

              <p className="mt-4 fs-5 text-light">
                Fast. Secure. Scalable. Trusted by 1000+ Retailers Across
                Rajasthan.
              </p>
            </div>
          </div>
        </section>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-5">
              <div className="theme-title">
                <h6 className="fz40">Our Core Fintech Services in India</h6>
                <p className="fs-5">
                  Services that we offer to our clients at a glance. We have
                  earned 3+ years of expertise in services. You just need to
                  tell us about your requirements, we will strictly take care of
                  that. You are just one click away!! Start your own business
                  with Sevenunique services and provide Recharge and Bill
                  Payment (BBPS) to your customers.
                </p>
              </div>
              <img
                className="img-fluid"
                src="/assets/Home/SERVICE2.svg"
                alt="about"
              />
            </div>
            <div className="col-lg-7 ps-lg-8">
              <div className="row">
                {/* Service 1 */}
                <div className="col-md-6">
                  <div className="service-item style-1">
                    <div className="service-item-inner">
                      <div className="service-icon">
                        <img
                          src="/assets/Home/electricity-bill.svg"
                          width="50"
                          alt="electricity"
                        />
                      </div>
                      <div className="service-desc">
                        <div className="service-title">
                          <h4 className="fs-4">
                            Prepaid & Postpaid Recharge BBPS
                          </h4>
                        </div>
                        <p className="fs-6">
                          Fast mobile recharge solutions for all telecom
                          providers with real-time confirmation.
                        </p>
                        <a className="arrow-btn" href="#">
                          <i className="bi bi-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="col-md-6 mt-6">
                  <div className="service-item style-1 service-active">
                    <div className="service-item-inner">
                      <div className="service-icon">
                        <img
                          src="/assets/Home/water-bill.svg"
                          width="50"
                          alt="pay-utility"
                        />
                      </div>
                      <div className="service-desc">
                        <div className="service-title">
                          <h4 className="fs-4">DTH Recharge BBPS Platform</h4>
                        </div>
                        <p className="fs-6">
                          Recharge all major DTH services instantly using our
                          secure BBPS-powered platform.
                        </p>
                        <a className="arrow-btn" href="#">
                          <i className="bi bi-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="col-md-4 mt-6 mt-md-0">
                  <div className="service-item style-1">
                    <div className="service-item-inner">
                      <div className="service-icon">
                        <img src="/assets/Home/b.svg" width="40" alt="bbps1" />
                      </div>
                      <div className="service-desc">
                        <div className="service-title">
                          <h4 className="fs-4">
                            BBPS Utility Bill Payments in Rajasthan
                          </h4>
                        </div>
                        <p className="fs-6">
                          Pay electricity, gas, water, insurance, and broadband
                          bills through our unified BBPS system.
                        </p>
                        <a className="arrow-btn" href="#">
                          <i className="bi bi-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service 4 */}
                <div className="col-md-4 mt-6">
                  <div className="service-item style-1">
                    <div className="service-item-inner">
                      <div className="service-icon">
                        <img
                          src="/assets/Home/electricity.svg"
                          width="50"
                          alt="recharge"
                        />
                      </div>
                      <div className="service-desc">
                        <div className="service-title">
                          <h4 className="fs-4">
                            Card Swipe Solutions for Local Retailers
                          </h4>
                        </div>
                        <p className="fs-6">
                          Accept secure card payments with fast settlements and
                          simplified merchant onboarding.
                        </p>
                        <a className="arrow-btn" href="#">
                          <i className="bi bi-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service 5 */}
                <div className="col-md-4 mt-6">
                  <div className="service-item style-1">
                    <div className="service-item-inner">
                      <div className="service-icon">
                        <img src="/assets/bill.png" width="50" alt="recharge" />
                      </div>
                      <div className="service-desc">
                        <div className="service-title">
                          <h4 className="fs-4">
                            Utility Bill Payment Software
                          </h4>
                        </div>
                        <p className="fs-6">
                          Offer customers seamless bill payment via debit cards,
                          credit cards, and UPI – powered by BBPS.
                        </p>
                        <a className="arrow-btn" href="#">
                          <i className="bi bi-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturesSection />
    </div>
  );
}

export default PageContent;

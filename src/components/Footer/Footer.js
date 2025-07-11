import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Footer() {
  const [contactInfo, setContactInfo] = useState(null);

  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    fetch(
      "https://cms.sevenunique.com/apis/social-media/get-social-accounts.php?website_id=8",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setSocialLinks(data.data);
        }
      })
      .catch((error) => console.error("Error fetching social links:", error));
  }, []);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await axios.get(
          "https://cms.sevenunique.com/apis/contact/get-contact-details.php?website_id=8",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
            },
          }
        );
        if (res.data.status === "success") {
          setContactInfo(res?.data?.data);
        }
      } catch (error) {
        console.error("Failed to load contact info:", error);
      }
    };

    fetchContactInfo();
  }, []);

  return (
    <footer className="footer">
      {/* Primary Footer Section */}
      <div className="primary-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mt-5 footer-menu ">
              <h5>Our Offerings</h5>
              <div className="d-flex flex-wrap">
                <ul className="list-unstyled">
                  <li className="pb-2">
                    <Link to="/recharge">Recharge & Bill Pay</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/transfer-to-bank">Transfer to Bank</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/redeem-payback-points">
                      Redeem Payback Points
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/wallet-transfer">Wallet Transfer</Link>
                  </li>
                  {/* <li><Link to="/services/datacard">DataCard</Link></li>
                      <li><Link to="/services/landline">Landline</Link></li>
                      <li><Link to="/services/broadband">Broadband</Link></li> */}
                </ul>
                {/* <ul className="col-md-6 list-unstyled">
                      <li><Link to="/services/piped-gas">Piped Gas</Link></li>
                      <li><Link to="/services/insurance">Insurance</Link></li>
                      <li><Link to="/services/water">Water</Link></li>
                      <li><Link to="/services/municipality">Municipality</Link></li>
                      <li><Link to="/services/cable">Cable</Link></li>
                      <li><Link to="/services/google-play">Google Play</Link></li>
                      <li><Link to="/services/emi">EMI</Link></li>
                      <li><Link to="/services/housing">Housing</Link></li>
                      <li><Link to="/services/lpg-booking">LPG Booking</Link></li>
                      <li><Link to="/services/challan">Challan</Link></li>
                    </ul> */}
              </div>
            </div>

            {/* Company Overview */}
            <div className="col-lg-2 footer-menu mt-6">
              <h5>Our Company</h5>
              <div className="d-flex flex-wrap">
                <ul className="col-md-6 list-unstyled">
                  <li className=" pb-2">
                    <Link to="/AboutUs">About Us</Link>
                  </li>
                  <li className=" py-2">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className=" py-2">
                    <Link to="/ContactUs">Contact Us</Link>
                  </li>
                  <li className=" py-2">
                    <Link to="/Services">Services</Link>
                  </li>
                  <li className=" py-2">
                    <Link to="/Sitemap">Sitemap</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="row">
                <div className="col-md-4 footer-menu">
                  <h5>Other Links</h5>
                  <ul className="list-unstyled w-100">
                    <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                    <li><Link to="/term">Terms Conditions</Link></li>
                    <li><Link to="/RefundPolicy">Refund Cancellation</Link></li>
                    <li><Link to="/ContentPolicy">Content Policy</Link></li>
                    <li><Link to="/BBPS">BBPS</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/OurPartner">Our Partners</Link></li>
                  </ul>
                </div> */}

            <div className="col-lg-4 mt-6 ">
              <h5>Contact Us</h5>
              <ul className="media-icon list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <img src="/assets/Home/world.png" width={33} alt="location" />
                  <p className="mb-0 ms-2 text-white">
                    {contactInfo?.address?.split("|")[0].trim()}
                  </p>
                </li>

                <li className="d-flex align-items-center mb-2">
                  <img src="/assets/Home/world.png" width={33} alt="location" />
                  <p className="mb-0 ms-2 text-white">
                    {contactInfo?.address?.split("|")[1].trim()}
                  </p>
                </li>

                <li className="d-flex align-items-center mb-2">
                  <img
                    src="/assets/Home/send-mail.png"
                    width={33}
                    alt="email"
                    className="me-2 mt-1"
                  />
                  <div>
                    {contactInfo?.email?.split(",").map((email, idx) => (
                      <a
                        key={idx}
                        href={`mailto:${email?.trim()}`}
                        className="text-decoration-none fs-6 d-block mb-1 text-white ms-2"
                      >
                        {email?.trim()}
                      </a>
                    ))}
                  </div>
                </li>

                <li className="d-flex align-items-center">
                  <img
                    src="/assets/Home/phone-call.png"
                    width={33}
                    alt="phone"
                  />
                  <a
                    href={`tel:${contactInfo?.phone}`}
                    className="text-decoration-none fs-6 d-block ms-2 text-white"
                  >
                    {contactInfo?.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3  mt-6">
              <h5>Sevenunique</h5>
              <div className="w-100">
                At Sevenunique, we create bold digital experiences—blending
                creative UI/UX design, scalable mobile & web apps, and powerful
                custom software. From gaming and fintech to BBPS and e-commerce,
                our solutions are tailored to drive real engagement.
              </div>
              
            </div>

            {/* Social Media Section */}
          </div>
        </div>
      </div>

      {/* Secondary Footer Section */}
      <div className="secondary-footer mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <p
                className="mb-0 text-white fs-5 text-center"
                style={{ zIndex: "99", borderTop: "2px solid white" }}
              >
               
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-start mt-4 mb-1 ms-5 d-flex justify-content-between flex-wrap">
  {/* Left side: Footer Menu */}
  <div className="footer-menu text-white">
    <div className="mx-2">
      © {new Date().getFullYear()}{" "}
      <strong>Sevenunique Tech Solutions Private Limited.</strong> All rights reserved.
    </div>
    <div className="mt-2">
      <Link to="/privacypolicy" className="text-white mx-2">Privacy Policy</Link>
      <span className="text-white">|</span>
      <Link to="/RefundPolicy" className="text-white mx-2">Cancellation & Refund Policy</Link>
      <span className="text-white">|</span>
      <Link to="/term" className="text-white mx-2">Terms of Use</Link>
      <span className="text-white">|</span>
      <Link to="/contentpolicy" className="text-white mx-2">Content Policy</Link>
      <span className="text-white">|</span>
      <Link to="/BugBounty" className="text-white mx-2">Bug Bounty</Link>
    </div>
  </div>

  {/* Right side: Social Media Links */}
  <div className="footer-social text-white">
    <h5>Connect with us</h5>
    <ul className="list-inline ps-0 ms-0">
      {socialLinks.map((item) => (
        <li key={item.id} className="list-inline-item">
          <a
            href={item?.account_link}
            target="_blank"
            rel="noopener noreferrer"
            dangerouslySetInnerHTML={{ __html: item?.icon_class }}
          />
        </li>
      ))}
    </ul>
  </div>
</div>


      {/* Dark Background */}
      <div className="dark-bg ht-bg-move"></div>
    </footer>
  );
}

export default Footer;

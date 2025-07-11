/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import "./styles/contact.css";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [contactInfo, setContactInfo] = useState(null);
 const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "number") {
    const numericValue = value.replace(/\D/g, ""); 
    setFormData((prev) => ({
      ...prev,
      [name]: numericValue,
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const postData = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.number,
      message: formData.message,
      service: "N/A",
      website_id: 8,
    };

    try {
      await axios.post(
        "https://cms.sevenunique.com/apis/contact-query/set-contact-details.php",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "We have received your message and will get back to you soon.",
      });

      setFormData({
        fullName: "",
        email: "",
        number: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Banner */}
      <section className="page-title pb-0 border-0">
        <div className="position-relative w-100">
          <img
            src="/assets/Home/contact-banner.jpg"
            alt="Banner"
            className="img-fluid w-100"
            style={{ objectFit: "cover", height: "100%", minHeight: "500px" }}
          />
          <h1
            className="text-white text-right fw-bold"
            style={{
              position: "absolute",
              top: "40%",
              left: "30%",
              transform: "translate(-50%, 0%)",
              fontSize: "6rem",
              zIndex: 2,
            }}
          >
            CONTACT US
          </h1>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h3 className="display-5 fw-bold text-theme">
            We are here to help - Anywhere, Anytime
          </h3>
          <p className="lead mt-3">
            Whether you are a retailer who is ready to join our BBPS network, a
            distributor searching for a fintech partnership, or a customer
            support, the SevenUnique team is available 24/7 to assist you with
            fast, reliable service.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <div className="page-content">
        <section className="pb-lg-0 z-index-1 pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ps-lg-10 order-lg-1">
                <div className="theme-title">
                  <h2>Stay in touch</h2>
                  <p>
                    Fill out the form, and our team will soon return to you.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* 1st Row: Name and Phone */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="fullName"
                          className="form-control"
                          placeholder="Name"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="number"
                          className="form-control"
                          placeholder="Mobile Number"
                          required
                          pattern="[0-9]*"
                          inputMode="numeric"
                          value={formData.number}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 2nd Row: Email */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 3rd Row: Message */}
                  <div className="form-group mb-4">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Write Message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="themeht-btn primary-btn mt-4"
                    disabled={loading}
                  >
                    <span>{loading ? "Sending..." : "Submit"}</span>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="col-lg-5 col-md-12 mt-6 mt-lg-0">
                <div className="contact-box">
                  <div className="theme-title">
                    <h2>Contact Details</h2>
                  </div>
                  <ul className="contact-info list-unstyled">
                    <li>
                      <i className="bi bi-globe-americas fs-3"></i>
                      <span className="fs-4">
                        SevenUnique Tech Solutions Private Limited
                      </span>
                      <div className="border border-dark rounded p-3 shadow">
                        <b className="text-theme">
                          <IoLocationSharp /> Head Office - Jaipur
                        </b>
                        <p className="fs-6">
                          {contactInfo?.address?.split("|")[0].trim()}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="border border-dark rounded p-3 shadow">
                        <b className="text-theme">
                          <IoLocationSharp /> Corporate Office - Mumbai
                        </b>
                        <p className="fs-6">
                          {contactInfo?.address?.split("|")[1].trim()}
                        </p>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-envelope fs-3"></i>
                      <div>
                        <span>Customer Support</span>
                        <p className="fw-bold fs-6">Phone</p>
                        <a
                          href={`tel:${contactInfo?.phone}`}
                          className="text-decoration-none fs-6 d-block"
                        >
                          {contactInfo?.phone}
                        </a>
                        <p className="fw-bold fs-6">Email</p>
                        {contactInfo?.email?.split(",").map((email, idx) => (
                          <a
                            key={idx}
                            href={`mailto:${email?.trim()}`}
                            className="text-decoration-none fs-6 d-block"
                          >
                            {email?.trim()}
                          </a>
                        ))}
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-clock fs-3"></i>
                      <div>
                        <span>Professional Hours</span>
                        24/7 assistance for all BBPS partners
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="row my-4">
              <div className="col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3561.264701407029!2d75.869785!3d26.799699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ3JzU4LjkiTiA3NcKwNTInMTEuMiJF!5e0!3m2!1sen!2sin!4v1724749044503!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Partner CTA */}
      <div className="text-center mb-3 pt-4 border-top">
        <h5 className="text-theme fw-bold">Partner with us</h5>
        <h5 className="fw-bold mb-3">
          At SevenUnique BBPS willing to become retailers, distributors, or
          service partners? Let's increase India's digital payment future
          simultaneously.
        </h5>
        <Link
          to="/registerform"
          className="btn text-theme fw-semibold rounded-pill px-4"
        >
          Be a Partner →
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;

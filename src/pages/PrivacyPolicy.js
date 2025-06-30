import React from "react";
import "././styles/privacypolicy.css";

export default function PrivacyPolicy() {
  return (
    <>
    <section className="page-title">
        <div className="position-relative w-100">
          <img
            src="/assets/Home/privacy-banner.jpg"
            alt="TERMS"
            className="img-fluid w-100"
            style={{ objectFit: "cover", height: "100%", minHeight: "500px" }}
          />
          <div className="banner-overlay"></div>
          <h1
            className="text-white text-right fw-bold banner-title"
            style={{
              position: "absolute",
              top: "40%",
              left: "24%",
              transform: "translate(-50%, 0%)",
              fontSize: "5rem",
              zIndex: 2,
            }}
          >
            PRIVACY POLICY
          </h1>
        </div>

        <div className="container privacy-container">
          <div className="row my-5">
            <div className="col-lg-12 col-md-12">
              {/* Introduction Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">1</span>
                    Introduction and Scope
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p>
                    Sevenunique Tech Solution Private Limited ("Sevenunique", "we", "our", or "us") is committed to
                    protecting the privacy and security of the personal data of individuals who use our services. We
                    operate a digital utility payment platform compliant with RBI's Bharat Bill Payment System (BBPS)
                    framework, offering services such as mobile and DTH recharges, electricity bill payments, gas,
                    water, broadband, and other related utility payments.
                  </p>
                  <div className="highlight-box">
                    <p>
                      This Privacy Policy outlines how we collect, process, store, share, and protect your personal data
                      in compliance with the following Indian regulations:
                    </p>
                    <ul className="regulation-list">
                      <li>
                        The Information Technology Act, 2000, and the Information Technology (Reasonable Security
                        Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("SPDI Rules")
                      </li>
                      <li>The Digital Personal Data Protection Act, 2023 ("DPDP Act")</li>
                      <li>Reserve Bank of India (RBI) BBPS Operating Guidelines</li>
                      <li>NPCI circulars and RBI-mandated IT frameworks</li>
                    </ul>
                  </div>
                  <p className="policy-agreement">
                    This Policy applies to all individuals using our website, mobile application, or associated
                    services. By using our services, you agree to the practices described in this Privacy Policy.
                  </p>
                </div>
              </div>

              {/* Definitions Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">2</span>
                    Definitions and Interpretations
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p>To ensure clarity, the following terms are used with the meanings defined below:</p>
                  <div className="definitions-grid">
                    <div className="definition-item">
                      <strong>Personal Data:</strong> Any data about an individual who is identifiable by or in relation
                      to such data.
                    </div>
                    <div className="definition-item">
                      <strong>Sensitive Personal Data or Information (SPDI):</strong> Includes financial data,
                      passwords, biometric information, etc.
                    </div>
                    <div className="definition-item">
                      <strong>Processing:</strong> Any operation performed on personal data, including collection,
                      storage, use, disclosure, or deletion.
                    </div>
                    <div className="definition-item">
                      <strong>Data Principal:</strong> The individual whose data is collected.
                    </div>
                    <div className="definition-item">
                      <strong>Data Fiduciary:</strong> Sevenunique Tech Solution Private Limited.
                    </div>
                    <div className="definition-item">
                      <strong>Third Parties:</strong> Regulated external entities contractually bound to handle data
                      securely.
                    </div>
                    <div className="definition-item">
                      <strong>Consent:</strong> Free, specific, informed, and unambiguous agreement for data processing.
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Collection Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">3</span>
                    What Data We Collect
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">a) Personal Data</h6>
                        <ul className="data-list">
                          <li>Full name</li>
                          <li>Date of birth</li>
                          <li>Mobile number</li>
                          <li>Email address</li>
                          <li>Residential or billing address</li>
                          <li>Government-issued identification numbers</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">b) Financial and Transactional Data</h6>
                        <ul className="data-list">
                          <li>Bank account number (masked)</li>
                          <li>UPI ID</li>
                          <li>Payment transaction details</li>
                          <li>Bill details</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">c) Technical and Device Information</h6>
                        <ul className="data-list">
                          <li>IP address</li>
                          <li>Browser type and version</li>
                          <li>Operating system and device specs</li>
                          <li>Device identifiers and location</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">d) Cookies and Analytical Data</h6>
                        <ul className="data-list">
                          <li>Session cookies</li>
                          <li>Preference cookies</li>
                          <li>Site analytics</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Collection Methods Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">4</span>
                    How We Collect Data
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="collection-methods">
                    <div className="method-card">
                      <h6 className="method-title">a) Directly from You</h6>
                      <ul>
                        <li>During registration or payments</li>
                        <li>Customer support or forms</li>
                      </ul>
                    </div>
                    <div className="method-card">
                      <h6 className="method-title">b) Automatically</h6>
                      <ul>
                        <li>Cookies and session logs</li>
                      </ul>
                    </div>
                    <div className="method-card">
                      <h6 className="method-title">c) From Third Parties</h6>
                      <ul>
                        <li>NPCI/BBPS APIs</li>
                        <li>UIDAI/PAN APIs</li>
                        <li>Banks/payment gateways</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Purpose of Processing Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">5</span>
                    Purpose of Processing
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="purpose-grid">
                    <div className="purpose-item">
                      <h6>General Purposes</h6>
                      <ul>
                        <li>Registration, verification, support</li>
                        <li>Fraud detection</li>
                      </ul>
                    </div>
                    <div className="purpose-item">
                      <h6>Payment and Transaction Processing</h6>
                      <ul>
                        <li>Execute payments</li>
                        <li>Send confirmations</li>
                      </ul>
                    </div>
                    <div className="purpose-item">
                      <h6>Compliance and Legal Obligations</h6>
                      <ul>
                        <li>Reporting to RBI, NPCI</li>
                        <li>Fraud audits</li>
                      </ul>
                    </div>
                    <div className="purpose-item">
                      <h6>Platform and Service Improvement</h6>
                      <ul>
                        <li>Analytics, performance, surveys</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legal Basis Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">6</span>
                    Legal Basis of Processing
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p>We rely on:</p>
                  <div className="legal-basis-list">
                    <span className="basis-item">Consent</span>
                    <span className="basis-item">Contractual necessity</span>
                    <span className="basis-item">Legal obligation</span>
                    <span className="basis-item">Legitimate interest</span>
                  </div>
                </div>
              </div>

              {/* Security Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">7</span>
                    Data Storage, Security, and Encryption Practices
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="security-features">
                    <div className="security-item">
                      <i className="fas fa-shield-alt security-icon"></i>
                      <span>Stored in India only</span>
                    </div>
                    <div className="security-item">
                      <i className="fas fa-lock security-icon"></i>
                      <span>AES-256 & TLS/SSL encryption</span>
                    </div>
                    <div className="security-item">
                      <i className="fas fa-user-shield security-icon"></i>
                      <span>Access control policies</span>
                    </div>
                    <div className="security-item">
                      <i className="fas fa-certificate security-icon"></i>
                      <span>Compliant with ISO 27001 and PCI-DSS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Sharing Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">8</span>
                    How and Why We Share Data
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="sharing-categories">
                    <div className="sharing-item">
                      <h6>a) With Regulators</h6>
                      <ul>
                        <li>RBI, NPCI</li>
                      </ul>
                    </div>
                    <div className="sharing-item">
                      <h6>b) With Financial and Technical Partners</h6>
                      <ul>
                        <li>Banks, Payment Gateways, APIs</li>
                      </ul>
                    </div>
                    <div className="sharing-item">
                      <h6>c) With Service Providers</h6>
                      <ul>
                        <li>Cloud providers, analytics, SMS/email tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Rights Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">9</span>
                    User Rights
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="rights-grid">
                    <div className="right-item">Access</div>
                    <div className="right-item">Correction</div>
                    <div className="right-item">Deletion</div>
                    <div className="right-item">Withdraw Consent</div>
                    <div className="right-item">Grievance Redressal</div>
                    <div className="right-item">Nominate</div>
                  </div>
                  <div className="contact-info-box">
                    <p>
                      <strong>Email:</strong> privacy@7uniques.in
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookies Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">10</span>
                    Cookies, Trackers, and Analytics Tools
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="cookie-types">
                    <div className="cookie-item">Essential Functionality</div>
                    <div className="cookie-item">Performance Monitoring</div>
                    <div className="cookie-item">Marketing (with consent)</div>
                  </div>
                </div>
              </div>

              {/* Grievance Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">11</span>
                    Grievance Redressal Mechanism
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="grievance-contact">
                    <div className="contact-card">
                      <h6>
                        <strong>Mr. Dinesh Kumar</strong>
                      </h6>
                      <p>
                        <strong>Email:</strong> grievance@7unique.in
                      </p>
                      <p>
                        <strong>Location:</strong> Jaipur, Rajasthan
                      </p>
                      <p>
                        <strong>Timing:</strong> Mon–Fri, 10 AM – 6 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Children's Data Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">12</span>
                    Children's Data and Age Limits
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p>Not intended for users below 18 years. Data deleted if collected unknowingly.</p>
                </div>
              </div>

              {/* Policy Changes Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">13</span>
                    Policy Changes and Notification Procedure
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p>We may revise this policy with notices via email, app, or website.</p>
                </div>
              </div>

              {/* Retention Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">14</span>
                    Retention and Deletion Policy
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="retention-list">
                    <div className="retention-item">
                      <span className="retention-period">Up to 8 years</span>
                      <span className="retention-type">Transaction records</span>
                    </div>
                    <div className="retention-item">
                      <span className="retention-period">Data deleted/anonymized</span>
                      <span className="retention-type">Inactive accounts</span>
                    </div>
                    <div className="retention-item">
                      <span className="retention-period">12 months</span>
                      <span className="retention-type">Cookies</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* DPDP Act Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">15</span>
                    Data Protection Commitments Under DPDP Act, 2023
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="commitment-list">
                    <div className="commitment-item">Consent management system</div>
                    <div className="commitment-item">User rights dashboard (planned)</div>
                    <div className="commitment-item">DPO to be appointed</div>
                  </div>
                </div>
              </div>

              {/* Jurisdiction Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">16</span>
                    Jurisdiction and Governing Law
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p>Courts in Jaipur, Rajasthan have jurisdiction.</p>
                </div>
              </div>

              {/* Contact Details Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">17</span>
                    Contact Details
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="company-contact">
                    <p>
                      <strong>Sevenunique Tech Solution Private Limited</strong>
                    </p>
                    <p>Jaipur, Rajasthan – 302017</p>
                    <p>
                      <strong>Email:</strong> support@7unique.in
                    </p>
                    <p>
                      <strong>Website:</strong> https://www.sevenuniques.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Disclaimers Card */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">18</span>
                    Disclaimers and User Responsibility
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="disclaimer-list">
                    <div className="disclaimer-item">Keep credentials secure</div>
                    <div className="disclaimer-item">No liability for user negligence</div>
                    <div className="disclaimer-item">Absolute data security not guaranteed</div>
                  </div>
                  <div className="terms-link-box">
                    <p>
                      For more information, refer to our{" "}
                      <a href="https://www.sevenuniques.com/terms" target="_blank" rel="noreferrer">
                        Terms of Service
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

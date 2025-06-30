import React from "react";
import "././styles/refund.css";

const ContentPolicy = () => {
  return (
    <section className="page-title">
       <div className="position-relative w-100 ">
          <img
            src="/assets/Home/content-banner.jpg"
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
              fontSize: "4rem",
              zIndex: 2,
            }}
          >
            CONTENT POLICY
          </h1>
        </div>

     <div className="container privacy-container">
          <div className="row my-5">
            <div className="col-lg-12 col-md-12">
              {/* Introduction Section */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">1.1</span>
                    Introduction
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p>
                    This Content Policy ("Policy") governs the nature, usage, and moderation of content transmitted,
                    uploaded, submitted, or integrated through the platforms and services operated by ABDKS Solutions
                    Private Limited ("ABDKS," "we," "our," or "us").
                  </p>
                  <div className="highlight-box">
                    <p>
                      ABDKS is a licensed digital service provider offering fintech solutions such as BBPS, AEPS, PAN
                      verification, mobile recharge, utility bill payment, EMI collection, and API-based integrations.
                      This Policy is developed to ensure that all content circulated through ABDKS systems adheres to
                      applicable law, respects platform integrity, and aligns with the digital and regulatory standards
                      defined by authorities including RBI, UIDAI, TRAI, and under the IT Act 2000.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scope Section */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">1.2</span>
                    Scope
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p>This Policy applies to all:</p>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">👥 Users</h6>
                        <p>Registered users, including individuals and business entities</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">🏪 Partners</h6>
                        <p>Retailers, distributors, agents, and channel partners</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">🔗 Integrators</h6>
                        <p>White-label partners and API integrators</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">💻 Platforms</h6>
                        <p>Web portals, mobile apps, APIs, admin dashboards, and payment modules</p>
                      </div>
                    </div>
                  </div>
                  <div className="highlight-box">
                    <p>
                      All participants are bound by this Policy when interacting with or submitting content to any
                      ABDKS-controlled interface or system.
                    </p>
                  </div>
                </div>
              </div>

              {/* Definitions Section */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">1.3</span>
                    Definitions
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="definitions-grid">
                    <div className="definition-item">
                      <strong>Content</strong>
                      <p>
                        Any data, information, message, text, form input, file, comment, document, API field, image, or
                        metadata submitted, processed, transmitted, or hosted via ABDKS platforms.
                      </p>
                    </div>
                    <div className="definition-item">
                      <strong>User Content</strong>
                      <p>
                        Any content submitted directly by end-users, retailers, partners, or agents through portals,
                        apps, APIs, or upload systems.
                      </p>
                    </div>
                    <div className="definition-item">
                      <strong>Prohibited Content</strong>
                      <p>
                        Content that violates law, ABDKS service terms, or applicable regulatory norms, including but
                        not limited to misinformation, abuse, fraud, hate speech, or privacy breaches.
                      </p>
                    </div>
                    <div className="definition-item">
                      <strong>Distributors</strong>
                      <p>
                        Entities managing a network of retailers or agents transacting on behalf of ABDKS under a
                        commercial agreement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Acceptable Content Guidelines */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">1.4</span>
                    Acceptable Content Guidelines
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p>All submitted content must be:</p>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">✓ Factual and Accurate</h6>
                        <p>Information must be current, true, and verifiable.</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">✓ Service-Relevant</h6>
                        <p>
                          Content must relate strictly to BBPS payments, AEPS transactions, KYC processes, or other
                          approved digital services.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">✓ Lawful and Non-abusive</h6>
                        <p>
                          Submissions must comply with Indian laws, not promote violence, defamation, or discrimination.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">✓ Compliant with Format Standards</h6>
                        <p>
                          API payloads, uploaded documents, and form entries must align with ABDKS technical protocols
                          and KYC norms.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="highlight-box">
                    <h6>Examples of Acceptable Content</h6>
                    <div className="purpose-grid">
                      <div className="purpose-item">
                        <span>📄</span>
                        <p>PAN card number and name in correct KYC request format</p>
                      </div>
                      <div className="purpose-item">
                        <span>💳</span>
                        <p>Recharge amount and mobile number in BBPS or UPI APIs</p>
                      </div>
                      <div className="purpose-item">
                        <span>🆔</span>
                        <p>Uploaded image of Aadhaar card with masked number (if required by flow)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prohibited Content */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">1.5</span>
                    Prohibited Content
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="rights-grid">
                    <div className="right-item">❌ Financial misinformation or unauthorized billing content</div>
                    <div className="right-item">❌ False KYC details or manipulated documents (e.g., PAN, Aadhaar)</div>
                    <div className="right-item">❌ Promotion of illegal, unlicensed, or non-regulated services</div>
                    <div className="right-item">❌ Abuse, hate speech, religious or caste-based comments</div>
                    <div className="right-item">❌ Sharing of confidential user data</div>
                    <div className="right-item">
                      ❌ Malware, executable code, or any script intended to bypass system controls
                    </div>
                    <div className="right-item">
                      ❌ Mass spam or auto-generated API submissions for fraudulent intent
                    </div>
                    <div className="right-item">
                      ❌ Content that violates confidentiality or displays sensitive account information
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Submission Responsibilities */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">1.6</span>
                    Content Submission Responsibilities
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="purpose-grid">
                    <div className="purpose-item">
                      <span>📋</span>
                      <p>Ensuring that submitted content is accurate, traceable, and verifiable</p>
                    </div>
                    <div className="purpose-item">
                      <span>📄</span>
                      <p>Uploading only original, unaltered documents for KYC/verification</p>
                    </div>
                    <div className="purpose-item">
                      <span>🔗</span>
                      <p>Ensuring API submissions contain real data consistent with user or transaction activity</p>
                    </div>
                    <div className="purpose-item">
                      <span>⚖️</span>
                      <p>Avoiding uploads that infringe on copyright, trademark, or IP rights</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Moderation and Monitoring */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">1.7</span>
                    Moderation and Monitoring
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p>ABDKS actively monitors content using:</p>
                  <div className="collection-methods">
                    <div className="method-card">
                      <h6 className="method-title">🤖 AI Detection</h6>
                      <p>Automated AI-based fraud detection systems</p>
                    </div>
                    <div className="method-card">
                      <h6 className="method-title">👨‍💼 Manual Review</h6>
                      <p>Manual moderation by compliance officers</p>
                    </div>
                    <div className="method-card">
                      <h6 className="method-title">🚩 Alert System</h6>
                      <p>Flagging systems for alerts</p>
                    </div>
                  </div>
                  <div className="highlight-box">
                    <p>
                      We reserve the right to remove, mask, or quarantine any submitted content, review API logs for
                      compliance, and block abusive users.
                    </p>
                  </div>
                </div>
              </div>

              {/* Use of Submitted Content */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">1.8</span>
                    Use of Submitted Content
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="highlight-box">
                    <p>
                      By submitting or uploading any content, users and partners grant ABDKS a limited, non-exclusive,
                      royalty-free license to use, store, and process such content solely for service delivery.
                    </p>
                  </div>
                  <h6>Content may be shared only:</h6>
                  <div className="legal-basis-list">
                    <span className="basis-item">⚖️ As required by law</span>
                    <span className="basis-item">💰 For transaction settlement</span>
                    <span className="basis-item">🏛️ With partner banks or regulators</span>
                  </div>
                </div>
              </div>

              {/* Legal & Regulatory Compliance */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">1.9</span>
                    Legal & Regulatory Compliance
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p>All content must comply with:</p>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">📜 IT Act 2000</h6>
                        <p>Information Technology Act, 2000</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">🏦 RBI Guidelines</h6>
                        <p>RBI Directions on Payment Security</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">🆔 UIDAI Norms</h6>
                        <p>UIDAI norms on Aadhaar-KYC</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">📡 TRAI & DoT</h6>
                        <p>TRAI and DoT guidelines</p>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="data-category-card">
                        <h6 className="data-category-title">🛡️ Consumer Protection</h6>
                        <p>Consumer Protection Act, 2019</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enforcement Actions */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">1.10</span>
                    Enforcement Actions
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="retention-list">
                    <div className="retention-item">
                      <span className="retention-period">1</span>
                      <span className="retention-type ps-2">Warnings - Written or system alerts</span>
                    </div>
                    <div className="retention-item">
                      <span className="retention-period">2</span>
                      <span className="retention-type ps-2">Suspension - Suspension of access</span>
                    </div>
                    <div className="retention-item">
                      <span className="retention-period">3</span>
                      <span className="retention-type ps-2">Termination - Permanent termination</span>
                    </div>
                    <div className="retention-item">
                      <span className="retention-period">4</span>
                      <span className="retention-type ps-2">Financial Action - Withholding of settlements</span>
                    </div>
                    <div className="retention-item">
                      <span className="retention-period">5</span>
                      <span className="retention-type ps-2">Legal Action - Reporting to law enforcement or regulators</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grievance Redressal */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">1.11</span>
                    Grievance Redressal
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="grievance-contact">
                    <div className="contact-card">
                      <h6>
                        <strong>Mr. Dinesh Kumar</strong>
                      </h6>
                      <p>Grievance Officer – ABDKS Solutions Pvt. Ltd.</p>
                      <p>
                        <strong>Email:</strong> grievance@abdks.in
                      </p>
                      <p>
                        <strong>Phone:</strong> +91-XXXXXXXXXX
                      </p>
                      <p>
                        <strong>Response Time:</strong> Within 10 working days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Policy Updates */}
              <div className="privacy-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">1.12</span>
                    Policy Updates
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="purpose-grid">
                    <div className="purpose-item">
                      <span>📅</span>
                      <div>
                        <h6>Review Schedule</h6>
                        <p>This policy is reviewed annually</p>
                      </div>
                    </div>
                    <div className="purpose-item">
                      <span>📧</span>
                      <div>
                        <h6>Notification</h6>
                        <p>Changes will be notified via email or system alerts with 7-day notice</p>
                      </div>
                    </div>
                    <div className="purpose-item">
                      <span>✅</span>
                      <div>
                        <h6>Acceptance</h6>
                        <p>Continued use implies acceptance of updates</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="privacy-card mb-4">
                <div className="card-body-custom">
                  <div className="company-contact">
                    <p>
                      <strong>ABDKS Solutions Private Limited</strong>
                    </p>
                    <p>
                      <strong>Website:</strong> www.abdks.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
};

export default ContentPolicy;

import React from "react";

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

      <div className="container text-secondary">
        <div className="row my-5">
          <div className="col-lg-12 col-md-12 text-left">
            <div className="service-item style-2">
              <div className="service-desc abt">
                <div className="service-title">
                  <h4>1.1 Introduction</h4>
                </div>
                <p>
                  This Content Policy (“Policy”) governs the nature, usage, and moderation of content transmitted, uploaded,
                  submitted, or integrated through the platforms and services operated by ABDKS Solutions Private Limited
                  (“ABDKS,” “we,” “our,” or “us”).
                </p>
                <p>
                  ABDKS is a licensed digital service provider offering fintech solutions such as BBPS, AEPS, PAN verification,
                  mobile recharge, utility bill payment, EMI collection, and API-based integrations. This Policy is developed
                  to ensure that all content circulated through ABDKS systems adheres to applicable law, respects platform
                  integrity, and aligns with the digital and regulatory standards defined by authorities including RBI, UIDAI,
                  TRAI, and under the IT Act 2000.
                </p>

                <div className="service-title">
                  <h4>1.2 Scope</h4>
                </div>
                <p>This Policy applies to all:</p>
                <ul>
                  <li>Registered users, including individuals and business entities</li>
                  <li>Retailers, distributors, agents, and channel partners</li>
                  <li>White-label partners and API integrators</li>
                  <li>
                    Platform interfaces including web portals, mobile apps, APIs, admin dashboards, and payment modules
                  </li>
                </ul>

                <p>
                  All participants are bound by this Policy when interacting with or submitting content to any ABDKS-controlled
                  interface or system.
                </p>

                <div className="service-title">
                  <h4>1.3 Definitions</h4>
                </div>
                <ul>
                  <li>
                    <strong>Content:</strong> Any data, information, message, text, form input, file, comment, document, API field,
                    image, or metadata submitted, processed, transmitted, or hosted via ABDKS platforms.
                  </li>
                  <li>
                    <strong>User Content:</strong> Any content submitted directly by end-users, retailers, partners, or agents through
                    portals, apps, APIs, or upload systems.
                  </li>
                  <li>
                    <strong>Prohibited Content:</strong> Content that violates law, ABDKS service terms, or applicable regulatory norms,
                    including but not limited to misinformation, abuse, fraud, hate speech, or privacy breaches.
                  </li>
                  <li>
                    <strong>Distributors:</strong> Entities managing a network of retailers or agents transacting on behalf of ABDKS under a
                    commercial agreement.
                  </li>
                </ul>

                <div className="service-title">
                  <h4>1.4 Acceptable Content Guidelines</h4>
                </div>
                <p>All submitted content must be:</p>
                <ul>
                  <li><strong>Factual and Accurate:</strong> Information must be current, true, and verifiable.</li>
                  <li><strong>Service-Relevant:</strong> Content must relate strictly to BBPS payments, AEPS transactions, KYC processes, or other approved digital services.</li>
                  <li><strong>Lawful and Non-abusive:</strong> Submissions must comply with Indian laws, not promote violence, defamation, or discrimination.</li>
                  <li><strong>Compliant with Format Standards:</strong> API payloads, uploaded documents, and form entries must align with ABDKS technical protocols and KYC norms.</li>
                </ul>

                <p><strong>Examples of Acceptable Content</strong></p>
                <ul>
                  <li>PAN card number and name in correct KYC request format</li>
                  <li>Recharge amount and mobile number in BBPS or UPI APIs</li>
                  <li>Uploaded image of Aadhaar card with masked number (if required by flow)</li>
                </ul>

                <div className="service-title">
                  <h4>1.5 Prohibited Content</h4>
                </div>
                <ul>
                  <li>Financial misinformation or unauthorized billing content</li>
                  <li>False KYC details or manipulated documents (e.g., PAN, Aadhaar)</li>
                  <li>Promotion of illegal, unlicensed, or non-regulated services</li>
                  <li>Abuse, hate speech, religious or caste-based comments</li>
                  <li>Sharing of confidential user data</li>
                  <li>Malware, executable code, or any script intended to bypass system controls</li>
                  <li>Mass spam or auto-generated API submissions for fraudulent intent</li>
                  <li>Content that violates confidentiality or displays sensitive account information</li>
                </ul>

                <div className="service-title">
                  <h4>1.6 Content Submission Responsibilities</h4>
                </div>
                <ul>
                  <li>Ensuring that submitted content is accurate, traceable, and verifiable</li>
                  <li>Uploading only original, unaltered documents for KYC/verification</li>
                  <li>Ensuring API submissions contain real data consistent with user or transaction activity</li>
                  <li>Avoiding uploads that infringe on copyright, trademark, or IP rights</li>
                </ul>

                <div className="service-title">
                  <h4>1.7 Moderation and Monitoring</h4>
                </div>
                <p>ABDKS actively monitors content using:</p>
                <ul>
                  <li>Automated AI-based fraud detection systems</li>
                  <li>Manual moderation by compliance officers</li>
                  <li>Flagging systems for alerts</li>
                </ul>
                <p>We reserve the right to remove, mask, or quarantine any submitted content, review API logs for compliance, and block abusive users.</p>

                <div className="service-title">
                  <h4>1.8 Use of Submitted Content</h4>
                </div>
                <p>By submitting or uploading any content, users and partners grant ABDKS a limited, non-exclusive, royalty-free license to use, store, and process such content solely for service delivery.</p>
                <p>Content may be shared only:</p>
                <ul>
                  <li>As required by law</li>
                  <li>For transaction settlement</li>
                  <li>With partner banks or regulators</li>
                </ul>

                <div className="service-title">
                  <h4>1.9 Legal & Regulatory Compliance</h4>
                </div>
                <p>All content must comply with:</p>
                <ul>
                  <li>Information Technology Act, 2000</li>
                  <li>RBI Directions on Payment Security</li>
                  <li>UIDAI norms on Aadhaar-KYC</li>
                  <li>TRAI and DoT guidelines</li>
                  <li>Consumer Protection Act, 2019</li>
                </ul>

                <div className="service-title">
                  <h4>1.10 Enforcement Actions</h4>
                </div>
                <ul>
                  <li>Warnings (written or system alerts)</li>
                  <li>Suspension of access</li>
                  <li>Permanent termination</li>
                  <li>Withholding of settlements</li>
                  <li>Reporting to law enforcement or regulators</li>
                </ul>

                <div className="service-title">
                  <h4>1.11 Grievance Redressal</h4>
                </div>
                <p>Grievances can be addressed to:</p>
                <p>
                  <strong>Mr. Dinesh Kumar</strong><br />
                  Grievance Officer – ABDKS Solutions Pvt. Ltd.<br />
                  Email: grievance@abdks.in<br />
                  Phone: +91-XXXXXXXXXX<br />
                  Response Time: Within 10 working days
                </p>

                <div className="service-title">
                  <h4>1.12 Policy Updates</h4>
                </div>
                <p>This policy is reviewed annually. Changes will be notified via email or system alerts with 7-day notice. Continued use implies acceptance of updates.</p>

                <p className="mt-4">
                  <strong>ABDKS Solutions Private Limited</strong><br />
                  Website: www.abdks.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPolicy;

import React from "react";
import "././styles/refund.css";

export default function RefundPolicy() {
  return (
    <>
      <section class="page-title">
         <div className="position-relative w-100">
          <img
            src="/assets/Home/refund-banner.jpg"
            alt="Banner"
            className="img-fluid w-100"
            style={{ objectFit: "cover", height: "100%", minHeight: "500px" }}
          />
           <h1
            className="text-white text-right fw-bold"
            style={{
              position: "absolute",
              top: "30%",
              left: "40%",
              transform: "translate(-50%, 0%)",
              fontSize: "5rem",
              zIndex: 2,
            }}
          >
     REFUND & CANCELLATION
          </h1>
        </div>


        <div className="container refund-container">
          <div className="row my-5">
            <div className="col-lg-12 col-md-12">
              {/* Purpose and Scope Card */}
              <div className="refund-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">1</span>
                    <h3 className="text-white">Purpose and Scope</h3>
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p>
                    This Refund Policy has been developed to protect the interests of users who rely on the digital
                    payment services offered by Sevenunique Tech Solution Private Limited ("Sevenunique"). It outlines
                    when and how users are eligible to receive refunds for failed, erroneous, or incomplete
                    transactions.
                  </p>
                  <div className="highlight-box">
                    <p>
                      Sevenunique operates as a regulated participant within the Bharat Bill Payment System (BBPS), a
                      unified platform managed by the National Payments Corporation of India (NPCI) and supervised by
                      the Reserve Bank of India (RBI). All refunds are processed in compliance with the guidelines and
                      timelines defined under:
                    </p>
                    <ul className="regulation-list">
                      <li>RBI circulars related to digital transactions and grievance redressal</li>
                      <li>BBPS procedural guidelines issued by NPCI</li>
                      <li>Consumer protection rules under applicable Indian laws</li>
                    </ul>
                  </div>
                  <div className="policy-scope">
                    <p>This policy applies to all users (retail and business) transacting via Sevenunique's:</p>
                    <div className="platform-list">
                      <div className="platform-item">
                        <i className="fas fa-mobile-alt platform-icon"></i>
                        <span>Mobile application</span>
                      </div>
                      <div className="platform-item">
                        <i className="fas fa-globe platform-icon"></i>
                        <span>Web portal</span>
                      </div>
                      <div className="platform-item">
                        <i className="fas fa-store platform-icon"></i>
                        <span>Retail agent interface (BBPOU authorized)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eligible Scenarios Card */}
              <div className="refund-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">2</span>
                    <h3 className="text-white">Eligible Scenarios for Refund</h3>
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p className="intro-text">
                    Refunds may be issued in the following scenarios, provided the transaction is verified and falls
                    within the regulatory framework:
                  </p>

                  <div className="scenario-grid">
                    <div className="scenario-card">
                      <h6 className="scenario-title">2.1 Payment Failures or Technical Issues</h6>
                      <ul className="scenario-list">
                        <li>
                          The user's account was debited but the transaction was not acknowledged or processed by the
                          biller or payment gateway.
                        </li>
                        <li>
                          Errors or downtime on Sevenunique servers, NPCI systems, or participating bank/payment gateway
                          servers.
                        </li>
                      </ul>
                    </div>

                    <div className="scenario-card">
                      <h6 className="scenario-title">2.2 Duplicate or Excess Payments</h6>
                      <ul className="scenario-list">
                        <li>User unintentionally makes more than one payment for the same bill.</li>
                        <li>
                          Amount paid exceeds the bill amount and biller confirms inability to adjust or hold excess
                          amount.
                        </li>
                      </ul>
                    </div>

                    <div className="scenario-card">
                      <h6 className="scenario-title">2.3 Biller Rejection or System Timeouts</h6>
                      <ul className="scenario-list">
                        <li>
                          Biller does not accept the transaction due to data mismatch, cutoff expiry, or disconnection
                          from BBPS.
                        </li>
                        <li>
                          Payment remains in a 'Processing' or 'Pending' state for more than T+2 working days without a
                          final status.
                        </li>
                      </ul>
                    </div>

                    <div className="scenario-card">
                      <h6 className="scenario-title">2.4 Unauthorized Transactions (If Proven)</h6>
                      <ul className="scenario-list">
                        <li>User identifies a transaction not initiated by them.</li>
                        <li>
                          After due diligence, Sevenunique confirms the user's claim and no negligence is found on part
                          of the user (such as shared credentials).
                        </li>
                      </ul>
                    </div>

                    <div className="scenario-card">
                      <h6 className="scenario-title">2.5 Services Not Rendered or Delivered</h6>
                      <ul className="scenario-list">
                        <li>Prepaid recharges (e.g., mobile, DTH) fail even after successful deduction.</li>
                        <li>
                          Utility bill marked paid but not reflected in biller's system within a reasonable time (e.g.,
                          72 hours).
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="compliance-note">
                    <p>
                      All refund approvals are contingent on compliance with NPCI dispute timelines and BBPS transaction
                      audit logs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Non-Refundable Scenarios Card */}
              <div className="refund-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">3</span>
                    <h3 className="text-white">Non-Refundable Scenarios</h3>
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p className="intro-text">
                    Not all transactions qualify for refunds. The following scenarios are excluded under this Refund
                    Policy:
                  </p>

                  <div className="non-refund-grid">
                    <div className="non-refund-card">
                      <h6 className="non-refund-title">3.1 User Errors</h6>
                      <ul className="non-refund-list">
                        <li>Incorrect biller selected</li>
                        <li>Wrong consumer number or account ID entered</li>
                        <li>Incorrect amount paid</li>
                        <li>Transactions initiated without verifying beneficiary or biller details</li>
                      </ul>
                    </div>

                    <div className="non-refund-card">
                      <h6 className="non-refund-title">3.2 Successful Transactions as per System Records</h6>
                      <ul className="non-refund-list">
                        <li>
                          If the BBPS/NPCI network and biller system both reflect the transaction as successful and
                          fulfilled.
                        </li>
                        <li>
                          No refund will be processed simply due to user dissatisfaction after successful service.
                        </li>
                      </ul>
                    </div>

                    <div className="non-refund-card">
                      <h6 className="non-refund-title">3.3 Delay in Biller Confirmation</h6>
                      <ul className="non-refund-list">
                        <li>Some billers may update their systems on a delayed basis (e.g., post business day).</li>
                        <li>
                          Such delays, though inconvenient, do not warrant refund unless the transaction fails entirely.
                        </li>
                      </ul>
                    </div>

                    <div className="non-refund-card">
                      <h6 className="non-refund-title">3.4 Consumed or Delivered Services</h6>
                      <ul className="non-refund-list">
                        <li>
                          Prepaid recharges, subscriptions, or utility services that have already been used or
                          activated.
                        </li>
                        <li>If a user has received partial or full benefit from the service, refund will not apply.</li>
                      </ul>
                    </div>

                    <div className="non-refund-card">
                      <h6 className="non-refund-title">3.5 Misuse or Repeated Refund Requests</h6>
                      <ul className="non-refund-list">
                        <li>
                          Any attempts to misuse this policy by filing repetitive, fraudulent, or baseless refund
                          claims.
                        </li>
                        <li>
                          Sevenunique reserves the right to deny refund requests that do not meet these eligibility
                          guidelines or violate the platform's terms of use.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refund Process Card */}
              <div className="refund-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">4</span>
                    <h3 className="text-white">Refund Process & Timeline</h3>
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p className="intro-text">
                    Sevenunique is committed to processing legitimate refund requests in a timely and transparent
                    manner. The process is designed in line with RBI/BBPS/NPCI norms and internal compliance controls.
                  </p>

                  <div className="process-section">
                    <h6 className="process-title">4.1 Steps to Request a Refund</h6>
                    <div className="steps-container">
                      <div className="step-item">
                        <div className="step-number">1</div>
                        <div className="step-content">
                          <strong>Initiate a Refund Request:</strong> Log in to the Sevenunique platform and visit the
                          "Support" or "My Transactions" section.
                        </div>
                      </div>
                      <div className="step-item">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <strong>Submit Request Form:</strong> Fill in the refund request form providing:
                          <ul className="step-sub-list">
                            <li>Transaction ID or BBPS Reference Number</li>
                            <li>Date and time of transaction</li>
                            <li>Payment method (UPI, debit card, etc.)</li>
                            <li>Reason for refund</li>
                          </ul>
                        </div>
                      </div>
                      <div className="step-item">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <strong>Alternative Submission:</strong> If online access is unavailable, users can send an
                          email to{" "}
                          <a href="mailto:support@sevenunique.in" className="email-link">
                            support@sevenunique.in
                          </a>{" "}
                          with the subject line "Refund Request – [Transaction ID]".
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-section">
                    <h6 className="timeline-title">4.2 Processing Timeline</h6>
                    <div className="timeline-info">
                      <div className="timeline-item">
                        <i className="fas fa-clock timeline-icon"></i>
                        <span>
                          All refunds will be processed within <strong>T+5 to T+7 working days</strong> from the date of
                          acknowledgment.
                        </span>
                      </div>
                      <div className="timeline-item">
                        <i className="fas fa-exclamation-triangle timeline-icon"></i>
                        <span>
                          Delays beyond T+7 days may occur only in cases requiring third-party biller verification or
                          fraud investigation.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="refund-mode-section">
                    <h6 className="mode-title">4.3 Mode of Refund</h6>
                    <div className="mode-list">
                      <div className="mode-item">
                        <i className="fas fa-undo mode-icon"></i>
                        <span>
                          Refunds will be credited back to the original mode of payment wherever technically feasible.
                        </span>
                      </div>
                      <div className="mode-item">
                        <i className="fas fa-wallet mode-icon"></i>
                        <span>
                          If not possible (e.g., expired card), refunds will be processed to a verified UPI ID or
                          Sevenunique wallet.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="communication-section">
                    <h6 className="communication-title">4.4 Communication and Updates</h6>
                    <div className="communication-methods">
                      <div className="comm-item">
                        <i className="fas fa-envelope comm-icon"></i>
                        <span>Registered Email ID</span>
                      </div>
                      <div className="comm-item">
                        <i className="fas fa-sms comm-icon"></i>
                        <span>SMS notifications</span>
                      </div>
                      <div className="comm-item">
                        <i className="fas fa-bell comm-icon"></i>
                        <span>In-app push notifications (if enabled)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Evidence and Documentation Card */}
              <div className="refund-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">5</span>
<h3 className="text-white">Evidence and Documentation</h3>
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p className="intro-text">
                    To validate and process a refund request, users must provide accurate transaction details and
                    supporting documents. These help in verifying the legitimacy of the request and speed up resolution.
                  </p>

                  <div className="documentation-section">
                    <h6 className="doc-title">5.1 Required Information for Refund Processing</h6>
                    <div className="required-docs">
                      <div className="doc-item">
                        <i className="fas fa-id-card doc-icon"></i>
                        <span>Transaction ID / BBPS Reference Number</span>
                      </div>
                      <div className="doc-item">
                        <i className="fas fa-calendar doc-icon"></i>
                        <span>Date and time of the transaction</span>
                      </div>
                      <div className="doc-item">
                        <i className="fas fa-credit-card doc-icon"></i>
                        <span>Payment method used (UPI, Debit/Credit Card, Net Banking, etc.)</span>
                      </div>
                      <div className="doc-item">
                        <i className="fas fa-phone doc-icon"></i>
                        <span>Mobile number / account number used for the transaction</span>
                      </div>
                      <div className="doc-item">
                        <i className="fas fa-camera doc-icon"></i>
                        <span>Screen capture or proof of payment (if available)</span>
                      </div>
                      <div className="doc-item">
                        <i className="fas fa-file-alt doc-icon"></i>
                        <span>Bank statement or SMS proof in case of unauthorized debits</span>
                      </div>
                    </div>
                  </div>

                  <div className="fraud-docs-section">
                    <h6 className="fraud-title">5.2 Special Documentation for Fraud or Unauthorized Use</h6>
                    <div className="fraud-requirements">
                      <div className="fraud-item">
                        A signed declaration may be required confirming that the transaction was not authorized.
                      </div>
                      <div className="fraud-item">Proof of identity and account ownership may be asked.</div>
                      <div className="fraud-item">
                        Sevenunique may request the user to file a police complaint or FIR in serious fraud cases as per
                        RBI advisory.
                      </div>
                    </div>
                  </div>

                  <div className="crn-section">
                    <h6 className="crn-title">5.3 BBPS Complaint Reference Number (CRN)</h6>
                    <p>
                      If the user raises a complaint directly through the BBPS Central Unit, the Complaint Reference
                      Number (CRN) should be included in all correspondence with Sevenunique to facilitate tracking and
                      resolution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dispute Resolution Card */}
              <div className="refund-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">6</span>
                    <h3 className="text-white">Dispute Resolution and Escalation</h3>
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p className="intro-text">
                    Sevenunique has a structured grievance redressal process to ensure user concerns are handled with
                    transparency, fairness, and efficiency.
                  </p>

                  <div className="escalation-levels">
                    <div className="level-card">
                      <h6 className="level-title">6.1 First-Level Support</h6>
                      <div className="level-content">
                        <p>
                          Users should initially contact Sevenunique's customer support through the official email:
                          support@sevenunique.in or call: 0141-4511098.
                        </p>
                        <div className="support-details">
                          <div className="support-item">
                            <i className="fas fa-clock support-icon"></i>
                            <span>
                              Support is available Monday to Saturday, 10:00 AM to 6:00 PM (excluding national
                              holidays).
                            </span>
                          </div>
                          <div className="support-item">
                            <i className="fas fa-info-circle support-icon"></i>
                            <span>Users should provide all relevant transaction details for quick resolution.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="level-card">
                      <h6 className="level-title">6.2 Escalation to Grievance Officer</h6>
                      <div className="level-content">
                        <p>
                          If the user is unsatisfied with the initial response or no resolution is provided within T+7
                          working days, they may escalate the matter to the Grievance Redressal Officer (GRO):
                        </p>
                        <div className="gro-contact">
                          <div className="contact-item">
                            <strong>Name:</strong> Compliance Officer – Sevenunique Tech Solution Pvt. Ltd.
                          </div>
                          <div className="contact-item">
                            <strong>Email:</strong> grievance@sevenunique.in
                          </div>
                          <div className="contact-item">
                            <strong>Phone:</strong> 0141-4511098
                          </div>
                          <div className="contact-item">
                            <strong>Office Address:</strong> Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer,
                            Jagatpura, Jaipur, Rajasthan – 302017
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="level-card">
                      <h6 className="level-title">6.3 Escalation to BBPS Central Unit or RBI Ombudsman</h6>
                      <div className="level-content">
                        <p>If not satisfied with the final resolution by Sevenunique, users may:</p>
                        <div className="final-escalation">
                          <div className="escalation-option">
                            <i className="fas fa-external-link-alt escalation-icon"></i>
                            <span>
                              Lodge a complaint on the BBPS grievance portal using their BBPS Complaint Reference
                              Number.
                            </span>
                          </div>
                          <div className="escalation-option">
                            <i className="fas fa-balance-scale escalation-icon"></i>
                            <span>
                              Approach the RBI Ombudsman under the RBI Integrated Ombudsman Scheme, subject to
                              eligibility and jurisdiction.
                            </span>
                          </div>
                        </div>
                        <p className="escalation-note">
                          All escalations must include supporting evidence, ticket ID, and all communication logs for a
                          complete audit trail.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fraud Checks Card */}
              <div className="refund-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">7</span>
                    <h3 className="text-white">Fraud Checks and Hold Conditions</h3>
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p className="intro-text">
                    Sevenunique follows a robust internal risk management and fraud prevention framework to ensure
                    refunds are not misused or exploited.
                  </p>

                  <div className="fraud-sections">
                    <div className="fraud-section">
                      <h6 className="fraud-section-title">7.1 Internal Verification Protocols</h6>
                      <div className="verification-list">
                        <div className="verification-item">All refund requests undergo internal verification.</div>
                        <div className="verification-item">
                          This includes validating transaction logs, IP address matching, device fingerprinting, and
                          checking for repeated claims.
                        </div>
                      </div>
                    </div>

                    <div className="fraud-section">
                      <h6 className="fraud-section-title">7.2 Temporary Holds and Review</h6>
                      <p>Sevenunique reserves the right to temporarily hold a refund if:</p>
                      <div className="hold-conditions">
                        <div className="hold-item">
                          <i className="fas fa-exclamation-triangle hold-icon"></i>
                          <span>The transaction appears suspicious or irregular.</span>
                        </div>
                        <div className="hold-item">
                          <i className="fas fa-redo hold-icon"></i>
                          <span>Multiple refund claims originate from the same user in a short span.</span>
                        </div>
                        <div className="hold-item">
                          <i className="fas fa-user-times hold-icon"></i>
                          <span>The same credentials are used for transactions on multiple accounts.</span>
                        </div>
                      </div>
                    </div>

                    <div className="fraud-section">
                      <h6 className="fraud-section-title">7.3 Reporting to Authorities</h6>
                      <p>In case of strong suspicion of fraud, Sevenunique may:</p>
                      <div className="reporting-actions">
                        <div className="reporting-item">Escalate the case to NPCI's BBPS monitoring unit.</div>
                        <div className="reporting-item">Inform the user's bank or payment provider.</div>
                        <div className="reporting-item">
                          Lodge a report with appropriate cybercrime authorities as per Indian law.
                        </div>
                      </div>
                    </div>

                    <div className="fraud-section">
                      <h6 className="fraud-section-title">7.4 Right to Refuse Refund</h6>
                      <p>
                        If a refund request is found to be intentionally misleading, fabricated, or not supported by
                        documentation, Sevenunique reserves the right to reject the claim.
                      </p>
                    </div>
                  </div>

                  <div className="fraud-note">
                    <p>
                      These measures are designed not only to safeguard company assets but also to ensure fair usage of
                      consumer protection mechanisms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy Changes Card */}
              <div className="refund-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">8</span>
                   <h3 className="text-white"> Policy Changes and Updates</h3>
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="policy-changes">
                    <div className="change-section">
                      <h6 className="change-title">8.1 Right to Modify</h6>
                      <p>
                        Sevenunique Tech Solution Private Limited reserves the right to revise, update, or amend this
                        Refund Policy at any time to reflect changes in law, technology, business operations, or user
                        feedback.
                      </p>
                    </div>

                    <div className="change-section">
                      <h6 className="change-title">8.2 Notification of Changes</h6>
                      <p>When a significant change is made:</p>
                      <div className="notification-methods">
                        <div className="notification-item">
                          <i className="fas fa-envelope notification-icon"></i>
                          <span>Users will be notified via registered email and/or SMS.</span>
                        </div>
                        <div className="notification-item">
                          <i className="fas fa-bullhorn notification-icon"></i>
                          <span>A prominent notice will be displayed on the official website and mobile app.</span>
                        </div>
                        <div className="notification-item">
                          <i className="fas fa-calendar-alt notification-icon"></i>
                          <span>
                            The updated policy will be published with a revised "Effective Date" and "Last Updated" tag.
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="change-section">
                      <h6 className="change-title">8.3 User Responsibility</h6>
                      <p>
                        It is the responsibility of the user to periodically review the Refund Policy. Continued use of
                        the platform after such changes will constitute the user's acknowledgment and acceptance of the
                        revised policy.
                      </p>
                    </div>

                    <div className="change-section">
                      <h6 className="change-title">8.4 Regulatory Compliance</h6>
                      <p>All amendments shall be made in adherence with the latest instructions from:</p>
                      <div className="regulatory-list">
                        <div className="regulatory-item">RBI</div>
                        <div className="regulatory-item">NPCI (BBPS guidelines)</div>
                        <div className="regulatory-item">Ministry of Consumer Affairs</div>
                        <div className="regulatory-item">
                          Any other applicable Indian data protection or payment settlement authority
                        </div>
                      </div>
                      <p className="compliance-note">
                        In the event of any conflict between a previously issued version of the policy and an updated
                        version, the updated version shall prevail.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="refund-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">9</span>
                   <h3 className="text-white"> Contact Information</h3>
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p className="intro-text">
                    If you have any questions, concerns, or refund-related queries, you may reach out to our dedicated
                    support and grievance redressal team:
                  </p>

                  <div className="contact-sections">
                    <div className="contact-section">
                      <h6 className="contact-section-title">Customer Support Team</h6>
                      <div className="contact-details">
                        <div className="contact-detail">
                          <i className="fas fa-envelope contact-icon"></i>
                          <span>
                            <strong>Email:</strong> support@sevenunique.in
                          </span>
                        </div>
                        <div className="contact-detail">
                          <i className="fas fa-phone contact-icon"></i>
                          <span>
                            <strong>Phone:</strong> 0141-4511098
                          </span>
                        </div>
                        <div className="contact-detail">
                          <i className="fas fa-clock contact-icon"></i>
                          <span>
                            <strong>Availability:</strong> Monday to Saturday, 10:00 AM to 6:00 PM (excluding public
                            holidays)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="contact-section">
                      <h6 className="contact-section-title">Grievance Redressal Officer</h6>
                      <div className="contact-details">
                        <div className="contact-detail">
                          <i className="fas fa-user contact-icon"></i>
                          <span>
                            <strong>Name:</strong> Compliance Officer – Sevenunique Tech Solution Private Limited
                          </span>
                        </div>
                        <div className="contact-detail">
                          <i className="fas fa-envelope contact-icon"></i>
                          <span>
                            <strong>Email:</strong> grievance@sevenunique.in
                          </span>
                        </div>
                        <div className="contact-detail">
                          <i className="fas fa-phone contact-icon"></i>
                          <span>
                            <strong>Phone:</strong> 0141-4511098
                          </span>
                        </div>
                        <div className="contact-detail">
                          <i className="fas fa-map-marker-alt contact-icon"></i>
                          <span>
                            <strong>Office Address:</strong> Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer,
                            Jagatpura, Jaipur, Rajasthan – 302017
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="closing-message">
                    <p>
                      We are committed to resolving your queries in a timely and transparent manner in line with RBI and
                      NPCI consumer grievance redressal norms.
                    </p>
                    <p>Thank you for trusting Sevenunique Tech Solution Private Limited.</p>
                    <p>
                      For more details on our services and related policies, please also refer to our Terms & Conditions
                      and Privacy Policy.
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

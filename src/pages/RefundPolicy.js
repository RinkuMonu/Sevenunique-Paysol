import React from "react";

export default function RefundPolicy() {
  return (
    <>
      <section class="page-title">
        <img src="/assets/Home/refund.svg" alt="TERMS" />
        <div className="container text-secondary">
          <div className="row my-5">
            <div className="col-lg-12 col-md-12 text-left">
              <div className="service-item style-2">
                <div className="service-desc abt">
                  <div className="service-title">
                    <h4>1. Company Introduction</h4>
                  </div>
                  <p>
                    ABDKS Solutions Private Limited ("ABDKS," "we," "our," or
                    "us") is a fintech enterprise registered under the Companies
                    Act, 2013 in India. We provide digital financial solutions
                    tailored to both B2B and B2C segments, including:
                  </p>
                  <ul>
                    <li>Payment Gateway Services</li>
                    <li>Digital Lending APIs</li>
                    <li>KYC/AML Verification Tools</li>
                    <li>Wallet and UPI Services</li>
                    <li>SaaS-based Financial Dashboards and Analytics</li>
                  </ul>
                  <p>
                    Our platform supports merchants, financial institutions,
                    startups, and individuals in building and scaling secure,
                    compliant, and technology-enabled financial products.
                  </p>
                  <div className="service-title">
                    <h4>2. Purpose and Scope</h4>
                  </div>

                  <h6> 2.1 Purpose</h6>
                  <p>
                    This policy outlines the guidelines, procedures, and rights
                    of all stakeholders involved in service cancellation and
                    refund requests. The objective is to ensure legal clarity,
                    protect consumer rights, and define the company's
                    responsibilities in compliance with Indian law.
                  </p>
                  <h6> 2.2 Scope</h6>
                  <p>This policy applies to:</p>
                  <ul>
                    <li>
                      Merchants/Businesses using our APIs or payment services.
                    </li>
                    <li>
                      End Users/Consumers transacting via our B2C interfaces.
                    </li>
                    <li>
                      Technology/Channel Partners integrating our fintech
                      services.
                    </li>
                  </ul>

                  <div className="service-title">
                    <h4>3. Definitions</h4>
                  </div>

                  <div className="container my-5">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped align-middle shadow-sm">
                        <thead className="table-light">
                          <tr>
                            <th scope="col">Term</th>
                            <th scope="col">Definition</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <strong>Customer</strong>
                            </td>
                            <td>
                              Any individual or entity availing ABDKS services.
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Refund</strong>
                            </td>
                            <td>
                              Return of funds to a Customer due to failed
                              service or billing error.
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Cancellation</strong>
                            </td>
                            <td>
                              Termination or revocation of a subscribed service
                              or integration.
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Transaction</strong>
                            </td>
                            <td>
                              Any financial or service-related interaction
                              processed via ABDKS.
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Service</strong>
                            </td>
                            <td>
                              Any digital feature, product, or offering
                              delivered by ABDKS.
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Dispute</strong>
                            </td>
                            <td>
                              A disagreement raised by the customer regarding a
                              transaction or refund.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="service-title">
                    <h4>4. Cancellation Policy</h4>
                  </div>
                  <h6>4.1 General Guidelines</h6>
                  <p>
                    Customers may cancel services subject to specific
                    conditions:
                  </p>
                  <ul>
                    <li>
                      Subscription cancellations must be initiated within 7 days
                      of activation.
                    </li>
                    <li>
                      Cancellation requests must be submitted via official
                      support channel.
                    </li>
                  </ul>

                  <h6>4.2 Types of cancellable services</h6>
                  <p>
                    Customers may cancel services subject to specific
                    conditions:
                  </p>
                  <ul>
                    <li>
                      Subscription cancellations must be initiatedwithin 7 days
                      of activation.
                    </li>
                    <li>
                      Cancellation requests must be submitted via official
                      support channels.
                    </li>
                  </ul>

                  <div className="container my-5">
                    <h3 className="text-center fw-bold mb-4 text-theme">
                      Types of Cancellable Services
                    </h3>
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped align-middle shadow-sm">
                        <thead className="table-light">
                          <tr>
                            <th>Service Category</th>
                            <th>Cancellation Window</th>
                            <th>Eligibility Conditions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <strong>SaaS Subscriptions</strong>
                            </td>
                            <td>Within 7 Days</td>
                            <td>No usage or API hits post-activation</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Custom Integrations</strong>
                            </td>
                            <td>Pre-initiation Only</td>
                            <td>Work has not commenced</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>KYC/AML Services</strong>
                            </td>
                            <td>Non-cancellable</td>
                            <td>Triggered real-time and consumed</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Wallet/UPI Setup</strong>
                            </td>
                            <td>Within 24 Hours</td>
                            <td>Wallet not activated or linked</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <h6>4.3 Procedure</h6>
                  <ul>
                    <li>
                      Email support@abdks.in with subject "Service Cancellation
                      Request."
                    </li>
                    <li>
                      Include registered account details, service ID, and
                      reason.
                    </li>
                    <li>
                      Team will validate the request and respond within 3
                      business days.
                    </li>
                  </ul>

                  <div className="service-title">
                    <h4>5. Refund Policy</h4>
                  </div>
                  <h4>5.1 Refund Eligibility</h4>
                  <p>
                    Refunds may be issued under the following circumstances:
                  </p>
                  <h6>A. Failed Transactions</h6>
                  <ul>
                    <li>Funds deducted, but service not delivered.</li>
                    <li>
                      Verified through backend logs or payment gateway APIs.
                    </li>
                  </ul>

                  <h6>B. Duplicate Payments</h6>
                  <ul>
                    <li>Same transaction processed more than once.</li>
                    <li>
                      Supporting evidence required (bank statements, receipts).
                    </li>
                  </ul>

                  <h6>C. Unauthorized Transactions</h6>
                  <ul>
                    <li>Transaction initiated without customer consent.</li>
                    <li>
                      Subject to internal verification and legal protocols.
                    </li>
                  </ul>

                  <h6>D. Technical Glitches</h6>
                  <ul>
                    <li>Platform failure causing loss of service value.</li>
                    <li>
                      Applicable only if validated through internal system logs.
                    </li>
                  </ul>

                  <h6>E. Service Dissatisfaction </h6>
                  <ul>
                    <li>
                      Only accepted for SaaS dashboards, within 3 days of first
                      use.
                    </li>
                    <li>Reason and screenshots must be provided.</li>
                  </ul>

                  <h4>5.2 Non-Refundable Charges</h4>
                  <div className="container my-5">
                    <h3 className="text-center fw-bold mb-4 text-theme">
                      Fee Structure & Non-Refundable Charges
                    </h3>
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped align-middle shadow-sm">
                        <thead className="table-light">
                          <tr>
                            <th>Fee Type</th>
                            <th>Reason</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <strong>Onboarding Charges</strong>
                            </td>
                            <td>
                              One-time and non-reversible administrative cost
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Custom Development Fees</strong>
                            </td>
                            <td>Work is labor-intensive and client-specific</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>KYC/AML API Hits</strong>
                            </td>
                            <td>Real-time and consumption-based</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Payment Gateway Setup Fee</strong>
                            </td>
                            <td>
                              Paid to third-party networks and is non-refundable
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="service-title">
                    <h4>6. Refund Process and Timeline</h4>
                  </div>
                  <h6>6.1 How to Raise a Refund Request</h6>

                  <ul>
                    <li>Email: support@abdks.in</li>
                    <li>Subject: "Refund Request - [Transaction ID]"</li>
                    <li>
                      Include full details, reason, and proof (screenshots, bank
                      statements).
                    </li>
                  </ul>
                  <h6>6.2 Timeline</h6>

                  <ul>
                    <li>Acknowledgment: Within 3 business days</li>
                    <li>Investigation: Up to 7 business days</li>
                    <li>
                      Refund Credit: Within 14 business days from approval
                    </li>
                  </ul>
                  <h6>6.3 Notification</h6>

                  <ul>
                    <ol>
                      Users will be informed of refund approval or rejection
                      via:
                      <li>Registered email ID</li>
                      <li>In-app notification (if applicable)</li>
                    </ol>
                  </ul>
                  <div className="service-title">
                    <h4>7. Mode of Refund</h4>
                  </div>
                  <h6>Approved refunds will be processed via:</h6>

                  <ul>
                    <li>UPI – Reversed to original UPI ID</li>
                    <li>
                      Bank Transfer (NEFT/IMPS) – To the source bank account
                    </li>
                    <li> Wallet Credit – If transaction was wallet-based </li>
                    <li>
                      {" "}
                      Credit Note – For business accounts (redeemable against
                      future services)
                    </li>
                  </ul>
                  <h4>8. Cancellation Due to Policy Violation or Fraud</h4>
                </div>
                <p>
                  ABDKS reserves the right to cancel service(s) immediately
                  under the following:
                </p>

                <ul>
                  <li>Misuse of platform or API abuse</li>
                  <li>Fraudulent activity or chargeback misuse</li>
                  <li> Breach of contract or data policies</li>
                </ul>
                <p>
                  Such cancellations will result in no refund and may attract
                  legal action under Indian cyber and financial laws.
                </p>

                <div className="service-title">
                  <h4>9. Customer Responsibilities</h4>
                </div>

                <ul>
                  <li>Ensure accurate account information.</li>
                  <li>Monitor transactions regularly.</li>
                  <li>Avoid sharing login or access credentials.</li>
                  <li>
                    Inform support of suspicious activity within 48 hours.
                  </li>
                </ul>
                <p>
                  Failure to meet these responsibilities may delay or invalidate
                  refunds/cancellations.
                </p>

                <div className="service-title">
                  <h4>10. Dispute Resolution & Escalation</h4>
                </div>
                <h6>10.1 Grievance Redressal</h6>

                <ul>
                  <li>Level 1: Write to support@abdks.in</li>
                  <li>Subject: "Refund Request - [Transaction ID]"</li>
                  <li>
                    Level 2: Escalate to grievance@abdks.in within 7 days of
                    unsatisfactory resolution
                  </li>
                </ul>
                <h6>10.2 Arbitration Clause</h6>

                <ul>
                  <li>
                    All disputes shall be resolved via binding arbitration under
                    the Arbitration and Conciliation Act, 1996.
                  </li>
                  <li>Seat of arbitration: Jaipur, Rajasthan, India</li>
                </ul>

                <h6>10.3 Jurisdiction</h6>

                <ul>
                  <li>
                    All legal proceedings are subject to the exclusive
                    jurisdiction of courts in Jaipur, Rajasthan, India.
                  </li>
                </ul>

                <div className="service-title">
                  <h4>11. Policy Updates</h4>
                </div>

                <ul>
                  <li>
                    ABDKS reserves the right to update this policy periodically.
                  </li>
                  <li>
                    Material changes will be communicated via email or platform
                    banner.
                  </li>
                  <li>
                    Continued use post-update implies acceptance of revised
                    terms.
                  </li>
                </ul>
                <div className="service-title">
                  <h4>12. Contact Information</h4>
                </div>
                <p>For refund and cancellation queries, reach us at:</p>

                <h6>
                  ABDKS Solutions Private Limited Email: support@abdks.in
                  Grievance Cell: grievance@abdks.in Phone: +91-XXXXXXXXXX
                  Website: www.abdks.in Office Address:
                </h6>

                <div className="service-title">
                  <h4>13. Compliance Statement</h4>
                </div>
                <p>
                  This policy is in alignment with the following Indian
                  regulatory frameworks:
                </p>
                <ul>
                  <li>Consumer Protection Act, 2019</li>
                  <li>Information Technology Act, 2000</li>
                  <li>
                    Reserve Bank of India (RBI) Guidelines for Payment
                    Aggregators and Prepaid Instruments
                  </li>
                  <li>Data Protection Regulations under Indian law</li>
                </ul>
                <p>
                  All stakeholders are advised to review this policy regularly.
                  By availing any service of ABDKS, you agree to the terms
                  mentioned herein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";

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
        </div>

        <div className="container text-secondary">
          <div className="row my-5">
            <div className="col-lg-12 col-md-12 text-left">
              <div className="service-item style-2">
                <div className="service-desc abt">
                  <div className="service-title">
                    <h4>1. Purpose and Scope</h4>
                  </div>
                  <p>
                    This Refund Policy has been developed to protect the
                    interests of users who rely on the digital payment services
                    offered by Sevenunique Tech Solution Private Limited
                    (“Sevenunique”). It outlines when and how users are eligible
                    to receive refunds for failed, erroneous, or incomplete
                    transactions.
                    <br />
                    Sevenunique operates as a regulated participant within the
                    Bharat Bill Payment System (BBPS), a unified platform
                    managed by the National Payments Corporation of India (NPCI)
                    and supervised by the Reserve Bank of India (RBI). All
                    refunds are processed in compliance with the guidelines and
                    timelines defined under:
                  </p>
                  <ul>
                    <li>
                      {" "}
                      RBI circulars related to digital transactions and
                      grievance redressal
                    </li>
                    <li>BBPS procedural guidelines issued by NPCI</li>
                    <li>
                      Consumer protection rules under applicable Indian laws
                    </li>
                  </ul>
                  <p>
                    This policy applies to all users (retail and business)
                    transacting via Sevenunique’s:
                  </p>
                  <ul>
                    <li>Mobile application</li>
                    <li>Web portal</li>
                    <li>Retail agent interface (BBPOU authorized)</li>
                  </ul>
                  <div className="service-title">
                    <h4>2. Eligible Scenarios for Refund</h4>
                    <p>
                      Refunds may be issued in the following scenarios, provided
                      the transaction is verified and falls within the
                      regulatory framework:
                    </p>
                  </div>
                  <h6>2.1 Payment Failures or Technical Issues</h6>
                  <ul>
                    <li>
                      The user’s account was debited but the transaction was not
                      acknowledged or processed by the biller or payment
                      gateway.
                    </li>
                    <li>
                      Errors or downtime on Sevenunique servers, NPCI systems,
                      or participating bank/payment gateway servers.
                    </li>
                  </ul>
                  <h6>2.2 Duplicate or Excess Payments</h6>
                  <ul>
                    <li>
                      User unintentionally makes more than one payment for the
                      same bill.
                    </li>
                    <li>
                      Amount paid exceeds the bill amount and biller confirms
                      inability to adjust or hold excess amount.
                    </li>
                  </ul>
                  <h6>2.3 Biller Rejection or System Timeouts</h6>
                  <ul>
                    <li>
                      Biller does not accept the transaction due to data
                      mismatch, cutoff expiry, or disconnection from BBPS.
                    </li>
                    <li>
                      Payment remains in a ‘Processing’ or ‘Pending’ state for
                      more than T+2 working days without a final status.
                    </li>
                  </ul>
                  <h6>2.4 Unauthorized Transactions (If Proven)</h6>
                  <ul>
                    <li>
                      User identifies a transaction not initiated by them.
                    </li>
                    <li>
                      After due diligence, Sevenunique confirms the user’s claim
                      and no negligence is found on part of the user (such as
                      shared credentials).
                    </li>
                  </ul>
                  <h6>2.5 Services Not Rendered or Delivered</h6>
                  <ul>
                    <li>
                      Prepaid recharges (e.g., mobile, DTH) fail even after
                      successful deduction.
                    </li>
                    <li>
                      Utility bill marked paid but not reflected in biller’s
                      system within a reasonable time (e.g., 72 hours).
                    </li>
                  </ul>
                  <p>
                    All refund approvals are contingent on compliance with NPCI
                    dispute timelines and BBPS transaction audit logs.
                  </p>
                  <div className="service-title">
                    <h4>3. Non-Refundable Scenarios</h4>
                    <p>
                      Not all transactions qualify for refunds. The following
                      scenarios are excluded under this Refund Policy:
                    </p>
                  </div>
                  <h6>3.1 User Errors</h6>
                  <ul>
                    <li>Incorrect biller selected</li>
                    <li>Wrong consumer number or account ID entered</li>
                    <li>Incorrect amount paid</li>
                    <li>
                      Transactions initiated without verifying beneficiary or
                      biller details
                    </li>
                  </ul>
                  <h6>3.2 Successful Transactions as per System Records</h6>
                  <ul>
                    <li>
                      If the BBPS/NPCI network and biller system both reflect
                      the transaction as successful and fulfilled.
                    </li>
                    <li>
                      No refund will be processed simply due to user
                      dissatisfaction after successful service.
                    </li>
                  </ul>
                  <h6>3.3 Delay in Biller Confirmation</h6>
                  <ul>
                    <li>
                      Some billers may update their systems on a delayed basis
                      (e.g., post business day).
                    </li>
                    <li>
                      Such delays, though inconvenient, do not warrant refund
                      unless the transaction fails entirely.
                    </li>
                  </ul>
                  <h6>3.4 Consumed or Delivered Services</h6>
                  <ul>
                    <li>
                      Prepaid recharges, subscriptions, or utility services that
                      have already been used or activated.
                    </li>
                    <li>
                      If a user has received partial or full benefit from the
                      service, refund will not apply.
                    </li>
                  </ul>
                  <h6>3.5 Misuse or Repeated Refund Requests</h6>
                  <ul>
                    <li>
                      Any attempts to misuse this policy by filing repetitive,
                      fraudulent, or baseless refund claims.
                    </li>
                    <li>
                      Sevenunique reserves the right to deny refund requests
                      that do not meet these eligibility guidelines or violate
                      the platform’s terms of use.
                    </li>
                  </ul>
                  <div className="service-title">
                    <h4>4. Refund Process & Timeline</h4>
                  </div>
                  <p>
                    Sevenunique is committed to processing legitimate refund
                    requests in a timely and transparent manner. The process is
                    designed in line with RBI/BBPS/NPCI norms and internal
                    compliance controls.
                  </p>
                  <h6>4.1 Steps to Request a Refund</h6>
                  <ul>
                    <li>
                      <strong>Initiate a Refund Request:</strong> Log in to the
                      Sevenunique platform and visit the "Support" or "My
                      Transactions" section.
                    </li>
                    <li>
                      <strong>Submit Request Form:</strong> Fill in the refund
                      request form providing:
                      <ul>
                        <li>Transaction ID or BBPS Reference Number</li>
                        <li>Date and time of transaction</li>
                        <li>Payment method (UPI, debit card, etc.)</li>
                        <li>Reason for refund</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Alternative Submission:</strong> If online access
                      is unavailable, users can send an email to{" "}
                      <a href="mailto:support@sevenunique.in">
                        support@sevenunique.in
                      </a>{" "}
                      with the subject line “Refund Request – [Transaction ID]”.
                    </li>
                  </ul>
                  <h6>4.2 Processing Timeline</h6>
                  <ul>
                    <li>
                      All refunds will be processed within{" "}
                      <strong>T+5 to T+7 working days</strong> from the date of
                      acknowledgment.
                    </li>
                    <li>
                      Delays beyond T+7 days may occur only in cases requiring
                      third-party biller verification or fraud investigation.
                    </li>
                  </ul>
                  <h6>4.3 Mode of Refund</h6>
                  <ul>
                    <li>
                      Refunds will be credited back to the original mode of
                      payment wherever technically feasible.
                    </li>
                    <li>
                      If not possible (e.g., expired card), refunds will be
                      processed to a verified UPI ID or Sevenunique wallet.
                    </li>
                  </ul>
                  <h6>4.4 Communication and Updates</h6>
                  <ul>
                    <li>Registered Email ID</li>
                    <li>SMS notifications</li>
                    <li>In-app push notifications (if enabled)</li>
                  </ul>
                  <div className="service-title">
                    <h4>5. Evidence and Documentation</h4>
                  </div>
                  <p>
                    To validate and process a refund request, users must provide
                    accurate transaction details and supporting documents. These
                    help in verifying the legitimacy of the request and speed up
                    resolution.
                  </p>
                  <h6>5.1 Required Information for Refund Processing</h6>
                  <ul>
                    <li>Transaction ID / BBPS Reference Number</li>
                    <li>Date and time of the transaction</li>
                    <li>
                      Payment method used (UPI, Debit/Credit Card, Net Banking,
                      etc.)
                    </li>
                    <li>
                      Mobile number / account number used for the transaction
                    </li>
                    <li>Screen capture or proof of payment (if available)</li>
                    <li>
                      Bank statement or SMS proof in case of unauthorized debits
                    </li>
                  </ul>
                  <h6>
                    5.2 Special Documentation for Fraud or Unauthorized Use
                  </h6>
                  <ul>
                    <li>
                      A signed declaration may be required confirming that the
                      transaction was not authorized.
                    </li>
                    <li>
                      Proof of identity and account ownership may be asked.
                    </li>
                    <li>
                      Sevenunique may request the user to file a police
                      complaint or FIR in serious fraud cases as per RBI
                      advisory.
                    </li>
                  </ul>
                  <h6>5.3 BBPS Complaint Reference Number (CRN)</h6>
                  <p>
                    If the user raises a complaint directly through the BBPS
                    Central Unit, the Complaint Reference Number (CRN) should be
                    included in all correspondence with Sevenunique to
                    facilitate tracking and resolution.
                  </p>
                  <div class="service-title">
                    <h4>6. Dispute Resolution and Escalation</h4>
                  </div>
                  <h6>
                    Sevenunique has a structured grievance redressal process to
                    ensure user concerns are handled with transparency,
                    fairness, and efficiency.
                  </h6>
                  <ul>
                    <li>
                      <h6>6.1 First-Level Support</h6>
                      <ul>
                        <li>
                          Users should initially contact Sevenunique’s customer
                          support through the official email:
                          support@sevenunique.in or call: 0141-4511098.
                        </li>
                        <li>
                          Support is available Monday to Saturday, 10:00 AM to
                          6:00 PM (excluding national holidays).
                        </li>
                        <li>
                          Users should provide all relevant transaction details
                          for quick resolution.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h6>6.2 Escalation to Grievance Officer</h6>
                      <p>
                        If the user is unsatisfied with the initial response or
                        no resolution is provided within T+7 working days, they
                        may escalate the matter to the Grievance Redressal
                        Officer (GRO):
                      </p>
                      <ul>
                        <li>
                          Name: Compliance Officer – Sevenunique Tech Solution
                          Pvt. Ltd.
                        </li>
                        <li>Email: grievance@sevenunique.in</li>
                        <li>Phone: 0141-4511098</li>
                        <li>
                          Office Address: Plot No 97, Dakshinpuri - I,
                          Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan –
                          302017
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h6>
                        6.3 Escalation to BBPS Central Unit or RBI Ombudsman
                      </h6>
                      <p>
                        If not satisfied with the final resolution by
                        Sevenunique, users may:
                      </p>
                      <ul>
                        <li>
                          Lodge a complaint on the BBPS grievance portal using
                          their BBPS Complaint Reference Number.
                        </li>
                        <li>
                          Approach the RBI Ombudsman under the RBI Integrated
                          Ombudsman Scheme, subject to eligibility and
                          jurisdiction.
                        </li>
                      </ul>
                      <p>
                        All escalations must include supporting evidence, ticket
                        ID, and all communication logs for a complete audit
                        trail.
                      </p>
                    </li>
                  </ul>
                  ---
                  <div class="service-title">
                    <h4>7. Fraud Checks and Hold Conditions</h4>
                  </div>
                  <h6>
                    Sevenunique follows a robust internal risk management and
                    fraud prevention framework to ensure refunds are not misused
                    or exploited.
                  </h6>
                  <ul>
                    <li>
                      <h6>7.1 Internal Verification Protocols</h6>
                      <ul>
                        <li>
                          All refund requests undergo internal verification.
                        </li>
                        <li>
                          This includes validating transaction logs, IP address
                          matching, device fingerprinting, and checking for
                          repeated claims.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h6>7.2 Temporary Holds and Review</h6>
                      <p>
                        Sevenunique reserves the right to temporarily hold a
                        refund if:
                      </p>
                      <ul>
                        <li>
                          The transaction appears suspicious or irregular.
                        </li>
                        <li>
                          Multiple refund claims originate from the same user in
                          a short span.
                        </li>
                        <li>
                          The same credentials are used for transactions on
                          multiple accounts.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h6>7.3 Reporting to Authorities</h6>
                      <p>
                        In case of strong suspicion of fraud, Sevenunique may:
                      </p>
                      <ul>
                        <li>
                          Escalate the case to NPCI’s BBPS monitoring unit.
                        </li>
                        <li>Inform the user’s bank or payment provider.</li>
                        <li>
                          Lodge a report with appropriate cybercrime authorities
                          as per Indian law.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h6>7.4 Right to Refuse Refund</h6>
                      <p>
                        If a refund request is found to be intentionally
                        misleading, fabricated, or not supported by
                        documentation, Sevenunique reserves the right to reject
                        the claim.
                      </p>
                    </li>
                  </ul>
                  <p>
                    These measures are designed not only to safeguard company
                    assets but also to ensure fair usage of consumer protection
                    mechanisms.
                  </p>

                  <h4>8. Policy Changes and Updates</h4>
                  <ul>
                    <li>
                      <h6>8.1 Right to Modify</h6>
                      <p>
                        Sevenunique Tech Solution Private Limited reserves the
                        right to revise, update, or amend this Refund Policy at
                        any time to reflect changes in law, technology, business
                        operations, or user feedback.
                      </p>
                    </li>
                    <li>
                      <h6>8.2 Notification of Changes</h6>
                      <p>When a significant change is made:</p>
                      <ul>
                        <li>
                          Users will be notified via registered email and/or
                          SMS.
                        </li>
                        <li>
                          A prominent notice will be displayed on the official
                          website and mobile app.
                        </li>
                        <li>
                          The updated policy will be published with a revised
                          “Effective Date” and “Last Updated” tag.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h6>8.3 User Responsibility</h6>
                      <p>
                        It is the responsibility of the user to periodically
                        review the Refund Policy. Continued use of the platform
                        after such changes will constitute the user's
                        acknowledgment and acceptance of the revised policy.
                      </p>
                    </li>
                    <li>
                      <h6>8.4 Regulatory Compliance</h6>
                      <p>
                        All amendments shall be made in adherence with the
                        latest instructions from:
                      </p>
                      <ul>
                        <li>RBI</li>
                        <li>NPCI (BBPS guidelines)</li>
                        <li>Ministry of Consumer Affairs</li>
                        <li>
                          Any other applicable Indian data protection or payment
                          settlement authority
                        </li>
                      </ul>
                      <p>
                        In the event of any conflict between a previously issued
                        version of the policy and an updated version, the
                        updated version shall prevail.
                      </p>
                    </li>
                  </ul>
                  <div class="service-title">
                    <h4>9. Contact Information</h4>
                  </div>
                  <p>
                    If you have any questions, concerns, or refund-related
                    queries, you may reach out to our dedicated support and
                    grievance redressal team:
                  </p>
                  <h6>Customer Support Team</h6>
                  <ul>
                    <li>Email: support@sevenunique.in</li>
                    <li>Phone: 0141-4511098</li>
                    <li>
                      Availability: Monday to Saturday, 10:00 AM to 6:00 PM
                      (excluding public holidays)
                    </li>
                  </ul>
                  <h6>Grievance Redressal Officer</h6>
                  <ul>
                    <li>
                      Name: Compliance Officer – Sevenunique Tech Solution
                      Private Limited
                    </li>
                    <li>Email: grievance@sevenunique.in</li>
                    <li>Phone: 0141-4511098</li>
                    <li>
                      Office Address: Plot No 97, Dakshinpuri - I, Shrikishan,
                      Sanganer, Jagatpura, Jaipur, Rajasthan – 302017
                    </li>
                  </ul>
                  <p>
                    We are committed to resolving your queries in a timely and
                    transparent manner in line with RBI and NPCI consumer
                    grievance redressal norms.
                  </p>
                  <p>
                    Thank you for trusting Sevenunique Tech Solution Private
                    Limited.
                  </p>
                  <p>
                    For more details on our services and related policies,
                    please also refer to our Terms & Conditions and Privacy
                    Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

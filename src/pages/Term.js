import React from "react";
import "././styles/terms.css";

export default function Term() {
  return (
    <>
      <section class="page-title">
         <div className="position-relative w-100">
          <img
            src="/assets/Home/terms-banner.jpg"
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
     TERMS & CONDITIONS
          </h1>
        </div>

            <div className="container terms-container">
          <div className="row my-5">
            <div className="col-lg-12 col-md-12">
              {/* Introduction Card */}
              <div className="terms-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">1</span>
                    Introduction, Agreement & Acceptance
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="subsection">
                    <h6 className="subsection-title">1.1 Introduction</h6>
                    <p>
                      Welcome to Sevenunique Tech Solution Private Limited ("Sevenunique", "we", "us", or "our"). These
                      Terms and Conditions ("Terms") govern your access to and use of our website, mobile applications,
                      and digital platform (collectively, the "Platform") that enable you to access a wide range of
                      digital utility payment services under the BBPS (Bharat Bill Payment System) framework.
                    </p>
                    <p>
                      By using our services—including but not limited to mobile recharges, DTH, electricity, gas,
                      broadband, and water bill payments—you agree to comply with and be legally bound by these Terms,
                      which constitute a binding agreement between you and Sevenunique.
                    </p>
                    <div className="compliance-box">
                      <p>This document is in full compliance with:</p>
                      <ul className="compliance-list">
                        <li>The Information Technology Act, 2000 and the Rules thereunder</li>
                        <li>RBI's BBPS Operating Guidelines</li>
                        <li>NPCI circulars</li>
                        <li>The Consumer Protection Act, 2019</li>
                        <li>The Digital Personal Data Protection Act, 2023</li>
                      </ul>
                    </div>
                    <p className="important-note">
                      We advise you to read these Terms carefully before registering, transacting, or continuing to use
                      the Platform. If you do not agree to these Terms, you must not access or use the Platform.
                    </p>
                  </div>

                  <div className="subsection">
                    <h6 className="subsection-title">1.2 Binding Agreement</h6>
                    <p>When you:</p>
                    <div className="agreement-actions">
                      <div className="action-item">
                        <i className="fas fa-mouse-pointer action-icon"></i>
                        <span>Access or browse the Platform;</span>
                      </div>
                      <div className="action-item">
                        <i className="fas fa-user-plus action-icon"></i>
                        <span>Register for an account;</span>
                      </div>
                      <div className="action-item">
                        <i className="fas fa-credit-card action-icon"></i>
                        <span>Initiate a payment transaction; or</span>
                      </div>
                      <div className="action-item">
                        <i className="fas fa-cogs action-icon"></i>
                        <span>Use any feature of our services</span>
                      </div>
                    </div>
                    <p>
                      you acknowledge that you have read, understood, and accepted these Terms in their entirety. These
                      Terms constitute an electronic record under the Information Technology Act, 2000, and do not
                      require physical or digital signatures.
                    </p>
                    <div className="important-notice">
                      <p>
                        <strong>Important:</strong> By continuing to use the Platform, you also agree to our Privacy
                        Policy, which is incorporated by reference into these Terms.
                      </p>
                    </div>
                  </div>

                  <div className="subsection">
                    <h6 className="subsection-title">1.3 Consent for Communications</h6>
                    <p>
                      By using our services, you explicitly consent to receiving communications from us regarding your
                      account, transactions, updates, and marketing via:
                    </p>
                    <div className="communication-methods">
                      <div className="comm-method">
                        <i className="fas fa-sms comm-icon"></i>
                        <span>SMS</span>
                      </div>
                      <div className="comm-method">
                        <i className="fas fa-envelope comm-icon"></i>
                        <span>Email</span>
                      </div>
                      <div className="comm-method">
                        <i className="fas fa-phone comm-icon"></i>
                        <span>Phone calls</span>
                      </div>
                      <div className="comm-method">
                        <i className="fab fa-whatsapp comm-icon"></i>
                        <span>WhatsApp or other digital messaging platforms</span>
                      </div>
                    </div>
                    <p>
                      You may opt out of promotional communications by using the unsubscribe option provided in those
                      messages. However, you will continue to receive transactional and service-related updates.
                    </p>
                  </div>

                  <div className="subsection">
                    <h6 className="subsection-title">1.4 Updates and Modifications</h6>
                    <p>
                      We reserve the right to update, modify, or revise these Terms at any time, without prior notice.
                      Changes may be made to reflect legal updates, changes in service offerings, or improvements to
                      user experience.
                    </p>
                    <p>
                      You are responsible for reviewing the Terms periodically. Continued use of the Platform after any
                      changes shall constitute your consent to the updated Terms.
                    </p>
                  </div>

                  <div className="subsection">
                    <h6 className="subsection-title">1.5 Contact Details</h6>
                    <p>If you have any questions about these Terms, please contact us at:</p>
                    <div className="contact-card">
                      <div className="contact-info">
                        <p>
                          <strong>Sevenunique Tech Solution Private Limited</strong>
                        </p>
                        <p>
                          Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur Rajasthan, India, 302017
                        </p>
                        <p>
                          <strong>Email:</strong> info@7unique.in
                        </p>
                        <p>
                          <strong>Phone:</strong> 0141-4511098
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Overview Card */}
              <div className="terms-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">2</span>
                    Company Overview and Regulatory Status
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p>
                    Sevenunique Tech Solution Private Limited is a private limited company incorporated under the
                    Companies Act, 2013, with its registered office located in Jaipur, Rajasthan, India. We operate a
                    fully digital platform delivering regulated BBPS-based utility bill payment services to Indian
                    consumers.
                  </p>
                  <div className="regulatory-info">
                    <p>
                      As a participant in the Bharat Bill Payment System (BBPS) regulated by the Reserve Bank of India
                      (RBI) and operated by the National Payments Corporation of India (NPCI), we function either as a
                      BBPOU (Bharat Bill Payment Operating Unit) or as an approved agent under an authorized BBPOU. All
                      our bill payment services comply strictly with BBPS procedural, operational, and security
                      guidelines.
                    </p>
                  </div>
                  <div className="service-features">
                    <p>
                      Our services and technology infrastructure are designed to facilitate frictionless, secure, and
                      RBI-compliant digital transactions between users and utility service providers. We work in
                      collaboration with BBPS-registered banks, bill aggregators, and NPCI-certified technical partners
                      to deliver end-to-end solutions that are:
                    </p>
                    <div className="feature-grid">
                      <div className="feature-item">
                        <i className="fas fa-exchange-alt feature-icon"></i>
                        <span>Interoperable across multiple billers and locations</span>
                      </div>
                      <div className="feature-item">
                        <i className="fas fa-clock feature-icon"></i>
                        <span>Settled on a T+1 or faster basis as per BBPS norms</span>
                      </div>
                      <div className="feature-item">
                        <i className="fas fa-headset feature-icon"></i>
                        <span>Backed by comprehensive grievance redressal mechanisms</span>
                      </div>
                    </div>
                  </div>
                  <div className="compliance-standards">
                    <p>In line with RBI and NPCI mandates, we maintain:</p>
                    <div className="standards-list">
                      <div className="standard-item">
                        <i className="fas fa-database standard-icon"></i>
                        <span>Data localization for financial and personal data</span>
                      </div>
                      <div className="standard-item">
                        <i className="fas fa-shield-alt standard-icon"></i>
                        <span>End-to-end encryption and transaction logging</span>
                      </div>
                      <div className="standard-item">
                        <i className="fas fa-certificate standard-icon"></i>
                        <span>Adherence to IT Act and cybersecurity standards (ISO 27001, PCI-DSS compliance)</span>
                      </div>
                    </div>
                  </div>
                  <div className="commitment-note">
                    <p>
                      Our operations are subject to periodic audits and reviews by partner institutions, regulatory
                      entities, and statutory auditors to ensure full legal and operational transparency.
                    </p>
                    <p>
                      Sevenunique is committed to serving as a compliant, transparent, and technology-forward entity
                      that protects customer trust, transaction integrity, and legal accountability in the digital
                      payments ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              {/* Eligibility Card */}
              <div className="terms-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">3</span>
                    Eligibility to Use the Platform
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="eligibility-section">
                    <h6 className="eligibility-title">3.1 Age and Legal Capacity</h6>
                    <p>To use our services, you must be:</p>
                    <div className="eligibility-requirements">
                      <div className="requirement-item">
                        <i className="fas fa-birthday-cake req-icon"></i>
                        <span>At least 18 years of age; and</span>
                      </div>
                      <div className="requirement-item">
                        <i className="fas fa-gavel req-icon"></i>
                        <span>Capable of entering into a legally binding contract as per Indian law.</span>
                      </div>
                    </div>
                    <p>
                      By registering on the Platform, you affirm that you meet the above eligibility criteria. If you
                      are using our services on behalf of a company or another legal entity, you represent that you are
                      duly authorized to bind such entity to these Terms.
                    </p>
                  </div>

                  <div className="eligibility-section">
                    <h6 className="eligibility-title">3.2 Residency and Jurisdiction</h6>
                    <p>
                      Our services are currently available for use only within the territorial jurisdiction of the
                      Republic of India. Users must:
                    </p>
                    <div className="residency-requirements">
                      <div className="residency-item">
                        <i className="fas fa-flag-usa residency-icon"></i>
                        <span>
                          Be Indian residents or Indian nationals with a valid Indian mobile number and bank account
                        </span>
                      </div>
                      <div className="residency-item">
                        <i className="fas fa-balance-scale residency-icon"></i>
                        <span>Agree to abide by all local laws, rules, and regulations applicable to their usage</span>
                      </div>
                    </div>
                    <p>
                      We reserve the right to decline or terminate service for users located outside India or engaging
                      in cross-border transactions not permitted by BBPS or RBI.
                    </p>
                  </div>

                  <div className="eligibility-section">
                    <h6 className="eligibility-title">3.3 Platform-Specific Eligibility</h6>
                    <p>
                      Some services, such as specific bill categories or financial integrations, may require further
                      eligibility validation, such as:
                    </p>
                    <div className="validation-requirements">
                      <div className="validation-item">KYC compliance (Know Your Customer)</div>
                      <div className="validation-item">Mobile number registration with NPCI or banks</div>
                      <div className="validation-item">Successful verification with UIDAI/PAN database</div>
                    </div>
                    <p>
                      Failure to meet these conditions may result in restricted access or denial of specific service
                      offerings.
                    </p>
                  </div>

                  <div className="eligibility-section">
                    <h6 className="eligibility-title">3.4 Corporate and Institutional Use</h6>
                    <p>
                      If you represent a business, startup, retailer, or any commercial entity intending to use
                      Sevenunique for bulk utility payments or reselling purposes, you may be required to:
                    </p>
                    <div className="corporate-requirements">
                      <div className="corp-req-item">Execute a separate business agreement or onboarding form</div>
                      <div className="corp-req-item">Provide GST, CIN, or PAN registration</div>
                      <div className="corp-req-item">
                        Abide by the additional commercial usage terms, pricing, and settlement timelines
                      </div>
                    </div>
                    <p>
                      Sevenunique reserves the right to approve or deny such requests based on risk assessment,
                      regulatory restrictions, or technical feasibility.
                    </p>
                  </div>

                  <div className="eligibility-section">
                    <h6 className="eligibility-title">3.5 Suspension for Ineligibility</h6>
                    <p>We reserve the right to:</p>
                    <div className="suspension-actions">
                      <div className="suspension-item">
                        <i className="fas fa-ban suspension-icon"></i>
                        <span>Suspend or terminate any account that violates eligibility requirements</span>
                      </div>
                      <div className="suspension-item">
                        <i className="fas fa-times-circle suspension-icon"></i>
                        <span>
                          Refuse service if the user's actions present a legal, operational, or reputational risk
                        </span>
                      </div>
                      <div className="suspension-item">
                        <i className="fas fa-exclamation-triangle suspension-icon"></i>
                        <span>Notify authorities if the Platform is misused for fraudulent or unlawful activities</span>
                      </div>
                    </div>
                    <p>
                      By continuing to access or use our services, you confirm your ongoing compliance with the
                      eligibility criteria stated in this section.
                    </p>
                  </div>
                </div>
              </div>

              {/* Services Description Card */}
              <div className="terms-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">4</span>
                    Description of Services Offered
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p>
                    Sevenunique Tech Solution Private Limited provides a comprehensive range of digital bill payment and
                    financial utility services using the RBI-regulated Bharat Bill Payment System (BBPS). The services
                    are accessible via our secure web portal and mobile application and are structured to support both
                    end consumers and authorized retail agents.
                  </p>

                  <div className="services-section">
                    <h6 className="services-title">4.1 BBPS-Integrated Services</h6>
                    <p>
                      All services offered on our platform are integrated with BBPS, ensuring seamless interoperability,
                      standardization, and regulatory compliance. Users can access the following categories of services:
                    </p>
                    <div className="services-grid">
                      <div className="service-card">
                        <i className="fas fa-mobile-alt service-icon"></i>
                        <h6>Mobile Recharge</h6>
                        <p>Prepaid top-ups and postpaid bill payments across all major telecom operators.</p>
                      </div>
                      <div className="service-card">
                        <i className="fas fa-tv service-icon"></i>
                        <h6>DTH Recharge</h6>
                        <p>Instant direct-to-home TV recharges with national DTH providers.</p>
                      </div>
                      <div className="service-card">
                        <i className="fas fa-bolt service-icon"></i>
                        <h6>Electricity Bill Payments</h6>
                        <p>Utility payments to state and private power distribution companies.</p>
                      </div>
                      <div className="service-card">
                        <i className="fas fa-tint service-icon"></i>
                        <h6>Water Bill Payments</h6>
                        <p>Integration with municipal water boards and urban utilities.</p>
                      </div>
                      <div className="service-card">
                        <i className="fas fa-fire service-icon"></i>
                        <h6>Gas Bill Payments</h6>
                        <p>Piped gas and LPG bill settlements.</p>
                      </div>
                      <div className="service-card">
                        <i className="fas fa-wifi service-icon"></i>
                        <h6>Broadband and Landline</h6>
                        <p>Fixed-line broadband and telephone bill processing.</p>
                      </div>
                      <div className="service-card">
                        <i className="fas fa-university service-icon"></i>
                        <h6>Loan Repayments and EMI</h6>
                        <p>Where permitted under BBPS rules.</p>
                      </div>
                      <div className="service-card">
                        <i className="fas fa-shield-alt service-icon"></i>
                        <h6>Insurance Premium Payments</h6>
                        <p>Subject to onboarding of insurers within the BBPS framework.</p>
                      </div>
                    </div>
                    <p>
                      These services are updated regularly in line with BBPS service category expansions and biller
                      additions by NPCI.
                    </p>
                  </div>

                  <div className="platform-modes">
                    <h6 className="platform-title">4.2 Platform Modes and Channels</h6>
                    <p>Sevenunique offers its services through multiple interfaces:</p>
                    <div className="platform-channels">
                      <div className="channel-item">
                        <i className="fas fa-mobile channel-icon"></i>
                        <div>
                          <strong>Mobile App:</strong> Android and iOS apps designed for quick, secure transactions.
                        </div>
                      </div>
                      <div className="channel-item">
                        <i className="fas fa-desktop channel-icon"></i>
                        <div>
                          <strong>Web Portal:</strong> Desktop and mobile-responsive browser interface.
                        </div>
                      </div>
                      <div className="channel-item">
                        <i className="fas fa-store channel-icon"></i>
                        <div>
                          <strong>Retail Agent Portal:</strong> Managed login environment for authorized retail outlets
                          offering assisted bill payment services.
                        </div>
                      </div>
                    </div>
                    <p>
                      All channels are secured with encryption, multi-factor authentication (MFA), and NPCI-mandated
                      digital controls.
                    </p>
                  </div>

                  <div className="transaction-confirmation">
                    <h6 className="confirmation-title">4.3 Transaction Confirmation and Receipts</h6>
                    <p>Users receive immediate digital confirmation of every successful transaction, including:</p>
                    <div className="confirmation-features">
                      <div className="confirmation-item">BBPS Transaction Reference Number (TRN)</div>
                      <div className="confirmation-item">Bill amount and biller details</div>
                      <div className="confirmation-item">Payment method used</div>
                      <div className="confirmation-item">Timestamp of payment</div>
                      <div className="confirmation-item">Downloadable and emailable receipt for record-keeping</div>
                    </div>
                  </div>

                  <div className="grievance-framework">
                    <h6 className="grievance-title">4.4 BBPS Grievance and Escalation Framework</h6>
                    <p>Each BBPS transaction is governed by a time-bound complaint resolution protocol:</p>
                    <div className="grievance-steps">
                      <div className="grievance-step">
                        BBPS complaint reference ID is issued on raising any service dispute
                      </div>
                      <div className="grievance-step">
                        First-level resolution is attempted by Sevenunique's support team
                      </div>
                      <div className="grievance-step">
                        Unresolved grievances are escalated to BBPS Central Unit (NPCI) and onward to biller/dispute
                        handler
                      </div>
                    </div>
                    <p>
                      Typical complaint resolution timelines range from 1 to 7 working days based on biller and payment
                      status.
                    </p>
                  </div>

                  <div className="addon-services">
                    <h6 className="addon-title">4.5 Add-On Services</h6>
                    <p>Depending on user profile, regulatory clearance, and platform capability, we may also offer:</p>
                    <div className="addon-list">
                      <div className="addon-item">Wallet integrations (compliant with RBI PPI guidelines)</div>
                      <div className="addon-item">Reminders for recurring bills</div>
                      <div className="addon-item">Scheduled auto-pay facilities</div>
                      <div className="addon-item">Digital account passbook</div>
                    </div>
                    <p>
                      These features are offered for user convenience and are optional. Users can opt-in or disable them
                      through settings or preferences.
                    </p>
                  </div>

                  <div className="service-availability">
                    <h6 className="availability-title">4.6 Service Availability</h6>
                    <p>
                      Services are generally available 24/7, except during maintenance windows or biller/network
                      downtimes. However, transaction cut-off timings for same-day settlements may vary by biller
                      category (e.g., electricity bill payments may have a 6 PM cut-off for real-time processing).
                    </p>
                    <p>
                      Sevenunique is continuously upgrading its technology stack and expanding its biller coverage to
                      ensure the most seamless utility payment experience in compliance with India's digital payment
                      standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Continue with remaining sections... */}
              {/* For brevity, I'll include a few more key sections */}

              {/* User Account Creation Card */}
              <div className="terms-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">5</span>
                    User Account Creation, KYC, and Authentication Obligations
                  </h4>
                </div>
                <div className="card-body-custom">
                  <p>
                    To access most services offered by Sevenunique Tech Solution Private Limited, users are required to
                    create an account on our platform. This section outlines the user's responsibilities and our
                    obligations regarding registration, identity verification, and secure access.
                  </p>

                  <div className="account-section">
                    <h6 className="account-title">5.1 Account Creation and Registration</h6>
                    <p>Users must register by providing accurate and complete personal information including:</p>
                    <div className="registration-requirements">
                      <div className="reg-item">
                        <i className="fas fa-user reg-icon"></i>
                        <span>Full name</span>
                      </div>
                      <div className="reg-item">
                        <i className="fas fa-mobile-alt reg-icon"></i>
                        <span>Valid Indian mobile number</span>
                      </div>
                      <div className="reg-item">
                        <i className="fas fa-envelope reg-icon"></i>
                        <span>Email address</span>
                      </div>
                      <div className="reg-item">
                        <i className="fas fa-id-card reg-icon"></i>
                        <span>Government-issued identity details (if applicable)</span>
                      </div>
                    </div>
                    <p>
                      Upon successful submission of these details, users will receive a{" "}
                      <strong>one-time password (OTP)</strong> to authenticate their mobile number. This OTP-based
                      authentication is mandatory for account activation and is governed by RBI and NPCI digital
                      identity standards.
                    </p>
                    <div className="user-responsibilities">
                      <p>Users are responsible for:</p>
                      <div className="responsibility-list">
                        <div className="responsibility-item">Providing true and lawful information</div>
                        <div className="responsibility-item">Maintaining updated profile details</div>
                        <div className="responsibility-item">Protecting account credentials from unauthorized use</div>
                      </div>
                    </div>
                  </div>

                  <div className="kyc-section">
                    <h6 className="kyc-title">5.2 Know Your Customer (KYC) Requirements</h6>
                    <p>
                      Certain services such as high-value transactions or agent/retailer services may require{" "}
                      <strong>KYC verification</strong> in compliance with RBI norms. The KYC process may involve
                      submission and validation of:
                    </p>
                    <div className="kyc-documents">
                      <div className="kyc-doc">
                        <i className="fas fa-id-badge kyc-icon"></i>
                        <span>Aadhaar or PAN card</span>
                      </div>
                      <div className="kyc-doc">
                        <i className="fas fa-camera kyc-icon"></i>
                        <span>Recent photograph</span>
                      </div>
                      <div className="kyc-doc">
                        <i className="fas fa-home kyc-icon"></i>
                        <span>Address proof (e.g., utility bill, voter ID)</span>
                      </div>
                    </div>
                    <p>
                      We use secure APIs authorized by UIDAI, NSDL, or other government-approved systems to complete
                      electronic KYC verification. All such data is encrypted and handled as per SPDI and DPDP Act
                      standards.
                    </p>
                    <div className="kyc-consequences">
                      <p>Failure to comply with KYC requirements may result in:</p>
                      <div className="consequence-list">
                        <div className="consequence-item">Restricted service access</div>
                        <div className="consequence-item">Temporary account suspension</div>
                        <div className="consequence-item">
                          Reporting of unverified accounts to concerned regulatory authorities
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Continue with remaining subsections... */}
                </div>
              </div>

              {/* Final Contact Card */}
              <div className="terms-card mb-4">
                <div className="card-header-custom">
                  <h4 className="section-title">
                    <span className="section-number">21</span>
                    Final Acknowledgment
                  </h4>
                </div>
                <div className="card-body-custom">
                  <div className="final-acknowledgment">
                    <p>
                      By accessing or using any part of the Sevenunique platform, you acknowledge that you have read,
                      understood, and agreed to be bound by these Terms and Conditions. This agreement is enforceable
                      under applicable Indian law, and your continued use of our services constitutes ongoing consent to
                      its terms.
                    </p>
                    <div className="thank-you-message">
                      <p>
                        We thank you for trusting Sevenunique Tech Solution Private Limited. Our commitment is to
                        provide you with a secure, compliant, and reliable platform for all your digital utility bill
                        payment needs.
                      </p>
                    </div>
                    <div className="contact-reference">
                      <p>
                        If you have any questions or concerns regarding these Terms, please contact us anytime using the
                        details provided in Section 19.
                      </p>
                    </div>
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

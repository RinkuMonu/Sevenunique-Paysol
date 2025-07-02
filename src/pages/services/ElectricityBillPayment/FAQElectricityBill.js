import React from "react";

import { TbLocationFilled } from "react-icons/tb";
import {
  FaQuestion
} from "react-icons/fa";

const SevenUniqueElectricityBill = () => {
  return (
    <>


      {/* Intro */}
      <section className="mt-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">
            Electricity bill payment online- BBPS- Powered, safe, and immediate
          </h2>
          <p className="text-center col-md-10 mx-auto fs-5">
           Immediately pay electricity bills across India with the SevenUnique reliable BBPS platform that offers real-time updates, zero additional fees, and multi-operator coverage.
          </p>
        </div>
      </section>

      {/* How to Pay */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            How to Pay your electricity bill through SevenUnique online
          </h2>
          <div className="row g-4">
            {[
              "Go to 'Recharge and Bill Payment' section on the website or app",
              "Select 'Electricity' as a bill category",
              "Electricity bill payment online- BBPS- Powered, safe, and immediateChoose your electricity board/operator from dropdown",
              "Enter your consumer/account number",
              "The system will automatically receive your latest bill",
              "Click 'Continue' and verify the bill details",
              "Select your favorite payment method and click 'Pay'",
              "Get immediate confirmation and use your digital receipt through email or app"
            ].map((step, i) => (
              <div key={i} className="col-md-6">
                <div
                  className="p-3 shadow-sm rounded-4 bg-white h-100 d-flex align-items-start"
                  style={{ borderLeft: "4px solid #b53008" }}
                >
                  <div className="me-3 fs-4 fw-bold text-theme">{i + 1}</div>
                  <div>{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Boards */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Electricity Boards on SevenUnique BBPS</h2>
          <p className="mb-4 fs-5">
            Our platform supports electricity bill payments across 25+ Indian states and regional electricity boards, including:
          </p>
          <div className="row justify-content-center">
            {[
              "JVVNL, AVVNL, JDVVNL (Rajasthan)",
              "BSES Rajdhani / Yamuna (Delhi)",
              "TNEB, MSEB, PSPCL, UPPCL",
              "BESCOM, MESCOM, HESCOM, APSPDCL, APEPDCL",
              "WBSEDCL, CESC, NBPDCL, SBPDCL, DGVCL, UGVCL, PGVCL",
              "And many more state-regulated DISCOMs"
            ].map((board, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">
                  {board}
                </div>
              </div>
            ))}
          </div>
          <p className="fs-5">Our BBPS electricity bill payment system ensures nationwide coverage, fast access, and real-time syncing with operators.</p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Why Choose SevenUnique for Electricity Bill Payments?
          </h2>


<div className="row g-4 fs-5">
  {[
    "BBPS-Compliant Platform – Secure, real-time connection to all major boards",
    "Zero Transaction Charges – Pay electricity bills online with no extra fees",
    "Multiple Payment Modes – UPI, debit/credit card, wallet, net banking",
    "24/7 Access – Recharge or pay bills anytime, even on holidays",
    "Full Digital Receipt – Easily download or share your transaction history",
    "Attractive Offers – Get discounts, promo codes, and SuperCash rewards",
    "User-Friendly Dashboard – Works perfectly on both mobile and desktop",
    "RBI-Approved Payment Flow – Ensures your data and money stay secure"
  ].map((benefit, i) => (
    <div key={i} className="col-md-6">
      <div className="bg-white p-4 rounded-4 shadow-sm h-100 d-flex align-items-start gap-2">
        <TbLocationFilled className="text-theme fs-4 me-2" />
        <span>{benefit}</span>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Offers & Retailers */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center text-theme">Electricity Bill Offers & Coupons</h2>
          <p className="text-center col-md-8 mx-auto mb-5 fs-5">
            Enjoy 5% SuperCash up to ₹50 on your first electricity bill payment via our platform. Minimum transaction: ₹300. Maximum reward: ₹50. Visit our Electricity Bill Offers page regularly for updated coupons and cashback codes.
          </p>
          <h3 className="fw-bold mb-3 text-center text-theme ">Benefits for Retailers & BBPS Agents</h3>
          <p className="fs-5">Retail shop owners, CSC operators, and entrepreneurs can use our platform to provide utility bill payment services and earn commissions on every successful transaction.
</p>
          <ul className="fs-5">
            <li>Serve your local community with real-time bijli bill payments</li>
            <li>No complex setup – start with just a smartphone</li>
            <li>Instant commission credit on every bill payment</li>
            <li>Access to full transaction history and support via partner dashboard</li>
            <li>Grow footfall and trust with value-added BBPS services</li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
          <div className="row">
            {[
              {
                q: "How can I check my electricity bill online?",
                a: "Open the app or website, go to ‘Electricity’, select your operator, and enter your account details to fetch your latest bill."
              },
              {
                q: "Is online electricity bill payment secure on SevenUnique?",
                a: "Yes. We use RBI-authorized, BBPS-integrated, encrypted infrastructure to ensure secure and fraud-proof payments."
              },
              {
                q: "How quickly is my bill payment updated?",
                a: "Almost instantly. Most electricity boards reflect payments in real-time with a confirmation message and digital receipt."
              },
              {
                q: "What if the payment fails?",
                a: "In case of a failed transaction, your amount is auto-refunded. Our 24x7 Jaipur-based support team is always available to assist you."
              },
              {
                q: "Can I pay bills for others?",
                a: "Yes. Just enter the correct consumer/account number and proceed with the payment."
              }
            ].map((faq, i) => (
              <div key={i} className="col-md-6 mb-4">
                <div className="p-3 border rounded shadow-sm bg-white h-100">
                  <h5 className="fw-bold">
                                          <FaQuestion className="me-2 text-theme" />
                                          {faq.q}
                                        </h5>

                  <p className="text-muted small">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="start-bgg text-white py-5 text-center mb-3">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">
            Pay Electricity Bills the Smart Way – With SevenUnique
          </h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Whether you're in Rajasthan, Delhi, Maharashtra, or Karnataka, we offer a fast, secure, and commission-free BBPS electricity bill payment solution. Enjoy nationwide service, user-friendly experience, and complete transaction peace of mind.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="/registerform" className="btn custombtn-hover">
              Pay Your Electricity Bill Now
            </a>
            <a href="#top" className="btn custombtn-hover">
              Become a BBPS Partner
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SevenUniqueElectricityBill;

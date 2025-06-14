import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  FaGasPump,
  FaShieldAlt,
  FaReceipt,
  FaClock,
  FaMobileAlt,
  FaUserTie,
  FaMoneyBillWave,
} from "react-icons/fa";

const gasProviders = [
  "Indraprastha Gas Limited (IGL)",
  "Mahanagar Gas Limited (MGL)",
  "Gujarat Gas",
  "Adani Total Gas",
  "GAIL Gas",
  "HP Gas",
  "Bharat Gas",
  "Indian Oil (Indane)",
  "Tripura Natural Gas Company",
  "Assam Gas Company",
];

const gasSteps = [
  "Visit the Bill Payment section on the ABDKS website or app.",
  "Select Gas as the category.",
  "Choose your service provider from the dropdown.",
  "Enter your Consumer Number / Customer ID.",
  "View bill details fetched automatically.",
  "Confirm the amount and pay via UPI, card, wallet, or net banking.",
  "Receive instant confirmation and digital receipt.",
];

const gasBenefits = [
  {
    icon: <FaClock />,
    title: "24x7 Bill Payment",
    desc: "Pay gas bills any time, even on weekends or holidays.",
  },
  {
    icon: <FaReceipt />,
    title: "Instant Confirmation",
    desc: "Real-time confirmation and receipt generation.",
  },
  {
    icon: <FaGasPump />,
    title: "LPG & Piped Gas",
    desc: "Support for all gas types under one platform.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Multiple Payment Modes",
    desc: "Pay using UPI, cards, wallets, or net banking.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Transactions",
    desc: "Fully encrypted and compliant with RBI standards.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Optimized",
    desc: "Works great on mobile, tablet, and desktop devices.",
  },
];

const gasRetailerInfo = [
  {
    icon: <FaUserTie />,
    title: "Serve Local Customers",
    desc: "Provide gas bill services from your shop or center.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Earn Commission",
    desc: "Get paid for every gas bill processed via ABDKS.",
  },
  {
    icon: <FaReceipt />,
    title: "Dashboard Access",
    desc: "Get real-time payment reports and service logs.",
  },
];

const gasFAQs = [
  {
    title: "Which gas companies are supported for bill payment?",
    content:
      "We support major LPG and piped gas providers including IGL, MGL, Adani Gas, Bharat Gas, Indane, and more.",
  },
  {
    title: "How soon is the payment confirmed?",
    content: "Gas bill payments are confirmed instantly with digital receipts.",
  },
  {
    title: "Can I pay someone else's gas bill?",
    content:
      "Yes, simply enter their consumer number or customer ID to proceed with payment.",
  },
  {
    title: "Are there any extra charges?",
    content:
      "No, ABDKS does not charge additional fees for gas bill payments.",
  },
];

const FAQGasBillPayment = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const content = [
    {
      title: "About Online Gas Bill Payment",
      body: (
        <>
          <p>
            With the increased use of smartphones and one click payment
            services, online gas bill payments are now easier than ever. Paying
            gas bills online is fast, easy and highly secured. There are
            multiple options available to make gas bill payment online through
            website . No need to spend hours in long queues, SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. is one of
            the best ways to complete online gas bill payment in less than a
            minute.
          </p>
        </>
      ),
    },
    {
      title: "How to Make Gas Bill Payment Online at SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. ?",
      body: (
        <>
          <p>
            Timely gas bill payment is very important to ensure uninterrupted
            services. To avoid delays, paying gas bills online is the best way
            out. A user can make the online gas payment using the SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. app
            or by visiting the website. SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. completes the gas bill payment
            cycle in minimal steps. Below are the mentioned steps to pay gas
            bill online using the app:
          </p>
          <ol>
            <li>
              Go to the ‘Recharges & Bill payment’ section and select ‘Piped
              Gas’ on the SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. app.
            </li>
            <li>Choose your operator and enter the Customer ID.</li>
            <li>
              The user will get the bill details online, press ‘Continue’ to
              proceed.
            </li>
            <li>
              Complete the online bill payment using one of the payment methods
              like wallet, UPI, Debit/Credit.
            </li>
          </ol>
        </>
      ),
    },
    {
      title: "Benefits of Gas Bill Payment Online",
      body: (
        <>
          <p>
            The benefits of gas bill payment online are hard to ignore. In the
            busy life, paying gas bills online is the best and fastest way. With
            instant online payment platforms like SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. , online gas payment
            is now easier than ever.
          </p>
          <ul>
            <li>
              <strong>Secured payments:</strong> Gone are the days when online
              transactions were the reason to be worried. With payment methods
              like SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. , user’s money, data, and transactions are highly
              protected.
            </li>
            <li>
              <strong>One tap away:</strong> All a user needs to do is open the
              app or website and make one click to complete the online gas
              payment. It is that fast and quick.
            </li>
            <li>
              <strong>Easy to pay:</strong> The account setup to make the online
              gas payment is very simple. No paperwork or formalities are
              required, a user just needs to add the payment details and the gas
              bill payment is done.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Why Use SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. for Gas Bill Payment?",
      body: (
        <>
          <p>
            SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. , one of India’s largest digital payment apps, offers you
            fast, smooth, and hassle-free transactions. It not just saves time
            but also excites you with many gas bill payment offers. Gas payment
            was never this easy before; using the SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. app it is a few-step
            process. Here are the few listed benefits of using the SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. app
            to pay gas bills:
          </p>
          <ul>
            <li>
              <strong>Instant Payments:</strong> Pay gas bills quickly in almost
              less than a minute using the SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. app. It’s easy and with
              multiple payment modes becomes convenient for a user.
            </li>
            <li>
              <strong>More discounts:</strong> Using the SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. app, a user
              can get unlimited offers and discounts on every gas payment. One
              can avail of gas bill offers and save more on every checkout.
            </li>
            <li>
              <strong>Secured Transactions:</strong> While paying the gas bill
              using SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. , safety is guaranteed to the user. The user data
              and account details are highly protected.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions on Gas Bill Payment Online",
      body: (
        <ul>
          <li>
            <strong>How do I pay my gas bill online?</strong>
            <br />
            To pay the gas bill, a user can simply visit the SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. website or
            open the app. In the ‘Recharge and bill payments’ section, one has
            to select the option ‘Piped gas’. Select the operator name and add
            the customer id. The user will get the bill details automatically.
            By clicking on ‘Continue’ one can make the gas bill payment choosing
            their desired payment mode.
          </li>
          <li>
            <strong>Can I pay my gas bill with a credit card?</strong>
            <br />
            Yes. To make a gas bill payment using a credit card, a user has to
            select the mode of payment as ‘Credit card’ and enter their details.
            The gas bill payment through the SEVENUNIQUE TECH SOLUTIONS PRIVATE LIMITED. app will be successful.
          </li>
          <li>
            <strong>How do I calculate my gas bill?</strong>
            <br />
            In order to know your gas bill, a user can note the meter reading
            and simply send it to their respective operator. The gas bill will
            be received via registered contact details.
          </li>
          <li>
            <strong>How much is your average gas bill?</strong>
            <br />
            The average gas bill of a user depends on the usage and the
            frequency. To know about the gas bill, one can contact their
            respective operator for the details.
          </li>
          <li>
            <strong>Can a gas leak cause a high gas bill?</strong>
            <br />
            There are possibilities that a gas leak may result in a high gas
            bill. The bill raised to the end user is as per the usage, if the
            usage is more, the gas bill will be higher.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      {isMobile ? (
        <Accordion>
          {content.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : (
        <div className="p-5">
          {content.map((item, index) => (
            <div key={index} style={{ marginBottom: "1rem" }}>
              <h3>{item.title}</h3>
              {item.body}
            </div>
          ))}
        </div>
      )}
       {/* Hero */}
      <section className="py-5  text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Gas Bill Payments Made Easy</h1>
          <p className="lead mt-3">
            Pay LPG and piped gas bills online with ABDKS — fast, safe, and simple.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">How to Pay Your Gas Bill</h2>
          <div className="row g-4">
            {gasSteps.map((step, i) => (
              <div key={i} className="col-md-6">
                  <div className="p-3 shadow-sm rounded-4 bg-white h-100 d-flex align-items-start" style={{ borderLeft: "4px solid #b53008" }}>
                  <div className="me-3 fs-4 fw-bold text-theme">{i + 1}</div>
                  <div>{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Providers */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Supported Gas Providers</h2>
          <div className="row justify-content-center">
            {gasProviders.map((provider, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="text-white p-3 rounded shadow-sm fs-5 primary-bg">{provider}</div>
              </div>
            ))}
          </div>
          <p className="text-muted mt-3">*Availability depends on your region.</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Why Choose ABDKS?</h2>
          <div className="row g-4">
            {gasBenefits.map((benefit, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white p-4 rounded-4 shadow-sm text-center h-100">
                  <div className="text-theme fs-2 mb-3">{benefit.icon}</div>
                  <h5 className="fw-semibold">{benefit.title}</h5>
                  <p className="text-muted small">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retailers */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">For Retailers & Local Agents</h2>
          <p className="lead mb-5">Start offering gas bill services and boost your earnings.</p>
          <div className="row g-4">
            {gasRetailerInfo.map((item, i) => (
              <div key={i} className="col-md-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100">
                  <div className="text-theme fs-2 mb-3">{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p className="small text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Frequently Asked Questions</h2>
          {isMobile ? (
            <Accordion>
              {gasFAQs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="row">
              {gasFAQs.map((faq, i) => (
                <div key={i} className="col-md-6 mb-4">
                  <div className="p-3 bg-white shadow-sm rounded border h-100">
                    <h5 className="fw-bold">{faq.title}</h5>
                    <p className="text-muted small">{faq.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 grediant-bg2 text-white text-center mb-3">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">Pay Your Gas Bill in Minutes</h2>
          <p className="lead col-lg-8 mx-auto mb-4">
            Fast, secure, and convenient — use ABDKS for all your gas bill needs.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Pay Your Gas Bill Now</button>
            <button className="btn btn-outline-light fw-bold px-4 py-2">Join as a Retailer</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQGasBillPayment;

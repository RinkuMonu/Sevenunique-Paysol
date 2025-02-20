import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQElectricityBill = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size change
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as per your design
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const content = [
    {
      title: "How to Make Electricity Bill Payment Online",
      body: (
        <>
          <p>
            Paying bills is now a seamless and quick process via online means. A
            user can easily make online electricity bill payment easily with
            Sevenunique Small Pvt. Ltd. website. Any user can make their online electricity bill
            payment instantly in a few simple steps. To pay their bijli bill
            online, the users shall go to the Sevenunique Small Pvt. Ltd. website and follow the
            mentioned steps. our Website to get offers on the electricity bill
            payment.
          </p>
          <ol>
            <li>
              Go to the ‘Recharge’ section on the Sevenunique Small Pvt. Ltd. app/website and
              select ‘Electricity’.
            </li>
            <li>Select ‘electricity’ from the operator dropdown.</li>
            <li>Select the respective operator from the dropdown.</li>
            <li>Type in your consumer number and click on ‘Go’.</li>
            <li>Your bill will appear on the screen. Click on ‘Continue’.</li>
            <li>
              Click on ‘Make Payment’ and enter necessary payment details to
              complete your electricity bill payment.
            </li>
          </ol>
          <p>
            You can make online electricity bill payments via Sevenunique Small Pvt. Ltd. across
            various operators such as TNEB, WBSEDCL, JVVNL, NBPDCL, PSPCL,
            SBPDCL, DHBVN, APDCL, BESCOM, UHBVN, APSPDCL, CESC, UGVCL, DGVCL,
            CSEB, HESCOM, PGVCL, APEPDCL, BSES Rajdhani, BSES Yamuna, DVVNL,
            MVVNL, PUVVNL, PVVNL, KESCO, and many more.
          </p>
        </>
      ),
    },
    {
      title: "Why Choose Sevenunique Small Pvt. Ltd. for Electricity Bill Payment?",
      body: (
        <>
          <p>
            Sevenunique Small Pvt. Ltd. is the ideal platform for making electricity online
            payments. Electricity bill payment via Sevenunique Small Pvt. Ltd. offers many perks to
            the users:
          </p>
          <ul>
            <li>Easily view electricity bill status.</li>
            <li>Exciting offers, discounts, SuperCash, and Cashbacks.</li>
            <li>Instant payment with no delays.</li>
            <li>Highly reliable and secure digital payments platform.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Electricity Bill Payment Online At Sevenunique Small Pvt. Ltd.",
      body: (
        <>
          <p>
            Sevenunique Small Pvt. Ltd., a reliable and user-friendly digital payment wallet,
            enables easy electricity bill payments. Users can:
          </p>
          <ul>
            <li>Pay their electricity bills instantly.</li>
            <li>
              Avail huge discounts, SuperCash, Cashback, and other offers.
            </li>
            <li>
              Pay bills across all major regions like Maharashtra, Bihar, Delhi
              NCR, Rajasthan, and more.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Electricity Bill Offers | Electricity Coupon Codes at Sevenunique Small Pvt. Ltd.",
      body: (
        <>
          <p>
            Get 5% up to Rs.50 SuperCash on electricity bill payments done on
            the Sevenunique Small Pvt. Ltd. App or website. Minimum amount spend to redeem the
            SuperCash is Rs.300 & maximum is Rs.50. To know more, visit our
            Sevenunique Small Pvt. Ltd. Electricity Bill Offers page.
          </p>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions About Electricity Bill Payment",
      body: (
        <>
          <p>Here are some common questions about electricity bill payment:</p>
          <ul>
            <li>
              <strong>How to check electricity bill online in India?</strong>{" "}
              You can check your electricity bill using the Truly Indian
              Payments App, Sevenunique Small Pvt. Ltd. Simply select ‘Electricity’ under the
              ‘Recharge and Bill Payment’ section, choose your operator, and
              provide your account details.
            </li>
            <li>
              <strong>How to calculate electricity bill?</strong> For example,
              if you use a tube light of 1000W for an hour, you consume 1kWh = 1
              Unit of energy. Multiply this by your cost per unit to calculate
              the bill.
            </li>
            <li>
              <strong>
                How to get a receipt for electricity bill payment online?
              </strong>{" "}
              Visit your payment history on the Sevenunique Small Pvt. Ltd. app to view and
              download the receipt.
            </li>
            <li>
              <strong>How to pay the light bill online?</strong> Open the
              Sevenunique Small Pvt. Ltd. app, click on ‘Electricity’ in the ‘Recharge & Bill
              Payments’ section, select your operator, provide account details,
              and make the payment.
            </li>
            <li>
              <strong>How to check electricity bill status online?</strong> Use
              the Sevenunique Small Pvt. Ltd. app, select electricity and your operator, provide
              account details, and view your bill status.
            </li>
            <li>
              <strong>
                How can I check my electricity bill online in Karnataka?
              </strong>{" "}
              Visit the Sevenunique Small Pvt. Ltd. website or download the Sevenunique Small Pvt. Ltd. app to resolve
              queries related to electricity bills in Karnataka.
            </li>
          </ul>
        </>
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
    </>
  );
};

export default FAQElectricityBill;
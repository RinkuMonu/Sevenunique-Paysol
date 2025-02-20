import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQLandline = () => {
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
      title: "Landline Bill Payment Online",
      body: (
        <>
          <p>
            Sevenunique Small Pvt Ltd introduces new service to their consumers to
            pay their landline bills online. Now there is no need to stand in
            the long queue to pay their landline bills for hours. Sevenunique
            allows their consumers to pay Airtel Landline, MTNL Delhi, Reliance
            Communications and Tata Teleservices bills online. Pay landline
            bills online using multiple payment options such as your debit
            cards, credit cards, net banking. Sevenunique Small Pvt Ltd offers
            their consumers the ability to pay landline bills online anytime
            and from anywhere by using their various channels such as online,
            mobile site, android app, iPhone app, blackberry, SMS, IVRS etc.
          </p>
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

export default FAQLandline;

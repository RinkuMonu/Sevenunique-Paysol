import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQInsurancePayment = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const content = [
    {
      title: 'About Insurance Premium Payment',
      body: (
        <>
          <p>
            Insurance is just like a safety cushion that people avail for themselves in times of emergency. The insurance policy serves as a legal contract between the insurer and you. Premium payments are one of the conditions you need to follow to get the benefits you are promised in the insurance policy. The date and the frequency of the insurance premium payment are determined at the time of policy purchase.
          </p>
          <p>
            Sevenunique Small Pvt. Ltd. provides an easy approach for making the insurance premium payment online via the website and application. The user interface is simple and accessible to an ordinary user. You can pay for different insurance providers like ICICI Prudential, Tata AIA, and Birla Sun Life Insurance. Using the Sevenunique Small Pvt. Ltd. application enables you to make the online insurance payment of premiums from the place and time of your convenience. You can make the payment without paying any extra costs.
          </p>
        </>
      ),
    },
    {
      title: 'How to Pay Life Insurance Premiums Online?',
      body: (
        <>
          <p>
            Using Sevenunique Small Pvt. Ltd. to make a life insurance online payment is fairly simple. You do not need to sign up every time you use the Sevenunique Small Pvt. Ltd. App or Website. Instead, follow the simple steps listed below, and you are done!
          </p>
          <ol>
            <li>Download the Sevenunique Small Pvt. Ltd. App.</li>
            <li>Click on 'Recharge/ Bill Pay' option on the home page.</li>
            <li>Now select 'Insurance' from the available options.</li>
            <li>Select your insurance premium operator.</li>
            <li>Enter your policy number.</li>
            <li>Enter your date of birth and proceed with the payment option.</li>
            <li>You will get your premium details.</li>
            <li>Click on the 'Make Payment' to conclude the procedure.</li>
          </ol>
        </>
      ),
    },
    {
      title: 'Get Cashback Offers on Online Insurance Premium Payments On Sevenunique Small Pvt. Ltd.',
      body: (
        <>
          <p>
            Sevenunique Small Pvt. Ltd. knows how to take care of its customers and seeks to reward you every time you use the app. For this, you get various offers such as cashback or discounts on each payment. To grab the insurance premium payment offers, you need to initiate the payment process using Sevenunique Small Pvt. Ltd. After selecting the preferred payment mode, you will have to provide your promo code. Next, make the payment to avail of the rewards. You can also go to 'Offers' to check out the latest insurance premium payment offers and deals.
          </p>
        </>
      ),
    },
    {
      title: 'Make Your Life Insurance Premium Payment Online Securely',
      body: (
        <>
          <p>
            All the payments made using the Sevenunique Small Pvt. Ltd. App or website vow full security. You do not have to disclose any private information about yourself to Sevenunique Small Pvt. Ltd. The password will protect the basic transaction information, and you are advised not to share it with anyone.
          </p>
        </>
      ),
    },
    {
      title: 'The Flexibility Offered at the Sevenunique Small Pvt. Ltd.',
      body: (
        <>
          <p>
            Sevenunique Small Pvt. Ltd. offers complete flexibility in the modes they wish to make the payment. Some of the flexible methods are listed down:
          </p>
          <ul>
            <li>You can directly make the payments using your credit card or debit card. Sevenunique Small Pvt. Ltd. does not store your CVV number, so no one without your knowledge will be able to use your credentials to make payments.</li>
            <li>Net banking or direct transactions are also possible with the Sevenunique Small Pvt. Ltd. App or Website.</li>
            <li>Payments via UPI ID are also simple and easy to make through the Sevenunique Small Pvt. Ltd. Platform.</li>
            <li>Choose Sevenunique Small Pvt. Ltd. ZIP in case of cash crunch to make instant payments.</li>
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
        <div className='p-5'>
          {content.map((item, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <h3>{item.title}</h3>
              {item.body}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FAQInsurancePayment;

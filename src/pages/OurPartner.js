import React from "react";
import "./styles/ourpartner.css";
import {
  FaCheckCircle,
  FaHandshake,
  FaMobileAlt,
  FaUniversity,
  FaChartLine,
} from "react-icons/fa";
import {
  CheckCircle,
  HandHeart,
  Smartphone,
  Building,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Zap,
  Globe,
  Star,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Earn recurring income",
    description:
      "Get commission on every recharge, bill payment, AEPS, BBPS, and financial transaction.",
  },
  {
    icon: Zap,
    title: "Easy Setup",
    description:
      "Start with just one smartphone and an internet connection. No technical expertise is required.",
  },
  {
    icon: Shield,
    title: "Reliable and approved platform",
    description:
      "Work on BBPS and AEPS, such as the RBI- and NPCI-regulated system.",
  },
  {
    icon: Globe,
    title: "Smart digital tools",
    description:
      "Use our spontaneous dashboard to manage transactions, commissions and reports.",
  },
  {
    icon: Clock,
    title: "24x7 partner support",
    description:
      "Get dedicated assistance from our experienced Jaipur-based support team.",
  },
];

const partnershipModels = [
  {
    icon: Smartphone,
    title: "Retail Partner",
    description:
      " Offer services directly to end users and earn commission on every transaction.",
  },
  {
    icon: Users,
    title: "Distributor",
    description:
      "Build your own network of SevenUnique retailers and earn on each of their transactions.",
  },
  {
    icon: Building,
    title: "API Partner",
    description:
      "Integrate SevenUnique BBPS and AEPS services into your own app or platform.",
  },
];

const whoCanPartner = [
  "Retailers",
  "Cyber Café Owners",
  "Jan Seva Kendra Operators",
  "Kirana Store Owners",
  "Recharge Shops",
  "Small Business Owners",
  "First-time Entrepreneurs",
  "NGOs and Village Service Centers",
];

const servicesOffered = [
  "Mobile & DTH Recharge",
  "Utility Bill Payments",
  "Postpaid Bill Collection",
  "Credit Card Payments",
  "AEPS Services",
  "Micro ATM Services",
  "Insurance Assistance",
  "PAN Card Services",
];

const banks = ["ICICI Bank", "Yes Bank", "Axis Bank", "PayU", "NSDL"];
const OurPartener = () => {
  return (
    <div>
      <section className="page-title  border-0">
        <img
          src="/assets/Home/partner-banner.jpg"
          alt="Contact Us"
          className="full-width-image"
        />
 <h1
            className="text-white text-right fw-bold"
            style={{
              position: "absolute",
              top: "40%",
              left: "30%",
              transform: "translate(-50%, 0%)",
              fontSize: "5rem",
              zIndex: 2,
            }}
          >
OUR PARTNERS
          </h1>
      </section>




      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Partners</h2>
          <p className="lead text-theme fw-bold">
            Together, we are building India's digital future
          </p>
          <p className="text-muted">
            At SevenUnique Solutions Private Limited, our company is at the
            heart of our development. From local shopkeepers in Jaipur to
            distributors across Rajasthan, our success is driven by thousands of
            committed entrepreneurs who deliver BBPS, AEPS, recharge, and
            financial services to communities across India.
            <br />
            We believe in partnerships that create long-term value, create
            faith, and bring digital empowerment to the last mile.
          </p>
        </div>

        <section className="py-5">
          <div className="container py-4">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-dark mb-3">
                Why partner with SevenUnique?
              </h2>
              {/* <div className="section-divider"></div>
            <p className="lead text-muted col-lg-8 mx-auto">
              Join thousands of successful partners who are transforming their communities through digital services
            </p> */}
            </div>

            <div className="row g-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="col-lg-4  col-md-6">
                  <div className="card card-hover  h-100 p-4 shadow-lg">
                    <div className="card-body text-center">
                      <div className=" grediant-bg2 w-25 rounded p-2 mx-auto">
                        <benefit.icon size={28} className="text-white" />
                      </div>
                      <h4 className="fw-bold text-dark mb-3 pt-3">
                        {benefit.title}
                      </h4>
                      <p className="text-muted mb-0">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Models */}
        <section className="py-5 bg-light">
          <div className="container py-4">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-dark mb-3">
                Partnership Models Available
              </h2>
              <div className="section-divider"></div>
              {/* <p className="lead text-muted">Choose the model that best fits your business goals</p> */}
            </div>

            <div className="row g-4">
              {partnershipModels.map((model, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="card card-hover h-100 overflow-hidden">
                    <div className="grediant-bg2 text-white text-center py-5">
                      <model.icon size={48} className="mb-3" />
                      <h3 className="text-white fw-bold mb-0">{model.title}</h3>
                    </div>
                    <div className="card-body p-4">
                      <p className="text-muted mb-0 fs-6">
                        {model.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Can Partner & Services */}
        <section className="py-5">
          <div className="container py-4">
            <div className="row g-5">
              <div className="col-lg-6">
                <h5 className="display-6 fw-bold text-dark mb-4">
                  Who Can Become a Partner?
                </h5>
                <p className="lead text-muted mb-4 fs-6">
                  Our network is open to someone to start or expand the digital
                  service business. ideal for: Retail shop owner || Cyber ​​Cafe
                  Operator || Public service center agent ||Kiran &Grocery Shop
                  Recharge and mobile shops || Small business owner || First
                  time entrepreneur Village-level NGOs & Rural Service Centers
                  No prior experience is necessary - just a reliable Fintech's
                  desire to grow with the brand.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {whoCanPartner.map((role, index) => (
                    <span
                      key={index}
                      className="primary-bg rounded-pill text-white  px-3 py-2"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <h5 className="display-6 fw-bold text-dark mb-4">
                  What Services Can You Offer as Our Partner
                </h5>
                <p className="lead text-muted mb-4 fs-6">
                  With SevenUnique, you gain access to a wide range of digital
                  financial services, including: || Mobile Recharge & Postpaid
                  Bill Payment || DTH Recharge BBPS Platform BBPS Utility Bill
                  Payments || Credit Card Bill Collection AEPS Services || Micro
                  ATM Services || PAN Card Application & Correction || Life,
                  Health, and General Insurance Services All services can be
                  accessed via our unified platform or mobile dashboard.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {servicesOffered.map((service, index) => (
                    <span
                      key={index}
                      className="primary-bg rounded-pill text-white  px-3 py-2"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


      </section>



<h2 className="text-center mb-4 fw-bold text-theme">
                Our Banking & Financial Partners

              </h2>
              <h4 className="text-muted text-center">Powering Trust, Compliance & Nationwide Access</h4>
              <p className="text-center mt-3 mx-5">
                Our technology is supported by strategic partnerships with India’s top banks and financial service providers, ensuring compliance, scalability, and security for all BBPS and fintech operations.


              </p>
              <h4 className="text-muted text-center mt-5 fw-bold fs-4">We proudly collaborate with:</h4>
      <div class="page-content">
        <section class="pb0 partner">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-3 col-md-12 mt-6 mt-lg-0 ps-lg-10">
                <img src="images/axis-bank.jpg" alt="axis" />
              </div>
              <div class="col-lg-3 col-md-12 mt-6 mt-lg-0 ps-lg-10">
                <img src="images/federral.png" alt="federral" />
              </div>
              <div class="col-lg-3 col-md-12 mt-6 mt-lg-0 ps-lg-10">
                <img src="images/HDFC.png" alt="HDFC" />
              </div>
              <div class="col-lg-3 col-md-12 mt-6 mt-lg-0 ps-lg-10">
                <img src="images/ICICI.jpg" alt="ICICI" />
              </div>
              <div class="col-lg-3 col-md-12 mt-6 mt-lg-0 ps-lg-10">
                <img src="images/paytm-logo.png" alt="paytm" />
              </div>
              <div class="col-lg-3 col-md-12 mt-6 mt-lg-0 ps-lg-10">
                <img src="images/yes-bank.png" alt="yes" />
              </div>
            </div>
          </div>
        </section>
        <p className="text-center">These partnerships allow us to offer robust, real-time services across every pin code in India.
</p>
      </div>





      <section className="py-5 grediant-bg2 text-white text-center mb-3 mt-5">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3 text-white">
            Join the network that growing with you
          </h2>
          <p className="lead col-lg-8 mx-auto mb-4">
           We are already related to 1000+  active retailers and distributors across Rajasthan and expanding every day. Whether you are launching your first fintech venture or scaling an existing business, SevenUnique is your entrance for the digital revolution run by BBPS.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Join as a retail partner</button>
            <button className="btn btn-light text-theme fw-bold px-4 py-2">Apply as a distributor</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPartener;

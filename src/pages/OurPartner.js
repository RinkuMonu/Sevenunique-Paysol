import React from "react";
import "./styles/ourpartner.css";
import { FaCheckCircle, FaHandshake, FaMobileAlt, FaUniversity, FaChartLine } from "react-icons/fa";
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
  Award
} from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Recurring Income",
    description: "Earn ongoing commissions on recharges, bill payments, and financial transactions with competitive rates."
  },
  {
    icon: Zap,
    title: "Easy Setup",
    description: "Start with just a smartphone and internet connection - no complex requirements or technical expertise needed."
  },
  {
    icon: Shield,
    title: "Trusted Platform",
    description: "RBI and NPCI-approved systems including BBPS and AEPS for maximum security and compliance."
  },
  {
    icon: Globe,
    title: "Digital Tools",
    description: "Intuitive dashboard and comprehensive transaction management system with real-time reporting."
  },
  {
    icon: Clock,
    title: "24x7 Support",
    description: "Dedicated assistance from our experienced Jaipur-based support team whenever you need help."
  }
];

const partnershipModels = [
  {
    icon: Smartphone,
    title: "Retail Partner",
    description: "Offer services directly to customers and earn attractive commissions on every transaction.",
 
  },
  {
    icon: Users,
    title: "Distributor",
    description: "Build and manage a network of retailers while earning from their activities.",

  },
  {
    icon: Building,
    title: "API Partner",
    description: "Integrate our comprehensive services into your existing platform or application.",
 
  }
];

const whoCanPartner = [
  "Retailers", "Cyber Café Owners", "Jan Seva Kendra Operators", "Kirana Store Owners",
  "Recharge Shops", "Small Business Owners", "First-time Entrepreneurs", "NGOs and Village Service Centers",
];

const servicesOffered = [
  "Mobile & DTH Recharge", "Utility Bill Payments", "Postpaid Bill Collection",
  "Credit Card Payments", "AEPS Services", "Micro ATM Services", "Insurance Assistance", "PAN Card Services"
];

const banks = ["ICICI Bank", "Yes Bank", "Axis Bank", "PayU", "NSDL"];
const OurPartener = () => {
  return (
    <div>
      <section className="page-title  border-0">
        <img
          src="/images/PARTNERS.svg"
          alt="Contact Us"
          className="full-width-image"
        />
      </section>
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
      </div>
         
         <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Partners</h2>
        <p className="lead">Together, We Are Building India’s Digital Future</p>
        <p className="text-muted">
          From local shopkeepers in Jaipur to service distributors across Rajasthan, we work with entrepreneurs bringing digital services to every corner of India.
        </p>
      </div>

          <section className="py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">Why Partner With ABDKS?</h2>
            <div className="section-divider"></div>
            <p className="lead text-muted col-lg-8 mx-auto">
              Join thousands of successful partners who are transforming their communities through digital services
            </p>
          </div>
          
          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="col-lg-4  col-md-6">
                <div className="card card-hover  h-100 p-4">
                  <div className="card-body text-center">
                    <div className=" grediant-bg2 w-25 rounded p-2 mx-auto">
                      <benefit.icon size={28} className="text-white" />
                    </div>
                    <h4 className="fw-bold text-dark mb-3">{benefit.title}</h4>
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
            <h2 className="display-5 fw-bold text-dark mb-3">Partnership Models Available</h2>
            <div className="section-divider"></div>
            <p className="lead text-muted">Choose the model that best fits your business goals</p>
          </div>
          
          <div className="row g-4">
            {partnershipModels.map((model, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card card-hover h-100 overflow-hidden">
                  <div className="grediant-bg2 text-white text-center py-5">
                    <model.icon size={48} className="mb-3" />
                    <h3 className="fw-bold mb-0">{model.title}</h3>
                  </div>
                  <div className="card-body p-4">
                    <p className="text-muted mb-0 fs-6">{model.description}</p>
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
              <h3 className="display-6 fw-bold text-dark mb-4">Who Can Become a Partner?</h3>
              <p className="lead text-muted mb-4">
                No prior technical experience needed — just a desire to grow your business and serve your community.
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
              <h3 className="display-6 fw-bold text-dark mb-4">Services You Can Offer</h3>
              <p className="lead text-muted mb-4">
                Comprehensive suite of digital services to meet all your customers' needs.
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


         <section className="grediant-bg2 py-3 text-white position-relative">
        <div className="container py-5 position-relative">
          <div className="text-center mb-5">
            <h2 className="display-4 text-white fw-bold mb-4">
              Join the Network That Grows With You
            </h2>
            <p className="lead mb-5 col-lg-8 mx-auto">
              Partner with ABDKS today and be part of India's digital revolution. 
              Build a sustainable business while serving your community.
            </p>
            
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-3">
              <button className="btn  primary-bg text-white btn-lg px-5 py-3 fw-bold">
                <Smartphone size={20} className="me-2" />
                Join as Retail Partner
              </button>
              <button className="btn border-light text-theme btn-lg px-5 py-3 fw-bold">
                <Users size={20} className="me-2" />
                Apply as Distributor
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
    </div>
  
  );
};

export default OurPartener;

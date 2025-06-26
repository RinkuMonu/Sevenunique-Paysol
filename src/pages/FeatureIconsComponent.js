import { FaIdCard, FaShieldAlt, FaChartLine, FaClock, FaMobileAlt, FaMoneyBillWave } from 'react-icons/fa';

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaIdCard className="text-theme fs-1 mb-2 p-1" />,
      title: "Instant Activation with PAN/Aadhaar",
    },
    {
      icon: <FaShieldAlt className="text-theme fs-1 mb-2 p-1" />,
      title: "Secure & Encrypted Transactions",
    },
    {
      icon: <FaChartLine className="text-theme fs-1 mb-2 p-1" />,
      title: "User-Friendly Dashboard for Jaipur Merchants",
    },
    {
      icon: <FaClock className="text-theme fs-1 mb-2 p-1" />,
      title: "Real-Time Settlement Reports",
    },
    {
      icon: <FaMobileAlt className="text-theme fs-1 mb-2 p-1" />,
      title: "Works on Any Android Device in Local Stores",
    },
    {
      icon: <FaMoneyBillWave className="text-theme fs-1 mb-2 p-1" />,
      title: "Highest Market Commissions in Jaipur",
    },
  ];

  return (
  <section className="py-5 bg-white">
      <div className="container">
        {/* Centered Title with Subtitle */}
        <div className="text-center mb-5">
          <p className="text-muted fs-4">
           Built for Simplicity & Speed –<span className="text-theme fw-bold"> Trusted in India </span>
          </p>
        </div>

        {/* Feature Grid */}
        <div className="row gy-4 gx-4">
          {features.map((feature, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-4">
              <div className="h-100 p-4 bg-light border-0 rounded-4 shadow-sm text-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-secondary bg-opacity-10 text-primary rounded-circle mb-3"
                  style={{ width: 60, height: 60, fontSize: "1.5rem" }}
                >
                  {feature.icon}
                </div>
                <p className="fw-semibold text-dark small mb-0">
                  {feature.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

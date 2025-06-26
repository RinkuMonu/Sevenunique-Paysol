import React from 'react'

function ServiceItem({ icon, title, description , features = []}){
    
  return (
    <div className="col-lg-4 col-md-6 mt-6 ">
    <div className="service-item style-2 text-center h-100" >
      <div className="service-icon mb-3 fs-1 text-theme ">
          {icon}
        </div>
      <div className="service-desc">
        <div className="service-title">
          <h4>{title}</h4>
        </div>
        <p>{description}</p>
         {features.length > 0 && (
            <ul className="list-unstyled text-start mt-3 small">
              {features.map((feature, idx) => (
                <li key={idx} className="d-flex align-items-start mb-2">
                  <span className="me-2 text-success">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
      </div>
    </div>
  </div>
  )
}

export default ServiceItem

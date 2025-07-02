import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';

function ServiceItem({ icon, title, description , btn, features = []}){

  return (
    <div className="col-lg-4 col-md-6 mt-6 ">
    <div className="position-relative service-item style-2 text-center h-100" >
      <div className="service-icon mb-3 fs-1 text-theme ">
          {icon}
        </div>
      <div className="service-desc">
        <div className="service-title">
          <h4 className='fw-bold fs-5'>{title}</h4>
        </div>
        <p className='fs-6'>{description}</p>
         {features.length > 0 && (
            <ul className="list-unstyled text-start mt-3 small mb-5">
              {features.map((feature, idx) => (
                <li key={idx} className="d-flex align-items-start mb-2">
                  <span className="me-2 text-success">✔</span>
                  <span className='fs-5'>{feature}</span>

                </li>
              ))}

            </ul>

          )}
          <div className="">
        <Link to={btn} className="position-absolute btn custombtn-hover" style={{width:"max-content", bottom:"4%", left:"10%"}}>
          Go to this page
        </Link>
      </div>
      </div>

    </div>
  </div>
  )
}

export default ServiceItem

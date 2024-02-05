/* eslint-disable react/prop-types */
import React from 'react'

function AboutCard({imgCard, title, description}) {
    
    return (
        <div className="col-lg-3 col-md-6 d-flex">
        <div className="card why-choose-card w-100">
          <div className="card-body">
            <div className="why-choose-icon">
              <span>
                <img src={imgCard} alt="" />
              </span>
            </div>
            <div className="why-choose-content">
              <h4>{title}</h4>
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AboutCard

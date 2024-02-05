/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from "react-router-dom";

function CardDoctor({doctorImg, price,doctorName ,category, rate, rateValue, locationUrl}) {
  return (
    <div className="col-lg-3 col-md-6 d-flex">
                <div className="doctor-profile-widget w-100">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <img src={doctorImg} className="img-fluid" alt="" />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$ {price}</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile">
                          {doctorName}
                        </Link>
                        <p>{category}</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            <i className="fas fa-star" /> {rate}
                          </span>{" "}
                          ({rateValue})
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather-map-pin" /> {locationUrl}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default CardDoctor

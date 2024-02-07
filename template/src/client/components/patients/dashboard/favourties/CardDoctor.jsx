/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from "react-router-dom";

function CardDoctor({imgSrc, name, description, rateNumber, location, date, amout}) {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
    <div className="profile-widget">
      <div className="doc-img">
        <Link to="/patient/doctor-profile">
          <img className="img-fluid" alt="User" src={imgSrc} />
        </Link>
        <Link to="#0" className="fav-btn">
          <i className="far fa-bookmark"></i>
        </Link>
      </div>
      <div className="pro-content">
        <h3 className="title">
          <Link to="/patient/doctor-profile">
            {name}
          </Link>
          <i className="fas fa-check-circle verified"></i>
        </h3>
        <p className="speciality">
          {description}
        </p>
        <div className="rating">
          <i className="fas fa-star filled"></i>
          <i className="fas fa-star filled"></i>
          <i className="fas fa-star filled"></i>
          <i className="fas fa-star filled"></i>
          <i className="fas fa-star filled"></i>
          <span className="d-inline-block average-rating ms-1">
            ({rateNumber})
          </span>
        </div>
        <ul className="available-info">
          <li>
            <i className="fas fa-map-marker-alt"></i> {location}
          </li>
          <li>
            <i className="far fa-clock"></i> {date}
          </li>
          <li>
            <i className="far fa-money-bill-alt"></i> {amout}{" "}
            <i
              className="fas fa-info-circle"
              data-bs-toggle="tooltip"
              title="Lorem Ipsum"
            ></i>
          </li>
        </ul>
        <div className="row row-sm">
          <div className="col-6">
            <Link
              to="/patient/doctor-profile"
              className="btn view-btn"
            >
              View Profile
            </Link>
          </div>
          <div className="col-6">
            <Link to="/patient/booking1" className="btn book-btn">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardDoctor

import FeatherIcon from "feather-icons-react";
import React from "react";

function Info() {
  return (
    <div className="col-lg-5 col-md-12">
    <div className="section-inner-header contact-inner-header">
      <h6>Get in touch</h6>
      <h2>Have Any Question?</h2>
    </div>
    <div className="card contact-card">
      <div className="card-body">
        <div className="contact-icon">
          <i>
            <FeatherIcon
              icon="map-pin"
              style={{ width: "44px", height: "44px" }}
            />
          </i>
        </div>
        <div className="contact-details">
          <h4>Address</h4>
          <p>8432 Mante Highway, Aminaport, USA</p>
        </div>
      </div>
    </div>
    <div className="card contact-card">
      <div className="card-body">
        <div className="contact-icon">
          <i>
            <FeatherIcon
              icon="phone"
              style={{ width: "44px", height: "44px" }}
            />
          </i>
        </div>
        <div className="contact-details">
          <h4>Phone Number</h4>
          <p>+1 315 369 5943</p>
        </div>
      </div>
    </div>
    <div className="card contact-card">
      <div className="card-body">
        <div className="contact-icon">
          <i>
            <FeatherIcon
              icon="mail"
              style={{ width: "44px", height: "44px" }}
            />
          </i>
        </div>
        <div className="contact-details">
          <h4>Email Address</h4>
          <p>doccure@example.com</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Info

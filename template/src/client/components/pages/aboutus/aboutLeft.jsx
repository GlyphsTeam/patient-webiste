import React from 'react'
import {
    aboutimg1,
    aboutimg2,
    aboutimg3,

  } from "../aboutus/img";
function AboutLeft() {
  return (
    <div className="col-lg-6 col-md-12">
    <div className="about-img-info">
      <div className="row">
        <div className="col-md-6">
          <div className="about-inner-img">
            <div className="about-img">
              <img src={aboutimg1} className="img-fluid" alt="" />
            </div>
            <div className="about-img">
              <img src={aboutimg2} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-inner-img">
            <div className="about-box">
              <h4>Over 25+ Years Experience</h4>
            </div>
            <div className="about-img">
              <img src={aboutimg3} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutLeft

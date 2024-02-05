import React from 'react'
import { phoneicon } from "../aboutus/img";
function AboutRight() {
    return (
        <div className="col-lg-6 col-md-12">
            <div className="section-inner-header about-inner-header">
                <h6>About Our Company</h6>
                <h2>
                    We Are Always Ensure Best Medical Treatment For Your Health
                </h2>
            </div>
            <div className="about-content">
                <div className="about-content-details">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus sit voluptatem
                        accusantium doloremque eaque ipsa quae architecto beatae
                        vitae dicta sunt explicabo.
                    </p>
                </div>
                <div className="about-contact">
                    <div className="about-contact-icon">
                        <span>
                            <img src={phoneicon} alt="" />
                        </span>
                    </div>
                    <div className="about-contact-text">
                        <p>Need Emergency?</p>
                        <h4>+1 315 369 5943</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutRight

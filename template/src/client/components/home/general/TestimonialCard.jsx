/* eslint-disable react/prop-types */
import React from 'react'

function TestimonialCard({ imgSrc, title, question, description, name, city }) {
    return (
        <div className="testimonial-grid">
            <div className="testimonial-info">
                <div className="testimonial-img">
                    <img src={imgSrc} className="img-fluid" alt="" />
                </div>
                <div className="testimonial-content">
                    <div className="section-header section-inner-header testimonial-header">
                        <h5>{title}</h5>
                        <h2>{question}</h2>
                    </div>
                    <div className="testimonial-details">
                        <p>
                          {description}
                        </p>
                        <h6>
                            <span>{name}</span> {city}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard

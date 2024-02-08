import React from "react";
import { client_01 } from "../../imagepath";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
function Testimonial() {
  const settings = {
    arrows: true,
    dots: false,
    autoplay: false,
    infinite: true,
    // prevArrow: true,
    // nextArrow: false,
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const testimonialData = [
    {
      imgSrc: client_01,
      title: "Testimonials",
      question: "What Our Client Says",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "John Doe",
      city: " New York"
    },
    {
      imgSrc: client_01,
      title: "Testimonials",
      question: "What Our Client Says",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "John Doe",
      city: " New York"
    },
    {
      imgSrc: client_01,
      title: "Testimonials",
      question: "What Our Client Says",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "John Doe",
      city: " New York"
    },
    {
      imgSrc: client_01,
      title: "Testimonials",
      question: "What Our Client Says",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "John Doe",
      city: " New York"
    },
    {
      imgSrc: client_01,
      title: "Testimonials",
      question: "What Our Client Says",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "John Doe",
      city: " New York"
    },
  ]
  return (
    <>
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-slider slick">
                <Slider {...settings}>
                  {testimonialData.map((testimonial, index) => {
                    return <TestimonialCard
                      city={testimonial.city}
                      description={testimonial.description}
                      imgSrc={testimonial.imgSrc}
                      name={testimonial.name}
                      question={testimonial.question}
                      title={testimonial.title}
                      key={`testimonial_${index}`}
                    />
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;

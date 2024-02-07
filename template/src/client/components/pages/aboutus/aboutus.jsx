/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Title from '../../title/Title';
import AboutLeft from './aboutLeft';
import AboutRight from './aboutRight'
import Footer from "../../footer";
import Faq from '../../home/general/faq';
import CardDoctor from "./cardDoctor";
import {
  choose01,
  choose02,
  choose03,
  choose04,
  smilingicon,
  shape06,
  shape07,
  wayimg,
  doctor03,
  doctor04,
  doctor05,
  doctor02,
  faqimg,
} from "../aboutus/img";
// import HomeClinic from '../../home/clinic/index';
// import Slider from "react-slick";
import CountUp from "react-countup";
import Testimonial from "../../home/general/testimonial";
import AboutCard from "./aboutCard";
import { doctor_06 } from "../../imagepath";

const Aboutus = (props) => {
  const [faqData, setFqaData] = useState([
    {
      show: false,
      question: "Can i make an Appointment Online with White Plains Hospital Kendi?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
      show: false,
      question: "Can i make an Appointment Online with White Plains Hospital Kendi?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
      show: false,
      question: "Can i make an Appointment Online with White Plains Hospital Kendi?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
      show: false,
      question: "Can i make an Appointment Online with White Plains Hospital Kendi?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
      show: false,
      question: "Can i make an Appointment Online with White Plains Hospital Kendi?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
  ])
  let pathname = props.location.pathname;

  if (props.location.pathname === "/pages/aboutus") {
    require("../../../assets/css/feather.css");
  }

  useEffect(() => {
    document.body.classList.add("about-page");

    return () => document.body.classList.remove("about-page");
  }, []);

  const settings = {
    arrows: false,
    dots: true,
    autoplay: false,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    rtl: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
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
  const doctors = [
    {
      id: 1,
      img: doctor03,
      price: 200,
      name: "Dr. Ruby Perrin",
      category: "Cardiology",
      rate: 4.5,
      rateValue: 35,
      location: "Georgia, USA"

    },
    {
      id: 2,
      img: doctor04,
      price: 200,
      name: "Dr. Ruby Perrin",
      category: "Cardiology",
      rate: 4.5,
      rateValue: 35,
      location: "Georgia, USA"

    },
    {
      id: 3,
      img: doctor05,
      price: 200,
      name: "Dr. Ruby Perrin",
      category: "Cardiology",
      rate: 4.5,
      rateValue: 35,
      location: "Georgia, USA"

    },
    {
      id: 4,
      img: doctor_06,
      price: 200,
      name: "Dr. Ruby Perrin",
      category: "Cardiology",
      rate: 4.5,
      rateValue: 35,
      location: "Georgia, USA"

    },

  ]
  const aboutData = [
    {
      id: 1,
      img: choose01,
      title: "Qualified Staff of Doctors",
      description: "  Lorem ipsum sit amet consectetur incididunt ut labore et exercitation ullamco laboris nisi dolore magna enimveniam aliqua",
    },
    {
      id: 2,
      img: choose02,
      title: "Qualified Staff of Doctors",
      description: "  Lorem ipsum sit amet consectetur incididunt ut labore et exercitation ullamco laboris nisi dolore magna enimveniam aliqua",

    },
    {
      id: 3,
      img: choose03,
      title: "Qualified Staff of Doctors",
      description: "  Lorem ipsum sit amet consectetur incididunt ut labore et exercitation ullamco laboris nisi dolore magna enimveniam aliqua",
    },
    {
      id: 4,
      img: choose04,
      title: "Qualified Staff of Doctors",
      description: "  Lorem ipsum sit amet consectetur incididunt ut labore et exercitation ullamco laboris nisi dolore magna enimveniam aliqua",

    },
  ]
  return (
    <>
      <Header {...props} />
      <>
        {/* Breadcrumb */}
        <Title title="About Us" subTitle="About Us" />
        {/* /Breadcrumb */}
        {/* About Us */}
        <section className="about-section">
          <div className="container">
            <div className="row align-items-center">
              <AboutLeft />
              <AboutRight />
            </div>
          </div>
        </section>
        {/* /About Us */}
        {/* Why Choose Us */}
        <section className="why-choose-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-inner-header text-center">
                  <h2>Why Choose Us</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {aboutData?.map((item) => {
                return <AboutCard
                  key={item.title}
                  description={item.description}
                  title={item.title}
                  imgCard={item.img} />
              })}
            </div>
          </div>
        </section>
        {/* /Why Choose Us */}
        {/* Way Section */}
        <section className="way-section">
          <div className="container">
            <div className="way-bg">
              <div className="way-shapes-img">
                <div className="way-shapes-left">
                  <img src={shape06} alt="" />
                </div>
                <div className="way-shapes-right">
                  <img src={shape07} alt="" />
                </div>
              </div>
              <div className="row align-items-end">
                <div className="col-lg-7 col-md-12">
                  <div className="section-inner-header way-inner-header mb-0">
                    <h2>Be on Your Way to Feeling Better with the Doccure</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/contactus" className="btn btn-primary">
                      Contact With Us
                    </Link>
                  </div>{" "}
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="way-img">
                    <img src={wayimg} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Way Choose Us */}
        {/* Doctors Section */}
        <section className="doctors-section professional-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-inner-header text-center">
                  <h2>Best Doctors</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Doctor Item */}
              {doctors.map((doctor) => {
                return <CardDoctor
                  category={doctor.category}
                  doctorImg={doctor.img}
                  doctorName={doctor.name}
                  locationUrl={doctor.location}
                  price={doctor.price}
                  rate={doctor.rate}
                  rateValue={doctor.rateValue}
                  key={doctor.id}
                />
              })}
              {/* /Doctor Item */}
            </div>
          </div>
        </section>
        {/* /Doctors Section */}
        {/* Testimonial Section */}
        <Testimonial />
        {/* /Testimonial Section */}
        {/* FAQ Section */}
        <section className="faq-section faq-section-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-inner-header text-center">
                  <h6>Get Your Answer</h6>
                  <h2>Frequently Asked Questions</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-6">
                <Faq faqData={faqData} setFqaData={setFqaData}/>
              </div>
            </div>
          </div>
        </section>
        {/* /FAQ Section */}
      </>

      <Footer {...props} />
    </>
  );
};

export default Aboutus;

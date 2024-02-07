/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Homebanner from "./homebanner";
import Speacialities from "./speacialities";
import Worksection from "./worksection";
import Artical from "./artical";
import Testimonial from "./testimonial";
import Parentssection from "./parentssection";
import Appsection from "./appsection";
import Doctor from "./doctor";
import Faq from "./faq";
import Header from "../../header";
import Footer from "../../footer";
import ProgressCircle from "../paediatric/scrolltotop";
function Generalhome(props) {
  let pathname = props.location.pathname;
  if (props.location.pathname === "/index") {
    require("../../../assets/css/feather.css");
  }
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

  return (
    <>
      <>
        <div className="main-wrapper">
          <Header {...props} />
          {/* Home Banner */}
          <Homebanner />
          {/* /Home Banner */}
          {/* Specialities Section */}
          <Speacialities />
          {/* /Specialities Section */}
          {/* Doctors Section */}
          <Doctor />
          {/* /Doctors Section */}

          {/* Work Section */}
          <Worksection />
          {/* /Work Section */}
          {/* Articles Section */}
          <Artical />
          {/* /Articles Section */}
          {/* App Section */}
          <Appsection />
          {/* /App Section */}
          {/* FAQ Section */}
          <Faq faqData={faqData} setFqaData={setFqaData}/>
          {/* /FAQ Section */}
          {/* Testimonial Section */}
          <Testimonial />
          {/* /Testimonial Section */}
          {/* Partners Section */}
          <Parentssection />
          {/* /Partners Section */}
          <Footer {...props} />
          {/* Cursor */}
          <div className="mouse-cursor cursor-outer" />
          <div className="mouse-cursor cursor-inner" />
          {/* /Cursor */}
          <ProgressCircle />
        </div>
      </>
    </>
  );
}

export default Generalhome;

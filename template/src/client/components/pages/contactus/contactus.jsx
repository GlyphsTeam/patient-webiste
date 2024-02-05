import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import Info from "./Info";
import Form from './Form';
import Map from './Map';
import Title from '../../title/Title';
const Contactus = (props) => {
  return (
    <>
      <Header {...props} />

      <>
        {/* Breadcrumb */}
        <Title title="Contact Us" subTitle="Contact Us"/>
        {/* /Breadcrumb */}
        {/* Contact Us */}
        <section className="contact-section">
          <div className="container">
            <div className="row">
              <Info />
              <Form />
            </div>
          </div>
        </section>
        {/* /Contact Us */}
        {/* Contact Map */}
        <Map />
        {/* /Contact Map */}
      </>
      <Footer {...props} />
    </>
  );
};

export default Contactus;

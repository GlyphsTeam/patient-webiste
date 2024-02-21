/* eslint-disable react/prop-types */
import React from "react";
import { faq_img, smiling_icon } from "../../imagepath";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
function Faq({ faqData, setFqaData }) {
  const { t } = useTranslation();

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="section-header-one text-center aos"
                data-aos="fade-up"
              >
                <h5>Get Your Answer</h5>
                <h2 className="section-title">{t("Frequently Asked Questions")}</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
              <div className="faq-img">
                <img src={faq_img} className="img-fluid" alt="img" />
                <div className="faq-patients-count">
                  <div className="faq-smile-img">
                    <img src={smiling_icon} alt="icon" />
                  </div>
                  <div className="faq-patients-content">
                    <h4>
                      <span className="count-digit">
                        <CountUp start={1} end={95} />
                      </span>
                      k+
                    </h4>
                    <p>Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="faq-info aos" data-aos="fade-up">
                <div className="accordion" id="faq-details">
                  {/* FAQ Item */}
                  {faqData.map((faq, index) => {
                    const faqId = `collapse${index}`;
                    return (
                      <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                          <button
                            onClick={() => {
                              // Toggle the 'show' property for the clicked FAQ
                              const updatedFaqData = [...faqData];
                              updatedFaqData[index] = { ...faq, show: !faq.show };
                              setFqaData(updatedFaqData);
                            }}
                            className={`accordion-button ${!faq.show ? "collapsed" : ""}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${faqId}`}
                            aria-expanded={!faq.show}
                            aria-controls={faqId}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={faqId}
                          className={`accordion-collapse collapse ${faq.show ? "show" : ""}`}
                          aria-labelledby={`heading${index}`}
                          data-bs-parent="#faq-details"
                        >
                          <div className="accordion-body">
                            <div className="accordion-content">
                              <p>{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}


                  {/* /FAQ Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;

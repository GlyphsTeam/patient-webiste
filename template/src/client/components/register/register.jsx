import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import loginBanner from "../../assets/images/login-banner.png";
import loginBanner from "../../assets/images/login-banner.png";
import Header from "../header";
import Footer from "../footer";
import FormRegsiter from "./formRegsiter";
import { useTranslation } from "react-i18next";
const Register = (props) => {
  // const history = useHistory();

  const { t } = useTranslation();

  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);


  return (
    <>
      <Header {...props} />

      <>
        {/* Page Content */}
        <div className="content top-space">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Register Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src={loginBanner}
                        className="img-fluid"
                        alt="Doccure Register"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          {t("Patient Register")}
                          <Link to="/doctor/doctor-register">
                            {t("Are you a Doctor?")}
                          </Link>
                        </h3>
                      </div>
                      {/* Register Form */}
                      <FormRegsiter />
                      {/* /Register Form */}
                    </div>
                  </div>
                </div>
                {/* /Register Content */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>

      <Footer {...props} />
    </>
  );
};

export default Register;

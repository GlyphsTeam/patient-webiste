import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import loginBanner from "../../assets/images/login-banner.png";
import Header from "../header";
import Footer from "../footer";
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ForgotPassword = (props) => {
  // const history = useHistory();

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
                {/* Account Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <LazyLoadImage
                        src={loginBanner}
                        className="img-fluid"
                        alt="Login Banner"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>Forgot Password?</h3>
                        <p className="small text-muted">
                          Enter your email to get a password reset link
                        </p>
                      </div>
                      {/* Forgot Password Form */}
                  
                      {/* /Forgot Password Form */}
                    </div>
                  </div>
                </div>
                {/* /Account Content */}
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

export default ForgotPassword;

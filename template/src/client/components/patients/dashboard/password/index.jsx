import React, { useRef, useState } from "react";
import DashboardSidebar from "../sidebar/sidebar.jsx";
import StickyBox from "react-sticky-box";
import Footer from "../../../footer";
import { Link } from "react-router-dom";
import Header from "../../../header.jsx";
import Alert from '../../../Alert/Alert';

const Password = (props) => {
  const oldPassword = useRef(null);
  const newPassword = useRef(null);
  const confirmPassword = useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  const handlerPassword = (e) => {
    e.preventDefault();
    const oldPassValue = oldPassword.current.value;
    const newPassValue = newPassword.current.value;
    const confirmPassValue = confirmPassword.current.value;

    if (confirmPassValue === "") {
      setType("warning");
      setShowAlert(true);
      setCount(1);
      setMessage("The Confirm Password is required");
    }

    if (newPassValue === "") {
      setType("warning");
      setShowAlert(true);
      setCount(1);
      setMessage("The New Password is required");
    }


    if (oldPassValue === "") {
      setType("warning");
      setShowAlert(true);
      setCount(1);
      setMessage("The Old Password is required")
    }

    if (oldPassValue !== ""
      && newPassValue !== ""
      && confirmPassValue !== "") {


      let formData = new FormData();


      formData.append("oldPassword", oldPassValue);
      formData.append("newPassword", newPassValue);
      formData.append("confirmPassword", confirmPassValue);


      oldPassword.current.value = "";
      newPassword.current.value = "";
      confirmPassword.current.value = "";
    }

  }
  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Change Password</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index-2">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Change Password
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handlerPassword}>
                    <div className="form-group">
                      <label>Old Password</label>
                      <input type="password" className="form-control" ref={oldPassword} />
                    </div>
                    <div className="form-group">
                      <label>New Password</label>
                      <input type="password" className="form-control" ref={newPassword} />
                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input type="password" className="form-control" ref={confirmPassword} />
                    </div>
                    <div className="submit-section">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
      <Alert
        count={count}
        message={message}
        setShow={setShowAlert}
        setCount={setCount}
        show={showAlert}
        type={type} />
    </div>
  );
};

export default Password;

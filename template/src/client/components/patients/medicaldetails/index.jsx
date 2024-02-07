import React, { useState, useRef } from "react";
import DashboardSidebar from "../dashboard/sidebar/sidebar.jsx";
import { Modal } from "react-bootstrap";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import Alert from '../../Alert/Alert'
const MedicalDetails = (props) => {

  const [show, setShow] = useState(false);
  const bmiRef = useRef(null);
  const rateRef = useRef(null);
  const weightRef = useRef(null);
  const fbcRef = useRef(null);
  const dateRef = useRef(null);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [count, setCount] = useState(0);



  const handlerMeical = (e) => {

    e.preventDefault();

    const bmiValue = bmiRef.current.value;
    const rateValue = rateRef.current.value;
    const weightValue = weightRef.current.value;
    const fbcValue = fbcRef.current.value;
    const dateValue = dateRef.current.value;


    if (!bmiValue) {
      setCount(1)
      setMessage("The Bmi is requier")
      setShowAlert(true);
      setType("warnning")
    }
    if (rateValue === null) {
      console.log("asd")
    }
    if (weightValue === null) {

    }
    if (fbcValue === null) {

    }
    if (dateValue === null) {

    }

    if (
      bmiValue !== ""
      && rateValue !== ""
      && weightValue !== ""
      && fbcValue !== ""
      && dateValue !== "") {

      let formData = new FormData();

      formData.append("bmi", bmiValue);
      formData.append("rate", rateValue);
      formData.append("weight", weightValue);
      formData.append("fbc", fbcValue);
      formData.append("date", dateValue);


      bmiRef.current.value = "";
      rateRef.current.value = "";
      weightRef.current.value = "";
      fbcRef.current.value = "";
      dateRef.current.value = "";
    }

  }
  const medicalData = [
    {
      name: "Richard Wilson",
      BMI: 23.7,
      hearteRate: 89,
      FBC: 140,
      weight: "74kg",
      date: "11 Nov 2019",
      time: "10.00 AM"
    },
    {
      name: "Richard Wilson",
      BMI: 23.7,
      hearteRate: 89,
      FBC: 140,
      weight: "74kg",
      date: "11 Nov 2019",
      time: "10.00 AM"
    },
    {
      name: "Richard Wilson",
      BMI: 23.7,
      hearteRate: 89,
      FBC: 140,
      weight: "74kg",
      date: "11 Nov 2019",
      time: "10.00 AM"
    },
    {
      name: "Richard Wilson",
      BMI: 23.7,
      hearteRate: 89,
      FBC: 140,
      weight: "74kg",
      date: "11 Nov 2019",
      time: "10.00 AM"
    },
    {
      name: "Richard Wilson",
      BMI: 23.7,
      hearteRate: 89,
      FBC: 140,
      weight: "74kg",
      date: "11 Nov 2019",
      time: "10.00 AM"
    }
  ]
  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Medical Details</h2>

                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index-2">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Medical Details
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
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title float-start">
                        Medical details
                      </h4>
                      <Link
                        to="#modal_medical_form"
                        className="btn btn-primary float-end"
                        onClick={() => setShow(true)}
                      >
                        Add Details
                      </Link>
                    </div>
                    <div className="card-body ">
                      {/* Dependent Tab */}
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Name</th>
                                  <th>BMI</th>
                                  <th className="text-center">Heart Rate</th>
                                  <th className="text-center">FBC Status</th>
                                  <th>Weight</th>
                                  <th>Order date</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {medicalData.map((medical, index) => {
                                  return <tr key={`medical_${index}`}>
                                    <td>{index}</td>
                                    <td>{medical.name}</td>
                                    <td>{medical.BMI}</td>
                                    <td className="text-center">{medical.hearteRate}</td>
                                    <td className="text-center">{medical.FBC}</td>
                                    <td>{medical.weight}</td>
                                    <td>
                                      {medical.date}{" "}
                                      <span className="d-block text-info">
                                        {medical.time}
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="#edit_medical_form"
                                          onClick={() => setShow(true)}
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="fas fa-edit" /> Edit
                                        </Link>{" "}
                                        &nbsp;
                                        <Link
                                          to="#"
                                          className="btn btn-sm bg-danger-light"
                                        >
                                          <i className="fas fa-trash-alt" />{" "}
                                          Delete
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                })}


                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      {/* /Dependent Tab */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        style={{ marginTop: "75px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Add new data</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <div>
              <form
                
                encType="multipart/form-data"
                onSubmit={handlerMeical}
              >
                <div className="modal-body">
                  <input type="hidden" defaultValue name="id" />
                  <input type="hidden" defaultValue="insert" name="method" />
                  <div className="form-group">
                    <label className="control-label mb-10">
                      {" "}
                      BMI <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="bmi"
                      className="form-control"
                      defaultValue="23.7"
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label mb-10">Heart rate </label>
                    <input
                      type="text"
                      name="hr"
                      className="form-control"
                      defaultValue={89}
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label mb-10">Weight</label>
                    <input
                      type="text"
                      name="Weight"
                      className="form-control"
                      defaultValue={74}
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label mb-10">Fbc</label>
                    <input
                      type="text"
                      name="Fbc"
                      className="form-control"
                      defaultValue={140}
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label mb-10">Created Date </label>
                    <input
                      type="text"
                      name="dob"
                      id="editdob"
                      defaultValue="11/11/2019"
                      readOnly
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="modal-footer text-center">
                  <button
                    type="submit"
                    className="btn btn-outline btn-success "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Footer {...props} />
      <Alert
        message={message}
        count={count}
        show={showAlert}
        setShow={setShowAlert}
        setCount={setCount}
        type={type} />

    </div>
  );
};

export default MedicalDetails;

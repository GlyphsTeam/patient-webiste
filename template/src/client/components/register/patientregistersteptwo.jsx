/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
// import loginBanner from '../../assets/images/login-banner.png';
import Logo from "../../assets/images/logo.png";
// import camera from '../../assets/images/icons/camera.svg';
import male from "../../assets/images/icons/male.png";
import female from "../../assets/images/icons/female.png";
import {
  setGenderRegister,
  setHeight,
  setWeight,
  setAge,
  setBloodType,
  
} from '../../../store/Register/register';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Alert from "../Alert/Alert";
import { useTranslation } from "react-i18next";

const Patientregistersteptwo = () => {


  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();


  const handlerRegister = (e) => {
    e.preventDefault();

    const gender = e.target.gender.value;
    const weight = e.target.weight.value;
    const height = e.target.height.value;
    const age = e.target.age.value;
    const blood = e.target.blood_group.value;

    if (blood === "") {
      setCount(1);
      setMessage("The blood field is required");
      setShowAlert(true);
      setType("warning")
    }
    if (age === "") {
      setCount(1);
      setMessage("The Age field is required");
      setShowAlert(true);
      setType("warning");
    }
    if (height === "") {
      setCount(1);
      setMessage("The height field is required");
      setShowAlert(true);
      setType("warning");
    }
    if (weight === "") {
      setCount(1);
      setMessage("The weight field is required");
      setShowAlert(true);
      setType("warning");
    }
    if (gender === "") {
      setCount(1);
      setMessage("The gender field is required");
      setShowAlert(true);
      setType("warning");
    }

    if (weight !== "" &&
      height !== "" &&
      age !== "" &&
      blood !== "" &&
      gender !== ""
    ) {

      dispatch(setGenderRegister(gender));
      dispatch(setBloodType(blood));
      dispatch(setAge(age));
      dispatch(setHeight(height));
      dispatch(setWeight(weight))
      navigate("/patient/patientregisterstep-5")
    }


  }


  return (
    <>
      <>
        {/* Page Content */}
        <div className="content login-page pt-0">
          <div className="container-fluid">
            {/* Register Content */}
            <div className="account-content">
              <div className="row align-items-center">
                <div className="login-right">
                  <div className="inner-right-login">
                    <div className="login-header">
                      <div className="logo-icon">
                        <img src={Logo} alt="" />
                      </div>
                      <div className="step-list">
                        <ul>
                          <li>
                            <Link to="#" className="active-done">
                              1
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="active">
                              2
                            </Link>
                          </li>

                          <li>
                            <Link to="#">3</Link>
                          </li>
                        </ul>
                      </div>
                      <form id="personal_details" encType="multipart/form-data" onSubmit={handlerRegister}>
                        <div className="text-start mt-2">
                          <h4 className="mt-3">{t("Select Your Gender")}</h4>
                        </div>
                        <div className="select-gender-col">
                          <div className="row">
                            <div className="col-6 pe-0">
                              <input
                                type="radio"
                                id="male"
                                name="gender"
                                defaultValue="Male"
                              // onChange={(e) => dispatch(setGenderRegister(e.target.value))}
                              />
                              <label htmlFor="male">
                                <span className="gender-icon">
                                  <img src={male} alt="" />
                                </span>
                                <span>{t("Male")}</span>
                              </label>
                            </div>
                            <div className="col-6 ps-2">
                              <input
                                type="radio"
                                id="female"
                                name="gender"
                                // onChange={(e) => dispatch(setGenderRegister(e.target.value))}
                                defaultValue="Female"
                              />
                              <label htmlFor="female">
                                <span className="gender-icon">
                                  <img src={female} alt="" />
                                </span>
                                <span>{t("Female")}</span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="step-process-col mt-4">
                          <div
                            className="form-group"
                            id="preg_div"
                            style={{ display: "none" }}
                          >
                            <label>Pregnancy Term</label>
                            <select
                              className="form-select form-control"
                              id="preg_term"
                              name="preg_term"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option selected="" value="">
                                Select Your Pregnancy Month
                              </option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value="">7</option>
                              <option value={8}>8</option>
                              <option value={9}>9</option>
                              <option value={10}>10</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>{t("Your Weight")}</label>
                            <div className="row">
                              <div className="col-7 pe-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="weight"
                                  defaultValue="weight"
                                  id="weight"
                                />
                              </div>
                              <div className="col-5 ps-2">
                                <select
                                  className="form-select form-control"
                                  id="weight_unit"
                                  name="weight_unit"
                                >
                                  <option value="kg">Kg</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label>{t("Your Height")}</label>
                            <div className="row">
                              <div className="col-7 pe-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="height"
                                />
                              </div>
                              <div className="col-5 ps-2">
                                <select
                                  className="form-select form-control"
                                  id="height_unit"
                                  name="height_unit"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                >
                                  <option value="cm">cm</option>
                                  <option value="ft">ft</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label>{t("Your Date")}</label>
                            <input
                              type="date"
                              name="date"
                              className="form-control"
                              id="date"
                            />
                          </div>
                          <div className="form-group">
                            <label>{t("Emergency Contact Number")}</label>
                            <input
                              type="text"
                              name="emergency"
                              // onChange={(e) => dispatch(setAge(e.target.value))}
                              className="form-control"
                              id="emergency"
                            />
                          </div>
                          <div className="form-group">
                            <label>{t("Street Address")}</label>
                            <input
                              type="text"
                              name="address"
                              // onChange={(e) => dispatch(setAge(e.target.value))}
                              className="form-control"
                              id="address"
                            />
                          </div>
                          <div className="form-group">
                            <label>{t("Your Age")}</label>
                            <input
                              type="text"
                              name="age"
                              // onChange={(e) => dispatch(setAge(e.target.value))}
                              className="form-control"
                              id="age"
                            />
                          </div>
                          <div className="form-group">
                            <label>{t("Blood Type")}</label>
                            <select
                              className="form-select form-control"
                              id="blood_group"
                              name="blood_group"
                              tabIndex={-1}
                              // onChange={(e) => dispatch(setBloodType(e.target.value))}
                              aria-hidden="true"
                            >
                              <option value="">Select your blood group</option>
                              <option value="A-">A-</option>
                              <option value="A+">A+</option>
                              <option value="B-">B-</option>
                              <option value="B+">B+</option>
                              <option value="AB-">AB-</option>
                              <option value="AB+">AB+</option>
                              <option value="O-">O-</option>
                              <option value="O+">O+</option>
                            </select>
                          </div>
                          <div className="checklist-col pregnant-col">
                            <div className="remember-me-col d-flex justify-content-between">
                              <span className="mt-1">
                                Cardiovascilar Diseases (e.g, hypertension, coronary artery disease)
                              </span>
                              <label className="custom_check">
                                <input
                                  type="checkbox"

                                  name="artery"
                                  id="artery"


                                />
                                <span className="checkmark" />
                              </label>
                            </div>
                            <div
                              className="remember-me-col"
                              id="cancer_div"
                              style={{ display: "none" }}
                            >
                              <div className="condition_input">
                                <input
                                  type="text"
                                  id="conditions"
                                  name="conditions[]"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                              <Link to="#" className="add_condition">
                                <i className="fa fa-plus" />
                              </Link>
                            </div>
                            <div className="remember-me-col d-flex justify-content-between">
                              <span className="mt-1">
                                Endocrine Disorders (e.g, diabetes, thyroid disorders)
                              </span>
                              <label className="custom_check">
                                <input
                                  type="checkbox"
                                  className=""
                                  name="medicine"
                                  id="medicine"
                                  defaultValue={1}
                                />
                                <span className="checkmark" />
                              </label>
                            </div>
                            <div className="remember-me-col d-flex justify-content-between">
                              <span className="mt-1">
                                Allergies and Immunodeficiency (e.g, asthma, immunodeficiency)
                              </span>
                              <label className="custom_check">
                                <input
                                  type="checkbox"
                                  className=""
                                  name="medicine"
                                  id="medicine"
                                  defaultValue={1}
                                />
                                <span className="checkmark" />
                              </label>
                            </div>
                            <div className="remember-me-col d-flex justify-content-between">
                              <span className="mt-1">
                                Kidney Diseases
                              </span>
                              <label className="custom_check">
                                <input
                                  type="checkbox"
                                  className=""
                                  name="medicine"
                                  id="medicine"
                                  defaultValue={1}
                                />
                                <span className="checkmark" />
                              </label>
                            </div>
                            <div className="remember-me-col d-flex justify-content-between">
                              <span className="mt-1">
                                Gastrointestinal and liver Diseases (e.g, irritable bowel syndrome, hepatitis)
                              </span>
                              <label className="custom_check">
                                <input
                                  type="checkbox"
                                  className=""
                                  name="medicine"
                                  id="medicine"
                                  defaultValue={1}
                                />
                                <span className="checkmark" />
                              </label>
                            </div>
                            <div className="remember-me-col d-flex justify-content-between">
                              <span className="mt-1">
                                Respiratory Diseases (e.g asthma, chronic abstructive pulmonary disease)
                              </span>
                              <label className="custom_check">
                                <input
                                  type="checkbox"
                                  className=""
                                  name="medicine"
                                  id="medicine"
                                  defaultValue={1}
                                />
                                <span className="checkmark" />
                              </label>
                            </div>
                            <div className="remember-me-col d-flex justify-content-between">
                              <span className="mt-1">
                                Blood Disorders (e.g, anemia, leukemia, clotting disorders)
                              </span>
                              <label className="custom_check">
                                <input
                                  type="checkbox"
                                  className=""
                                  name="medicine"
                                  id="medicine"
                                  defaultValue={1}
                                />
                                <span className="checkmark" />
                              </label>
                            </div>
                            <div className="remember-me-col d-flex justify-content-between">
                              <span className="mt-1">
                                Psychiatric or Neurological Disorders (e.g, depression, epilepsy)
                              </span>
                              <label className="custom_check">
                                <input
                                  type="checkbox"
                                  className=""
                                  name="medicine"
                                  id="medicine"
                                  defaultValue={1}
                                />
                                <span className="checkmark" />
                              </label>
                            </div>
                            <div className="remember-me-col d-flex justify-content-between">
                              <span className="mt-1">
                                Blood Disordes (e.g, anemia, leukemia, clotting disorders)
                              </span>
                              <label className="custom_check">
                                <input
                                  type="checkbox"
                                  className=""
                                  name="medicine"
                                  id="medicine"
                                  defaultValue={1}
                                />
                                <span className="checkmark" />
                              </label>
                            </div>
                            <div className="remember-me-col d-flex justify-content-between">
                              <span className="mt-1">
                                Muscular or Joint Disorders (e.g, arthritis, fibromyalgia)
                              </span>
                              <label className="custom_check">
                                <input
                                  type="checkbox"
                                  className=""
                                  name="medicine"
                                  id="medicine"
                                  defaultValue={1}
                                />
                                <span className="checkmark" />
                              </label>
                            </div>
                            <div className="remember-me-col d-flex justify-content-between">
                              <span className="mt-1">
                                Reproductive Diseases (e.g, polycystic ovary syndrome, endometriosis)
                              </span>
                              <label className="custom_check">
                                <input
                                  type="checkbox"
                                  className=""
                                  name="medicine"
                                  id="medicine"
                                  defaultValue={1}
                                />
                                <span className="checkmark" />
                              </label>
                            </div>

                          </div>
                        </div>
                        <div className="mt-5">
                          <button

                            className="btn btn-primary w-100 btn-lg login-btn step2_submit"
                          >
                            continue{" "}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="login-bottom-copyright">
                    <span>© 2022 Doccure. All rights reserved.</span>
                  </div>
                </div>
              </div>
            </div>
            {/* /Register Content */}
          </div>
        </div>
        {/* /Page Content */}
      </>
      <Alert
        count={count}
        message={message}
        setCount={setCount}
        setShow={setShowAlert}
        show={showAlert}
        type={type}
      />
    </>
  );
};

export default Patientregistersteptwo;

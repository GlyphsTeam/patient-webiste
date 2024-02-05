import React, { useRef } from 'react'
import { Link } from "react-router-dom";

function FormRegsiter() {
    const name = useRef(null);
    const phoneNumber = useRef(null);
    const password = useRef(null);

    const handlerRegsiter = (e) => {
        e.preventDefault();

        const nameValue = name.current?.value;
        const phoneValue = phoneNumber.current?.value;
        const passwordValue = password.current?.value;

        let formData = new FormData();
        console.log("name>>>>",nameValue, "phone>>>>", phoneNumber, "password>>>>", passwordValue);

        formData.append("name", nameValue);
        formData.append("phone", phoneValue);
        formData.append("password", passwordValue);

        name.current.value = "";
        phoneNumber.current.value = "";
        password.current.value = "";

    }
    return (
        <form onSubmit={handlerRegsiter}>
            <div className="form-group form-focus">
                <input
                    ref={name}
                    type="text"
                    className="form-control floating"
                />
                <label className="focus-label">Name</label>
            </div>
            <div className="form-group form-focus">
                <input
                    ref={phoneNumber}
                    type="text"
                    className="form-control floating"
                />
                <label className="focus-label">Mobile Number</label>
            </div>
            <div className="form-group form-focus">
                <input
                    ref={password}
                    type="password"
                    className="form-control floating"
                />
                <label className="focus-label">Create Password</label>
            </div>
            <div className="text-end">
                <Link className="forgot-link" to="/login">
                    Already have an account?
                </Link>
            </div>
            <Link to="/patient/patientregisterstep-1"
                className="btn btn-primary w-100 btn-lg login-btn"
                type="submit"
            >
                Signup
            </Link>
            <div className="login-or">
                <span className="or-line" />
                <span className="span-or">or</span>
            </div>
            <div className="row form-row social-login">
                <div className="col-6">
                    <Link to="#" className="btn btn-facebook w-100">
                        <i className="fab fa-facebook-f me-1" /> Login
                    </Link>
                </div>
                <div className="col-6">
                    <Link to="#" className="btn btn-google w-100">
                        <i className="fab fa-google me-1" /> Login
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default FormRegsiter

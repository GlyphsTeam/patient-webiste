import React, { useRef } from 'react'
import { Link } from "react-router-dom";

function LoginForm() {
    const email = useRef(null);
    const password = useRef(null);

    const hanlderLogin = (e) => {
        e.preventDefault();

        const emailValue = email.current?.value;
        const passwordValue = password.current?.value;

        let formData = new FormData();
        console.log("email", emailValue, "password>>>", passwordValue);


        formData.append("email", emailValue);
        formData.append("password", passwordValue);

        email.current.value = "";
        password.current.value = "";
    }
    return (
        <form onSubmit={hanlderLogin}>
            <div className="form-group form-focus">
                <input
                    type="email"
                    className="form-control floating"
                />
                <label className="focus-label">Email</label>
            </div>
            <div className="form-group form-focus">
                <input
                    type="password"
                    className="form-control floating"
                />
                <label className="focus-label">Password</label>
            </div>
            <div className="text-end">
                <Link
                    className="forgot-link"
                    to="/pages/forgot-password"
                >
                    Forgot Password ?
                </Link>
            </div>

            <Link to="/index"
                className="btn btn-primary w-100 btn-lg login-btn"
                type="submit"
            >
                Login
            </Link>
            <div className="login-or">
                <span className="or-line" />
                <span className="span-or">or</span>
            </div>
            <div className="row form-row social-login">
                <div className="col-6">
                    <Link to="/index" className="btn btn-facebook w-100">
                        <i className="fab fa-facebook-f me-1" /> Login
                    </Link>
                </div>
                <div className="col-6">
                    <Link to="/index" className="btn btn-google w-100">
                        <i className="fab fa-google me-1" /> Login
                    </Link>
                </div>
            </div>
            <div className="text-center dont-have">
                Don’t have an account?{" "}
                <Link to="/register">Register</Link>
            </div>
        </form>
    )
}

export default LoginForm;

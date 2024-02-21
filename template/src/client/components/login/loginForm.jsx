import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import Alert from '../Alert/Alert';
import { emailValidation } from '../../../helper/helper';
import { useTranslation } from 'react-i18next';
function LoginForm() {
    const email = useRef(null);
    const password = useRef(null);
    const {t} = useTranslation();
    const [type, setType] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [count, setCount] = useState(0);

    const showAlertWithMessage = (message, type) => {
        setMessage(message);
        setType(type);
        setCount(1);
        setShowAlert(true);
    }
    const hanlderLogin = (e) => {
        e.preventDefault();

        const emailValue = email.current?.value;
        const passwordValue = password.current?.value;

        let formData = new FormData();

        if (!emailValue || emailValidation(emailValue)) {
            showAlertWithMessage("Please enter a valid email address", "warning");
        }

        if (!passwordValue) {
            showAlertWithMessage("The password is required", "warning");
        }

        if (!emailValue
            && emailValidation(emailValue)
            && !passwordValue) {

            formData.append("email", emailValue);
            formData.append("password", passwordValue);

            email.current.value = "";
            password.current.value = "";
        }
    };

    return (
        <>
            <form onSubmit={hanlderLogin}>
                <div className="form-group form-focus">
                    <input
                        type="email"
                        className="form-control floating"
                    />
                    <label className="focus-label">{t("Email")}</label>
                </div>
                <div className="form-group form-focus">
                    <input
                        type="password"
                        className="form-control floating"
                    />
                    <label className="focus-label">{t("Password")}</label>
                </div>
                <div className="text-end">
                    <Link
                        className="forgot-link"
                        to="/pages/forgot-password"
                    >
                        {t("Forgot Password ?")}
                    </Link>
                </div>

                <button

                    className="btn btn-primary w-100 btn-lg login-btn"
                    type="submit"
                >
                    {t("Login")}
                </button>
                <div className="login-or">
                    <span className="or-line" />
                <span className="span-or">{t("or")}</span>
                </div>
                <div className="row form-row social-login">
                    <div className="col-6">
                        <Link to="/index" className="btn btn-facebook w-100">
                            <i className="fab fa-facebook-f me-1" /> {t("Login")}
                        </Link>
                    </div>
                    <div className="col-6">
                        <Link to="/index" className="btn btn-google w-100">
                            <i className="fab fa-google me-1" /> {t("Login")}
                        </Link>
                    </div>
                </div>
                <div className="text-center dont-have">
                    {t("Don’t have an account?")}
                    <Link to="/register">{t("Register")}</Link>
                </div>
            </form>
            <Alert
                count={count}
                message={message}
                setCount={setCount}
                setShow={setShowAlert}
                show={showAlert}
                type={type} />
        </>
    )
}

export default LoginForm;

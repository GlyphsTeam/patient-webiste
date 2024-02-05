import React, { useRef } from 'react'
import { Link } from "react-router-dom";


function ForgotPassword() {
    const email = useRef(null);

    const hanlderPasswod = (e) => {
       e.preventDefault();

       const emailValue = email.current?.value;

       let formData = new FormData();

       formData.append("email", emailValue);



       email.current.value = "";
    }


    return (
        <form onSubmit={hanlderPasswod}>
            <div className="form-group form-focus">
                <input
                    type="email"
                    ref={email}
                    className="form-control floating"
                />
                <label className="focus-label">Email</label>
            </div>
            <div className="text-end">
                <Link className="forgot-link" to="/login">
                    Remember your password?
                </Link>
            </div>
            <button
                className="btn btn-primary w-100 btn-lg login-btn"
                type="submit"
            >
                Reset Password
            </button>
        </form>
    )
}

export default ForgotPassword

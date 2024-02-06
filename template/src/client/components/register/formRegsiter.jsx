import React, { useRef } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNameRegister, setPhoneRegister, setPasswordRegister } from '../../../store/Register/register';

function FormRegsiter() {
    const name = useRef(null);
    const phoneNumber = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const handlerRegsiter = () => {

        const nameValue = name.current?.value;
        const phoneValue = phoneNumber.current?.value;
        const passwordValue = password.current?.value;

        dispatch(setNameRegister(nameValue));
        dispatch(setPhoneRegister(phoneValue));
        dispatch(setPasswordRegister(passwordValue));
        history.push("/patient/patientregisterstep-1")

    }
    return (
        <form >
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
            <button
                onClick={() => handlerRegsiter()}
                className="btn btn-primary w-100 btn-lg login-btn"
                type="submit"

            >
                Signup
            </button>
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

import React, { useRef, useState } from 'react'
import { emailValidation } from '../../../../helper/helper';
import Alert from '../../Alert/Alert';
import { useTranslation } from 'react-i18next';

function FormContact() {
    const name = useRef(null);
    const email = useRef(null);
    const phoneNumber = useRef(null);
    const services = useRef(null);
    const message = useRef(null);
    const [type, setType] = useState("");
    const [messageAlert, setMessage] = useState("");
    const [count, setCount] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const { t } = useTranslation();


    const showAlertWithMessage = (message, alertType) => {
        setCount(1);
        setMessage(message);
        setShowAlert(true);
        setType(alertType);
    };

    const handlerContact = (e) => {
        e.preventDefault();

        let formData = new FormData();

        const nameValue = name.current?.value;
        const emailValue = email.current?.value;
        const phoneValue = phoneNumber.current?.value;
        const serviceValue = services.current?.value;
        const messageValue = message.current?.value;

        if (messageValue === "") {
            showAlertWithMessage("The message feild is requrid", "warning");
        }

        if (emailValidation(emailValue)) {
            showAlertWithMessage("please Enter  a valid Email Address", "warning")
        }

        if (emailValue === "") {
            showAlertWithMessage("The email field is requrid", "warning")
        }

        if (nameValue === "") {
            showAlertWithMessage("The name field is requrid", "warning")

        }

        if (nameValue !== "" &&
            emailValidation &&
            email !== "" &&
            messageValue !== ""
        ) {
            formData.append("name", nameValue);
            formData.append("email", emailValue);
            formData.append("phone", phoneValue);
            formData.append("services", serviceValue);
            formData.append("message", messageValue);

            name.current.value = "";
            email.current.value = "";
            phoneNumber.current.value = "";
            services.current.value = "";
            message.current.value = "";
        }

    }


    return (
        <>
            <div className="col-lg-7 col-md-12 d-flex">
                <div className="card contact-form-card w-100">
                    <div className="card-body">
                        <form onSubmit={handlerContact}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>{t("Name")}</label>
                                        <input
                                            ref={name}
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Your Name"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>{t("Email Address")}</label>
                                        <input
                                            ref={email}
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Email Address"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>{t("Phone Number")}</label>
                                        <input
                                            ref={phoneNumber}
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Phone Number"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>{t("Services")}</label>
                                        <input
                                            ref={services}
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Services"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>{t("Message")}</label>
                                        <textarea
                                            ref={message}
                                            className="form-control"
                                            placeholder="Enter your comments"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group form-group-btn mb-0">
                                        <button
                                            type="submit"
                                            className="btn btn-primary prime-btn"
                                        >
                                            {t("Send Message")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Alert
                count={count}
                message={messageAlert}
                setCount={setCount}
                setShow={setShowAlert}
                show={showAlert}
                type={type}
            />
        </>
    )
}

export default FormContact

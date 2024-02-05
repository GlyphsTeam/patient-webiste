import React, { useRef } from 'react'

function FormContact() {
    const name = useRef(null);
    const email = useRef(null);
    const phoneNumber = useRef(null);
    const services = useRef(null);
    const message = useRef(null);

    const handlerContact = (e) => { 
        e.preventDefault();
        
        let formData = new FormData();

        const nameValue = name.current?.value;
        const emailValue = email.current?.value;
        const phoneValue = phoneNumber.current?.value;
        const serviceValue = services.current?.value;
        const messageValue = message.current?.value;


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


    return (
        <div className="col-lg-7 col-md-12 d-flex">
            <div className="card contact-form-card w-100">
                <div className="card-body">
                    <form onSubmit={handlerContact}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Name</label>
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
                                    <label>Email Address</label>
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
                                    <label>Phone Number</label>
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
                                    <label>Services</label>
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
                                    <label>Message</label>
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
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormContact

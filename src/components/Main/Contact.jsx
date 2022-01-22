import React from "react";

const Contact = ({
    personal: {
        address,
        email,
        phone,
        phone_office,
        phone_support,
        telegram,
        skype,
    },
}) => {
    return (
        <div className="container-fluid">
            <div className="row p-30-0">
                <div className="col-lg-12">
                    <div className="art-section-title">
                        <div className="art-title-frame">
                            <h4>Contact information</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="art-a art-card">
                        <div className="art-table p-15-15">
                            <ul>
                                <li>
                                    <h6>Country:</h6>
                                    <span>{address.country}</span>
                                </li>
                                <li>
                                    <h6>City:</h6>
                                    <span>{address.city}</span>
                                </li>
                                <li>
                                    <h6>Street:</h6>
                                    <span>{address.street}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="art-a art-card">
                        <div className="art-table p-15-15">
                            <ul>
                                <li>
                                    <h6>Email:</h6>
                                    <span>{email}</span>
                                </li>
                                {telegram && (
                                    <li>
                                        <h6>Telegram:</h6>
                                        <span>@{telegram}</span>
                                    </li>
                                )}
                                {skype && (
                                    <li>
                                        <h6>Skype:</h6>
                                        <span>{skype}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="art-a art-card">
                        <div className="art-table p-15-15">
                            <ul>
                                <li>
                                    <h6>Personal:</h6>
                                    <span>{phone}</span>
                                </li>
                                {phone_support && (
                                    <li>
                                        <h6>Support service:</h6>
                                        <span>{phone_support}</span>
                                    </li>
                                )}
                                {phone_office && (
                                    <li>
                                        <h6>Office:</h6>
                                        <span>{phone_office}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="art-section-title">
                        <div className="art-title-frame">
                            <h4>Get in touch</h4>
                        </div>
                    </div>
                    <div className="art-a art-card">
                        <form id="form" className="art-contact-form">
                            <div className="art-form-field">
                                <input
                                    id="name"
                                    name="name"
                                    className="art-input"
                                    type="text"
                                    placeholder="Name"
                                    required
                                />
                                <label htmlFor="name">
                                    <i className="fas fa-user" />
                                </label>
                            </div>
                            <div className="art-form-field">
                                <input
                                    id="email"
                                    name="email"
                                    className="art-input"
                                    type="email"
                                    placeholder="Email"
                                    required
                                />
                                <label htmlFor="email">
                                    <i className="fas fa-at" />
                                </label>
                            </div>
                            <div className="art-form-field">
                                <textarea
                                    id="message"
                                    name="text"
                                    className="art-input"
                                    placeholder="Message"
                                    required
                                    defaultValue={""}
                                />
                                <label htmlFor="message">
                                    <i className="far fa-envelope" />
                                </label>
                            </div>
                            <div className="art-submit-frame">
                                <button
                                    className="art-btn art-btn-md art-submit"
                                    type="submit"
                                >
                                    <span>Send message</span>
                                </button>
                                <div className="art-success">
                                    Success <i className="fas fa-check" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

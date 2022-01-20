import React from "react";

const About = ({ address, dob, email, contact }) => {
    return (
        <div className="art-table p-15-15">
            <ul>
                <li>
                    <h6>Age:</h6>
                    <span>23</span>
                </li>
                <li>
                    <h6>City:</h6>
                    <span>{address.city}</span>
                </li>
                <li>
                    <h6>State:</h6>
                    <span>{address.state}</span>
                </li>
                <li>
                    <h6>Email:</h6>
                    <a
                        href={`mailto:${email}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {email}
                    </a>
                </li>
                <li>
                    <h6>Contact:</h6>
                    <a href={`tel:${contact}`} rel="noreferrer">
                        {contact}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default About;

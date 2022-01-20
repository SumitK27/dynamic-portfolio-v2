import React from "react";

const Footer = ({ firstName, lastName }) => {
    return (
        <div className="container-fluid">
            <footer>
                <div>
                    © {new Date().getFullYear()} {firstName} {lastName}
                </div>
            </footer>
        </div>
    );
};

export default Footer;

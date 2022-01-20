import React from "react";

const Footer = ({ name }) => {
    return (
        <div className="container-fluid">
            <footer>
                <div>
                    © {new Date().getFullYear()} {name}
                </div>
            </footer>
        </div>
    );
};

export default Footer;

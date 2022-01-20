import React from "react";

const Header = () => {
    return (
        <div className="art-header">
            <div className="art-avatar">
                <a
                    data-fancybox="avatar"
                    href="img/face-1.jpg"
                    className="art-avatar-curtain"
                >
                    <img src="img/face-1.jpg" alt="avatar" />
                    <i className="fas fa-expand" />
                </a>

                <div className="art-lamp-light">
                    <div className="art-available-lamp" />
                </div>
            </div>

            <h5 className="mb-10 art-name">Artur Carter</h5>

            <div className="art-sm-text">
                Front-end Developer <br />
                Ui/UX Designer,{" "}
            </div>
        </div>
    );
};

export default Header;

import React from "react";

const Header = ({ firstName, lastName, avatar, occupations }) => {
    return (
        <div className="art-header">
            <div className="art-avatar">
                <a
                    data-fancybox="avatar"
                    href={avatar}
                    className="art-avatar-curtain"
                >
                    <img src={avatar} alt="avatar" />
                    <i className="fas fa-expand" />
                </a>

                <div className="art-lamp-light">
                    <div className="art-available-lamp" />
                </div>
            </div>

            <h5 className="mb-10 art-name">
                {firstName} {lastName}
            </h5>

            <div className="art-sm-text">
                {occupations.map((occupation) => {
                    return (
                        <div key={occupation}>
                            {occupation}
                            <br />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Header;

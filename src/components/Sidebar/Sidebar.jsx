import React from "react";
import Header from "./Header";
import Main from "./Main";
import Social from "./Social";

const Sidebar = ({ personal, social, skills, knowledge }) => {
    const { firstName, lastName, image, occupation, languages } = personal;
    return (
        <div className="art-info-bar">
            <div className="art-info-bar-frame">
                <div className="art-info-bar-header">
                    <a className="art-info-bar-btn" href="#.">
                        <i className="fas fa-ellipsis-v" />
                    </a>
                </div>
                <Header
                    firstName={firstName}
                    lastName={lastName}
                    avatar={image}
                    occupations={occupation}
                />
                <Main
                    resume={personal.resumeDownload}
                    personal={personal}
                    languages={languages}
                    skills={skills}
                    knowledge={knowledge}
                />
                <Social social={social} />
            </div>
        </div>
    );
};

export default Sidebar;

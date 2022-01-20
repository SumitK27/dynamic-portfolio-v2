import React from "react";

const Resume = ({ resume }) => {
    return (
        <div className="art-links-frame p-15-15">
            <a href={resume} className="art-link" download>
                Download cv <i className="fas fa-download" />
            </a>
        </div>
    );
};

export default Resume;

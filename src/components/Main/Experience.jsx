import React from "react";
import Education from "./Education";
import Work from "./Work";

const Experience = ({ education, work, config }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                {config.education && <Education education={education} />}
                {config.work && <Work work={work} />}
            </div>
        </div>
    );
};

export default Experience;

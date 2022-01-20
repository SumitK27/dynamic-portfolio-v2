import React from "react";
import Education from "./Education";
import Work from "./Work";

const Experience = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Education />
                <Work />
            </div>
        </div>
    );
};

export default Experience;

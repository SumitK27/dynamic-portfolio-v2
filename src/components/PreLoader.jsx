import React from "react";

const PreLoader = ({ firstName, lastName }) => {
    return (
        <div className="art-preloader">
            <div className="art-preloader-content">
                <h4>
                    {firstName} {lastName}
                </h4>
                <div id="preloader" className="art-preloader-load" />
            </div>
        </div>
    );
};

export default PreLoader;

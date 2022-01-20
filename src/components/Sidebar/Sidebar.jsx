import React from "react";
import Header from "./Header";
import Main from "./Main";
import Social from "./Social";

const Sidebar = () => {
    return (
        <div className="art-info-bar">
            {/* menu bar frame */}
            <div className="art-info-bar-frame">
                {/* info bar header */}
                <div className="art-info-bar-header">
                    {/* info bar button */}
                    <a className="art-info-bar-btn" href="#.">
                        {/* icon */}
                        <i className="fas fa-ellipsis-v" />
                    </a>
                    {/* info bar button end */}
                </div>
                {/* info bar header end */}
                <Header />
                <Main />
                <Social />
            </div>
        </div>
    );
};

export default Sidebar;

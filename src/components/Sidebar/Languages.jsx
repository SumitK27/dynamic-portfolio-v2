import React from "react";

const Languages = ({ languages }) => {
    return (
        <div className="art-lang-skills p-30-15">
            {languages.map((language, i) => (
                <div className="art-lang-skills-item" key={language.name}>
                    <div
                        className="art-circle-progress"
                        style={{ position: "relative" }}
                    >
                        <svg
                            viewBox="0 0 100 100"
                            style={{ display: "block", width: "100%" }}
                        >
                            <path
                                d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                                stroke="#eee"
                                stroke-width="7"
                                fill-opacity="0"
                            ></path>
                            <path
                                d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
                                stroke="#555"
                                stroke-width="7"
                                fill-opacity="0"
                                style={{
                                    "stroke-dasharray": `${
                                        (360 / 100) * language.score
                                    }, ${(360 / 100) * language.score}`,
                                    "stroke-dashoffset": "29.2273",
                                }}
                            ></path>
                        </svg>
                        <div
                            class="progressbar-text"
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                padding: "0px",
                                margin: "0px",
                                transform: "translate(-50%, -50%)",
                                color: "rgb(85, 85, 85)",
                            }}
                        >
                            {language.score}
                        </div>
                    </div>
                    <h6>{language.name}</h6>
                </div>
            ))}
        </div>
    );
};

export default Languages;

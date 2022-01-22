import React from "react";

const TechSkills = ({ skills }) => {
    return (
        <div className="art-hard-skills p-30-15">
            {skills.map((skill, i) => (
                <div key={skill.name} className="art-hard-skills-item">
                    <div className="art-skill-heading">
                        <h6>{skill.name}</h6>
                    </div>
                    <div className="art-line-progress">
                        <div style={{ position: "relative" }}>
                            <svg
                                viewBox="0 0 100 1.72"
                                preserveAspectRatio="none"
                                style={{ width: "100%", height: "100%" }}
                            >
                                <path
                                    d="M 0,0.86 L 100,0.86"
                                    stroke="#eee"
                                    stroke-width="1.72"
                                    fill-opacity="0"
                                ></path>
                                <path
                                    className="progressbar"
                                    d="M 0,0.86 L 100,0.86"
                                    stroke="#555"
                                    stroke-width="1.72"
                                    fill-opacity="0"
                                    style={{
                                        "stroke-dasharray": `${skill.level}, 100`,
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
                                {skill.level} %
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechSkills;

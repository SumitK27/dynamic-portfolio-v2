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
                        <div id={`lineprog${i + 1}`} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechSkills;

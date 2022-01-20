import React from "react";

const Languages = ({ languages }) => {
    return (
        <div className="art-lang-skills p-30-15">
            {languages.map((language, i) => (
                <div className="art-lang-skills-item" key={language.name}>
                    <div
                        id={`circleprog${i + 1}`}
                        className="art-circle-progress"
                    />
                    <h6>{language.name}</h6>
                </div>
            ))}
        </div>
    );
};

export default Languages;

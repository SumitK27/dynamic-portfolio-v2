import React from "react";

const Education = ({ education }) => {
    return (
        <div className="col-lg-6">
            <div className="art-section-title">
                <div className="art-title-frame">
                    <h4>Education</h4>
                </div>
            </div>

            {/* timeline */}
            <div className="art-timeline art-gallery" id="history">
                {education.map((school) => (
                    <div key={school.name} className="art-timeline-item">
                        <div className="art-timeline-mark-light" />
                        <div className="art-timeline-mark" />
                        <div className="art-a art-timeline-content">
                            <div className="art-card-header">
                                <div className="art-left-side">
                                    <h5>{school.name}</h5>
                                    <div className="art-el-suptitle mb-15">
                                        {school.degree}
                                    </div>
                                </div>
                                <div className="art-right-side">
                                    <span className="art-date">
                                        {school.start} - {school.end}
                                    </span>
                                </div>
                            </div>
                            <p>{school.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;

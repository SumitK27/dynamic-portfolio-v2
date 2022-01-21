import React from "react";

const Work = ({ work }) => {
    return (
        <div className="col-lg-6">
            <div className="art-section-title">
                <div className="art-title-frame">
                    <h4>Work History</h4>
                </div>
            </div>

            {/* timeline */}
            <div className="art-timeline art-gallery" id="history">
                {work.map((company) => (
                    <div key={company.name} className="art-timeline-item">
                        <div className="art-timeline-mark-light" />
                        <div className="art-timeline-mark" />
                        <div className="art-a art-timeline-content">
                            <div className="art-card-header">
                                <div className="art-left-side">
                                    <h5>{company.name}</h5>
                                    <div className="art-el-suptitle mb-15">
                                        {company.post}
                                    </div>
                                </div>
                                <div className="art-right-side">
                                    <span className="art-date">
                                        {company.start} - {company.end}
                                    </span>
                                </div>
                            </div>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: company.description,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;

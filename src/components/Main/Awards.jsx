import React from "react";

const Awards = ({ awards }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="art-section-title">
                        <div className="art-title-frame">
                            <h4>Awards</h4>
                        </div>
                    </div>
                </div>
                {awards.map((award) => (
                    <div key={award.name} className="col-lg-4 col-md-6">
                        <div className="art-a art-service-icon-box">
                            <div className="art-service-ib-content">
                                <div className="art-table">
                                    <ul>
                                        <li>
                                            <h4>{award.name}</h4>
                                            <span>{award.date}</span>
                                        </li>
                                        <li>
                                            <h6>{award.by}</h6>
                                        </li>
                                    </ul>
                                    <p
                                        className="p-15-0"
                                        dangerouslySetInnerHTML={{
                                            __html: award.description,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Awards;

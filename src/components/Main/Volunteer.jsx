import React from "react";

const Certification = ({ volunteer }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="art-section-title">
                        <div className="art-title-frame">
                            <h4>Volunteer</h4>
                        </div>
                    </div>
                </div>
                {volunteer.map((event) => (
                    <div key={event.title} className="col-lg-4 col-md-6">
                        <div className="art-a art-service-icon-box">
                            <div className="art-service-ib-content">
                                <div className="art-table">
                                    <ul>
                                        <li>
                                            <h4>{event.name}</h4>
                                            <span>
                                                {event.start} - {event.end}
                                            </span>
                                        </li>
                                        <li>
                                            <h5>{event.post}</h5>
                                        </li>
                                    </ul>
                                    <p
                                        className="p-15-0"
                                        dangerouslySetInnerHTML={{
                                            __html: event.description,
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

export default Certification;

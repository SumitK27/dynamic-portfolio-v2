import React from "react";

const Certification = ({ certification }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="art-section-title">
                        <div className="art-title-frame">
                            <h4>Certification</h4>
                        </div>
                    </div>
                </div>
                {certification.map((certificate) => (
                    <div key={certificate.title} className="col-lg-4 col-md-6">
                        <div className="art-a art-service-icon-box">
                            <div className="art-service-ib-content">
                                <div className="art-table">
                                    <ul>
                                        <li>
                                            <h4>{certificate.title}</h4>
                                        </li>
                                        <li>
                                            <h6>Issued By:</h6>
                                            <span>
                                                {certificate.organization}
                                            </span>
                                        </li>
                                        <li>
                                            <h6>Issue Date</h6>
                                            <span>{certificate.issueDate}</span>
                                        </li>
                                        <li>
                                            <h6>ID:</h6>
                                            <span>{certificate.id}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <a
                                        className="art-link art-color-link art-w-chevron"
                                        href={certificate.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Show
                                    </a>
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

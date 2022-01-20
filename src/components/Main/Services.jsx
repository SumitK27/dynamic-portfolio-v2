import React from "react";

const Services = ({ services }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="art-section-title">
                        <div className="art-title-frame">
                            <h4>My Services</h4>
                        </div>
                    </div>
                </div>
                {services.map((service) => (
                    <div key={service.name} className="col-lg-4 col-md-6">
                        <div className="art-a art-service-icon-box">
                            <div className="art-service-ib-content">
                                <h5 className="mb-15">{service.name}</h5>
                                <div className="mb-15">
                                    {service.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;

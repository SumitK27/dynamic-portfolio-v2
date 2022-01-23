import React from "react";

const Projects = ({ projects, categories }) => {
    return (
        <div className="container-fluid">
            <div className="row p-30-0">
                <div className="col-lg-12">
                    <div className="art-section-title">
                        <div className="art-title-frame">
                            <h4>Projects</h4>
                        </div>
                        <div className="art-right-frame">
                            <div className="art-filter">
                                <a
                                    href="#."
                                    data-filter="*"
                                    className="art-link art-current"
                                >
                                    All
                                </a>
                                {categories.map((category) => (
                                    <a
                                        href="#."
                                        key={category}
                                        data-filter={`.${category}`}
                                        className="art-link"
                                    >
                                        {category}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="art-grid art-grid-3-col art-gallery">
                    {/* grid item */}
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className={`art-grid-item ${project.category}`}
                        >
                            {/* grid item frame */}
                            <a
                                data-fancybox="gallery"
                                href={project.image}
                                className="art-a art-portfolio-item-frame art-square"
                            >
                                <img src={project.image} alt="item" />
                                <span className="art-item-hover">
                                    <i className="fas fa-expand" />
                                </span>
                            </a>
                            <div className="art-item-description">
                                <h5 className="mb-15">{project.title}</h5>
                                <div className="mb-15">
                                    {project.description}
                                </div>
                                {/* button */}
                                <a
                                    href={project.source}
                                    target="_blank"
                                    className="art-link art-color-link fas fa-code"
                                    rel="noreferrer"
                                >
                                    &nbsp; Source Code
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    className="art-link art-color-link fas fa-link"
                                    rel="noreferrer"
                                >
                                    &nbsp; Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

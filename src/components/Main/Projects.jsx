import React from "react";

const Projects = () => {
    return (
        <div className="container-fluid">
            {/* row */}
            <div className="row p-30-0">
                {/* col */}
                <div className="col-lg-12">
                    {/* section title */}
                    <div className="art-section-title">
                        {/* title frame */}
                        <div className="art-title-frame">
                            {/* title */}
                            <h4>Projects</h4>
                        </div>
                        {/* title frame end */}
                        {/* right frame */}
                        <div className="art-right-frame">
                            {/* filter */}
                            <div className="art-filter">
                                {/* filter link */}
                                <a
                                    href="#."
                                    data-filter="*"
                                    className="art-link art-current"
                                >
                                    All Categories
                                </a>
                                {/* filter link */}
                                <a
                                    href="#."
                                    data-filter=".webTemplates"
                                    className="art-link"
                                >
                                    Web Templates
                                </a>
                                {/* filter link */}
                                <a
                                    href="#."
                                    data-filter=".logos"
                                    className="art-link"
                                >
                                    Logos
                                </a>
                                {/* filter link */}
                                <a
                                    href="#."
                                    data-filter=".drawings"
                                    className="art-link"
                                >
                                    Drawings
                                </a>
                                {/* filter link */}
                                <a
                                    href="#."
                                    data-filter=".ui"
                                    className="art-link"
                                >
                                    UI Elements
                                </a>
                            </div>
                            {/* filter end */}
                        </div>
                        {/* right frame end */}
                    </div>
                    {/* section title end */}
                </div>
                {/* col end */}
                <div className="art-grid art-grid-3-col art-gallery">
                    {/* grid item */}
                    <div className="art-grid-item webTemplates">
                        {/* grid item frame */}
                        <a
                            data-fancybox="gallery"
                            href="img/works/original-size/1.jpg"
                            className="art-a art-portfolio-item-frame art-horizontal"
                        >
                            {/* img */}
                            <img src="img/works/thumbnail/1.jpg" alt="item" />
                            {/* zoom icon */}
                            <span className="art-item-hover">
                                <i className="fas fa-expand" />
                            </span>
                        </a>
                        {/* grid item frame end */}
                        {/* description */}
                        <div className="art-item-description">
                            {/* title */}
                            <h5 className="mb-15">Project title</h5>
                            {/* button */}
                            <a
                                href="#."
                                className="art-link art-color-link art-w-chevron"
                            >
                                Read more
                            </a>
                        </div>
                        {/* description end */}
                    </div>
                    {/* grid item end */}
                    {/* grid item */}
                    <div className="art-grid-item logos">
                        {/* grid item frame */}
                        <a
                            data-fancybox="gallery"
                            href="img/works/original-size/2.jpg"
                            className="art-a art-portfolio-item-frame art-vertical"
                        >
                            {/* img */}
                            <img src="img/works/thumbnail/2.jpg" alt="item" />
                            {/* zoom icon */}
                            <span className="art-item-hover">
                                <i className="fas fa-expand" />
                            </span>
                        </a>
                        {/* grid item frame end */}
                        {/* description */}
                        <div className="art-item-description">
                            {/* title */}
                            <h5 className="mb-15">Project title</h5>
                            <div className="mb-15">
                                Sit amet, consectetur adipisicing elit. Quas,
                                architecto.
                            </div>
                            {/* button */}
                            <a
                                href="#."
                                className="art-link art-color-link art-w-chevron"
                            >
                                Read more
                            </a>
                        </div>
                        {/* description end */}
                    </div>
                    {/* grid item end */}
                    {/* grid item */}
                    <div className="art-grid-item drawings">
                        {/* grid item frame */}
                        <a
                            data-fancybox="gallery"
                            href="img/works/original-size/3.jpg"
                            className="art-a art-portfolio-item-frame art-square"
                        >
                            {/* img */}
                            <img src="img/works/thumbnail/3.jpg" alt="item" />
                            {/* zoom icon */}
                            <span className="art-item-hover">
                                <i className="fas fa-expand" />
                            </span>
                        </a>
                        {/* grid item frame end */}
                        {/* description */}
                        <div className="art-item-description">
                            {/* title */}
                            <h5 className="mb-15">Project title</h5>
                            <div className="mb-15">
                                Sit amet, consectetur adipisicing elit. Quas,
                                architecto.
                            </div>
                            {/* button */}
                            <a
                                href="#."
                                className="art-link art-color-link art-w-chevron"
                            >
                                Read more
                            </a>
                        </div>
                        {/* description end */}
                    </div>
                    {/* grid item end */}
                    {/* grid item */}
                    <div className="art-grid-item ui">
                        {/* grid item frame */}
                        <a
                            data-fancybox="gallery"
                            href="img/works/original-size/4.jpg"
                            className="art-a art-portfolio-item-frame art-vertical"
                        >
                            {/* img */}
                            <img src="img/works/thumbnail/4.jpg" alt="item" />
                            {/* zoom icon */}
                            <span className="art-item-hover">
                                <i className="fas fa-expand" />
                            </span>
                        </a>
                        {/* grid item frame end */}
                        {/* description */}
                        <div className="art-item-description">
                            {/* title */}
                            <h5 className="mb-15">Project title</h5>
                            <div className="mb-15">
                                Sit amet, consectetur adipisicing elit. Quas,
                                architecto.
                            </div>
                            {/* button */}
                            <a
                                href="#."
                                className="art-link art-color-link art-w-chevron"
                            >
                                Read more
                            </a>
                        </div>
                        {/* description end */}
                    </div>
                    {/* grid item end */}
                    {/* grid item */}
                    <div className="art-grid-item webTemplates">
                        {/* grid item frame */}
                        <a
                            data-fancybox="gallery"
                            href="img/works/original-size/5.jpg"
                            className="art-a art-portfolio-item-frame art-square"
                        >
                            {/* img */}
                            <img src="img/works/thumbnail/5.jpg" alt="item" />
                            {/* zoom icon */}
                            <span className="art-item-hover">
                                <i className="fas fa-expand" />
                            </span>
                        </a>
                        {/* grid item frame end */}
                        {/* description */}
                        <div className="art-item-description">
                            {/* title */}
                            <h5 className="mb-15">Project title</h5>
                            <div className="mb-15">
                                Sit amet, consectetur adipisicing elit. Quas,
                                architecto.
                            </div>
                            {/* button */}
                            <a
                                href="#."
                                className="art-link art-color-link art-w-chevron"
                            >
                                Read more
                            </a>
                        </div>
                        {/* description end */}
                    </div>
                    {/* grid item end */}
                    {/* grid item */}
                    <div className="art-grid-item logos">
                        {/* grid item frame */}
                        <a
                            data-fancybox="gallery"
                            href="img/works/original-size/6.jpg"
                            className="art-a art-portfolio-item-frame art-vertical"
                        >
                            {/* img */}
                            <img src="img/works/thumbnail/6.jpg" alt="item" />
                            {/* zoom icon */}
                            <span className="art-item-hover">
                                <i className="fas fa-expand" />
                            </span>
                        </a>
                        {/* grid item frame end */}
                        {/* description */}
                        <div className="art-item-description">
                            {/* title */}
                            <h5 className="mb-15">Project title</h5>
                            <div className="mb-15">
                                Sit amet, consectetur adipisicing elit. Quas,
                                architecto.
                            </div>
                            {/* button */}
                            <a
                                href="#."
                                className="art-link art-color-link art-w-chevron"
                            >
                                Read more
                            </a>
                        </div>
                        {/* description end */}
                    </div>
                    {/* grid item end */}
                    {/* grid item */}
                    <div className="art-grid-item drawings">
                        {/* grid item frame */}
                        <a
                            data-fancybox="gallery"
                            href="img/works/original-size/7.jpg"
                            className="art-a art-portfolio-item-frame art-square"
                        >
                            {/* img */}
                            <img src="img/works/thumbnail/7.jpg" alt="item" />
                            {/* zoom icon */}
                            <span className="art-item-hover">
                                <i className="fas fa-expand" />
                            </span>
                        </a>
                        {/* grid item frame end */}
                        {/* description */}
                        <div className="art-item-description">
                            {/* title */}
                            <h5 className="mb-15">Project title</h5>
                            <div className="mb-15">
                                Sit amet, consectetur adipisicing elit. Quas,
                                architecto.
                            </div>
                            {/* button */}
                            <a
                                href="#."
                                className="art-link art-color-link art-w-chevron"
                            >
                                Read more
                            </a>
                        </div>
                        {/* description end */}
                    </div>
                    {/* grid item end */}
                    {/* grid item */}
                    <div className="art-grid-item ui">
                        {/* grid item frame */}
                        <a
                            data-fancybox="gallery"
                            href="img/works/original-size/8.jpg"
                            className="art-a art-portfolio-item-frame art-horizontal"
                        >
                            {/* img */}
                            <img src="img/works/thumbnail/8.jpg" alt="item" />
                            {/* zoom icon */}
                            <span className="art-item-hover">
                                <i className="fas fa-expand" />
                            </span>
                        </a>
                        {/* grid item frame end */}
                        {/* description */}
                        <div className="art-item-description">
                            {/* title */}
                            <h5 className="mb-15">Project title</h5>
                            {/* button */}
                            <a
                                href="#."
                                className="art-link art-color-link art-w-chevron"
                            >
                                Read more
                            </a>
                        </div>
                        {/* description end */}
                    </div>
                    {/* grid item end */}
                </div>
            </div>
            {/* row end */}
        </div>
    );
};

export default Projects;

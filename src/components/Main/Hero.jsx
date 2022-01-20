import React from "react";

const Hero = () => {
    return (
        <div className="mb-4 container-fluid">
            {/* row */}
            <div className="row p-60-0 p-lg-30-0 p-md-15-0">
                {/* col */}
                <div className="col-lg-12">
                    {/* banner */}
                    <div
                        className="art-a art-banner"
                        style={{
                            backgroundImage: "url(img/bg.jpg)",
                        }}
                    >
                        {/* banner back */}
                        <div className="art-banner-back" />
                        {/* banner dec */}
                        <div className="art-banner-dec" />
                        {/* banner overlay */}
                        <div className="art-banner-overlay">
                            {/* main title */}
                            <div className="art-banner-title">
                                {/* title */}
                                <h1 className="mb-15">
                                    Discover my Amazing <br />
                                    Art Space!
                                </h1>
                                {/* suptitle */}
                                <div className="art-lg-text art-code mb-25">
                                    &lt;<i>code</i>
                                    &gt; I build{" "}
                                    <span
                                        className="txt-rotate"
                                        data-period={2000}
                                        data-rotate='[ "web interfaces.", "ios and android applications.", "design mocups.", "automation tools." ]'
                                    />
                                    &lt;/<i>code</i>
                                    &gt;
                                </div>
                                <div className="art-buttons-frame">
                                    {/* button */}
                                    <a href="#." className="art-btn art-btn-md">
                                        <span>Explore now</span>
                                    </a>
                                    {/* button */}
                                    <a
                                        href="#."
                                        className="art-link art-white-link art-w-chevron"
                                    >
                                        Hire me
                                    </a>
                                </div>
                            </div>
                            {/* main title end */}
                            {/* photo */}
                            <img
                                src="img/face-2.png"
                                className="art-banner-photo"
                                alt="Your Name"
                            />
                        </div>
                        {/* banner overlay end */}
                    </div>
                    {/* banner end */}
                </div>
                {/* col end */}
            </div>
            {/* row end */}
        </div>
    );
};

export default Hero;

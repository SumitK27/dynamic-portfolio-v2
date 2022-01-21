import React from "react";

const Hero = ({ rotate, heroImg }) => {
    return (
        <div className="mb-4 container-fluid">
            <div className="row p-60-0 p-lg-30-0 p-md-15-0">
                <div className="col-lg-12">
                    <div
                        className="art-a art-banner"
                        style={{
                            backgroundImage: "url(img/bg.jpg)",
                        }}
                    >
                        <div className="art-banner-back" />

                        <div className="art-banner-dec" />

                        <div className="art-banner-overlay">
                            <div className="art-banner-title">
                                <h1 className="mb-15">
                                    Discover my Amazing <br />
                                    Art Space!
                                </h1>

                                <div className="art-lg-text art-code mb-25">
                                    &lt;<i>code</i>
                                    &gt; I build{" "}
                                    <span
                                        className="txt-rotate"
                                        data-period={2000}
                                        data-rotate={JSON.stringify(rotate)}
                                    />
                                    &lt;/<i>code</i>
                                    &gt;
                                </div>
                                <div className="art-buttons-frame">
                                    <a href="#." className="art-btn art-btn-md">
                                        <span>Explore now</span>
                                    </a>

                                    <a
                                        href="#."
                                        className="art-link art-white-link art-w-chevron"
                                    >
                                        Hire me
                                    </a>
                                </div>
                            </div>

                            <img
                                src={heroImg}
                                className="art-banner-photo"
                                alt="Hero"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

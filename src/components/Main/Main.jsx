import React from "react";
import Hero from "./Hero";
import Counter from "./Counter";
import Contact from "./Contact";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "./Footer";
import Services from "./Services";

const Main = () => {
    return (
        <div className="art-content">
            {/* curtain */}
            <div className="art-curtain" />

            {/* top background */}
            <div
                className="art-top-bg"
                style={{ backgroundImage: "url(img/bg.jpg)" }}
            >
                {/* overlay */}
                <div className="art-top-bg-overlay" />
                {/* overlay end */}
            </div>
            {/* top background end */}

            {/* swup container */}
            <div className="transition-fade" id="swup">
                <div id="scrollbar" className="art-scroll-frame">
                    <Hero />
                    <Counter />
                    <Services />
                    <Projects />
                    <Experience />
                    <Contact />
                    <Footer firstName="Sumit" lastName="Kajbaje" />
                </div>
            </div>
        </div>
    );
};

export default Main;

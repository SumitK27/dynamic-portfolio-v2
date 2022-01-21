import React from "react";
import Hero from "./Hero";
import Counter from "./Counter";
import Contact from "./Contact";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Services from "./Services";
import Certification from "./Certification";
import Volunteer from "./Volunteer";
import Awards from "./Awards";

const Main = ({
    config,
    heroImg,
    name,
    rotate,
    testimonials,
    certification,
    projects,
    categories,
    services,
    education,
    awards,
    work,
    volunteer,
}) => {
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
            </div>

            {/* swup container */}
            <div className="transition-fade" id="swup">
                <div id="scrollbar" className="art-scroll-frame">
                    {config.hero && <Hero rotate={rotate} heroImg={heroImg} />}
                    {config.counter && <Counter />}
                    {config.services && <Services services={services} />}
                    {config.projects && (
                        <Projects projects={projects} categories={categories} />
                    )}
                    {config.experience && (
                        <Experience
                            education={education}
                            work={work}
                            config={config}
                        />
                    )}
                    {config.certification && (
                        <Certification certification={certification} />
                    )}
                    {config.awards && <Awards awards={awards} />}
                    {config.volunteer && <Volunteer volunteer={volunteer} />}
                    {config.testimonial && (
                        <Testimonials testimonials={testimonials} />
                    )}
                    {config.contact && <Contact />}
                    <Footer name={name} />
                </div>
            </div>
        </div>
    );
};

export default Main;

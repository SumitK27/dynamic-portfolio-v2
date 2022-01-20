import React from "react";
import About from "./About";
import Languages from "./Languages";
import TechSkills from "./TechSkills";
import KnowledgeList from "./KnowledgeList";
import Resume from "./Resume";

const Main = () => {
    return (
        <div id="scrollbar2" className="art-scroll-frame">
            <About />
            <div className="art-ls-divider" />

            <Languages />
            <div className="art-ls-divider" />

            <TechSkills />
            <div className="art-ls-divider" />

            <KnowledgeList />
            <div className="art-ls-divider" />

            <Resume />
        </div>
    );
};

export default Main;

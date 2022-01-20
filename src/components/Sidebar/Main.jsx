import React from "react";
import About from "./About";
import Languages from "./Languages";
import TechSkills from "./TechSkills";
import KnowledgeList from "./KnowledgeList";
import Resume from "./Resume";

const Main = ({
    resume,
    personal: { address, dob, email, phone: contact },
    languages,
    skills,
    knowledge,
}) => {
    return (
        <div id="scrollbar2" className="art-scroll-frame">
            <About
                address={address}
                dob={dob}
                email={email}
                contact={contact}
            />
            <div className="art-ls-divider" />

            <Languages languages={languages} />
            <div className="art-ls-divider" />

            <TechSkills skills={skills} />
            <div className="art-ls-divider" />

            <KnowledgeList knowledge={knowledge} />
            <div className="art-ls-divider" />

            <Resume resume={resume} />
        </div>
    );
};

export default Main;

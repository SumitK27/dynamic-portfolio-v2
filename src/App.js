import PreLoader from "./components/PreLoader";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import data from "./resumeData.json";

function App() {
    return (
        <>
            <div className="art-app art-app-onepage">
                <div className="art-mobile-top-bar" />
                <div className="art-app-wrapper">
                    <div className="art-app-container">
                        <Sidebar
                            personal={data.personal}
                            social={data.social}
                            skills={data.skills}
                            knowledge={data.knowledge}
                        />
                        <Main
                            config={data.config}
                            rotate={data.dataRotation}
                            heroImg={data.personal.heroImg}
                            name={`${data.personal.firstName} ${data.personal.lastName}`}
                            volunteer={data.volunteer}
                            awards={data.awards}
                            services={data.services}
                            certification={data.certification}
                            projects={data.projects}
                            categories={data.categories}
                            education={data.education}
                            work={data.work}
                            testimonials={data.testimonials}
                            personal={data.personal}
                        />
                    </div>
                </div>
                <PreLoader
                    firstName={data.personal.firstName}
                    lastName={data.personal.lastName}
                />
            </div>

            <div id="swupMenu" />
        </>
    );
}

export default App;

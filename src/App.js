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
                            skills={data.resume.skills}
                            knowledge={data.resume.knowledge}
                        />
                        <Main />
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

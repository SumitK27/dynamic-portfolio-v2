import PreLoader from "./components/PreLoader";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

function App() {
    return (
        <>
            <div className="art-app art-app-onepage">
                <div className="art-mobile-top-bar" />
                <div className="art-app-wrapper">
                    <div className="art-app-container">
                        <Sidebar />
                        <Main />
                    </div>
                </div>
                <PreLoader firstName="Sumit" lastName="Kajbaje" />
            </div>

            <div id="swupMenu" />
        </>
    );
}

export default App;

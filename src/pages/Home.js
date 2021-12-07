import "../App.css";
import "./style/Home.css";

import Header from "../layout/Header";
import Navbar from "../layout/Navbar";

import ProjectTitle from "../components/Home/ProjectTitle";
import Project from "../components/Home/Project";

function Home() {
    return (
        <div>
            <Header />
            <Navbar />
            <ProjectTitle />
            <Project />            
        </div>
    );
}

export default Home;

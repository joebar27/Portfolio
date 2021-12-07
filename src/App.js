import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";

import Footer from "./layout/Footer";
import Contact from "./pages/Contact";

function App() {
    return (
        <div>
            <main className="bgColor-4">
                <Routes>
                    <Route path="/portfolio/" element={<Home />} />
                    <Route path="/portfolio/a-propos" element={<Aboutme />} />
                    <Route path="/portfolio/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;

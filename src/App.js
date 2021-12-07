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
                    <Route path="Portfolio/" element={<Home />} />
                    <Route path="Portfolio/a-propos" element={<Aboutme />} />
                    <Route path="Portfolio/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;

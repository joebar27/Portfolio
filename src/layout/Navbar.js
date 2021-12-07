import "./layout.css";

import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bgColor-3 d-flex justify-content-around align-items-center col-12">
            <NavLink to="/portfolio/" className="bgColor-4 color-2 px-2 mx-4 mx-lg-5">
                Portfolio
            </NavLink>
            <NavLink to="/portfolio/a-propos" className="bgColor-4 color-2 px-2 mx-4 mx-lg-5">
                À-propos
            </NavLink>
            <NavLink to="/portfolio/contact" className="bgColor-4 color-2 px-2 mx-4 mx-lg-5">
                Contact
            </NavLink>
        </nav>
    );
}

export default Navbar;

import { Link } from "react-router-dom";
import "./layout.css";

function Footer() {
    return (
        <footer className="bgColor-3 color-2">
            <p id="footer" className="d-flex col-10 justify-content-center align-items-center my-0 ps-md-4">
                Ce portfolio a été conçu et designer par :<Link to="/contact" className="ms-1"> ANGER Romain</Link>
            </p>
        </footer>
    );
}

export default Footer;

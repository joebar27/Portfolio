import { useState, useEffect } from "react";
import "./layout.css";

function Header() {
    const [anim, setAnim] = useState(true);

    useEffect(() => {
        animTitle();
    }, []);

    function animTitle() {
        setAnim();
    }

    return (
        <header id="header" className="d-flex flex-wrap col-12 justify-content-center align-items-center bgColor-1">
            <div
                id="headerAnimed"
                className={
                    (!anim)
                        ? "d-flex flex-wrap justify-content-center align-items-center animate"
                        : "d-flex flex-wrap justify-content-center align-items-center"
                }
            >
                <h1
                    id="title"
                    className="d-flex col-8 color-5 justify-content-center pb-2 m-0"
                >
                    ANGER ROMAIN
                </h1>
                <div id="lineleft" className="col-6 bgColor-2 mx-5"></div>
                <div id="lineright" className="col-6 bgColor-2 mx-5"></div>
                <h2
                    id="subtitle"
                    className="d-flex col-8 color-5 justify-content-center pt-2 m-0"
                >
                    Developpeur Web et Web Mobile
                </h2>
            </div>
        </header>
    );
}

export default Header;

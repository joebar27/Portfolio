import React from "react";
import "./style/GeneralStyle.css";
import "./style/ProjectTitle.css";

function HomeTitle() {
    return (
        <div id="titleportfolio" className="bgColor-1">
            <h1 className="color-5 ms-2 ms-lg-4 pt-1 m-0">
                Mes projets de formation :
            </h1>
            <p className="color-2 d-flex col-12 ms-2 ms-lg-4 m-0">
                Tous les projets présentés ici ont été réaliser au cours de ma
                formation de développeur :
            </p>
        </div>
    );
}

export default HomeTitle;

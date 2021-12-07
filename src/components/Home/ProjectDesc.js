import React from "react";
import ProjectImg from "./ProjectImg";
import "./style/ProjectDesc.css";

function ProjectDesc({ info }) {
    console.log("desc :", info.ghPages);

    return (
        <div
            id="projectDescribe"
            className="justify-content-start align-items-start col-8 pt-2 bgColor-1"
        >
            <ProjectImg info={info} />
            <div id="describe">
                <h3 className="color-5 m-2 m-md-4 m-lg-5">
                    Détail du projet selectionné :
                </h3>
                <p className="color-2 m-2 m-md-3 col-lg-10">{info.describe}</p>

                <div className="separate bgColor-4 col-8 my-md-4 my-lg-5"></div>

                <h4 className="color-5 m-2 m-md-4 m-lg-5">
                    Langage utilisé dans le projet :
                </h4>
                <ul className="color-2 m-md-3">
                    {info.langage.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>

                <div className="separate bgColor-4 col-8 my-md-4 my-lg-5"></div>

                <h4 className="color-5 m-2 ms-md-4 ms-lg-5">
                    Temps d'apprentissage :
                </h4>
                <p className="color-2 m-2 m-md-3 col-lg-10">{info.trainingTime}</p>

                <div className="separate bgColor-4 col-8 my-md-4 my-lg-5"></div>

                <h4 className="color-5 m-2 ms-md-4 ms-lg-5">
                    Liens vers le projet :
                </h4>
                <a className="color-2 m-2 m-md-3 col-lg-10" href={info.github}><span className='color-5'>Github :</span> {info.github} <br/></a>
                <a className="color-2 m-2 m-md-3 col-lg-10" href={info.ghPages}><span className='color-5'>Gh-Pages :</span> {info.ghPages}</a>
            </div>
        </div>
    );
}

export default ProjectDesc;

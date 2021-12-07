import { useEffect, useState } from "react";
import axios from "axios";

import "./style/GeneralStyle.css";

import ProjectDesc from "./ProjectDesc";
import ProjectAside from "./ProjectAside";

function Project() {
    // recupération des données du projet ciblé
    const [info, updateInfo] = useState({
        name: "swapi",
        src: "images/swapi.jpg",
        alt: "capture du projet swapi",
        describe:
            "Ce projet est le premier que j'ai réalisé avec REACT, il avait pour but de récupéré des informations sur une API pour en affiché les resultat avec un systeme de recherche par Id.",
        trainingTime: "10 semaines",
        langage: ["REACT", "AJAX", "JS", "Bootstrap", "CSS", "HTML"],
        github: "https://github.com/joebar27/star_wars_REACT",
        ghPages: ""
    });

    // récupération des données de tout les projets
    const [datas, setDatas] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios
            .get("./infoProjet.json")
            .then(function (response) {
                setDatas(response.data);
                setIsLoaded(true);
            })
            .catch(function (error) {
                setError(error);
            });
    }, []);

    if (error) {
        return (
            <div className="alert alert-danger">
                Une erreur est survenue le chargement a échoué : {error.message}
            </div>
        );
    }

    if (!isLoaded) {
        return (
            <div className="alert alert-dark ">Chargement du Projet . . .</div>
        );
    }
    return (
        <div id="projet" className="d-flex col-12 bgColor-4">
            <ProjectAside datas={datas} updateInfo={updateInfo} />
            <ProjectDesc info={info} />
        </div>
    );
}

export default Project;

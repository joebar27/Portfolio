import "../App.css";
import "./style/Aboutme.css";
import html from "../img/HTML5.svg";
import css from "../img/CSS3.svg";
import bootstrap from "../img/Bootstrap.svg";
import js from "../img/JS.svg";
import react from "../img/React.svg";
import Navbar from "../layout/Navbar";

function Aboutme() {
    return (
        <div id="about" className="d-flex flex-wrap justify-content-center">
            <Navbar />
            <div className="d-flex flex-wrap align-items-center justify-content-around col-lg-10">
                <div id="portrait" className="d-flex col-12">
                    <p className="color-2 text-center lh-base p-2 m-0">
                        <img
                            className="rounded float-start me-2"
                            src="images/portrait-web.png"
                            alt="portrait"
                        />
                        Je suis une personne désirant constamment développer mes
                        compétences, afin d'assurer ma reconversion
                        professionnelle après une carrière m'ayant fait
                        découvrir plusieurs milieux professionnels (Électricien,
                        Agent de Maitrise en Sécurité Incendie, Chauffeur SPL,
                        Sapeur Pompier ...).
                        <br /> J'ai décidé de me lancer dans l'apprentissage de
                        la programmation informatique, j'ai toujours eu une soif
                        d'apprendre de nouvelle technologie. Après être passé
                        par la programmation Arduino en C++, depuis plus de 2
                        ans je me formais en autodidacte aux langages Front tel
                        que HTML, CSS, JavaScript, afin de me donner toutes les
                        chances de devenir développeur web, je suis actuellement
                        en formation à l'AFPA de St-Étienne-du-Rouveray(76), ce
                        qui me permet de développer toutes mes compétences afin
                        de concrétiser mon parcours professionnel, que vous
                        pouvez explorer plus en détail avec mon
                        <a className="color-5" href="https://github.com/joebar27"> GitHub</a>.
                        <br />
                        <br />
                        Plus qu'un avenir professionnel, je me suis découvert
                        une passion, celle de pouvoir créer tout un univers
                        garce aux langages de programmation.
                    </p>
                </div>
                <div id="monCv" >
                    <a className="color-5 border border-danger p-2" href="./CV_Anger_Romain_2022.pdf" target="_blank">
                        Mon CV en PDF
                    </a>
                </div>
                <div
                    id="aboutLang"
                    className="d-flex flex-wrap col-12 mt-3 mt-lg-5"
                >
                    <h1 className="d-flex color-5 ms-2 mt-md-4 mt-lg-3">
                        Langage :
                    </h1>
                    <div className="d-flex flex-wrap col-12 justify-content-around my-2">
                        <img src={html} alt="logo html5" height="50" />
                        <img src={css} alt="logo CSS3" height="50" />
                        <img src={bootstrap} alt="logo Bootstrap" height="50" />
                        <img src={js} alt="logo JS" height="50" />
                        <img src={react} alt="logo REACT" height="50" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;

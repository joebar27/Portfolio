import "./style/ProjectAside.css";

function HomeAside({ datas, updateInfo }) {
    // actualisation des infos selon le projet clické
    function addInfo(
        name,
        src,
        alt,
        describe,
        trainingTime,
        langage,
        github,
        ghPages
    ) {
        updateInfo({
            name,
            src,
            alt,
            describe,
            trainingTime,
            langage,
            github,
            ghPages,
        });
    }

    return (
        <aside className="d-flex flex-wrap col-4 ps-2 py-2 px-md-3 bgColor-1">
                    {/* génération et affichage des images des différents projets: */}
            {datas.map(
                ({
                    name,
                    src,
                    alt,
                    describe,
                    trainingTime,
                    langage,
                    github,
                    ghPages,
                }) => (
                    <img
                        key={name}
                        src={src}
                        alt={alt}
                        className="img-projet mb-1 ms-lg-4 mb-lg-3"
                        onClick={() =>
                            addInfo(
                                name,
                                src,
                                alt,
                                describe,
                                trainingTime,
                                langage,
                                github,
                                ghPages
                            )
                        }
                    />
                )
            )}
        </aside>
    );
}

export default HomeAside;

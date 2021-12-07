import "./style/ProjectImg.css";

function ProjectImg({info}) {
    // console.log("img :",info.src);

    return (
        <div id="imgProject" className="d-flex justify-content-center col-12">
            <img
                className="border"
                src={info.src}
                alt={info.alt}
            />
        </div>
    );
}

export default ProjectImg;

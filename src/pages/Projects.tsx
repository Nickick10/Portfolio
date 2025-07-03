import { Link } from "react-router-dom";
import './Projects.css';
import MMTitle from "../assets/MMTitle.png"
import STitle from "../assets/STitle.png"
import CCTitle from "../assets/CCTitle.png"
import RTRTitle from "../assets/RTRTitle.png"

//#region projectsList
//List of projects to make a card for each project
const projects = [
    {
        title: "Money-Man",
        image: MMTitle,
        description: "Money Managment Application using Android Studio & Firebase",
        link: "/projects/money-man",
    },
    {
        title: "SQUEEZE!",
        image: STitle,
        description: "2D Financial Literacy Simulation Game using Unity & C#",
        link: "/projects/squeeze",
    },
    {
        title: "CatChaos",
        image: CCTitle,
        description: "3D Cat Simulator game using Unity & C#",
        link: "/projects/catchaos",
    },
    {
        title: "Rare Task Reminder",
        image: RTRTitle,
        description: "Rare Task Reminder website using HTML/CSS/JS",
        link: "/projects/rare-task-reminder",
    },
]
//#endregion

const Projects = () => {
    return (
        <div>
            <div className="Title">
                <h1>Projects</h1>
                <h2>Here are some of my favorite projects that I've worked on.</h2>
                <h2>Click on a project to learn more about it.</h2>
            </div>

            <div className="projects-container">
                {projects.map((project) =>
                    <Link 
                        key={project.title}
                        to={project.link}
                        className="project-card"
                    >
                        <img className="project-image" src={project.image} alt={project.title}/>
                        <div className="project-info">
                            <h3 className="title-text">{project.title}</h3>
                            <p className="desc-text">{project.description}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Projects;
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
        id: "p1",
        title: "Money-Man",
        image: MMTitle,
        description: "Money Managment Application using Android Studio & Firebase",
    },
    {
        id: "p2",
        title: "SQUEEZE!",
        image: STitle,
        description: "2D Financial Literacy Simulation Game using Unity & C#",
    },
    {
        id: "p3",
        title: "CatChaos",
        image: CCTitle,
        description: "3D Cat Simulator game using Unity & C#",
    },
    {
        id: "p4",
        title: "Rare Task Reminder",
        image: RTRTitle,
        description: "Rare Task Reminder website using HTML/CSS/JS",
    },
]
//#endregion

const Projects = () => (
    <div className="Title">
        <h1>Projects</h1>
        <h2>Here are some of my favorite projects that I've worked on.</h2>
        <h2>Click on a project to learn more about it.</h2>

        
    </div>
);

export default Projects;
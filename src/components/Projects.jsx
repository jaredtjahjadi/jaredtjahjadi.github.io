import ProjectCard from './ProjectCard';
import ImgWebsite from '../assets/proj_website.png';
import ImgTYH from '../assets/proj_tyh.png';
import ImgROB from '../assets/proj_rob.png';

const desc_website = "Jared Tjahjadi's personal website, developed using React.js. The website you're viewing right now!";
const desc_tyh = "A point-and-click game in which the player is a \"god\" that controls a human's daily routine. Participant in Stony Brook University Game Development & Design Club's 2023 Ren'Py Competition.";
const desc_rob = "A general usage Discord bot written in JavaScript using the Node.js module Discord.js. Contains general utilities and text-baesd games in which the bot automatically sends messages with different text based on user input.";

export default function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project-cards">
                <ProjectCard name={"jaredtjahjadi.github.io"} date={"Jun 2023 - Aug 2023"} image={ImgWebsite} altText={"jaredtjahjadi.github.io"} desc={desc_website} />
                <ProjectCard name={"Train Your Human"} date={"Mar 2023"} image={ImgTYH} altText={"Train Your Human"} desc={desc_tyh} link={"https://github.com/jaredtjahjadi/TrainYourHuman"} />
                <ProjectCard name={"R.O.B."} date={"Nov 2020 - Apr 2021"} image={ImgROB} altText={"R.O.B."} desc={desc_rob} link={"https://github.com/jaredtjahjadi/R.O.B"} />
            </div>
        </div>
    )
}
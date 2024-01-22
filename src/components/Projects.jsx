import ProjectCard from './ProjectCard';
import ImgWebsite from '../assets/proj_website.png';
import ImgTYH from '../assets/proj_tyh.png';
import ImgROB from '../assets/proj_rob.png';
import ImgFakeSO from '../assets/proj_fakeso.png';
import ImgLogMenu from '../assets/proj_logmenu.png';

const desc_fakeso = "A full-stack web app that mimics the website Stack Overflow. Implements front-end and back-end technologies in order to provide am accessible, secure, user-friendly experience.";
const desc_website = "Jared Tjahjadi's personal website, developed using React.js. The website you're viewing right now!";
const desc_tyh = "A point-and-click game in which the player is a \"god\" that controls a human's daily routine. Participant in Stony Brook University Game Development & Design Club's 2023 Ren'Py Competition.";
const desc_rob = "A general usage Discord bot written in JavaScript using the Node.js module Discord.js. Contains general utilities and text-based games in which the bot automatically sends messages with different text based on user input.";
const desc_logmenu = "Stardew Valley mod that adds an in-game menu that displays previously seen dialogue. Written in C# and implements libraries from the Stardew Modding API (SMAPI).";

export default function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project-cards">
                <ProjectCard name={"Log Menu"} date={"Jan 2024"} image={ImgLogMenu} altText={"Jan 2024"} desc={desc_logmenu} link={"https://github.com/jaredtjahjadi/LogMenu"} />
                <ProjectCard name={"Fake Stack Overflow"} date={"Sep 2023 - Dec 2023"} image={ImgFakeSO} altText={"Fake Stack Overflow"} desc={desc_fakeso} link={"https://github.com/jaredtjahjadi/FakeStackOverflow"} />
                <ProjectCard name={"jaredtjahjadi.github.io"} date={"Jun 2023 - Aug 2023"} image={ImgWebsite} altText={"jaredtjahjadi.github.io"} desc={desc_website} link={"https://github.com/jaredtjahjadi/jaredtjahjadi.github.io"} />
                <ProjectCard name={"Train Your Human"} date={"Mar 2023"} image={ImgTYH} altText={"Train Your Human"} desc={desc_tyh} link={"https://github.com/jaredtjahjadi/TrainYourHuman"} />
                <ProjectCard name={"R.O.B."} date={"Nov 2020 - Apr 2021"} image={ImgROB} altText={"R.O.B."} desc={desc_rob} link={"https://github.com/jaredtjahjadi/R.O.B"} />
            </div>
        </div>
    )
}
import ProjectCard from './ProjectCard';
import ImgWebsite from '../assets/proj_website.png';
import ImgTYH from '../assets/proj_tyh.png';
import ImgROB from '../assets/proj_rob.png';

export default function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project-cards">
                <ProjectCard name={"jaredtjahjadi.github.io"} date={"Jun 2023 - Aug 2023"} image={ImgWebsite} altText={"jaredtjahjadi.github.io"} desc={"Jared Tjahjadi's personal website. The website you're on right now!"} link={"https://github.com/jaredtjahjadi/jaredtjahjadi.github.io"} />
                <ProjectCard name={"Train Your Human"} date={"Mar 2023"} image={ImgTYH} altText={"Train Your Human"} desc={"A point-and-click game made using the Python visual novel engine Ren'Py. Participant in Stony Brook University Game Development & Design Club's 2023 Ren'Py Competition."} link={"https://github.com/jaredtjahjadi/TrainYourHuman"} />
                <ProjectCard name={"R.O.B."} date={"Nov 2020 - Apr 2021"} image={ImgROB} altText={"R.O.B."} desc={"A general usage Discord bot written in JavaScript."} link={"https://github.com/jaredtjahjadi/R.O.B"} />
            </div>
        </div>
    )
}
import React from 'react';
import ProjectCard from './ProjectCard';
import ImgWebsite from './img/proj_website.png';
import ImgTYH from './img/proj_tyh.png';
import ImgROB from './img/proj_rob.png';

export default function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project-cards">
                <ProjectCard name={"jaredtjahjadi.github.io"} image={ImgWebsite} altText={"jaredtjahjadi.github.io"} />
                <ProjectCard name={"Train Your Human"} image={ImgTYH} />
                <ProjectCard name={"R.O.B."} image={ImgROB} />
            </div>
        </div>
    )
}
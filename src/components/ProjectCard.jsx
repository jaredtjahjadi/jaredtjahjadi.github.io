/* eslint-disable react/prop-types */

export default function ProjectCard({name, image, altText, desc, link}) {    
    return (
        <div className="project-card">
            <div className="project-card-img">
                <img className="blur zoom" src={image} alt={altText} />
            </div>
            <div className="project-card-content">
                <div className="text">{name}</div>
                <div className="text">{desc}</div>
                <div className="text"><a href={link}>GitHub Link</a></div>
            </div>
        </div>
    )
}
/* eslint-disable react/prop-types */

export default function ProjectCard({name, image, altText, date, desc, link}) {    
    return (
        <div className="project-card">
            <img className="blur zoom" src={image} alt={altText} />
            <div className="project-card-content">
                <div className="project-card-name">{name}</div>
                <div className="project-card-date">{date}</div>
                <div className="project-card-desc">{desc}</div>
                <a href={link}><button>GitHub Link</button></a>
            </div>
        </div>
    )
}
/* eslint-disable react/prop-types */

export default function ProjectCard({name, image, altText, date, desc, link}) {    
    return (
        <div className="project-card">
            <img className="blur zoom" src={image} alt={altText} />
            <div className="project-card-content">
                <div className="project-card-name">{name}</div>
                <div className="project-card-date">{date}</div>
                <div className="project-card-desc">{desc}</div>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.open(link);
                }}>GitHub Link</button>
            </div>
        </div>
    )
}
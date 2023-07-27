import React from 'react';

export default function ProjectCard({name, image, altText}) {
    return (
        <div className="project-card">
            <div className="project-card-img">
                <img src={image} alt={altText} />
            </div>
            <div className="project-card-content">
                {name}
            </div>
        </div>
    )
}
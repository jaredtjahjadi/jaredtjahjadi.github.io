import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="hero" spy smooth duration={500}>Home</Link></li>
                <li><Link to="about" spy smooth duration={500}>About</Link></li>
                <li><Link to="resume" spy smooth duration={500}>Resume</Link></li>
                <li><Link to="projects" spy smooth duration={500}>Projects</Link></li>
                <li><Link to="contact" spy smooth duration={500}>Contact</Link></li>
            </ul>
            <button className="hamburger">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>
        </nav>
    )
}
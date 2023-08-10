import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const changeBG = () => {
        if(window.scrollY >= 60)
            setNavbar(true);
        else
            setNavbar(false);
    }

    window.addEventListener('scroll', changeBG);

    return (
        <nav className={navbar ? 'active' : ''}>
            <ul>
                <li><Link to="hero" spy smooth duration={500}>Home</Link></li>
                <li><Link to="about" spy smooth duration={500}>About</Link></li>
                <li><Link to="resume" spy smooth duration={500}>Resume</Link></li>
                <li><Link to="projects" spy smooth duration={500}>Projects</Link></li>
                <li><Link to="contact" spy smooth duration={500}>Contact</Link></li>
            </ul>
        </nav>
    )
}
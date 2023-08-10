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
        </nav>
    )
}
import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
    // Handles hamburger menu (responsive to smaller screens)
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // Handles toggling navbar transparency
    const [navbar, setNavbar] = useState(false);
    const changeBG = () => { setNavbar(window.scrollY >= 60); }
    window.addEventListener('scroll', changeBG);

    // To be rendered
    return (
        <nav className={navbar ? 'active' : ''}>
            <div className='menu' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'open' : ''}>
                <li><Link to="hero" spy smooth duration={500} onClick={closeMobileMenu}>Home</Link></li>
                <li><Link to="about" spy smooth duration={500} onClick={closeMobileMenu}>About</Link></li>
                <li><Link to="resume" spy smooth duration={500} onClick={closeMobileMenu}>Resume</Link></li>
                <li><Link to="projects" spy smooth duration={500} onClick={closeMobileMenu}>Projects</Link></li>
                <li><Link to="contact" spy smooth duration={500} onClick={closeMobileMenu}>Contact</Link></li>
            </ul>
        </nav>
    )
}
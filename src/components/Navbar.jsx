import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
    const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    // const [button, setButton] = useState(false);

    // Handles toggling navbar transparency
    const [navbar, setNavbar] = useState(false);
    const changeBG = () => {
        if(window.scrollY >= 60)
            setNavbar(true);
        else
            setNavbar(false);
    }
    window.addEventListener('scroll', changeBG);

    // To be rendered
    return (
        <nav className={navbar ? 'active' : ''}>
            <div className='menu'>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul>
                <li><Link to="hero" spy smooth duration={500} onClick={closeMobileMenu}>Home</Link></li>
                <li><Link to="about" spy smooth duration={500} onClick={closeMobileMenu}>About</Link></li>
                <li><Link to="resume" spy smooth duration={500} onClick={closeMobileMenu}>Resume</Link></li>
                <li><Link to="projects" spy smooth duration={500} onClick={closeMobileMenu}>Projects</Link></li>
                <li><Link to="contact" spy smooth duration={500} onClick={closeMobileMenu}>Contact</Link></li>
            </ul>
        </nav>
    )
}
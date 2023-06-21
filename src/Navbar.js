import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

export default function Navbar() {
    return (
        <Router>
            {/* Navigation bar */}
            <nav>
                <ul>
                    <li><NavLink exact to='/'>Home</NavLink></li>
                    <li><NavLink exact to='/about'>About</NavLink></li>
                    <li><NavLink exact to='/education'>Education</NavLink></li>
                    <li><NavLink exact to='/experience'>Experience</NavLink></li>
                    <li><NavLink exact to='/projects'>Projects</NavLink></li>
                    <li><NavLink exact to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>
            {/* Switch moves between each page, Route defines each page */}
            <Routes>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/education' exact component={Education} />
                <Route path='/experience' exact component={Experience} />
                <Route path='/projects' exact component={Projects} />
                <Route path='/contact' exact component={Contact} />
            </Routes>
        </Router>
    )
}
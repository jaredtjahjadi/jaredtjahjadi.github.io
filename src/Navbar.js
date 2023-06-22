import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

export default function Navbar() {
    return (
        <Router>
            {/* Navigation bar */}
            <nav>
                <ul>
                    <li><NavLink activeClassName="active" exact to='/'>Home</NavLink></li>
                    <li><NavLink activeClassName="active" to='/about'>About</NavLink></li>
                    <li><NavLink activeClassName="active" to='/resume'>Resume</NavLink></li>
                    <li><NavLink activeClassName="active" to='/projects'>Projects</NavLink></li>
                    <li><NavLink activeClassName="active" to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>
            {/* Switch moves between each page, Route defines each page */}
            <Routes>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/resume' component={Resume} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
            </Routes>
        </Router>
    )
}
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
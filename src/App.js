import React from 'react';
import './App.scss';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
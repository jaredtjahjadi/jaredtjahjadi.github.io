import './App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
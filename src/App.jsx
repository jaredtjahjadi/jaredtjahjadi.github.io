import './App.scss';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

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
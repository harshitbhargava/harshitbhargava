import { useCustomCursor } from './hooks/useCustomCursor';
import { useScrollReveal } from './hooks/useScrollReveal';
import MatrixRain from './components/MatrixRain';
import ScrollProgress from './components/ScrollProgress';
import Orbs from './components/Orbs';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

export default function App() {
  const { cursorRef, dotRef } = useCustomCursor();
  useScrollReveal();

  return (
    <>
      {/* Custom Cursor */}
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-dot" ref={dotRef} />

      {/* Noise Overlay */}
      <div className="noise" />

      {/* Background Effects */}
      <MatrixRain />
      <Orbs />
      <ScrollProgress />

      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

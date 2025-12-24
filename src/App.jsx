import React from 'react';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
export default function App() {
  return (
  <div>
      <Home />
      {/* We'll add About, Projects, Resume sections below later */}
      <Navbar/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer />
    </div>
  );
}

// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Skills from './components/Skills';

import { Fade, Slide } from 'react-awesome-reveal';

function App() {
  return (
    <>
      <Header />
      <main>
        <Fade triggerOnce>
          <Hero />
        </Fade>

        <Slide direction="up" triggerOnce>
          <ExperienceTimeline />
        </Slide>

        <Fade delay={300} triggerOnce>
          <Projects />
        </Fade>

        <Slide direction="left" triggerOnce>
          <Skills />
        </Slide>
      </main>
    </>
  );
}

export default App;
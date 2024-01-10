import React from 'react';
import {
  Navbar,
  Sidebar,
  Hero,
  About,
  // Projects
} from '../components';
import { Particle } from '../components/Particle';
import Projects from '../components/Projects'

const HomePage = () => {
  return (
    <>
      <main>
        {/* <NavAlert /> */}
        <Particle/>
        <Navbar />
        <Sidebar />
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default HomePage;

import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Home;

import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        w-full
        flex flex-col
        items-center
        justify-center
        text-center
        px-4
      "
      style={{
        // Subtract ~4rem to accommodate a fixed navbar height
        height: 'calc(100vh - 4rem)',
        backgroundColor: 'var(--color-bg-section)',
        color: 'var(--color-text-darkBg)',
      }}
    >
      <h2
        className="text-4xl md:text-6xl font-bold mb-6"
        style={{ color: 'var(--color-primary)' }}
      >
        Hi, I'm Onkar Sudrik
      </h2>

      {/* 
        Fixed the spelling from "machine learnig" to "machine learning".
        Adjusted the copy for clarity.
      */}
      <p className="text-lg md:text-xl mb-8 w-full">
        A passionate{' '}
        <span
          className="font-semibold"
          style={{ color: 'var(--color-primary)' }}
        >
          machine learning developer
        </span>{' '}
        crafting modern, user-friendly websites and applications.
      </p>

      {/* 
        If you have a /projects route in React Router, you may want
        <Link to="/projects"> instead of href="#projects"
      */}
      <a
        href="#projects"
        className="
          py-3 px-8
          rounded-full
          font-semibold
          transition-colors
          hover:opacity-80
        "
        style={{
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-bg-section)',
        }}
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;

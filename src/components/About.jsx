// About.jsx
import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundColor: 'var(--color-bg-section)',
        color: 'var(--color-text-darkBg)',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        <h2
          className="text-3xl md:text-5xl font-bold mb-4"
          style={{ color: 'var(--color-primary)' }}
        >
          About Me
          <span
            className="block mx-auto mt-2 h-1 w-10 rounded"
            style={{
              backgroundColor: 'var(--color-primary-darker)',
            }}
          />
        </h2>
        <p className="max-w-2xl leading-relaxed text-base md:text-lg mt-6">
          I'm a self-taught developer with a passion for creating fast,
          clean, and responsive web experiences. With a background in design,
          I bridge aesthetics and functionality to craft beautiful products.
        </p>
      </div>
    </section>
  );
};

export default About;

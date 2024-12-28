import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="
        w-full
        flex flex-col
        items-center
        justify-center
        text-center
        px-6 py-16 md:py-24
      "
      style={{
        backgroundColor: 'var(--color-bg-section)',
        color: 'var(--color-text-darkBg)',
      }}
    >
      <h2
        className="
          text-3xl md:text-5xl
          font-bold
          mb-4
          relative
        "
        style={{ color: 'var(--color-primary)' }}
      >
        About Me
        {/* 
          Simple underline effect using a block span below the heading.
          Darker accent color for subtle contrast.
        */}
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
    </section>
  );
};

export default About;

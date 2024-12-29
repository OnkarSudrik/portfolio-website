import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full"
      style={{
        // Subtract ~4rem to accommodate the fixed navbar height
        height: 'calc(100vh - 4rem)',
        backgroundColor: 'var(--color-bg-section)',
        color: 'var(--color-text-darkBg)',
      }}
    >
      {/* Centered content wrapper */}
      <div
        className="
          max-w-5xl
          mx-auto
          h-full
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-4
        "
      >
        <h2
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{ color: 'var(--color-primary)' }}
        >
          Hi, I'm Onkar Sudrik
        </h2>
        <p className="text-lg md:text-xl mb-8 w-full">
          A passionate{' '}
          <span
            className="font-semibold"
            style={{ color: 'var(--color-primary)' }}
          >
            machine learning engineer
          </span>{' '}
          building intelligent, data-driven solutions to solve real-world problems.
        </p>
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
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundColor: 'var(--color-bg-section)',
        color: 'var(--color-text-darkBg)',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        <h2
          className="text-3xl md:text-5xl font-bold mb-4"
          style={{ color: 'var(--color-primary)' }}
        >
          Get In Touch
        </h2>
        <p className="max-w-xl leading-relaxed text-base md:text-lg mb-8">
          I'm available for freelance work or collaboration.
          Reach out if you want to discuss a project or just say hi!
        </p>
        <a
          href="mailto:john.doe@example.com"
          className="inline-block py-3 px-8 rounded-full font-semibold transition-colors hover:opacity-80"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-bg-section)',
          }}
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;

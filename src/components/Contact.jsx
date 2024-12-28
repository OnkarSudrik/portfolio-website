import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        w-full
        py-16 px-6
        flex flex-col
        items-center
        justify-center
        text-center
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
        "
        style={{ color: 'var(--color-primary)' }}
      >
        Get In Touch
      </h2>

      <p className="max-w-xl leading-relaxed text-base md:text-lg mb-8">
        I'm available for freelance work or collaboration. 
        Reach out if you want to discuss a project or just say hi!
      </p>

      {/* Link triggers a mailto, you can change the address */}
      <a
        href="mailto:john.doe@example.com"
        className="
          inline-block
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
        Say Hello
      </a>
    </section>
  );
};

export default Contact;

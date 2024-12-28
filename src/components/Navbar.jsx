import React from 'react';

const Navbar = () => {
  return (
    <nav
      className="
        w-full
        flex items-center justify-between
        px-8 py-4
        fixed top-0 left-0
        z-50
        shadow-md
      "
      style={{
        backgroundColor: 'var(--color-bg-section)',
        color: 'var(--color-text-darkBg)',
      }}
    >
      {/* Logo / Brand Name */}
      <h1
        className="text-xl font-bold font-brittany"
        style={{ color: 'var(--color-primary)' }}
      >
        Onkar Sudrik
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        <li>
          <a
            href="#hero"
            className="transition-colors hover:opacity-80"
            style={{ color: 'var(--color-text-darkBg)' }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="transition-colors hover:opacity-80"
            style={{ color: 'var(--color-text-darkBg)' }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="transition-colors hover:opacity-80"
            style={{ color: 'var(--color-text-darkBg)' }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="transition-colors hover:opacity-80"
            style={{ color: 'var(--color-text-darkBg)' }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

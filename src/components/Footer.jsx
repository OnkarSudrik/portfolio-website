// src/components/Footer.jsx
export default class Footer {
  constructor() {
    this.render();
  }

  render() {
    const footer = document.getElementById('main-footer');
    footer.innerHTML = `
      <div class="min-h-[20vh] md:h-[26vh] px-4 bg-dark-lighter py-6 md:py-8">
        <nav class="mb-6 md:mb-8">
          <div class="flex justify-center">
            <ul class="flex flex-col sm:flex-row gap-3 sm:gap-8 list-none text-lg md:text-xl text-center">
              <li><a href="#about" class="text-light hover:text-accent block py-1">About</a></li>
              <li><a href="#experience" class="text-light hover:text-accent block py-1">Experience</a></li>
              <li><a href="#projects" class="text-light hover:text-accent block py-1">Projects</a></li>
              <li><a href="#contact" class="text-light hover:text-accent block py-1">Contact</a></li>
            </ul>
          </div>
        </nav>
        
        <p class="text-center text-light-darker text-sm md:text-base">
          Copyright &#169; 2023 Onkar Sudrik. All Rights Reserved.
        </p>
      </div>
    `;
  }
}
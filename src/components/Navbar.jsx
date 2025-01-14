// src/components/Navbar.jsx
export default class Navbar {
  constructor() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    const desktopNav = document.getElementById('desktop-nav');
    desktopNav.innerHTML = `
      <!-- Main Navbar -->
      <div class="flex flex-col md:flex-row justify-between md:justify-around items-center h-auto md:h-[10vh] bg-dark-lighter navbar hidden fixed w-full top-0 z-50 px-4 py-4 md:py-0">
        <!-- Logo/Name -->
        <div class="text-2xl md:text-3xl text-light mb-4 md:mb-0">Onkar Sudrik</div>
        
        <!-- Navigation Links -->
        <div class="w-full md:w-auto">
          <ul class="flex flex-col md:flex-row gap-4 md:gap-8 list-none text-lg md:text-2xl items-center">
            <li class="w-full md:w-auto">
              <a href="#profile" class="nav-link block py-2 md:py-0 text-center hover:text-accent transition-colors">Home</a>
            </li>
            <li class="w-full md:w-auto">
              <a href="#about" class="nav-link block py-2 md:py-0 text-center hover:text-accent transition-colors">About</a>
            </li>
            <li class="w-full md:w-auto">
              <a href="#experience" class="nav-link block py-2 md:py-0 text-center hover:text-accent transition-colors">Experience</a>
            </li>
            <li class="w-full md:w-auto">
              <a href="#projects" class="nav-link block py-2 md:py-0 text-center hover:text-accent transition-colors">Projects</a>
            </li>
            <li class="w-full md:w-auto">
              <a href="#medium-articles" class="nav-link block py-2 md:py-0 text-center hover:text-accent transition-colors">Articles</a>
            </li>
            <li class="w-full md:w-auto">
              <a href="#contact" class="nav-link block py-2 md:py-0 text-center hover:text-accent transition-colors">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="fixed top-4 right-4 z-50 md:hidden bg-dark-lighter p-2 rounded-lg">
        <svg class="w-6 h-6 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    `;
  }

  setupEventListeners() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    let isVisible = false;
    let hasScrolled = false;
    let isMobileMenuOpen = false;

    const toggleMobileMenu = () => {
      isMobileMenuOpen = !isMobileMenuOpen;
      if (isMobileMenuOpen) {
        navbar.classList.remove('hidden');
        navbar.style.animation = 'fadeIn 0.3s forwards';
      } else {
        navbar.style.animation = 'fadeOut 0.3s forwards';
        setTimeout(() => {
          if (!hasScrolled) navbar.classList.add('hidden');
        }, 300);
      }
    };

    const highlightCurrentSection = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            link.classList.remove('text-accent');
          });
          const activeLink = document.querySelector(
            `.nav-link[href="#${section.id}"]`
          );
          if (activeLink) {
            activeLink.classList.add('active');
            activeLink.classList.add('text-accent');
          }
        }
      });
    };

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;

      if (!hasScrolled && window.innerWidth >= 768) {
        hasScrolled = true;
        navbar.classList.remove('hidden');
        navbar.style.animation = 'fadeIn 0.5s forwards';
        isVisible = true;
      }

      if (scrollTop === 0 && isVisible && window.innerWidth >= 768 && !isMobileMenuOpen) {
        navbar.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => navbar.classList.add('hidden'), 500);
        isVisible = false;
        hasScrolled = false;
      }

      highlightCurrentSection();
    });

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768 && isMobileMenuOpen) {
          toggleMobileMenu();
        }
      });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        if (hasScrolled) {
          navbar.classList.remove('hidden');
          isVisible = true;
        }
        mobileMenuBtn.classList.add('hidden');
      } else {
        if (!isMobileMenuOpen) {
          navbar.classList.add('hidden');
        }
        mobileMenuBtn.classList.remove('hidden');
      }
    });
  }
}
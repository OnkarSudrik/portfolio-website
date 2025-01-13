import './style.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('dark');

  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false,
  });

  try {
    new Navbar();
    new Profile();
    new About();
    new Experience();
    new Projects();
    new Contact();
    new Footer();
  } catch (error) {
    console.error('Error initializing components:', error);
  }
});

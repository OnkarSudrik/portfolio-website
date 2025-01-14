// src/components/About.jsx
export default class About {
  constructor() {
    this.render();
  }

  render() {
    const about = document.getElementById('about');
    about.innerHTML = `
      <div class="relative py-8 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-aos="fade-up">
        <p class="text-center text-accent font-semibold">Get To Know More</p>
        <h1 class="text-3xl md:text-5xl text-center text-light mb-8">About Me</h1>
        
        <div class="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          <!-- Image Container -->
          <div class="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px]" data-aos="fade-right">
            <div class="aspect-square overflow-hidden rounded-3xl">
              <img 
                src="/assets/about-pic.jpg"  
                class="w-full h-full object-cover shadow-lg transform transition-transform duration-300 hover:scale-105" 
                alt="About me"
                loading="lazy"
              />
            </div>
          </div>
          
          <!-- Content Container -->
          <div class="flex-1 max-w-3xl lg:max-w-none">
            <!-- Cards Container -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 md:mb-8" data-aos="fade-up">
              <!-- Experience Card -->
              <div class="p-4 sm:p-6 bg-dark-lighter rounded-3xl border border-accent text-center shadow-custom hover:shadow-lg transition-shadow duration-300">
                <img src="/assets/experience.png" alt="Experience icon" class="h-8 w-8 mx-auto mb-3 filter brightness-0 invert" />
                <h3 class="text-light text-lg sm:text-xl mb-2 font-semibold">Experience</h3>
                <p class="text-light-darker text-sm sm:text-base">2+ years <br />Machine Learning and Artificial Intelligence</p>
              </div>
              
              <!-- Education Card -->
              <div class="p-4 sm:p-6 bg-dark-lighter rounded-3xl border border-accent text-center shadow-custom hover:shadow-lg transition-shadow duration-300">
                <img src="/assets/education.png" alt="Education icon" class="h-8 w-8 mx-auto mb-3 filter brightness-0 invert" />
                <h3 class="text-light text-lg sm:text-xl mb-2 font-semibold">Education</h3>
                <p class="text-light-darker text-sm sm:text-base">B.Sc. Information Technology<br />M.Sc. Artificial Intelligence</p>
              </div>
            </div>
            
            <!-- Text Content -->
            <div class="text-justify sm:text-left space-y-4" data-aos="fade-up">
              <p class="text-light-darker text-sm sm:text-base leading-relaxed">
                As an experienced data professional, I specialize in predictive modeling, data analysis, and AI-driven solutions. 
                My educational background includes an MSc in Artificial Intelligence from Royal Holloway University of London and a BSc in Information Technology from the 
                SVKM's Narsee Monjee College of Commerce and Economics (University of Mumbai)
              </p>
              <p class="text-light-darker text-sm sm:text-base leading-relaxed">
                With a commitment to delivering accurate and impactful results, I have honed my skills 
                in advanced statistical techniques and AI integration. Based in London, I am passionate about leveraging data to solve complex problems and drive innovation in the field.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Navigation Arrow -->
        <img
          src="/assets/arrow.png"
          alt="Arrow icon"
          class="hidden lg:block absolute right-4 lg:right-[-2rem] bottom-10 h-6 w-6 md:h-8 md:w-8 cursor-pointer animate-bounce filter brightness-0 invert hover:opacity-75 transition-opacity"
          onclick="location.href='./#experience'"
        />
      </div>
    `;
  }
}
// src/components/Experience.jsx
export default class Experience {
  constructor() {
    this.render();
  }

  render() {
    const experience = document.getElementById('experience');
    experience.innerHTML = `
      <div class="relative py-8 md:py-16 px-4 md:mx-8 lg:mx-20" data-aos="fade-up">
        <p class="text-center text-accent font-semibold">Explore My</p>
        <h1 class="text-3xl md:text-5xl text-center text-light mb-8">Experience</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <!-- Artificial Intelligence Section -->
          <div class="p-4 md:p-6 bg-dark-lighter rounded-3xl border border-accent shadow-custom" data-aos="fade-right">
            <h2 class="text-light font-semibold text-xl md:text-2xl mb-6 md:mb-8 text-center">Artificial Intelligence</h2>
            <div class="flex flex-wrap gap-3 md:gap-4 justify-around">
              ${this.createExperienceArticle("Model Deployment", "Experienced")}
              ${this.createExperienceArticle("Multi-Agent Systems", "Experienced")}
              ${this.createExperienceArticle("Cloud Integration", "Intermediate")}
              ${this.createExperienceArticle("JNLP and Computer Vision", "Basic")}
              ${this.createExperienceArticle("Advanced Algorithms", "Basic")}
            </div>
          </div>

          <!-- Machine Learning Section -->
          <div class="p-4 md:p-6 bg-dark-lighter rounded-3xl border border-accent shadow-custom" data-aos="fade-up">
            <h2 class="text-light font-semibold text-xl md:text-2xl mb-6 md:mb-8 text-center">Machine Learning</h2>
            <div class="flex flex-wrap gap-3 md:gap-4 justify-around">
              ${this.createExperienceArticle("Model Development", "Experienced")}
              ${this.createExperienceArticle("Feature Engineering", "Intermediate")}
              ${this.createExperienceArticle("Statistical Analysis", "Intermediate")}
              ${this.createExperienceArticle("Model Evaluation", "Intermediate")}
              ${this.createExperienceArticle("Data Management", "Intermediate")}
            </div>
          </div>

          <!-- Technologies Section -->
          <div class="p-4 md:p-6 bg-dark-lighter rounded-3xl border border-accent shadow-custom" data-aos="fade-left">
            <h2 class="text-light font-semibold text-xl md:text-2xl mb-6 md:mb-8 text-center">Technologies</h2>
            <div class="flex flex-wrap gap-3 md:gap-4 justify-around">
              ${this.createExperienceArticle("JavaScript", "Experienced")}
              ${this.createExperienceArticle("Python", "Experienced")}
              ${this.createExperienceArticle("React", "Intermediate")}
              ${this.createExperienceArticle("Node.js", "Intermediate")}
              ${this.createExperienceArticle("Docker", "Intermediate")}
            </div>
          </div>
        </div>

        <img
          src="/assets/arrow.png"
          alt="Arrow icon"
          class="hidden lg:block absolute right-[-2rem] lg:right-[-5rem] bottom-10 h-6 w-6 md:h-8 md:w-8 cursor-pointer animate-bounce filter brightness-0 invert"
          onclick="location.href='./#projects'"
        />
      </div>
    `;
  }

  createExperienceArticle(skill, level) {
    return `
      <article class="flex flex-col items-center w-32 md:w-40 gap-2 animate-scaleIn">
        <img
          src="/assets/checkmark.png"
          alt="Experience icon"
          class="h-6 w-6 md:h-8 md:w-8 filter brightness-0 invert"
        />
        <div>
          <h3 class="text-light text-center text-sm md:text-base">${skill}</h3>
          <p class="text-light-darker text-center text-xs md:text-sm">${level}</p>
        </div>
      </article>
    `;
  }
}
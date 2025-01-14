// src/components/Experience.jsx
export default class Experience {
  constructor() {
    this.render();
  }

  render() {
    const experience = document.getElementById('experience');
    experience.innerHTML = `
      <div class="relative py-8 md:py-12 px-4 md:mx-8 lg:mx-20" data-aos="fade-up">
        <p class="text-center text-accent font-semibold">Explore My</p>
        <h1 class="text-3xl md:text-5xl text-center text-light mb-6">Experience</h1>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4">
          <!-- Technologies Section -->
          <div class="p-4 md:p-5 bg-dark-lighter rounded-3xl border border-accent shadow-custom col-span-3" data-aos="fade-up">
            <h2 class="text-light font-semibold text-xl md:text-2xl mb-4 text-center">Technologies</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div>
                <h3 class="text-light font-semibold text-lg md:text-xl mb-1 text-center">Programming Languages</h3>
                <div class="flex flex-wrap gap-0.5 md:gap-1 justify-around">
                  ${this.createExperienceArticle("Python", "Experienced", "/assets/python.gif")}
                  ${this.createExperienceArticle("R", "Intermediate")}
                  ${this.createExperienceArticle("SQL", "Intermediate")}
                  ${this.createExperienceArticle("C#", "Basic")}
                  ${this.createExperienceArticle("C++", "Basic")}
                  ${this.createExperienceArticle("Java", "Basic")}
                </div>
              </div>
              <div>
                <h3 class="text-light font-semibold text-lg md:text-xl mb-1 text-center">Frameworks and Libraries</h3>
                <div class="flex flex-wrap gap-0.5 md:gap-1 justify-around">
                  ${this.createExperienceArticle("React", "Intermediate", "/assets/react.png")}
                  ${this.createExperienceArticle("TensorFlow", "Intermediate", "/assets/Tensorflow.png")}
                  ${this.createExperienceArticle("Keras", "Intermediate")}
                  ${this.createExperienceArticle("Pytorch", "Intermediate", "/assets/Pytorch.png")}
                  ${this.createExperienceArticle("Scikit-learn", "Experienced")}
                  ${this.createExperienceArticle("OpenCV", "Experienced")}
                </div>
              </div>
              <div>
                <h3 class="text-light font-semibold text-lg md:text-xl mb-1 text-center">Tools and Platforms</h3>
                <div class="flex flex-wrap gap-0.5 md:gap-1 justify-around">
                  ${this.createExperienceArticle("Jupyter Notebook", "Experienced", "/assets/Juypter.png")}
                  ${this.createExperienceArticle("AWS", "Intermediate", "/assets/AWS.png")}
                  ${this.createExperienceArticle("Streamlit", "Intermediate", "/assets/streamlit.png")}
                  ${this.createExperienceArticle("Flask", "Intermediate", "/assets/flask.png")}
                  ${this.createExperienceArticle("MongoDB", "Intermediate")}
                  ${this.createExperienceArticle("Docker", "Intermediate", "/assets/docker.png")}
                  ${this.createExperienceArticle("Node.js", "Intermediate", "/assets/nodejs.png")}
                  ${this.createExperienceArticle("IBM Watsonx", "Basic")}
                </div>
              </div>
            </div>
          </div>

          <!-- Artificial Intelligence Section -->
          <div class="p-4 md:p-5 bg-dark-lighter rounded-3xl border border-accent shadow-custom" data-aos="fade-right">
            <h2 class="text-light font-semibold text-xl md:text-2xl mb-4 text-center">Artificial Intelligence</h2>
            <div class="flex flex-wrap gap-0.5 md:gap-1 justify-around">
              ${this.createExperienceArticle("Model Deployment", "Experienced")}
              ${this.createExperienceArticle("Multi-Agent Systems", "Experienced")}
              ${this.createExperienceArticle("Cloud Integration", "Intermediate")}
              ${this.createExperienceArticle("JNLP and Computer Vision", "Basic")}
              ${this.createExperienceArticle("Advanced Algorithms", "Basic")}
            </div>
          </div>

          <!-- Machine Learning Section -->
          <div class="p-4 md:p-5 bg-dark-lighter rounded-3xl border border-accent shadow-custom" data-aos="fade-up">
            <h2 class="text-light font-semibold text-xl md:text-2xl mb-4 text-center">Machine Learning</h2>
            <div class="flex flex-wrap gap-0.5 md:gap-1 justify-around">
              ${this.createExperienceArticle("Model Development", "Experienced")}
              ${this.createExperienceArticle("Feature Engineering", "Intermediate")}
              ${this.createExperienceArticle("Statistical Analysis", "Intermediate")}
              ${this.createExperienceArticle("Model Evaluation", "Intermediate")}
              ${this.createExperienceArticle("Data Management", "Intermediate")}
            </div>
          </div>
        </div>

        <img
          src="/assets/arrow.png"
          alt="Arrow icon"
          class="hidden lg:block absolute right-[-2rem] lg:right-[-5rem] bottom-10 h-6 w-6 md:h-8 md:w-8 cursor-pointer animate-bounce"
          onclick="location.href='./#projects'"
        />
      </div>
    `;
  }

  createExperienceArticle(skill, level, iconPath = "/assets/checkmark.png") {
    return `
      <article class="flex flex-col items-center w-28 md:w-36 gap-0 animate-scaleIn">
        <img
          src="${iconPath}"
          alt="Experience icon"
          class="h-14 w-14 md:h-16 md:w-16"
        />
        <div>
          <h3 class="text-light text-center text-xs md:text-sm">${skill}</h3>
          <p class="text-light-darker text-center text-xs">${level}</p>
        </div>
      </article>
    `;
  }
}

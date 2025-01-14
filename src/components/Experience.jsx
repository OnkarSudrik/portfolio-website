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
                  ${this.createExperienceArticle("R", "Intermediate", "/assets/R.png")}
                  ${this.createExperienceArticle("SQL", "Intermediate", "/assets/sql.png")}
                  ${this.createExperienceArticle("C#", "Basic", "/assets/csharp.png")}
                  ${this.createExperienceArticle("C++", "Basic", "/assets/c++.png")}
                  ${this.createExperienceArticle("JavaScript", "Basic","/assets/javascript.gif")}
                </div>
              </div>
              <div>
                <h3 class="text-light font-semibold text-lg md:text-xl mb-1 text-center">Frameworks and Libraries</h3>
                <div class="flex flex-wrap gap-0.5 md:gap-1 justify-around">
                  ${this.createExperienceArticle("React", "Intermediate", "/assets/react.png")}
                  ${this.createExperienceArticle("TensorFlow", "Intermediate", "/assets/Tensorflow.png")}
                  ${this.createExperienceArticle("Keras", "Intermediate", "/assets/keras.png")}
                  ${this.createExperienceArticle("Pytorch", "Intermediate", "/assets/Pytorch.png")}
                  ${this.createExperienceArticle("Scikit-learn", "Experienced", "/assets/scikitlearn.png")}
                  ${this.createExperienceArticle("OpenCV", "Experienced","/assets/opencv.png")}
                </div>
              </div>
              <div>
                <h3 class="text-light font-semibold text-lg md:text-xl mb-1 text-center">Tools and Platforms</h3>
                <div class="flex flex-wrap gap-0.5 md:gap-1 justify-around">
                  ${this.createExperienceArticle("Jupyter Notebook", "Experienced", "/assets/Juypter.png")}
                  ${this.createExperienceArticle("AWS", "Intermediate", "/assets/AWS.png")}
                  ${this.createExperienceArticle("Streamlit", "Intermediate", "/assets/streamlit.png")}
                  ${this.createExperienceArticle("Flask", "Intermediate", "/assets/flask.png")}
                  ${this.createExperienceArticle("MongoDB", "Intermediate", "/assets/mongodb.png")}
                  ${this.createExperienceArticle("Docker", "Intermediate", "/assets/docker.png")}
                  ${this.createExperienceArticle("Node.js", "Intermediate", "/assets/nodejs.png")}
                </div>
              </div>
            </div>
          </div>

          <!-- Artificial Intelligence Section -->
          <div class="p-4 md:p-5 bg-dark-lighter rounded-3xl border border-accent shadow-custom md:col-span-1 col-span-full" data-aos="fade-right">
            <h2 class="text-light font-semibold text-xl md:text-2xl mb-4 text-center">Artificial Intelligence</h2>
            <div class="overflow-x-auto">
              <div class="flex flex-row flex-nowrap gap-2 pb-2 min-w-min justify-start md:justify-center">
                ${this.createExperienceArticle("Model Deployment", "", "/assets/modeldeployement.gif")}
                ${this.createExperienceArticle("Multi-Agent Systems", "", "/assets/multiagent.gif")}
                ${this.createExperienceArticle("Cloud Integration", "", "/assets/cloudintegration.gif")}
                ${this.createExperienceArticle("JNLP and Computer Vision", "", "/assets/computervision.gif")}
                ${this.createExperienceArticle("Advanced Algorithms", "", "/assets/advancealgorithims.png")}
              </div>
            </div>
          </div>

          <!-- Machine Learning Section -->
          <div class="p-4 md:p-5 bg-dark-lighter rounded-3xl border border-accent shadow-custom md:col-span-1 col-span-full" data-aos="fade-up">
            <h2 class="text-light font-semibold text-xl md:text-2xl mb-4 text-center">Machine Learning</h2>
            <div class="overflow-x-auto">
              <div class="flex flex-row flex-nowrap gap-2 pb-2 min-w-min justify-start md:justify-center">
                ${this.createExperienceArticle("Model Development", "", "/assets/modeldevelopement.png")}
                ${this.createExperienceArticle("Feature Engineering", "", "/assets/featureenginnering.gif")}
                ${this.createExperienceArticle("Statistical Analysis", "", "/assets/statisticalanalysis.gif")}
                ${this.createExperienceArticle("Model Evaluation", "", "/assets/modelevaluation.gif")}
                ${this.createExperienceArticle("Data Management", "", "/assets/datamanagement.gif")}
              </div>
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
      <article class="flex-shrink-0 flex flex-col items-center w-24 sm:w-28 md:w-32 lg:w-36 gap-1 animate-scaleIn hover:scale-105 transition-transform">
        <img
          src="${iconPath}"
          alt="Experience icon"
          class="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
        />
        <div class="text-center">
          <h3 class="text-light text-xs md:text-sm leading-tight">${skill}</h3>
          ${level ? `<p class="text-light-darker text-xs leading-tight">${level}</p>` : ''}
        </div>
      </article>
    `;
  }
}
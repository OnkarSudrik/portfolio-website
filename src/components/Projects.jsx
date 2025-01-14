export default class Projects {
  constructor() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    const projects = document.getElementById('projects');
    projects.innerHTML = `
      <div class="relative py-16 mx-4 sm:mx-8 md:mx-20 lg:mx-40" data-aos="fade-up">
        <p class="text-center text-accent font-semibold">Browse My Recent</p>
        <h1 class="text-5xl text-center text-light mb-8">Projects</h1>
        
        <div class="flex justify-center">
          <div class="flex flex-col md:flex-row gap-8 overflow-x-auto w-full">
            ${this.createProjectCard(
              "Prediction", 
              "project-1.jpg", 
              "fade-right",
              "1",
              "Market Value Insights",
              "https://github.com/OnkarSudrik/Predictive-Housing-Price-Analysis"
            )}
            ${this.createProjectCard(
              "Recognition", 
              "project-2.webp", 
              "fade-up",
              "2",
              "Real Time Face Recognition",
              "https://github.com/OnkarSudrik/RealTime-Face-Recognition"
            )}
            ${this.createProjectCard(
              "Detection", 
              "project-3.webp", 
              "fade-left",
              "3",
              "Anomaly Detection",
              "https://github.com/OnkarSudrik/Anomaly-Detection-In-Financial-Transactions"
            )}
            ${this.createProjectCard(
              "Risk Mitigation", 
              "project-4.webp", 
              "fade-right",
              "4",
              "Credit Default Prediction",
              "https://github.com/OnkarSudrik/Credit-Risk-Analysis"
            )}
          </div>
        </div>
        
        <img
          src="/assets/arrow.png"
          alt="Arrow icon"
          class="absolute right-[-5rem] bottom-10 h-8 w-8 cursor-pointer animate-bounce filter brightness-0 invert hidden md:block"
          onclick="location.href='./#contact'"
        />
      </div>
    `;
  }

  createProjectCard(title, image, animation, id, description, githubLink) {
    return `
      <button 
        class="w-[350px] min-w-[350px] p-6 bg-dark-lighter rounded-3xl border border-accent shadow-custom cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg" 
        data-aos="${animation}"
        data-project-id="${id}"
        onclick="handleProjectClick(event, '${id}')"
      >
        <div class="flex justify-center mb-4 h-[200px]">
          <img
            src="/assets/${image}"
            alt="${title}"
            class="rounded-3xl w-full h-full object-cover"
          />
        </div>
        
        <h2 class="text-2xl text-light text-center mb-4">${title}</h2>
        <p class="text-light-darker text-center mb-4">${description}</p>
        
        <div class="flex justify-center gap-4">
          <a
            href="${githubLink}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary bg-transparent border border-[#5bcf57] text-[#5bcf57] transition-all duration-300 hover:bg-[#5bcf57] hover:text-white hover:shadow-[0_0_15px_rgba(91,207,87,0.5)]"
            onclick="event.stopPropagation()"
          >
            Github
          </a>
        </div>
      </button>
    `;
  }

  setupEventListeners() {
    window.handleProjectClick = (event, projectId) => {
      // Prevent the default behavior
      event.preventDefault();
      event.stopPropagation();

      // Placeholder for linking to a different component based on the project ID
      console.log(`Navigating to component for project ID: ${projectId}`);
    };
  }
}
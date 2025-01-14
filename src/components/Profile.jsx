export default class Profile {
  constructor() {
    this.render();
  }

  render() {
    const profile = document.getElementById('profile');
    profile.innerHTML = `
      <div class="relative flex flex-col lg:flex-row justify-center lg:gap-20 min-h-screen py-8 md:py-16 px-4" data-aos="fade-up">
        <div class="fixed inset-0 w-full h-full bg-cover bg-no-repeat bg-center opacity-30 -z-10" style="background-image: url('/assets/lines.webp');"></div>
        
        <div class="flex justify-center lg:h-[400px] lg:w-[400px] my-auto slide-in-left z-10">
          <img 
            src="/assets/profile-pic.png" 
            alt="Profile picture" 
            class="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] drop-shadow-lg rounded-full border-[5px] border-[#5bcf57] glow-effect"
          />
        </div>
        
        <div class="self-center text-center mt-4 lg:mt-0 slide-in-right z-10">
          <p id="profile-hello" class="text-accent font-semibold text-lg md:text-xl"></p>
          <h1 id="profile-name" class="text-4xl md:text-5xl text-center text-light mb-4"></h1>
          <p id="profile-role" class="text-xl md:text-2xl mb-4 text-light font-semibold"></p>
          
          <div class="flex justify-center gap-4 flex-wrap">
            <button onclick="window.open('./assets/Onkar_Resume.pdf')" 
              class="btn btn-primary text-sm md:text-base transition-all duration-300 hover:bg-[#5bcf57] hover:text-white hover:shadow-[0_0_15px_rgba(91,207,87,0.5)]">
              Download CV
            </button>
            <button onclick="location.href='./#contact'" 
              class="btn btn-secondary text-sm md:text-base transition-all duration-300 hover:bg-[#5bcf57] hover:text-white hover:shadow-[0_0_15px_rgba(91,207,87,0.5)]">
              Contact Info
            </button>
          </div>
          
          <div class="flex justify-center gap-4 mt-6">
            <img
              src="/assets/linkedin.png"
              alt="LinkedIn profile"
              class="h-6 w-6 md:h-8 md:w-8 cursor-pointer transition-transform duration-300 hover:scale-120 filter brightness-0 invert hover:sepia-100 hover:saturate-1000 hover:hue-rotate-70"
              onclick="location.href='https://www.linkedin.com/in/onkar-sudrik/'"
            />
            <img
              src="/assets/medium.png"
              alt="Medium profile"
              class="h-6 w-6 md:h-8 md:w-8 cursor-pointer transition-transform duration-300 hover:scale-120 filter brightness-0 invert hover:sepia-100 hover:saturate-1000 hover:hue-rotate-70"
              onclick="location.href='https://medium.com/@onkarsudrik07'"
            />
            <img
              src="/assets/github.png"
              alt="Github profile"
              class="h-6 w-6 md:h-8 md:w-8 cursor-pointer transition-transform duration-300 hover:scale-120 filter brightness-0 invert hover:sepia-100 hover:saturate-1000 hover:hue-rotate-70"
              onclick="location.href='https://github.com/OnkarSudrik'"
            />
          </div>
        </div>
      </div>
    `;

    this.initTypewriterAnimation();
  }

  // Rest of the code remains exactly the same...
  initTypewriterAnimation() {
    const elements = [
      { id: 'profile-hello', text: "Hello, I'm" },
      { id: 'profile-name', text: "Onkar Sudrik" },
      { id: 'profile-role', text: "Artificial Intelligence Engineer" }
    ];
    
    let currentElementIndex = 0;
    let currentTextIndex = 0;

    function typeEffect() {
      const element = document.getElementById(elements[currentElementIndex].id);
      const text = elements[currentElementIndex].text;

      if (currentTextIndex < text.length) {
        element.innerHTML = text.slice(0, currentTextIndex + 1) +
          `<span class='blinking-cursor'>|<span class='typing-dot'></span></span>`;
        currentTextIndex++;
        setTimeout(typeEffect, 100);
      } else {
        element.innerHTML = text;
        if (currentElementIndex < elements.length - 1) {
          currentElementIndex++;
          currentTextIndex = 0;
          setTimeout(typeEffect, 500);
        }
      }
    }

    typeEffect();
  }
}

// Styles remain exactly the same
const style = document.createElement('style');
style.innerHTML = `
  .blinking-cursor {
    display: inline-block;
    color: #5bcf57;
    animation: blink 1s step-end infinite;
    position: relative;
  }

  .typing-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: #5bcf57;
    border-radius: 50%;
    margin-left: 4px;
    animation: dotMove 0.5s linear infinite;
  }

  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }

  @keyframes dotMove {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  .glow-effect {
    box-shadow: 0 0 10px #5bcf57, 0 0 20px #5bcf57, 0 0 30px #5bcf57;
  }

  @media (max-width: 768px) {
    .glow-effect {
      box-shadow: 0 0 5px #5bcf57, 0 0 10px #5bcf57, 0 0 15px #5bcf57;
    }
  }
`;
document.head.appendChild(style);
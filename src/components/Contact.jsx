// src/components/Contact.jsx
export default class Contact {
  constructor() {
    this.render();
  }

  render() {
    const contact = document.getElementById('contact');
    contact.innerHTML = `
      <div class="flex justify-center flex-col min-h-[70vh] py-8 md:py-16 px-4 md:mx-8 lg:mx-40" data-aos="fade-up">
        <p class="text-center text-accent font-semibold">Get in Touch</p>
        <h1 class="text-3xl md:text-5xl text-center text-light mb-8">Contact Me</h1>
        
        <div class="flex justify-center rounded-3xl border border-accent bg-dark-lighter mx-auto p-2 my-4 md:my-8 shadow-custom">
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div class="flex items-center justify-center gap-2 m-2 md:m-4">
              <img
                src="/assets/email.png"
                alt="Email icon"
                class="h-8 w-8 md:h-10 md:w-10 filter brightness-0 invert"
              />
              <p class="text-lg md:text-xl">
                <a href="mailto:onkarsudrik07@gmail.com" class="text-light hover:text-accent">
                  onkarsudrik07@gmail.com
                </a>
              </p>
            </div>
            
            <div class="flex items-center justify-center gap-2 m-2 md:m-4">
              <img
                src="/assets/linkedin.png"
                alt="LinkedIn icon"
                class="h-6 w-6 md:h-8 md:w-8 filter brightness-0 invert"
              />
              <p class="text-lg md:text-xl">
                <a href="https://www.linkedin.com/in/onkar-sudrik/" class="text-light hover:text-accent">
                  LinkedIn
                </a>
              </p>
            </div>

            <div class="flex items-center justify-center gap-2 m-2 md:m-4">
              <img
                src="/assets/medium.png"
                alt="Medium icon"
                class="h-6 w-6 md:h-8 md:w-8 filter brightness-0 invert"
              />
              <p class="text-lg md:text-xl">
                <a href="https://medium.com/@onkarsudrik07" class="text-light hover:text-accent">
                  Medium
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
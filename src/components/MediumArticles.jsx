// src/components/MediumArticles.js
export default class MediumArticles {
  constructor() {
    this.articles = [
      {
        title: "Generative AI Moves Beyond Chatbots: The Next Frontier in Innovation",
        excerpt: "Exploring the evolution of generative AI beyond simple chatbots and its transformative impact across various industries and applications.",
        date: "Jan 12, 2024",
        thumbnail: "/assets/gen-ai.jpg",
        link: "https://medium.com/@onkarsudrik07/generative-ai-moves-beyond-chatbots-the-next-frontier-in-innovation-c246a69adc85"
      },
      {
        title: "Human-like Robots Powered by AI: Fuelled by Who Knows?",
        excerpt: "An in-depth look at the development of humanoid robots, their AI capabilities, and the mysteries surrounding their future potential.",
        date: "Jan 10, 2024",
        thumbnail: "/assets/humanoid-robots.webp",
        link: "https://medium.com/@onkarsudrik07/human-like-robots-powered-by-ai-fuelled-by-who-knows-705dc2f09a32"
      }
    ];
    this.render();
  }

  render() {
    const mediumSection = document.getElementById('medium-articles');
    mediumSection.innerHTML = `
      <div class="relative py-16 mx-4 sm:mx-8 md:mx-20 lg:mx-40" data-aos="fade-up">
        <p class="text-center text-accent font-semibold">Explore My</p>
        <h1 class="text-5xl text-center text-light mb-8">Medium Articles</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          ${this.articles.map(article => this.createArticleCard(article)).join('')}
        </div>

        <div class="text-center mt-8">
          <a 
            href="https://medium.com/@onkarsudrik07" 
            target="_blank"
            class="btn btn-primary bg-transparent border border-[#5bcf57] text-[#5bcf57] transition-all duration-300 hover:bg-[#5bcf57] hover:text-white hover:shadow-[0_0_15px_rgba(91,207,87,0.5)] inline-block px-6 py-3 rounded-full"
          >
            View All Articles
          </a>
        </div>
        
        <img
          src="/assets/arrow.png"
          alt="Arrow icon"
          class="hidden lg:block absolute right-[-2rem] bottom-10 h-8 w-8 cursor-pointer animate-bounce filter brightness-0 invert"
          onclick="location.href='./#contact'"
        />
      </div>
    `;
  }

  createArticleCard(article) {
    return `
      <div class="article-card p-6 bg-dark-lighter rounded-3xl border border-accent shadow-custom transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <img 
          src="${article.thumbnail}" 
          alt="${article.title}" 
          class="w-full h-48 object-cover rounded-lg mb-4"
          onerror="this.src='/assets/article-placeholder.jpg'"
        />
        <h3 class="text-2xl text-light mb-2">${article.title}</h3>
        <p class="text-light-darker text-sm mb-4">
          ${article.excerpt}
        </p>
        <p class="text-accent text-sm mb-4">Published on: ${article.date}</p>
        <a 
          href="${article.link}" 
          target="_blank"
          class="btn btn-primary bg-transparent border border-[#5bcf57] text-[#5bcf57] transition-all duration-300 hover:bg-[#5bcf57] hover:text-white hover:shadow-[0_0_15px_rgba(91,207,87,0.5)] inline-block px-4 py-2 rounded-full"
        >
          Read More
        </a>
      </div>
    `;
  }
}
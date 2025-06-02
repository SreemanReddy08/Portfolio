import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const cardItems = [
  {
    img: "/FastAPI.avif",
    title: "URL Shortener",
    text: "Built with FastAPI and PostgreSQL. Shorten URLs, track clicks, and manage links efficiently.",
    
    github: "https://github.com/SreemanReddy08/Fast-API-URL_Shortner"
  },
  {
    img: "/google1.jpg",
    title: "Gemini Chat Interface",
    text: "Integrated Gemini API with Node.js using Google SDK to build an AI-powered chat assistant.",
    website: "https://skoolofcode99.netlify.app/",
    github: "https://github.com/SreemanReddy08/GeminiBackend"
  },
  {
    img: "/Screenshot 2025-05-26 175913.png",
    title: "TextUtils",
    text: "Basic text formatting tool built with Bootstrap. Features include night mode, alert notifications, and responsive UI.",
    website: "https://sreemanreddy08.github.io/TextUtils/#about",
   
  },
  {
    img: "/Screenshot 2025-05-26 205336.png", 
    title: "Plant Shopping Website",
    text: "A basic e-commerce plant store with features like Add to Cart, Redux store, and React Router DOM for navigation.",
    website: "https://sreemanreddy08.github.io/e-plantShopping/",     
    github: "https://github.com/SreemanReddy08/e-plantShopping" 
  }
,  
{
  img: "/webscraping.webp",  
  title: "Web Scraping with Python",
  text: "Extracted structured data from websites using BeautifulSoup and requests, automating data collection and analysis.",
  
}
,
{
  img: "/Screenshot 2025-05-27 134604.png",  
  title: "Communion App",
  text: "A web app built with React to manage and showcase community events. Includes dynamic event creation, category filtering.",
  website: "https://communion08.netlify.app/events",  
  github: "https://github.com/SreemanReddy08/Communion"
}
,
];

const IconCard = ({ img, text, title, website, github }) => {

 


  return (
    <div className="relative flex flex-col hover-underline my-6 bg-black shadow-sm  rounded-lg w-96 mx-auto">
      <div className="relative h-56 m-2.5 overflow-hidden rounded-md">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-300 hover-underline text-xl font-semibold">
          {title}
        </h6>
        <p className="text-slate-400 text-sm leading-normal font-light">
          {text}
        </p>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2 flex flex-row">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md live-link  items-start text-sm   "
            aria-label={`Visit website for ${title}`}
          >
            Live
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md  github-link ml-60  text-sm "
            aria-label={`View GitHub repository for ${title}`}
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

gsap.registerPlugin(ScrollTrigger);

const IconsSection = () => {
  useGSAP(() => {
    gsap.from(".iconstext", {
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: ".iconstext",
        start: "top 80%",
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".icons-section",
        start: "top 80%",
        end: "bottom top",
        scrub: 1,
      },
    });

    const isMobile = window.innerWidth < 768;
    const xOffset = isMobile ? 50 : 150;
    const xEndOffset = isMobile ? -50 : -135;

    tl.fromTo(".icon-card:nth-child(1)", { x: xOffset }, { x: xEndOffset }, 0)
      .fromTo(".icon-card:nth-child(2)", { y: xOffset }, { y: isMobile ? -30 : -60 }, 0)
      .fromTo(".icon-card:nth-child(3)", { x: -xOffset }, { x: isMobile ? 50 : 135 }, 0)
      .fromTo(".icon-card:nth-child(4)", { x: xOffset }, { x: isMobile ? -30 : -100 }, 0)
      .fromTo(".icon-card:nth-child(5)", { y: -xOffset }, { y: isMobile ? 30 : 60 }, 0)
      .fromTo(".icon-card:nth-child(6)", { x: -xOffset }, { x: isMobile ? 30 : 100 }, 0);
  }, []);


  

  return (
    <section className="icons-section w-full min-h-screen relative z-36 overflow-hidden">
      {/* ThreeSphere as background */}
      <div className="w-full h-full flex items-center justify-center flex-col relative px-4 sm:px-6">
        <h1 className="iconstext pb-10 font-freedom text-white text-4xl sm:text-9xl">
          Welcome To Project's Section 
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {cardItems.map((item) => (
            <div className="icon-card" key={item.title}>
              <IconCard
                img={item.img}
                title={item.title}
                text={item.text}
                website={item.website}
                github={item.github}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconsSection;

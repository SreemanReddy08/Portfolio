import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const container = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.card');
    const images = gsap.utils.toArray('.card img');
    const totalCards = cards.length;

    gsap.set(cards[0], { y: '0%', scale: 1, rotate: 0 });
    gsap.set(images[0], { scale: 1.2 });

    for (let i = 1; i < totalCards; i++) {
      gsap.set(cards[i], { y: '100%', scale: 1, rotate: 0 });
      gsap.set(images[i], { scale: 1 });
    }

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.sticky-cards',
        start: 'top top',
        end: `+=${window.innerHeight * (totalCards - 1)}`,
        scrub: 2,
        pin: true,
        markers: false,
      },
    });

    for (let i = 0; i < totalCards - 1; i++) {
      scrollTimeline.to(
        cards[i],
        { scale: 0.5, rotate: 10, duration: 1, ease: 'none' },
        i
      );
      scrollTimeline.to(
        images[i],
        { scale: 1.5, duration: 1, ease: 'none' },
        i
      );
      scrollTimeline.to(
        cards[i + 1],
        { y: '0%', duration: 1, ease: 'none' },
        i
      );
    }

    return () => {
      scrollTimeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={container} className="container mx-auto">
      {/* Intro Section */}
      <section className="intro flex text-white justify-center items-center h-screen px-4 text-center">
        <h1 className="text-2xl md:text-3xl text-blue-500 font-freedomregular lg:text-4xl max-w-3xl">
          My Certifications showcase
        </h1>
      </section>

      {/* Scroll Card Section */}
      <section className="sticky-cards flex justify-center items-center bg-black h-screen">
        <div className="cards-container relative w-full sm:w-[90%] md:w-[70%] lg:w-[50%] aspect-[4/3] overflow-hidden">
          {["frontend", "backend", "cloud", "amazon"].map((img, index) => (
            <div
              key={index}
              className="card absolute w-full h-full overflow-hidden rounded-lg shadow-lg"
            >
              <div className="tag absolute top-2 left-2 p-2 text-xs sm:text-sm rounded-md bg-black/80 text-white z-10">
                <p>Certification {index + 1}</p>
              </div>
              <img
                src={`/files/${img}.png`}
                alt={`Certification ${index + 1}`}
                className="w-full h-full object-cover sm:object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Outro Section */}
      <section className="outro flex text-white justify-center items-center h-screen px-4 text-center">
        <h1 className="text-xl md:text-2xl max-w-2xl">
          Thank you for visiting feel free to reach out.
        </h1>
      </section>
    </div>
  );
};

export default Certifications;

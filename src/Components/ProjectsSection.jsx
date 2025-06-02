import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Svg from "./Svg";
import "../index.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  // SVG Clip Path Animation
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "top 50%",
        end: "+=400 center",
        scrub: 2,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.fromTo(
      ".mask-clip-path",
      {
        clipPath: "polygon(36.5% 0%, 64.9% 7.8%, 66.6% 88.5%, 34.7% 100.3%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }
    );
  }, []);

  // Animation for "Welcome to Project section"
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const welcomeSplit = new SplitText(".welcome-text", {
        type: "lines",
      });

      gsap.fromTo(
        welcomeSplit.lines,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: {
            amount: 0.5,
            from: "start",
          },
          scrollTrigger: {
            trigger: ".welcome-text",
            start: "top 50%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    });
  }, []);

  // Scroll-triggered Text Animation for the main paragraph
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const split = new SplitText(".split", {
        type: "words",
      });

      gsap.fromTo(
        split.words,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          stagger: {
            amount: 1,
            from: 'start',
          },
          scrollTrigger: {
            trigger: ".split",
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    });
  }, []);

  // Background color change on scroll
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#bgchange",
      start: "top 50%",
      end: "bottom 20%",
      markers: false,
      onEnter: () =>
        gsap.to(document.body, {
          backgroundColor: "#000000",
          
          duration: 0.3,
          overwrite: "auto",
        }),
      onLeaveBack: () =>
        gsap.to(document.body, {
          backgroundColor: "#facc15",
          duration: 0.3,
          overwrite: "auto",
        }),
    });
  }, []);

  return (
    <div id="bgchange" className="w-full bg-transparent overflow-x-hidden">
      {/* Text Section */}
      <div className="relative min-h-[1000px] pt-28 mb-12 px-4 sm:px-8 flex flex-col items-start gap-6 text-left">
        <p className="welcome-text font-general uppercase text-yellow-300 text-xs p-8   sm:text-sm md:text-base tracking-wider">
          About section
        </p>

        <div className="about-subtext w-full relative">
          <p
            className="split text-yellow-400 font-semibold uppercase text-3xl sm:text-4xl md:text-5xl tracking-wide w-full"
          >
            I'm a passionate frontend developer skilled in React.js, Tailwind CSS, and modern web technologies. I love building responsive, user-friendly interfaces with clean, maintainable code. Currently, I’m diving deeper into animations using GSAP and exploring 3D interfaces with Three.js. I'm looking for exciting opportunities to contribute to innovative UI experiences.
          </p>
        </div>
      </div>

      {/* SVG Animation Section */}
      <div className="min-h-screen w-full overflow-hidden" id="clip">
        <div className="mask-clip-path">
          <Svg />
        </div>
      </div>
    </div>
  );
};

export default About;
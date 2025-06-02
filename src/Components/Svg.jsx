import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Svg = () => {
  const containerRef = useRef(null);
  const mainTextPathRef = useRef(null);
  const ropeTextPathRefs = useRef([]);

  const ropeTexts = [
    { word: "INNOVATE", fontSize: 40 },
    { word: "DESIGN ", fontSize: 40 },
    { word: "BUILD", fontSize: 40 },
    { word: "DEPLOY", fontSize: 40 },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        
        markers: false,
      },
    });

    // Animate PROJECT'S text
    tl.fromTo(
      mainTextPathRef.current,
      { attr: { startOffset: "0%" } },
      {
        attr: { startOffset: "100%" },
        duration: 10,
        
      }
    );

    // Animate rope texts
    ropeTextPathRefs.current.forEach((ref, i) => {
      tl.fromTo(
        ref,
        { attr: { startOffset: "0%" } },
        {
          attr: { startOffset: "100%" },
          duration: 10,
          ease: "power2.inOut",
        },
        i * 0.8
      );
    });
  }, { scope: containerRef });

  return (
    <div className="w-full">
      <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden">
        <div className="relative z-10 w-full h-full bg-gradient-to-b from-blue-700 to-black">
          <svg viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
            <defs>
              {/* Zig-zag snake-like path */}
              <path
                id="template"
                d="M 0 100
                   L 800 100
                   L 800 200
                   L 0 200
                   L 0 300
                   L 800 300
                   L 800 400
                   L 0 400
                   L 0 500
                   L 800 500
                   L 800 600"
                fill="none"
                stroke="white"
              />

              <path
                id="path"
                d="M 0 100
                   L 800 100
                   L 800 200
                   L 0 200
                   L 0 300
                   L 800 300
                   L 800 400
                   L 0 400
                   L 0 500
                   L 800 500
                   L 800 600"
                fill="none"
                stroke="white"
              />

              <mask id="viMask">
                <rect width="100%" height="100%" fill="black" />

                {/* PROJECT'S text */}
                <text fontSize="80" fontFamily="Arial, sans-serif" fill="white" transform="translate(0, 0)">
                  <textPath href="#template" ref={mainTextPathRef} startOffset="0%">
                    PROJECT'S
                  </textPath>
                </text>

                {/* Rope texts */}
                {ropeTexts.map((item, i) => (
                  <text key={`text-${i}`} fontSize={item.fontSize} fontFamily="Arial, sans-serif" fill="white" transform="translate(0, 0)">
                    <textPath href="#path" startOffset="0%" ref={(el) => (ropeTextPathRefs.current[i] = el)}>
                      {item.word}
                    </textPath>
                  </text>
                ))}
              </mask>
            </defs>

            <rect width="100%" height="100%" fill="blue" mask="url(#viMask)" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Svg;

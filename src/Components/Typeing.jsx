
import { Typewriter } from 'react-simple-typewriter';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import ThreeCylinder from './ThreeCylinder';
import { SplitText } from 'gsap/SplitText';


const SkillsTypingEffect = () => {
  gsap.registerPlugin(SplitText,ScrollTrigger);



  

  



  // Responsive clip path animation
  useGSAP(() => {
    const width = window.innerWidth;

    let fromClip, toClip;

    if (width < 640) {
      // Mobile
      fromClip = 'polygon(0% 0%, 100% 0%, 100.2% 100.3%, 0% 100.3%)';
      toClip = 'polygon(6.3% 4%, 90.6% 6.3%, 100.2% 89.3%, 1.4% 93%)';
    } else if (width < 1024) {
      // Tablet
      fromClip = 'polygon(8% 0%, 92% 0%, 92% 100%, 8% 100%)';
      toClip = 'polygon(10% 0%, 90% 0%, 93% 58%, 7% 83%)';
    } else {
      // Desktop
      fromClip = 'polygon(0% 0%, 100.1% 0%, 100.1% 100.3%, 0% 100.3%)';
      toClip = 'polygon(6.5% 1.8%, 95.4% 0%, 100.1% 66%, 2% 95.3%)';
    }

    gsap.fromTo(
      '.typewriter',
      {
        clipPath: fromClip,
      },
      {
        clipPath: toClip,
        scrollTrigger: {
          trigger: '.typewriter',
          start: 'top',
          end: '+=700 center',
          scrub: 2,
          
        },
      }
    );
  }, []);

  // Floating 3D object animation
  useGSAP(() => {
    const moveRandom = () => {
      gsap.to('.three-object', {
        x: () => gsap.utils.random(-80, 80),
        y: () => gsap.utils.random(-80, 80),
        z: () => gsap.utils.random(-80, 80),
        duration: () => gsap.utils.random(0.5, 2),
        ease: 'power1.inOut',
        onComplete: moveRandom,
      });
    };
    moveRandom();
  }, []);



  
  

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden text-white bg-transparent">
      <div className="absolute inset-0 z-0 min-h-screen overflow-hidden ">
        <p className="absolute bottom-28 right-4 sm:right-8 md:right-12 text-red-600 text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold">
          JavaScript
        </p>
      </div>

      <div className="typewriter relative  bg-gray-800 z-10 min-h-screen px-4 md:px-20 py-20 flex flex-col lg:flex-row justify-between items-center max-w-full box-border">
        {/* Left Text */}
        <div className="flex flex-col max-w-xl text-center lg:text-left lg:w-1/3">
          <h1 className="h1 md:text-7xl text-gray-200 font-freedomregular tracking-wider">Hi, I'm Sreeman Reddy</h1>
          <p className="p1 text-xl md:text-5xl  my-6 mb-2 font-freedom tracking-wider">I specialize in</p>
          <div className="text-lg md:text-2xl lg:text-3xl font-freedomregular tracking-wider font-light my-6 text-blue-600">
            <Typewriter
              words={[
                'Java, Python',
                'React, Express.js',
                'RESTful API Development',
                'Data Structures, Algorithms',
                'HTML, CSS, JavaScript',
                'MySQL, NoSQL Databases',
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={30}
              delaySpeed={1500}
              
            />
          </div>
          <div className="list1 text-sm md:text-base font-thin mt-4">
            <ul>
              <li>Email: sreemanreddymadireddy08@gmail.com</li>
              <li>Phone: +91 7386141480</li>
            </ul>
          </div>
        </div>

        {/* Middle: 3D Object */}
        <div className="three-object flex w-full lg:w-1/2 justify-center items-center my-20 lg:my-0 z-10">
          <div className="w-full aspect-[1/1] max-w-md">
            <ThreeCylinder />
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="profile-img mt-12 lg:mt-0 lg:w-1/3 flex justify-center">
          <div className="flex flex-col items-center w-64">
            <img
              src="files/IMG_20241126_001206.jpg"
              alt="Sreeman Reddy's Profile"
              className="w-64 h-64 object-cover rounded-full"
            />
          </div>
        </div>

        {/* JavaScript Text Positioned at Bottom-Right of Typewriter Div */}
        <p className="absolute  bottom-28 right-4 sm:right-8 md:right-12 text-yellow-500 text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold pointer-events-none z-10">
          JavaScript
        </p>
      </div>
    </div>
  );
};

export default SkillsTypingEffect;


import React from 'react';
import ThreeCylinder from '../Components/ThreeCylinder';


const Projects = () => {
  return (
    <div className="relative overflow-hidden ">
      
      

      {/* === Main Content === */}
      <div className="text-white p-6 flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="flex-1 w-full px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-4 text-center">Know Who I Am</h2>
          <p className="text-lg leading-relaxed text-center lg:text-left">
            Hi Everyone, I am <span className="text-blue-500 font-semibold">Sreeman Reddy</span> from
            <span className="text-blue-500 font-semibold"> Warangal, Telangana, India</span>.<br />
            I am a final-year <span className="text-blue-500 font-semibold">B.Tech Computer Science and Engineering student</span>
            at <span className="text-blue-500 font-semibold">Parul University, Vadodara</span>.
          </p>
          <p className="text-lg leading-relaxed mt-6 text-center lg:text-left">
            Apart from coding, some other activities that I enjoy are:
          </p>
          <ul className="list-disc list-inside mt-4 text-left mx-auto max-w-md">
            <li>Exploring new technologies and tools</li>
            <li>Playing Badminton</li>
            <li>Traveling to new places</li>
            <li>Exploring science-fiction</li>
          </ul>
          <p className="text-lg leading-relaxed text-center mt-6 italic">
            "Strive to learn, grow, and build innovative solutions that make a difference!"
          </p>
          <p className="text-lg leading-relaxed text-center font-bold mt-4">- Sreeman Reddy</p>
        </div>

        {/* 3D Cylinder Section */}
        <div className="flex-1 w-full flex justify-center items-center p-6">
          <div className="w-full max-w-[500px] aspect-[1/1]">
            <ThreeCylinder />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-black p-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">Skill Set</h2>
        <div className="flex flex-wrap justify-center">
          {[
            {
              img: '/files/logo192.png',
              desc: 'Proficient in building dynamic and responsive UIs using React component-based architecture.',
            },
            {
              title: 'Express.js',
              desc: 'Experienced in developing robust server-side applications with Express.js.',
            },
            {
              img: '/files/JavaScript-logo.png',
              desc: 'Strong foundation in JavaScript for interactive and scalable web applications, DOM for dynamic content manipulation',
            },
            {
              img: '/files/python-logo-0.png',
              desc: 'Working with Python for scripting, data analysis, and foundational knowledge in AI concepts like building basic classifiers.',
            },
            {
              img: '/files/c0cf572c6acb6c79aed84b84039cf869.png',
              desc: 'MongoDB for NoSQL database solutions, including schema design, indexing, and CRUD operations. Atlas for managing cloud-based databases in full-stack applications.',
            },
            {
              img: '/files/4adb861238d598282b653a9eef653b5f.png',
              desc: 'Worked on dynamic memory allocation using techniques like `malloc` and `new`. Understanding of core programming concepts.',
            },
          ].map((skill, idx) => (
            <div
              key={idx}
              className="max-w-sm p-6 bg-white border rounded-lg shadow dark:bg-black border-sky-600 dark:hover:bg-gray-900 m-4 hover:-translate-y-1 transition-transform duration-300 flex justify-center items-center flex-col text-center"
            >
              {skill.img && <img src={skill.img} alt="" className="w-20 h-20 mb-4 object-contain" />}
              {skill.title && <h2 className="text-2xl font-semibold mb-2 text-gray-500">{skill.title}</h2>}
              <p className="font-normal text-gray-700 dark:text-gray-400">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Projects;

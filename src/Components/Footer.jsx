import React from 'react';
import reactLogo from '../assets/react.svg'; // Make sure this path is correct

const Footer = () => {
  return (
    <footer className="bg-transparent shadow">
      <div className="w-full max-w-screen-xl mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Portfolio
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://www.linkedin.com/in/sreemanreddy-madireddy-245951288/"
                className="hover:underline me-4 md:me-6"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SreemanReddy08"
                className="hover:underline me-4 md:me-6"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © Designed and Developed by{" "}
          <a href="/" className="hover:underline">
            SreemanReddy
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

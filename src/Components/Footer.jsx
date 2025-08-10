import React from "react";
import { Link } from "react-router";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r bg-[#41f0db] dark:bg-[#0e4c44] py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Name */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold mb-2"
          >
            <span className="relative">
              <svg
                className="w-6 h-6 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 7c2-1 4-1 6 0s4 1 6 0 4-1 6 0v13c-2-1-4-1-6 0s-4 1-6 0-4-1-6 0V7z" />
              </svg>
              <span className="absolute w-2.5 h-2.5 bg-orange-500 rounded-full top-0 left-3 "></span>
            </span>
           <p className="text-black dark:text-black">Learnfy</p>
          </Link>
          <p className="text-sm text-gray-500">
            A place to share knowledge, ideas & insights with the student
            community.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <span className="footer-title text-black dark:text-black">Links</span>
          <Link to="/about" className="link link-hover text-black dark:text-black">
            About Us
          </Link>
          <Link to="/about" className="link link-hover text-black dark:text-black">
            Contact Us
          </Link>
        </div>

        <div>
          <span className="footer-title text-black dark:text-black">Follow Us</span>
          <div className="flex gap-4 mt-2">
            <a
              href="https://twitter.com/YourUsername"
              className="text-2xl text-blue-500 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a
              href="https://linkedin.com/in/alaminislam1"
              className="text-2xl text-blue-700 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://youtube.com/@YourChannelName"
              className="text-2xl text-red-600 hover:text-red-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © Learnify — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

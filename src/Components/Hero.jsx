import React from 'react';
import { Link } from 'react-router'; 

const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center py-12 sm:py-16 lg:py-24 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/mVFSqhRt/pexels-tima-miroshnichenko-5427862.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0  bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Share Your Knowledge
          </h1>
          <p className="text-base sm:text-lg font-bold mb-6">
            Empower the student community by writing articles, sharing insights,
            and exploring ideas together.
          </p>
          <Link to="/allarticles">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded font-semibold transition duration-300">
              Explore Articles
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

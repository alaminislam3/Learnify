import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.ibb.co/4nVzckFr/jeshoots-com-p-UAM5h-Pa-CRI-unsplash.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"> Share Your Knowledge</h1>
      <p className="mb-5">
      Empower the student community by writing articles, sharing insights, and exploring ideas together.

      </p>
      <Link to={'/allarticles'}>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded font-medium transition">
      Explore Articles
    </button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Hero;
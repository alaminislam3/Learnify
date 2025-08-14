// Home.jsx
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "../Components/Hero";
import ArticleCard from "../Components/ArticleCard";
import CategoryList from "../Components/CategoryList";
import Community from "../Components/Community";
import Resources from "../Components/Resources";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5, // scroll animation duration
      easing: (t) => t, // easing function
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Hero />
      <div className="container mx-auto px-6 sm:px-6 md:px-12 lg:px-24">
        <ArticleCard />
        <CategoryList />
        <Community />
        <Resources />
      </div>
    </div>
  );
};

export default Home;

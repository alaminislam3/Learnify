import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaRobot,
  FaDatabase,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaCloud,
  FaTools,
  FaGlobe,
} from "react-icons/fa";

const iconMap = {
  Programming: <FaLaptopCode size={40} className="mx-auto mb-2 text-[#14B8A6]" />,
  Education: <FaGraduationCap size={40} className="mx-auto mb-2 text-[#14B8A6]" />,
  AI: <FaRobot size={40} className="mx-auto mb-2 text-[#14B8A6]" />,
  Database: <FaDatabase size={40} className="mx-auto mb-2 text-[#14B8A6]" />,
  CSS: <FaCss3Alt size={40} className="mx-auto mb-2 text-[#14B8A6]" />,
  JavaScript: <FaJsSquare size={40} className="mx-auto mb-2 text-[#14B8A6]" />,
  React: <FaReact size={40} className="mx-auto mb-2 text-[#14B8A6]" />,
  Python: <FaPython size={40} className="mx-auto mb-2 text-[#14B8A6]" />,
  Cloud: <FaCloud size={40} className="mx-auto mb-2 text-[#14B8A6]" />,
  Tools: <FaTools size={40} className="mx-auto mb-2 text-[#14B8A6]" />,
  Web: <FaGlobe size={40} className="mx-auto mb-2 text-[#14B8A6]" />,
};

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://learnify-server-seven.vercel.app/articles")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [
          ...new Set(data.map((article) => article.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  const getIcon = (category) => {
    return iconMap[category] || (
      <FaGraduationCap size={40} className="mx-auto mb-2 text-[#14B8A6]" />
    );
  };

  return (
    <div className="py-12 sm:py-16 lg:py-10 mx-auto  px-4">
      <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
        Browse by Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((cat, i) => (
          <Link
            to={`/category/${cat}`}
            key={i}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:bg-[#41f0db] transition duration-300 flex flex-col items-center cursor-pointer"
          >
            {getIcon(cat)}
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">
              {cat}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

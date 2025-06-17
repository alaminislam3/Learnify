import React, { useEffect, useState } from "react";
import { Link } from "react-router";

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

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <Link
            to={`/category/${cat}`}
            key={i}
            className="bg-gray-200 text-center p-3 rounded hover:bg-blue-200 transition"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

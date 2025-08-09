import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";

const AllArticles = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // ✅ useQuery দিয়ে ডেটা ফেচ
  const { data: allArticles = [], isLoading, error } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await fetch("https://learnify-server-seven.vercel.app/articles");
      return res.json();
    },
  });

  // 🔍 Category Filter
  const filteredArticles =
    selectedCategory === ""
      ? allArticles
      : allArticles.filter(
          (article) =>
            article.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const categories = ["Tech", "Life Style", "Food", "Sports", "AI", "Game"];

  // ⏳ লোডিং স্টেট
  if (isLoading) {
    return <Loading></Loading>
  }

  // ❌ এরর স্টেট
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-semibold">
          Failed to load articles. Please try again.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto p-4 container px-6 sm:px-6 md:px-12 lg:px-24">
      <h1 className="text-3xl font-bold mb-6 text-center">All Articles</h1>

      {/* 🔍 Category Filter */}
      <div className="flex justify-center mb-6">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* 📄 Articles */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div
            key={article._id}
            className="border rounded-lg p-4 shadow hover:shadow-md bg-white"
          >
            <img
              src={article.thumbnail || "https://via.placeholder.com/150"}
              alt={article.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">{article.title}</h2>
            <p className="text-sm text-gray-600 mb-2">
              {article.category} | By {article.authorName}
            </p>
            <p className="text-sm text-gray-700 mb-3">
              {article.content.slice(0, 100)}...
            </p>
            <button
              className="text-blue-600 font-semibold hover:underline"
              onClick={() =>
                (window.location.href = `/article/${article._id}`)
              }
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;

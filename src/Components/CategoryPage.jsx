import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://learnify-server-seven.vercel.app/articles/category/${categoryName}`
    )
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, [categoryName]);

  return (
    <div className="max-w-4xl py-12 sm:py-16 lg:py-40  mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Articles in: {categoryName}</h2>
      {articles.length === 0 ? (
        <p>No articles found in this category.</p>
      ) : (
        <div className="grid gap-4">
          {articles.map((article) => (
            <div key={article._id} className="p-4 border rounded">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-600">By {article.authorName}</p>
              <p className="text-gray-700">
                {article.content.slice(0, 100)}...
              </p>
              <a href={`/articles/${article._id}`} className="btn bg-[#36b1a0] dark:bg-[#134E4A] mt-2">
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;

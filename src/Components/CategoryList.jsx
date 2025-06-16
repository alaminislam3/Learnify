import { useParams } from "react-router";
import { useEffect, useState } from "react";

const CategoryList = () => {
  const { name } = useParams(); // category name from URL
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/articles?category=${name}`)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, [name]);

  return (
    <div className="min-h-screen bg-base-100 py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">
        {name} Articles
      </h2>

      {articles.length === 0 ? (
        <p className="text-center text-gray-500">No articles found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article._id}
              className="bg-white p-5 rounded shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="text-gray-600 text-sm mt-2 mb-3">
                {article.content.slice(0, 80)}...
              </p>
              <div className="text-xs text-gray-500">
                By {article.author} • {article.date}
              </div>
              <button className="btn btn-sm btn-outline btn-primary mt-4">
                Read More
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryList;

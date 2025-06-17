import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; 

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Articles</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <div
            key={article._id}
            className="flex items-start border rounded-lg p-4 shadow hover:shadow-md bg-white"
          >
            <img
              src={article.thumbnail || "https://via.placeholder.com/150"}
              alt={article.title}
              className="w-32 h-32 object-cover rounded mr-4"
            />

            <div>
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                By {article.author} • {new Date(article.date).toLocaleDateString()}
              </p>
              <Link
                to={`/article/${article._id}`}
                className="text-blue-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;

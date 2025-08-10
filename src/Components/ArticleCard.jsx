import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";

const ArticleCard = () => {
  const { name } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://learnify-server-seven.vercel.app/articles?category=${name}`)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, [name]);

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-12 py-10 sm:py-14 lg:py-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 text-indigo-700">
        {name} Articles
      </h2>

      {articles.length === 0 ? (
        <p className="text-center text-gray-500">
          No articles found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article._id}
              className="bg-white flex flex-col sm:flex-row items-start p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full sm:w-32 h-48 sm:h-32 object-cover rounded mb-4 sm:mb-0 sm:mr-4"
              />

              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold">{article.title}</h3>
                <p className="text-gray-600 text-sm mt-2 mb-3">
                  {article.content.slice(0, 70)}...
                </p>
                
                <Link to={`/article/${article._id}`}>
                  <button className="btn btn-sm btn-outline btn-primary mt-4 w-full sm:w-auto">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleCard;

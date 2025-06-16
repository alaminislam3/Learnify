import React from "react";

const ArticleCard = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding JavaScript Closures",
      excerpt:
        "Closures allow functions to access variables from an outer function scope even after the outer function has closed.",
      author: "Alamin",
      date: "June 12, 2025",
    },
    {
      id: 2,
      title: "React Hooks: A Beginner’s Guide",
      excerpt:
        "Hooks let you use state and lifecycle features in functional components without writing a class.",
      author: "Mim",
      date: "June 13, 2025",
    },
    {
      id: 3,
      title: "Mastering Tailwind CSS in 2025",
      excerpt:
        "Tailwind CSS is a utility-first CSS framework that helps you build modern UIs faster.",
      author: "Rafi",
      date: "June 14, 2025",
    },
    {
      id: 4,
      title: "Node.js Crash Course",
      excerpt:
        "Node.js enables JavaScript to run on the server and is used to build scalable backend applications.",
      author: "Tamim",
      date: "June 10, 2025",
    },
    {
      id: 5,
      title: "MongoDB for Beginners",
      excerpt:
        "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.",
      author: "Tania",
      date: "June 11, 2025",
    },
    {
      id: 6,
      title: "Why You Should Learn Express.js",
      excerpt:
        "Express.js is a minimal and flexible Node.js web application framework.",
      author: "Rahat",
      date: "June 09, 2025",
    },
  ];

  return (
    <div className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">
        Featured Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white shadow-md p-6 rounded">
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
            <div className="text-xs text-gray-500">
              By {article.author} • {article.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleCard;

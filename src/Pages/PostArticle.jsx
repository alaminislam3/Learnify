import React, { useContext } from "react";
import Swal from "sweetalert2";
import { Authcontext } from "../Context/AuthContext";

const PostArticle = () => {
  const { user } = useContext(Authcontext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const article = {
      title: form.title.value,
      content: form.content.value,
      category: form.category.value,
      tags: form.tags.value.split(","),
      thumbnail: form.thumbnail.value,
      date: new Date().toISOString(),
      authorName: user.displayName,
      authorEmail: user.email,
      authorPhoto: user.photoURL,
    };

    fetch("https://learnify-server-seven.vercel.app/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Success!", "Article posted successfully", "success");
          form.reset();
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Post a New Article
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="title"
            placeholder="Title"
            required
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            name="content"
            placeholder="Content"
            required
            className="w-full p-3 border border-gray-300 rounded h-40 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            name="category"
            placeholder="Category (e.g., Tech)"
            required
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            name="tags"
            placeholder="Tags (comma-separated)"
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            name="thumbnail"
            placeholder="Image URL"
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition duration-300 shadow-md"
          >
            Post Article
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostArticle;

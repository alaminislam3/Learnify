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

    // send to backend
    fetch("http://localhost:3000/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Post a New Article</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" required className="w-full p-2 border" />
        <textarea name="content" placeholder="Content" required className="w-full p-2 border h-32" />
        <input name="category" placeholder="Category (e.g., Tech)" required className="w-full p-2 border" />
        <input name="tags" placeholder="Tags (comma-separated)" className="w-full p-2 border" />
        <input name="thumbnail" placeholder="Image URL" className="w-full p-2 border" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Post</button>
      </form>
    </div>
  );
};

export default PostArticle;

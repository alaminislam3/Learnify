import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Authcontext } from "../Context/AuthContext";

const MyArticles = () => {
  const { user } = use(Authcontext);
  const [myArticles, setMyArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Load user's articles
  useEffect(() => {
    fetch(
      `https://learnify-server-seven.vercel.app/myarticles?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyArticles(data));
  }, [user]);

  // Delete Article
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://learnify-server-seven.vercel.app/articles/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your article has been deleted.", "success");
            setMyArticles((prev) => prev.filter((a) => a._id !== id));
          });
      }
    });
  };

  // Update Article
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updated = {
      title: form.title.value,
      content: form.content.value,
      category: form.category.value,
      tags: form.tags.value.split(","),
    };

    fetch(
      `https://learnify-server-seven.vercel.app/articles/${selectedArticle._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      }
    )
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Updated!", "Article updated successfully", "success");
        const updatedList = myArticles.map((article) =>
          article._id === selectedArticle._id
            ? { ...article, ...updated }
            : article
        );
        setMyArticles(updatedList);
        setSelectedArticle(null);
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">My Articles</h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Title</th>
              <th className="p-2">Category</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myArticles.map((article) => (
              <tr key={article._id}>
                <td className="p-2">{article.title}</td>
                <td className="p-2">{article.category}</td>
                <td className="p-2 space-x-2">
                  <button
                    className="bg-blue-500 px-3 py-1 text-white rounded"
                    onClick={() => setSelectedArticle(article)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 px-3 py-1 text-white rounded"
                    onClick={() => handleDelete(article._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Update */}
      {selectedArticle && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center">
          <form
            onSubmit={handleUpdate}
            className="bg-white p-6 rounded shadow-lg w-[400px] space-y-4"
          >
            <h3 className="text-xl font-semibold">Update Article</h3>
            <input
              name="title"
              defaultValue={selectedArticle.title}
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              name="content"
              defaultValue={selectedArticle.content}
              className="w-full p-2 border rounded"
              rows="4"
              required
            />
            <input
              name="category"
              defaultValue={selectedArticle.category}
              className="w-full p-2 border rounded"
              required
            />
            <input
              name="tags"
              defaultValue={selectedArticle.tags?.join(", ")}
              className="w-full p-2 border rounded"
            />
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-3 py-1 border rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-1 rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyArticles;

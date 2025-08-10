import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Authcontext } from "../Context/AuthContext";
import { Link } from "react-router";
import Loading from "../Components/Loading";

const MyArticles = () => {
  const { user ,loading } = useContext(Authcontext);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // React Query fetch
  const {
    data: myArticles = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["myArticles", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await fetch(
        `https://learnify-server-seven.vercel.app/myarticles?email=${user.email}`
      );
      return res.json();
    },
    enabled: !!user?.email, // only fetch if email exists
  });

  // Delete Article
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
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
            refetch();
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

    fetch(`https://learnify-server-seven.vercel.app/articles/${selectedArticle._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Updated!", "Article updated successfully", "success");
        refetch();
        setSelectedArticle(null);
      });
  };

  // Loading State
  if (isLoading || loading) {
    return <Loading></Loading>
  }

  // Error State
  if (isError) {
    return (
      <div className="text-center mt-10 text-red-500">
        Failed to load articles. Please try again later.
      </div>
    );
  }

  return (
    <div className="max-w-6xl container mx-auto px-6 md:py-30 md:my-10">
      <h2 className="text-2xl font-bold mb-6">My Articles</h2>

      {myArticles.length === 0 ? (
        <div className="flex flex-col items-center text-center py-16 px-6 bg-gray-50 rounded-lg shadow-sm">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4072/4072718.png"
            alt="No Articles"
            className="w-40 mb-6"
          />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Articles Found
          </h3>
          <p className="text-gray-500 max-w-md mb-6">
            You haven’t published any articles yet. Start sharing your knowledge
            and help others learn!
          </p>
          <Link to="/postarticle">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg shadow-md transition">
              Create Your First Article
            </button>
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="table-auto w-full text-left border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border-b">Title</th>
                <th className="p-3 border-b">Category</th>
                <th className="p-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myArticles.map((article) => (
                <tr key={article._id} className="hover:bg-gray-50">
                  <td className="p-3 border-b">{article.title}</td>
                  <td className="p-3 border-b">{article.category}</td>
                  <td className="p-3 border-b space-x-2">
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
      )}

      {/* Modal for Update */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
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

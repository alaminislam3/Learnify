import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";

import Swal from "sweetalert2";
import { Authcontext } from "../Context/AuthContext";

const ArticleDetails = () => {
  const { id } = useParams();
  const { user } = useContext(Authcontext);

  const [article, setArticle] = useState(null);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    fetch(`https://learnify-server-seven.vercel.app/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const commentData = {
      email: user.email,
      name: user.displayName,
      comment: commentText,
      date: new Date(),
    };

    const res = await fetch(
      `https://learnify-server-seven.vercel.app/articles/${id}/comment`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentData),
      }
    );

    if (res.ok) {
      setArticle((prev) => ({
        ...prev,
        comments: [...(prev.comments || []), commentData],
      }));
      setCommentText("");
      Swal.fire("Comment Added!", "", "success");
    }
  };

  const handleLike = async () => {
    const res = await fetch(
      `https://learnify-server-seven.vercel.app/articles/${id}/like`,
      {
        method: "PATCH",
      }
    );

    if (res.ok) {
      setArticle((prev) => ({
        ...prev,
        likes: (prev.likes || 0) + 1,
      }));
    }
  };

  if (!article)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">Loading article...</p>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-10 lg:p-16 bg-white rounded-2xl shadow-lg">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-[#134E4A] mb-4">
        {article.title}
      </h2>

      {/* Date */}
      <p className="text-sm text-gray-500 mb-6">
        Published on {new Date(article.date).toLocaleDateString()}
      </p>

      {/* Author info */}
      <div className="flex items-center mb-8 space-x-4">
        <img
          src={article.authorPhoto}
          alt={article.authorName}
          className="w-14 h-14 rounded-full border-2 border-primary"
        />
        <div>
          <p className="font-semibold text-primary">{article.authorName}</p>
          <p className="text-xs text-gray-400 italic">Author</p>
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-lg max-w-none mb-8 text-gray-800">
        <p>{article.content}</p>
      </article>

      {/* Category & Tags */}
      <div className="flex flex-wrap gap-4 mb-6">
        <span className="bg-primary/20 text-primary rounded-full px-3 py-1 text-sm font-semibold">
          Category: {article.category}
        </span>
        {article.tags?.map((tag, i) => (
          <span
            key={i}
            className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Like Button */}
      <div className="mb-8">
        <button
          onClick={handleLike}
          className="inline-flex items-center gap-2 bg-[#36b1a0] dark:bg-[#134E4A] text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
          Like ({article.likes || 0})
        </button>
      </div>

      <hr className="my-6 border-gray-200" />

      {/* Comments */}
      <h3 className="text-2xl font-semibold mb-4 text-black dark:text-black">
        Comments ({article.comments?.length || 0})
      </h3>

      <ul className="space-y-4 mb-8 max-h-80 overflow-y-auto">
        {article.comments?.map((c, i) => (
          <li
            key={i}
            className="border border-gray-200 rounded-lg p-4 bg-gray-50 "
          >
            <p className="font-semibold text-primary">{c.name}</p>
            <p className="mt-1 text-black dark:text-black">{c.comment}</p>
            <p className="mt-2 text-xs text-gray-400">
              {new Date(c.date).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>

      {/* Comment form */}
      {user ? (
        <form onSubmit={handleCommentSubmit} className="space-y-3">
          <div className="flex items-start gap-3">
            {/* ইউজারের ছবি/অবতার (optional) */}
            <img
              src={user.photoURL || "https://i.pravatar.cc/40"}
              alt={user.displayName || "User"}
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="flex-1">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={1}
                onInput={(e) => {
                  e.target.style.height = "auto"; // reset
                  e.target.style.height = e.target.scrollHeight + "px"; // auto resize
                }}
                className="w-full resize-none overflow-hidden rounded-xl border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 shadow-sm"
                placeholder={`What's on your mind, ${
                  user.displayName?.split(" ")[0] || "there"
                }?`}
                required
              ></textarea>
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  disabled={!commentText.trim()}
                  className={`inline-flex items-center gap-2 bg-primary text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-primary-dark transition duration-300 ${
                    !commentText.trim() ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10l9-6 9 6-9 6-9-6z"
                    />
                  </svg>
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <p className="text-red-600 font-semibold">
          Please login to post a comment.
        </p>
      )}
    </div>
  );
};

export default ArticleDetails;

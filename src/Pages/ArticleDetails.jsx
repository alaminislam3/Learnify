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
    fetch(`http://localhost:3000/articles/${id}`)
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

    const res = await fetch(`http://localhost:3000/articles/${id}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentData),
    });

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
    const res = await fetch(`http://localhost:3000/articles/${id}/like`, {
      method: "PATCH",
    });

    if (res.ok) {
      setArticle((prev) => ({
        ...prev,
        likes: (prev.likes || 0) + 1,
      }));
    }
  };

  if (!article) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-4">
        {new Date(article.date).toLocaleDateString()}
      </p>

      <div className="flex items-center gap-3 mb-4">
        <img src={article.authorPhoto} className="w-10 h-10 rounded-full" />
        <span>{article.authorName}</span>
      </div>

      <p className="mb-4">{article.content}</p>
      <p className="text-sm text-blue-600 mb-2">Category: {article.category}</p>
      <p className="text-sm text-green-600 mb-2">
        Tags: {article.tags?.join(", ")}
      </p>

      <div className="flex items-center gap-4 mt-4">
        <button onClick={handleLike} className="btn btn-outline btn-sm">
          ❤️ Like ({article.likes || 0})
        </button>
      </div>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-2">
        Comments ({article.comments?.length || 0})
      </h3>
      <ul className="mb-4">
        {article.comments?.map((c, i) => (
          <li key={i} className="border p-2 rounded mb-2">
            <p className="font-medium">{c.name}</p>
            <p>{c.comment}</p>
            <p className="text-xs text-gray-500">
              {new Date(c.date).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>

      {user ? (
        <form onSubmit={handleCommentSubmit} className="space-y-2">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="textarea textarea-bordered w-full"
            placeholder="Write your comment..."
            required
          ></textarea>
          <button className="btn btn-primary btn-sm">Post Comment</button>
        </form>
      ) : (
        <p className="text-red-600">Please login to post a comment.</p>
      )}
    </div>
  );
};

export default ArticleDetails;

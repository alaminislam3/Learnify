import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <p className="text-xl mt-4 text-gray-700">Lost in Knowledge?</p>
      <p className="text-sm text-gray-500 mb-6">The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

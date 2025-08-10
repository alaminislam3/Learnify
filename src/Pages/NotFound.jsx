import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-center px-4">
      {/* Icon or Illustration */}
      <div className="text-8xl mb-4">📚</div>

      {/* Error Code */}
      <h1 className="text-6xl font-bold text-indigo-700">404</h1>

      {/* Message */}
      <p className="text-xl mt-4 text-gray-800 font-semibold">
        Oops! Page Not Found
      </p>
      <p className="text-gray-500 mt-2 max-w-md">
        Looks like you’ve taken a wrong turn in the library of knowledge.  
        Let’s get you back to learning!
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
      >
        📖 Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Authcontext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, googleSing } = use(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message || "Something went wrong!",
        });
      });
  };

  const handleGoogle = () => {
    googleSing()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome with Google!",
          timer: 1000,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message || "Something went wrong!",
        });
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/notebook-dark.png')",
        backgroundColor: "#f8fafc",
      }}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        {/* Top Icon */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-indigo-100 p-4 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-[#36b1a0]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2m6 4H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v12z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mt-3">
            Welcome Back!
          </h1>
          <p className="text-gray-500 text-sm text-center">
            Log in to continue your journey of sharing and learning knowledge.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="text-right">
            <a className="text-sm text-[#36b1a0] hover:underline cursor-pointer">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#36b1a0] dark:bg-[hsl(176,61%,19%)] text-white py-2 rounded-lg font-semibold hover:bg-[hsl(176,61%,19%)] transition"
          >
            Login
          </button>
        </form>

        {/* Google Login */}
        <div className="my-4 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
        >
          <svg
            aria-label="Google logo"
            width="18"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path fill="#fff" d="M0 0h512v512H0" />
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              />
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              />
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              />
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              />
            </g>
          </svg>
          <span className="text-sm font-medium">Login with Google</span>
        </button>

        {/* Register link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link
            className="text-[#36b1a0] hover:underline font-semibold"
            to={"/register"}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Authcontext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUser, setUser } = use(Authcontext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // Password validation
    const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordValidate.test(password)) {
      setError(
        "Password must have at least 1 uppercase letter, 1 lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    setError("");

    createUser(email, password)
      .then((res) => {
        const createdUser = res.user;

        return updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...createdUser, displayName: name, photoURL: photo });

          Swal.fire({
            icon: "success",
            title: "Registration Successful!",
            text: "Welcome to the app!",
            timer: 1300,
            showConfirmButton: false,
          });

          navigate("/");
        });
      })
      .catch((error) => {
        setError(error.message || "Something went wrong.");
        console.log(error);
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
          <div className="bg-[#cbe0de] p-4 rounded-full shadow-md">
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
                d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2m16 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-4l-2-2H8L6 5H2v14a2 2 0 002 2h2"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mt-3">
            Create an Account
          </h1>
          <p className="text-gray-500 text-sm text-center">
            Join us and start your journey of learning and sharing knowledge.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handlerSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              placeholder="Profile picture link"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              placeholder="Password"
              required
            />
          </div>

          {error && (
            <span className="block text-red-500 text-sm font-medium">
              {error}
            </span>
          )}

          <button
            type="submit"
            className="w-full bg-[#36b1a0] text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>

        {/* Link to login */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            className="text-[#36b1a0] hover:underline font-semibold"
            to={"/login"}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { Authcontext } from "../Context/AuthContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = use(Authcontext);
  const Icon = theme === "light" ? FaMoon : FaSun;

  const { user, logout } = use(Authcontext);
  // console.log(user);
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "underline font-semibold text-blue-600 dark:text-blue-400"
            : "font-semibold text-gray-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/allarticles"
        className={({ isActive }) =>
          isActive
            ? "underline font-semibold text-blue-600 dark:text-blue-400"
            : "font-semibold text-gray-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
        }
      >
        All Articles
      </NavLink>

      {user && (
        <>
          <NavLink
            to="/postarticle"
            className={({ isActive }) =>
              isActive
                ? "underline font-semibold text-blue-600 dark:text-blue-400"
                : "font-semibold text-gray-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            }
          >
            Post Articles
          </NavLink>

          <NavLink
            to="/myarticles"
            className={({ isActive }) =>
              isActive
                ? "underline font-semibold text-blue-600 dark:text-blue-400"
                : "font-semibold text-gray-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            }
          >
            My Articles
          </NavLink>
        </>
      )}

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "underline font-semibold text-blue-600 dark:text-blue-400"
            : "font-semibold text-gray-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
        }
      >
        About
      </NavLink>
    </>
  );

  const handleLogout = () => {
    return logout();
  };

  return (
    <div className="text-black  dark:bg-black sticky top-0 z-50 flex justify-center p-3 shadow-sm px-6 sm:px-6 md:px-12 lg:px-24">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-x-6"
          >
            {links}
          </ul>
        </div>
        <span className="relative">
          <svg
            className="w-6 h-6 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 7c2-1 4-1 6 0s4 1 6 0 4-1 6 0v13c-2-1-4-1-6 0s-4 1-6 0-4-1-6 0V7z" />
          </svg>
          <span className="absolute w-2.5 h-2.5 bg-orange-500 rounded-full top-0 left-3"></span>
        </span>
        <a className="ml-2 text-black dark:text-white text-xl ">Learnify</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-6">{links}</ul>
      </div>
      <div className="navbar-end mr-2">
        {user ? (
          <button onClick={handleLogout} className="btn bg-[#36b1a0]">
            Logout
          </button>
        ) : (
          <Link to={`/login`}>
            {" "}
            <button className="btn bg-[#36b1a0] dark:bg-[#134E4A]  text-white font-semibold px-4 py-2 rounded-lg  hover:from-[#0D9488] hover:to-[#14B8A6] transition duration-300">Login</button>
          </Link>
        )}
      </div>
      <div className="dropdown dropdown-end mr-2 ">
        <div className="flex ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="tooltip tooltip-bottom ">
              <img src={user?.photoURL} className="w-10 h-10 rounded-full" />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <Link to={"/myarticles"}>My Article</Link>
          <Link to={"/postarticle"}>Post Article</Link>
          <Link className="">
            <button className="bg-[#14B8A6]" onClick={handleLogout}>Logout</button>
          </Link>
        </ul>
      </div>
      <div className="">
        <button
          onClick={toggleTheme}
          className="cursor-pointer dark:bg-[#334155] p-2 rounded-full dark:text-yellow-400 bg-[#2C2C2C]/70 text-black hover:bg-[#8fcca1]"
        >
          <Icon size={22} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

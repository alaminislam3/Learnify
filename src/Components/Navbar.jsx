import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { Authcontext } from "../Context/AuthContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = use(Authcontext);
  const Icon = theme === "light" ? FaMoon : FaSun;
 
  const {user,logout} =use(Authcontext)
  console.log(user);
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 underline font-semibold"
            : "text-gray-600 hover:text-blue-600 font-semibold"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/allarticles"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 underline font-semibold"
            : "text-gray-600 hover:text-blue-600 font-semibold"
        }
      >
        All Articles
      </NavLink>
      <NavLink
        to="/postarticle"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 underline font-semibold"
            : "text-gray-600 hover:text-blue-600 font-semibold"
        }
      >
        Post Articles
      </NavLink>

      <NavLink
        to="/myarticles"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 underline font-semibold"
            : "text-gray-600 hover:text-blue-600 font-semibold"
        }
      >
        My Articles
      </NavLink>
    </>
  );
  
  const handleLogout = ()=> {
    return logout()
  }


  return (
    <div className="text-black navbar bg-gradient-to-r from-[#EEF2FF] via-[#E0F2FE] to-[#F0FDFA]   shadow-sm">
      <div className="navbar-start">
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
          <span className="absolute w-2.5 h-2.5 bg-orange-500 rounded-full top-0 left-3 animate-ping"></span>
        </span>
        <a className="btn btn-ghost text-xl ">Learnify</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-6">{links}</ul>
      </div>
      <div className="navbar-end mr-2">
        {user ? <button onClick={handleLogout} className="btn">Logout</button> :  <Link to={`/login`}> <button className="btn">Login</button></Link> }
      </div>
      <div className="dropdown dropdown-end mr-2 ">
      <div className="flex ">
     
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="tooltip tooltip-bottom" >
                <img src={user?.photoURL} className="w-10 h-10 rounded-full" />
              </div>
        </div>
      </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <Link to={'/myarticles'}>
             My Article
          </Link>
          <Link to={'/postarticle'}>
             Post Article
          </Link>
          <Link>
            <button onClick={handleLogout}>Logout</button>
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

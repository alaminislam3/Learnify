import React, { use, useState } from "react";
import { Link,  useNavigate } from "react-router";
import { Authcontext } from "../Context/AuthContext";
import Swal from "sweetalert2";


const Register = () => {
  const { createUser ,updateUser,setUser} = use(Authcontext);
  const [error,setError]=useState("")
  const navigate =useNavigate()
  const handlerSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // console.log(name, email, password);

    // Validate password before trying to create user
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
    <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl md:mt-20">
      <h1 className="text-center mt-3 text-4xl font-bold">Registration Now!</h1>
      <div className="card-body">
        <form onSubmit={handlerSubmit} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn btn-neutral  mt-4">Registration</button>
        </form>
        <p>
          Already have an account ?{" "}
          <Link className="text-green-500 underline" to={"/login"}>
            Login
          </Link>{" "}
        </p>
        <span className="text-red-400"> {error }</span>
      </div>
    </div>
  );
};

export default Register;

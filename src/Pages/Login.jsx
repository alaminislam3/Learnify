import React, { use } from "react";
import { Link,  useLocation,  useNavigate } from "react-router";
import { Authcontext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
     const {loginUser,googleSing} = use(Authcontext);
      const navigate=useNavigate();
      const location = useLocation();
      // const from = location.state?.from?.pathname || "/";


    const handleLogin =e=> {
          e.preventDefault()
       const email= e.target.email.value   
       const password= e.target.password.value;
       console.log(email,password);
       

       loginUser(email,password).then(res=> {
        navigate(`${location.state? location.state : '/' }`)
           console.log(res)
        })
        .catch(errro=> {
            console.log(errro);
        }) 
       
    }

    const handleGoogle = () => {
      googleSing()
        .then((result) => {
          
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
    <div className="card bg-base-100 mx-auto mt-10 md:mt-20 w-full max-w-sm shrink-0 shadow-2xl ">
      <h1 className="text-center mt-3 text-4xl font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral  mt-4">Login</button>
        </form>
        <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5] mt-2">
          {/* Google Login Button - just design placeholder */}
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff" />
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
          Login with Google
        </button>
        <p>Don't have an account ? Go <Link className="text-green-500 underline" to={'/register'}>Register </Link> </p>
      </div>
    </div>
  );
};

export default Login;
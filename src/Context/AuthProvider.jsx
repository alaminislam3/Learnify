import React, { useEffect, useState } from 'react';
import { Authcontext } from './AuthContext';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, } from "firebase/auth";
import { auth } from '../Firebase/Firebase.config';



const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState("light");

     // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  /* upper theme  */

    //  create user (singup)/Registration
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
     // login users
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user info (photo)
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  //  logout user
  const logout = () => {
    return signOut(auth)
      .then(() => {
          console.log("logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // google singin
  const provider = new GoogleAuthProvider();
  const googleSing = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // user observation
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
   

    const userInfo ={
        createUser,
        loading,
        loginUser,
        user,
        setUser,
        logout,
        googleSing,
        updateUser,
        theme,
    toggleTheme,

    }
    
    return <Authcontext value={userInfo}>
      <div data-theme={theme} className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
          {children}
          </div>
         </Authcontext>
};

export default AuthProvider;
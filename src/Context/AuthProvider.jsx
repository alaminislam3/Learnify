import React, { useEffect, useState } from 'react';
import { Authcontext } from './AuthContext';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,GoogleAuthProvider, signInWithPopup, onAuthStateChanged, } from "firebase/auth";
import { auth } from '../Firebase/Firebase.config';


const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

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
        logout,
        googleSing

    }
    
    return <Authcontext value={userInfo}>
          {children}
         </Authcontext>
};

export default AuthProvider;
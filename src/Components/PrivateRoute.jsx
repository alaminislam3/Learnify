import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { Authcontext } from '../Context/AuthContext';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const { user, loading } = use(Authcontext);
    if (loading) {
        return <span className="loading loading-bars loading-xl"></span>;
      }
      if (!user) {
        return <Navigate to={"/login"} state={location.pathname}></Navigate>;
      }
    
    return  children
};

export default PrivateRoute;
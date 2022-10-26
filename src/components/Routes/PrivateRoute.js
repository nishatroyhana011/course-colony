import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loader } = useContext(Authcontext);
    const location = useLocation();

    if(loader){
        return <progress className="progress w-56"></progress>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;
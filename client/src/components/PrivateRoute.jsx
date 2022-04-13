import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {userLocation} from "../reducers/auth"

export const PrivateRoute = ({ children }) => {
    
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token)
    const location = useLocation();
    console.log(location.pathname)
    if (!token) {
        dispatch(userLocation(location.pathname))
        return <Navigate to="/signin" replace />;
    }

    return children;
       
};





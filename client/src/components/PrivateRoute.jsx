import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({ children }) => {
    
    const token = useSelector(state => state.user.token)
    console.log(token)
    return token ? children : <Navigate to="/signin"/>
    

}
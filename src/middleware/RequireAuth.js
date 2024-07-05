import React from "react";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
    if (!localStorage.getItem("DashBoardUserLoggedIn")) {
        return <Navigate to="/rodriguez_parcial_2" />;
    }
    return children;
}

export default RequireAuth;

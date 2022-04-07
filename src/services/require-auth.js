import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import store from "../store";

export default function RequireAuth({ children, ...rest }) {
  const {user} = store.user.get()
  let location = useLocation();

  try {
   if (!user.isAuthenticated) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
  } catch (e) {
    console.log(e)
    return null;
  }
}

import React, { useState } from "react";
import  {Outlet,useNavigate,Link} from "react-router-dom"
import Login from "./Login";
const App = () => {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = 'Members';
    navigate(path);

  }
  return (
    <div id = "home">

        <h1>NUS Lifehack</h1>
        <Link to="/login">Login</Link> | {" "}
        <Link to="/register">Register</Link>
        <Outlet/>
    </div>
  );
}

export default App;
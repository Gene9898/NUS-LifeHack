import React, { useState } from "react";
import  {Outlet,useNavigate} from "react-router-dom"
import Login from "./Login";
const App = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = 'Members';
    navigate(path);

  }
  return (
    <div>
        <h1>NUS Lifehack</h1>
        <button className = "btn btn-primary" onClick = {routeChange} >Fk you Jon</button>
        <Login/>
    <Outlet/>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import  {Outlet,useNavigate,Link} from "react-router-dom"
import Navbar from "./Navbar";
const App = () => {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = 'Members';
    navigate(path);

  }
  return (
    <div id = "home">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
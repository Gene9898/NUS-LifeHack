import React, { useState } from "react";
import  {Outlet,useNavigate,Link} from "react-router-dom"
import Navbar from "./Navbar";
import Info from "./Info";
import Login from "./Login";
const App = () => {

  return (
    <div id = "home">
      <Navbar/>
      <Info/>
      <Outlet/>
    </div>
  );
}

export default App;
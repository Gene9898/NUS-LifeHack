import React, {useState} from "react";

const Login = () => {
    return (
    <div>
        <input type = "text" id = "username" placeholder = "Username"/>
        <br/>
        <input type = "password" id = "password" placeholder = "Password"/>
    </div>
    );
}

export default Login;
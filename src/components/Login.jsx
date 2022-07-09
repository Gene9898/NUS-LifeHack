import React, {useState} from "react";
import {auth, logInWithEmailAndPassword} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const Login = () => {
    const [user, setUser] = useState({
        email : "",
        password : ""
    });

    const handleChange = (event) => {
        const {id,value} = event.target;
        setUser(prevValue => {
            return {
                ...prevValue,
                [id]: value
            };
        });
    }

    // const GetUser = () => {
    //     return(
    //     <div>
    //         <h2>Username : {user.username}</h2>
    //         <h2>Password : {user.password}</h2>
    //     </div>
    //     );
    // }

    return (
    <div>
        <form>
            <h2>Login</h2>
            <input type = "text" id = "email" placeholder = "Email" onChange = {handleChange} value = {user.email}/>
            <br/>
            <br/>
            <input type = "password" id = "password" placeholder = "Password" onChange = {handleChange} value = {user.password}/>
            <br/>
            <br/>
            <button type="submit" className = "btn btn-primary" onClick={() => logInWithEmailAndPassword(user.email, user.password)}>Submit</button>
        </form>
        {/* <GetUser/> */}
    </div>
    );
}

export default Login;
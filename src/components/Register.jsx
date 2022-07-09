import React, {useState} from "react";
import {auth, registerWithEmailAndPassword} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const Register = () => {
    const [user, setUser] = useState({
        name : "",
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
        <h2>Register</h2>
        <form>
            <input type = "text" id = "name" placeholder = "Name" onChange = {handleChange} value = {user.name}/>
            <br/>
            <br/>
            <input type = "text" id = "email" placeholder = "Email" onChange = {handleChange} value = {user.email}/>
            <br/>
            <br/>
            <input type = "password" id = "password" placeholder = "Password" onChange = {handleChange} value = {user.password}/>
            <br/>
            <br/>
            <button className = "btn btn-primary" onClick={() => registerWithEmailAndPassword(user.name, user.email, user.password)}>Submit</button>
        </form>
        {/* <GetUser/> */}
    </div>
    );
}

export default Register;
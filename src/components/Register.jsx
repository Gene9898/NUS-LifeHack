import React, {useState} from "react";
import {auth, registerWithEmailAndPassword} from "../firebase";

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

    return (
    <div className = "register">
        <h2>Register</h2>

        <div className="input-group mb-3 ">
            <div className="input-group-prepend row">
                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
            </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id = "name" placeholder = "Name" onChange = {handleChange} value = {user.name} required/>
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend row">
                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
            </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id = "email" placeholder = "Email" onChange = {handleChange} value = {user.email} required/>
        </div>

        <div className="input-group mb-3">
            <div className="input-group-prepend row">
                <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
            </div>
            <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id = "password" placeholder = "Password" onChange = {handleChange} value = {user.password} required/>
        </div>

        <button className = "btn btn-primary" onClick={() => registerWithEmailAndPassword(user.name, user.email, user.password)}>Submit</button>
    </div>
    );
}

export default Register;
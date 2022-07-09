import React, {useState} from "react";
import {auth, registerWithEmailAndPassword} from "../firebase";

var registerCheck = true;

const Register = () => {

    const [user, setUser] = useState({
        name : "",
        email : "",
        password : ""
    });
    const [organisation,setOrganisation] = useState(false);

    const [org,setOrg] = useState("");

    const handleChange = (event) => {
        const {id,value} = event.target;
        setUser(prevValue => {
            return {
                ...prevValue,
                [id]: value
            };
        });
    }
    const handleOrg = (event)=> {
        setOrg(event.target.value);
    }
    const userChange = (event) => {
    }
    return (
    <div className = "register"> 
    
        <div className = "register-switch" >
            <button className = "btn btn-primary active user" onClick = {() => {setOrganisation(false)}}>User</button> {"          "}
            <button className = "btn btn-primary active organisation" onClick = {() => {setOrganisation(true)}}>Organisation</button>
        </div>
        {
            organisation ?         
            <div className="input-group mb-3 ">
            <div className="input-group-prepend row">
                <span className="input-group-text" id="inputGroup-sizing-default">Organisation</span>
            </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id = "org" placeholder = "Organisation" onChange = {handleOrg} value = {org} required/>
        </div>
        : null
        }
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
export {registerCheck};
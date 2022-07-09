import React, {useState} from "react";
import useGeoLocation from "../useGeoLocation";

const CreateRegisterEvent = () => {
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

    // const location = useGeoLocation();

    return (
    <div className = "register">
        <h2>CreateRegisterEvent</h2>
        {/* <h1>{location.loaded ? JSON.stringify(location) : "Location data not available yet."}</h1> */}
        <div className="input-group mb-3 ">
            <div className="input-group-prepend row">
                <span className="input-group-text" id="inputGroup-sizing-default">Event Name</span>
            </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id = "name" placeholder = "Name" onChange = {handleChange} value = {user.name} required/>
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend row">
                <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
            </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id = "email" placeholder = "Email" onChange = {handleChange} value = {user.email} required/>
        </div>

        <div className="input-group mb-3">
            <div className="input-group-prepend row">
                <span className="input-group-text" id="inputGroup-sizing-default">Time and date</span>
            </div>
            <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id = "password" placeholder = "Password" onChange = {handleChange} value = {user.password} required/>
        </div>

        <div className="input-group mb-3">
            <div className="input-group-prepend row">
                <span className="input-group-text" id="inputGroup-sizing-default">Postal Code</span>
            </div>
            <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id = "password" placeholder = "Password" onChange = {handleChange} value = {user.password} required/>
        </div>

        <button className = "btn btn-primary" >Create</button>
    </div>
    );
}

export default CreateRegisterEvent;
import React, {useState} from "react";

const Login = () => {
    const [user, setUser] = useState({
        username : "",
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
            <input type = "text" id = "username" placeholder = "Username" onChange = {handleChange} value = {user.username}/>
            <br/>
            <br/>
            <input type = "password" id = "password" placeholder = "Password" onChange = {handleChange} value = {user.password}/>
            <br/>
            <br/>
            <button type="submit" className = "btn btn-primary">Submit</button>
        </form>
        {/* <GetUser/> */}
    </div>
    );
}

export default Login;
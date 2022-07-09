import React,{useState} from "react";
const Members = () => {
    const [count,setCount] = useState(0);

    const handleChange = () => {
        setCount(count+1);
    }
    return (
     <div>
        <h1>HengYingLumLee</h1>
        <ul>
            <li>Eugene</li>
            <li>Chuan Song</li>
            <li>Jonathan</li>
            <li>Timothy</li>
        </ul>
        <button className = "btn btn-danger" onClick = {handleChange}>Increase</button>
        <h1>{count}</h1>
    </div>
        );
}

export default Members;
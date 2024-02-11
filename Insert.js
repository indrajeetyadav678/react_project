
import { useState } from "react";
import axios from "axios";


const Insert=()=>{
    const [input, setInput]=useState([]);

   const inputHandle=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input)

   };

   const submithandle=()=>{
    let url="http://localhost:3000/login";
    axios.post(url,input).then((res)=>{
        alert("Data Save Successfuly")
    })
    document.getElementById('names').value="";
    document.getElementById('emails').value="";
    document.getElementById('num').value="";
    document.getElementById('pass').value="";
     
   };

    return(
        <>
        <h1>This Insert data Form</h1>
        <div>
            <input type="text" id="names" value={input.value}  name="name" placeholder="Enter your Name" onChange={inputHandle} /><br/><br/>
            <input type="text" id="emails" value={input.value} name="email" placeholder="Enter your Email" onChange={inputHandle} /><br/><br/>
            <input type="text" id="num" value={input.value} name="number" placeholder="Enter your Number" onChange={inputHandle} /><br/><br/>
            <input type="text" id="pass" value={input.value} name="password" placeholder="Enter your Password" onChange={inputHandle} /><br/><br/>
            <button onClick={submithandle}>Submit</button>
        </div>
        </>
    );
}
export default Insert;
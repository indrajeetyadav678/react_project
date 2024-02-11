import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Editreg=()=>{
    const {myid}=useParams();
    // console.log(myid);
    const [myData, setmyData]=useState([]);
    const mynavigation = useNavigate();
    const loadData = () => {
        const Api = `http://localhost:3000/login/${myid}`;
        axios.get(Api).then((res) => {
            setmyData(res.data);
        });
    }

    useEffect(() => {
        loadData();
    },[])
   const inputHandle=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setmyData(values=>({...values, [name]:value}));
    console.log(myData)
   };

   const submithandle=()=>{
    let url=`http://localhost:3000/login/${myid}`;
    axios.put(url,myData).then((res)=>{
        alert("Data update Successfuly")
        mynavigation("/Update")
    })   
   };

    return(
        <>
        <h1> this is the edit page</h1>
        <div>
            <input type="text" id="names" value={myData.name}  name="name" placeholder="Enter your Name" onChange={inputHandle} /><br/><br/>
            <input type="text" id="emails" value={myData.email} name="email" placeholder="Enter your Email" onChange={inputHandle} /><br/><br/>
            <input type="text" id="num" value={myData.number} name="number" placeholder="Enter your Number" onChange={inputHandle} /><br/><br/>
            <input type="text" id="pass" value={myData.password} name="password" placeholder="Enter your Password" onChange={inputHandle} /><br/><br/>
            <button onClick={submithandle}>Submit</button>
        </div>
        </>
    );
}
export default Editreg;
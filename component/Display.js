import { useState, useEffect } from "react";
import axios from "axios";



const Display=()=>{
    const [mydata, setmyData]=useState([]);
   

   const loadData=()=>{
    let url="";
    axios.get(url).then((res)=>{
        setmyData(res.data);
    });
    useEffect(()=>{
      loadData();
    },[]);

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.number}</td>
                <td>{key.password}</td>
            </tr>
            </>
        );
    })

   }
    return(
        <>
        <h1>This Display data</h1>
        </>
    );
}
export default Display;
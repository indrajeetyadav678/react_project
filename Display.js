import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";



const Display = () => {
    const [myData, setmyData] = useState([]);
    const loadData = () => {
        const Api = "http://localhost:3000/login";
        axios.get(Api).then((res) => {
            setmyData(res.data);
        });
    }

    useEffect(() => {
        loadData();
    },[])
    // console.log(myData)

    const Ans=myData.map((items) => 
    {
        return (
            <>
                <tr>
                    <td>{items.name}</td>
                    <td>{items.email}</td>
                    <td>{items.number}</td>
                    <td>{items.password}</td>
                </tr>
            </>
        );
    })
   
    return (
        <>
            <h1>This Display data</h1>
            
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Password</th>
                </tr>
                {Ans}
            </table>
        </>
    );
}
export default Display;
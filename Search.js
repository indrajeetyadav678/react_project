import axios from "axios";
import { useState } from "react";



const Search = () => {
    const [myname, setmyname] = useState("");
    const [mytype, setmytype] = useState("");
    const [mydata, setMydate] = useState([]);
    console.log(mytype)
    const searchsubmit = () => {
    console.log(mydata)

        if (mytype === "name") {
            let url = `http://localhost:3000/login/?name=${myname}`;
            axios.get(url).then((res) => {
                if (res.data.length >= 1) {
                    setMydate(res.data)
                    document.getElementById('error').innerHTML = "";
                }
                else {
                    document.getElementById('error').innerHTML = "No Data Found!!!";
                }
            })
        }
        else if (mytype === "email") {
            let url = `http://localhost:3000/login/?email=${myname}`;
            axios.get(url).then((res) => {
                if (res.data.length >= 1) {
                    setMydate(res.data)
                    document.getElementById('error').innerHTML = "";
                }
                else {
                    document.getElementById('error').innerHTML = "No Data Found!!!";
                }
            })
        }
        else if (mytype === "number") {
            let url = `http://localhost:3000/login/?number=${Number(myname)}`;
            axios.get(url).then((res) => {
                if (res.data.length >= 1) {
                    setMydate(res.data)
                    document.getElementById('error').innerHTML = "";
                }
                else {
                    document.getElementById('error').innerHTML = "No Data Found!!!";
                }
            })
        }
        else if(mytype === "none") {
           alert("select search type")
        }
    }
    const myans = mydata.map((key) => {
        return (
            <>
                <div>
                    <h3>Name : {key.name}</h3>
                    <h3>Email : {key.email}</h3>
                    <h3>number : {key.number}</h3>
                    <h3>Password : {key.password}</h3>
                </div>
            </>
        );
    })

    return (
        <>
            <h1>This Search data Form</h1>
            <select width="100px" onChange={(e) => setmytype(e.target.value)}>
                <option value="none">Choose search type</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="number">Number</option>
            </select>
            <input type="text" value={myname} placeholder="enter your name" onChange={(e) => setmyname(e.target.value)} />
            <button onClick={searchsubmit}>Search</button>

            <div id="error"></div>
            {myans}
        </>
    );
}
export default Search;
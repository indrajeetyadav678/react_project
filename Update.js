import axios from "axios";
import { useEffect, useState } from "react";
import Delete from "../image/delete.png";
import edit from "../image/edit.png";
import { Link } from "react-router-dom";


const Update = () => {
    const [myData, setDate] = useState([]);

    const loadData = () => {
        let api = "http://localhost:3000/login";
        axios.get(api).then((resp) => {
            setDate(resp.data);
        });
    }

    useEffect(() => {
        loadData();
    }, [])


    const delets = (myid) => {
        let url = `http://localhost:3000/login/${myid}`;
        axios.delete(url).then((res) => {
            alert("Date deleted successful");
            loadData();
        });
    }

    const ans = myData.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.name}</td>
                    <td>{key.email}</td>
                    <td>{key.number}</td>
                    <td>{key.password}</td>
                    <td>
                        <Link to={"/Editreg/"+key.id} >
                            <img src={edit} alt="" width="20px" />
                        </Link>
                    </td>
                    <td>
                        <img src={Delete} alt="" onClick={(e) => { delets(key.id) }} width="20px" />
                    </td>
                </tr >
            </>
        );
    })

    return (
        <>
            <h1>This Update data Form</h1>
            <table border="1" width="100%">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>password</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {ans}
            </table>
        </>
    );
}
export default Update;
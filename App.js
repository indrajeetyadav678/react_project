// import { BrowserRoute, Routes, Route } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Insert from "./component/Insert";
import Display from "./component/Display";
import Update from "./component/Update";
import Search from "./component/Search";
import Home from "./component/Home";
import Editreg from "./component/Editreg";



const App=()=>{

    return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home/>} />
        <Route path="insert" element={<Insert />} />
        <Route path="display" element={<Display/>} />
        <Route path="update" element={<Update />} />
        <Route path="search" element={<Search />} />
        <Route path="editreg/:myid" element={<Editreg />}
/>        </Route>
    </Routes>
    </BrowserRouter>
    
    </>
    );

}
export default App;

import { Link,Outlet } from "react-router-dom";



const Layout=()=>{
    return(
        <>
        <div>
            <Link style={{marginLeft:"20px"}}>FlowerShop.Com</Link>
            <Link to="home" style={{marginLeft:"50%"}}>Home</Link>
            <Link to="insert" style={{marginLeft:"50px"}}>Insert</Link>
            <Link to="display" style={{marginLeft:"50px"}}>Display</Link>
            <Link to="update" style={{marginLeft:"50px"}}>Update</Link>
            <Link to="search" style={{marginLeft:"50px"}}>Search</Link>
        </div>
        <hr size="2" color="black"/>

        <Outlet/>
        <hr size="2" color="black"/>
            footer 
            developer : indrajeet yaduwanshi
        </>
    );
}
export default Layout;
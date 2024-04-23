import { Outlet,Link, Form } from "react-router-dom";
import './portfolio/style.css'



const Layout =() =>{
    return(
       <> 
       
       
        <nav>
            <ul>
                <li>
                    <Link to ="/" >Home</Link>
                </li>
                <li>
                    <Link to ="/resume" >Resume</Link>
                </li>
                <li>
                    <Link to ="/contact" >Contact</Link>
                </li>
                <li>
                    <Link to ="/aboutus" >Aboutus</Link>
                </li>
                <li>
                    <Link to ="/career" >Career</Link>
                </li>
                
            </ul>

        </nav>      
        
        
        <Outlet/>
        </>
    )
}
export default Layout
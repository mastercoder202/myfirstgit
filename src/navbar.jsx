import { NavLink } from "react-router-dom";
import "../src/navbar.css"
const Navbar=()=>{

    return(
        <>
        <ul>
             <NavLink className={(e)=>{return e.isActive?"red":""}} to="/" >  <li>Even</li>  </NavLink>
             <NavLink className={(e)=>{return e.isActive?"red":""}} to="/armstrong" >  <li>Arm</li>  </NavLink>
             <NavLink className={(e)=>{return e.isActive?"red":""}} to="/palindrome" >  <li>Palindrome</li>  </NavLink>
             <NavLink className={(e)=>{return e.isActive?"red":""}} to="/vowels"><li>Vowels</li></NavLink>
             <NavLink className={(e)=>{return e.isActive?"red":""}} to="/prime"><li>prime</li></NavLink>
             <NavLink className={(e)=>{return e.isActive?"red":""}} to="/consonants"><li>cons</li></NavLink>
             <NavLink className={(e)=>{return e.isActive?"red":""}} to="/temp"><li>Temp</li></NavLink>
        </ul>
        </>
    )

}

export default Navbar
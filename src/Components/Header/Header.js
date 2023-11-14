import { BrowserRouter as Router, Link } from "react-router-dom";
import  user_icon from '../../assets/Icons/user_icons.png'
import { useState } from "react";
import logo from '../../assets/image/OIG.dP.jpeg'
import cart_icon from '../../assets/Icons/Cartbag.png'
import Home from "../../Pages/Home";
import Signup from "../Signup/Signup";



const Header = () => {
        const [searchText,setSearchtext]=useState("")
        const [searchClick,setSearchClick]=useState(false)
    

    return (
       
    <div className="flex fixed top-1 z-10 w-full m-4 bg-pink-50 items-center font-serif mr-4 rounded-xl">
                <div className="flex items-center justify-between">
                    <Link to='/' element={<Home/>} >
                    <img src={logo} rel="logo" class='w-16 rounded-2xl' />
                    </Link>
                </div>

                <div className="flex items-center ml-10 ">

                    <input type="edit" className="w-52 p-2 rounded-xl font-serif" 
                    placeholder="Search "
                    value={searchText}
                    onChange={(e)=>{
                        setSearchtext(e.target.value);
                    }} />
                    
                    <button class=' bg-pink-400 p-1.5 rounded-xl ml-3 font-serif'  
                        onClick={()=>{
                       setSearchClick("true")
                    }}>Search</button>
                </div>
                <div className="flex-1 items-center justify-evenly ">
                    <ul className="flex items-center justify-evenly m-1">                       
                        <Link to="/babies">Babies</Link>
                        <Link to="/boys">Boys</Link>
                        <Link to="/girls">Girls</Link>
                        <Link to="/cart"> 
                        <img src={cart_icon} rel="cart" id="cart" class='pr-2 w-10'/>
                        </Link>
                    </ul>
                </div>

            <div class="flex w-20 h-8  mr-10">
                <Link to='/' element={<Signup/>}>
                    <img src={user_icon} rel="user" class='w-8 h-8'  /></Link>
             
            </div>
            
    </div>
        
    );
};

export default Header;

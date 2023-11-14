import React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Loginpage/Login";
import Signup from "./Components/Signup/Signup";
// import Dropdown from "./Pages/Dropdown";
// import Shimmer from "./Components/Shimmer/Shimmer";
import GoTop from "./Pages/GoTop";
import Forbabies from "./Pages/ForBabies";
import Boys from "./Pages/Boys"
import Girls from './Pages/Girls'
import Cart from './Pages/Cart'
import Productdetails from './Pages/Productdetails'



function App() {
  const isOnline=window.Navigator.onLine
  return (
  
    <div className="App">


      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/babies" element={<Forbabies/>}/>
            <Route path="/boys" element={<Boys/>}/>
            <Route path="/girls" element={<Girls/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          {/* <Shimmer/> */}
          <GoTop />
          {/* <Productdetails /> */}

      </BrowserRouter>
  
    </div>

  );
}

export default App;

import React from "react";
import Request from "./Request/Request";
import NavigationBar from "./Request/Components/navigation/NavigationBar";
import LogIn from "./Request/Components/login/LogIn";
import {Routes, Route,useNavigate } from 'react-router-dom'



function App() {
 
  return (
    
    <Routes>
      <Route path="/" element={<LogIn/>}/>
      <Route path="NavigationBar" element={<NavigationBar/>}/> 
    </Routes>
  
  );
}


export default App;

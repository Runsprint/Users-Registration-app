import React from "react";
import Request from "./Request/Request";
import NavigationBar from "./Request/Components/navigation/NavigationBar";
import LogIn from "./Request/Components/login/LogIn";
import {Routes, Route} from 'react-router-dom'



function App() {
 
  return (
    <Routes>
      <Route path="/" element={<LogIn/>}/>
    </Routes>
  
  );
}


export default App;

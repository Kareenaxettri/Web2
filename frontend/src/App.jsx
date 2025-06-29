import React from "react";
import HomePage from "./Homepage";
import Login from "./Loginpage";
import Signup from "./Signuppage";
import Dashboard from "./Dashboard";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>}/>  
        <Route path="/login" element={<Login/>}/>  
        <Route path="/signup" element={<Signup/>}/>  
        <Route path="/dashboard" element={<Dashboard/>}/>  
        
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

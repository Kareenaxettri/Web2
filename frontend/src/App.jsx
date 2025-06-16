import React from "react";
import HomePage from "./Homepage";
import Login from "./Loginpage";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>}/>  
        <Route path="/login" element={<Login/>}/>  
         <Route path="/register" element={<Login/>}/>  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

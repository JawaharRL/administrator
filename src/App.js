import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import  Registration from './Pages/Registration/Registration.jsx'
import  Login from './Pages/Login/Login.jsx'
import  Dashboard from './Pages/Dashboard/Dashboard.jsx'
import  Report from './Pages/Report/Report.jsx'

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    
    
    <Route path="/" element={<Login/>}/>
    <Route path="/registration" element={<Registration/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/report" element={<Report/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;

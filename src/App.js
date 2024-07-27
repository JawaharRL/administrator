import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import  Registration from './Pages/Registration/Registration.jsx'
import  Login from './Pages/Login/Login.jsx'
import  Dashboard from './Pages/Dashboard/Dashboard.jsx'

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Registration/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from 'react';
import './Registration.css'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from "axios";
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Registration() {

  const navigate= useNavigate();

const gotologin =()=>{
  navigate('/Login')
}

const [formData, setFormData] = useState({
  name: '',
  email: '',
  role: '',
  password: '',
  reenterpassword: ''
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    toast.success('Registration successful!');
    const response = await axios.post('http://localhost:8080/api/employees', formData);
    toast.success('Registration successful!');
    navigate('/Login');
    console.log('hi')
    console.log(response)
  } catch (error) {
    toast.error('Registration failed. Please try again.');
  }
};





  return (
    <div className="registraion-page">
       <div className="registration-container">
       <h3 className="registration-heading">Registration</h3>
        <form className="registration-form" onSubmit={handleSubmit} >

                <input className="registration-inputs" type="text"  name="name" placeholder="Name" value={formData.name} onChange={handleChange} required/>
                <input className="registration-inputs" type="email"  name="email" placeholder="Email id"required  value={formData.email} onChange={handleChange}/>
                <select required name="role"   value={formData.role} onChange={handleChange}>
                <option value="">Select role</option>
                  <option value="Admin">Admin</option>
                  <option value="Employee">Employee</option>
                </select>
                <input className="registration-inputs" type="password" name="password" placeholder="New passsword"  value={formData.password} onChange={handleChange}  required/>
              
                <input className="registration-inputs" type="password"  name="reenterpassword" placeholder="Re-enter passsword"   value={formData.reenterpassword} onChange={handleChange} required/>
                <a id="goto-login" onClick={gotologin}>Already have an account</a>
                <button className="registration-button" type="submit">Submit</button>
        </form>
        
       </div>
    </div>
  )
}

export default Registration
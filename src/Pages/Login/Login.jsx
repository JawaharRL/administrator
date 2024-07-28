import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [user_id, setuserId] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const gotoregistration = () => {
    navigate('/registration');
  }
  const loginsubmit = () => {
    navigate('/dashboard');
  }

  
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };
  

//   const loginsubmit = async () => {
//     try {
//         const response = await axios.post('http://localhost:8080/api/authentication/authenticate', {
//             userId: user_id,
//             role,
//             password
//         });

//         if (response.status === 200) {
//             toast.success(response.data.message);
//             navigate('/dashboard');
//         } else {
//             toast.error("Invalid credentials, please try again.");
//         }
//     } catch (error) {
//         toast.error(error.response?.data || "An error occurred while logging in. Please try again.");
//     }
// };


  return (
    <div>
      <div className="login-page">
        <div className="login-container">
          <h3 className="login-heading">Login</h3>
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <input className="login-inputs email-input"  type="email" name="user_Id" placeholder="Email id" onChange={e => setuserId(e.target.value)}/>
            <input className="login-inputs passwor_input" type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
            <select required name="role"   onChange={e => setRole(e.target.value)}>
                {/* <option className="options" value="">Select role</option> */}
                  <option className="options" value="Admin">Admin</option>
                  <option className="options" value="Employee">Employee</option>
                </select>
            <a id="goto-registration" onClick={gotoregistration}>Create an account</a>
          </form>

          <div>
            <button className="login-button" type="submit" onClick={loginsubmit}>Submit</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;

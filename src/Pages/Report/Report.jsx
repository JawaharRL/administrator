import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Report.css';
import axios from 'axios';
import expand_icon from '../../Assets/arrow-right.svg';
import collapse_icon from '../../Assets/arrow-left.svg';
import employee_icon from '../../Assets/employee.svg';
import profile_icon from '../../Assets/profile.svg';
import eye_icon from '../../Assets/eye.svg';

function Report() {
    const profileRef = useRef(null);
    const profileIconRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate=useNavigate();
    const Logout = () => {
        navigate('/');
    };
    const closereport = () => {
        navigate('/dashboard');
    };
    const handleClickOutside = (event) => {
        if (
            profileRef.current &&
            !profileRef.current.contains(event.target) &&
            profileIconRef.current &&
            !profileIconRef.current.contains(event.target)
        ) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navItems = [
        { name: 'Employee', icon: employee_icon }
      ];
  return (
    
    <div>
           <div className="navbar">
                <h3 id="logo_part_1">
                    Organization <br /><span id="logo_part_2">Logo</span>
                </h3>
                <div>
                    <div className="profile_icon" onClick={() => setOpen(!open)}ref={profileIconRef}>
                        <img id="profile_img" src={profile_icon} alt="Profile" />
                    </div>
                </div>
                {open && (
                    <div className="profile_details" ref={profileRef}>
                        <div className="faculty-profile">
                            <p className="field_background">Name</p>
                            <p className="field_background">Id</p>
                            <p className="field_background">Check-in</p>
                            <button className="login-button" type="button" onClick={Logout}>Logout</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="body-container">
        <section className="page">
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <header>
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material">
              {isOpen ? (
                <img id="icon" src={collapse_icon} alt="Collapse" />
              ) : (
                <img src={expand_icon} alt="Expand" />
              )}
            </span>
          </button>

          {/* <div>{isOpen ? <p>Logo</p> : ""}</div> */}
        </header>
        <nav>
          {navItems.map((item) => (
            <button key={item.name} className="each_button" type="button">
              <span className="side_nav_icons">
                <img src={item.icon} alt={item.name} />
              </span>
              <p>{item.name}</p>
            </button>
          ))}
        </nav>
      </aside>
    </section>
  

          <div>

            <div className="employee-detail">
                <div id="employeeimg">
                    <img id="profileicon" src={profile_icon} alt="" />
                </div>
                <div>
                    <h2>Jawahar</h2>
                    <p>Designer</p>
                    <p>203</p>
                </div>
            </div>
            <div className="buttons">
              <button id="editbtn">Edit profile</button>
              <button id="closebtn" onClick={closereport}>Close</button>
            </div>

            <h2 id="todaytimelog">Today's time log</h2>


            <table className="employee-repot">
                        <thead>
                            <tr>
                                <th>Work time</th>
                                <th>Break time</th>
                                <th>over time</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                <tr>
                                    <td>9.00AM-1.00pm</td>
                                    <td>1.00pm-2.30pm</td>
                                    <td>5.00pm-6.30pm</td>
                                </tr>
                            
                        </tbody>
                        </table>
          </div>
          </div>

    </div>
  )
}

export default Report
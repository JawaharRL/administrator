import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import axios from 'axios';
import expand_icon from '../../Assets/arrow-right.svg';
import collapse_icon from '../../Assets/arrow-left.svg';
import employee_icon from '../../Assets/employee.svg';
import profile_icon from '../../Assets/profile.svg';

function Dashboard() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const profileRef = useRef(null);
    const profileIconRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [employees, setEmployees] = useState([]);

    // const navItems = ["Employee", "Report"];
    const navItems = [
        { name: 'Employee', icon: employee_icon }
      ];
    
    const Logout = () => {
        navigate('/login');
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


    useEffect(() => {
        axios.get('/api/employees')
            .then(response => {setEmployees(response.data);
                console.log(response)
            })
           
            .catch(error => {
                console.error('There was an error fetching the employees!', error);
            });
            
    }, []);

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
           

            {/* <div className="body-container">
      <section
        className={`side-menu ${isHovered ? 'open' : 'collapsed'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="employee-details">
          <div className="icon_with_text selected"> 
            <img id="employee-icon" src={employee_icon} alt="Employee" />
            <span id="icon_text">Employee Details</span>
          </div>
          <div className="icon_with_text "> 
            <img id="employee-icon" src={employee_icon} alt="Employee" />
            <span id="icon_text">Employee Details</span>
          </div>

        </div>
      </section>
    </div> */}
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

          <div className="table">
          <table className="employee-table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Check-in</th>
                                <th>Check-out</th>
                                <th>Report</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.role}</td>
                                    <td>{employee.checkIn}</td>
                                    <td>{employee.checkOut}</td>
                                    <td><img src="path/to/report-icon.svg" alt="Report Icon" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
          </div>

          </div>
        </div>
    );
}

export default Dashboard;

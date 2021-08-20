import React from 'react'
import { Link } from 'react-router-dom'


function Sidebar() {
   
    return (
        <>
            <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Christopher Badminton Academy</div>
                </a>


                <hr className="sidebar-divider my-0" />



                <hr className="sidebar-divider" />

           
              

               


                <li className="nav-item">
                    <Link to="/" class="nav-link">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Dashboard</span>
                        </Link>
                </li>

              

                <li className="nav-item">
                <Link to="/sector" class="nav-link">
                        <i className="fas fa-fw fa-baseball-ball "></i>
                        <span>Sector</span>
                        </Link>
                </li>
           
                <hr className="sidebar-divider my-0" />
                <hr className="sidebar-divider d-none d-md-block" />

                <li className="nav-item">
                <Link to="/user" class="nav-link">
                        <i className="fas fa-fw fa-user-cog"></i>
                        <span>Member Management</span>
                        </Link>
                </li>

                <li className="nav-item">
                <Link to="/admin" class="nav-link">
                        <i className="fas fa-fw fa-user-shield"></i>
                        <span>Admin Management</span>
                        </Link>
                </li>
                

            </ul>
        </>
    )
}

export default Sidebar

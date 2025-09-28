import React from 'react'
import './Navbar.css'

function Navbar()
{
    return (
        <>
        <nav className="navbar navbar-expand-lg ">
            <div className="container d-flex">
    
                <a className="navbar-brand" href="#">
                <h4>NXT14</h4>
                </a>
                
                
                <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                
                
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav nav-links ms-auto"> 
                    <li className="nav-item">
                    <a className="nav-link" href="">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="">About us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="">Contact Us</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
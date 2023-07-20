import {FaHouseUser, FaNewspaper,FaPhoneAlt,FaInfoCircle } from 'react-icons/fa';
import React, {useState} from 'react';
const Navbar=()=>
{
    return (
        <nav id="mainNavbar" className="navbar navbar-dark  navbar-expand-md py-0">
        <a href="#"className="navbar-brand">Grade Management System</a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navLinks">
          <ul className="navbar-nav">
            <span className="nav-item">
            <a  className="nav-link" href="index.html"><i><FaHouseUser/></i>Home</a>
            </span>
            <span className="nav-item">
            <a href="#news" className="nav-link"><i><FaNewspaper/></i>News</a>
            </span>
            <span className="nav-item">
            <a href="#about" className="nav-link"><i><FaInfoCircle/></i>About</a>
            </span> 
            <span className="nav-item">
            <a href="#contact" className="nav-link"><i><FaPhoneAlt/></i>Contact</a>
            </span>  
      
          </ul>
        </div>  
      </nav>
    );
};
export default Navbar;
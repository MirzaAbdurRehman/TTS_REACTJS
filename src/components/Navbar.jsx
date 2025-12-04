
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

    const location = useLocation();
  return (
    <>
    <nav className='navbar'>
        <div className='nav-bar'>
            <Link to="/">E-Store Admin</Link>
        </div>
        <div className='nav-links'>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>All Product</Link>
            <Link to="/add-product" className={location.pathname === "/add-product" ? "active" : ""}>Add Product</Link>
            <Link to="/signin" className={location.pathname === "/signin" ? "active" : ""}>Signin</Link>
            <Link to="/signup" className={location.pathname === "/signup" ? "active" : ""}>Signup</Link>
        </div>

    </nav>
    </>
  )
}

export default Navbar


import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <>
            <div className='navbar_div'>
                <Link to="/" className='navbar_link'>Dashboard</Link>
                <Link to="/admin" className='navbar_link'>Admin</Link>
            </div>
            <hr style={{width:"60%",margin:"auto",marginTop:"20px"}}/>
        </>
    )
}

export default Navbar

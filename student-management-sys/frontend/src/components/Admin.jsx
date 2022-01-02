import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/dashboard.css"

const Admin = () => {
    return (
        <>
            <br />
            <div className='dash_sort_div dash_sort_div_222' >
                <Link to="/stu_list" className='navbar_link'>Student List</Link>
                <Link to="/stu_form" className='navbar_link'>Add Student</Link>
                <Link to="/contestlist" className='navbar_link'>Contest List</Link>
                <Link to="/con_form" className='navbar_link'>Add Contest</Link>
            </div>
        </>
    )
}

export default Admin

import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/dashboard.css"

const DashSort = () => {

    return (
        <>
            <div className='dash_sort_div'>
                <Link to="/dsa" className='navbar_link'>DSA</Link>
                <Link to="/coading" className='navbar_link'>Coading</Link>
            </div>
        </>
    )
}

export default DashSort

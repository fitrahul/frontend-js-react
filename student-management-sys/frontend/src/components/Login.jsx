import React from 'react';
import "../styles/adminlogin.css";

const Login = () => {
    return (
        <>
        <br/>
        <div className='adminlogin_div'>
            <h2 style={{padding:"10px"}}>Admin Login Page</h2>
            <form className='form_login'>
                <input type="mail" name="" id="mail" placeholder='Username' /><br/><br/>
                <input type="password" name="" id="pass" placeholder='Password' /><br/><br/>
                <input type="submit" name="" id="submit" />
            </form>
        </div>
        </>
    )
}

export default Login

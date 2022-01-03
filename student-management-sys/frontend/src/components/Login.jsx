import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "../styles/adminlogin.css";

const Login = () => {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const handleLogin = (e) => {
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value
        })
        // console.log(login);
    }

    const history = useHistory();
    const handleFormlogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4321/admins/check", login).then((res) => {
            // console.log(res.data);
            if (res.data.length === 0) {
                return history.push("/admin")
            }
            else {
                return history.push("/admin_link")
            }
        })
        setLogin({
            username: "",
            password: ""
        })
    }

    return (
        <>
            <br />
            <div className='adminlogin_div'>
                <h2 style={{ padding: "10px" }}>Admin Login Page</h2>
                <form className='form_login' onSubmit={handleFormlogin}>
                    <input type="mail" onChange={handleLogin} value={login.username} name="username" id="mail" placeholder='Username' /><br /><br />
                    <input type="password" onChange={handleLogin} value={login.password} name="password" id="pass" placeholder='Password' /><br /><br />
                    <input type="submit" onChange={handleLogin} name="" value="Submit" id="submit" />
                </form>
            </div>
        </>
    )
}

export default Login

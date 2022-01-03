import axios from 'axios';
import { useLocation } from "react-router"
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../styles/adminlogin.css"
import Admin from './Admin';

const StudentPatch = () => {
    const [patchdata, setPatchdata] = useState({});
    const [flag, setFlag] = useState(false);

    const history = useHistory();

    // 1. get the id of a student
    const location = useLocation()
    var loc_id = location.state;
    // console.log(location.state);

    
    // 2. get the data of a student using id
    useEffect(() => {
        getstudentpatchdata(loc_id);
    },[])

    function getstudentpatchdata(id) {
        axios.get(`http://localhost:4321/students/${id}`).then((res) => {
            setPatchdata(res.data.user);
            setFlag(true);
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log("name: ",name,value)
        setPatchdata({
            ...patchdata,
            [name]: value
        })
        // console.log("patchdata : ", patchdata);
    };

    const studentForm = (e) => {
        e.preventDefault();
        
        axios.patch(`http://localhost:4321/students/${loc_id}`,patchdata).then((res) => {
            setFlag(false);
            return history.push("/studentlist")
            // console.log(res);
        })
    }

    return (
        <>
            {flag ? <div>
                <Admin /><br />
                <div className='adminlogin_div'>
                    <h2 style={{ padding: "10px" }}>Add Student</h2>
                    <form className='form_login' onSubmit={studentForm}>
                        <input type="text" defaultValue={patchdata.name}  onChange={handleChange} name="name" id="mail" placeholder='Name' /><br /><br />
                        <input type="text" defaultValue={patchdata.city} onChange={handleChange} name="city" id="mail" placeholder='City' /><br /><br />
                        <input type="number" defaultValue={patchdata.age}  onChange={handleChange} name="age" id="mail" placeholder='Age' /><br /><br />
                        <input type="text" defaultValue={patchdata.education}  onChange={handleChange} name="education" id="mail" placeholder='Education' /><br /><br />
                        <input type="text" defaultValue={patchdata.gender}  onChange={handleChange} name="gender" id="mail" placeholder='Gender' /><br /><br />
                        <input type="number" defaultValue={patchdata.contact}  onChange={handleChange} name="contact" id="mail" placeholder='Contact' /><br /><br />
                        <input type="submit" name="" value="Edit" id="" />
                    </form>
                </div><br />
            </div> : <div>Loading...</div>}
        </>
    )
}

export default StudentPatch;

// Steps =>
// 1. get id of particular student using useLocation
// 2. get the data of a student using id [axios.get()] and store in var [patchdata]
// 3. use defaultValue={patchdata.****} in form to set the bydefault data of a student
// 4. after editing data...submit it...which cll a function [studentform] 
//    which will updata the data and redirect to student-list page
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../styles/adminlogin.css"
import Admin from './Admin';

const Student = () => {
    const [student, setStudent] = useState({
        name: "",
        city: "",
        age: "",
        education: "",
        gender: "",
        contact: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name,type);
        setStudent({
            ...student,
            [name]: value
        })
        // console.log("formdata", student);
    };

    const history = useHistory();
    const studentForm = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4321/students",student).then((res) => {
            return history.push("/studentlist")
        })
        // console.log(student);
        setStudent({
            name: "",
            city: "",
            age: "",
            education: "",
            gender: "",
            contact: ""
        });
    }

    return (
        <>
            <Admin /><br/>
            <div className='adminlogin_div'>
                <h2 style={{ padding: "10px" }}>Add Student</h2>
                <form className='form_login' onSubmit={studentForm}>
                    <input type="text" value={student.name} onChange={handleChange} name="name" id="mail" placeholder='Name' /><br /><br />
                    <input type="text" value={student.city} onChange={handleChange} name="city" id="mail" placeholder='City' /><br /><br />
                    <input type="number" value={student.age} onChange={handleChange} name="age" id="mail" placeholder='Age' /><br /><br />
                    <input type="text" value={student.education} onChange={handleChange} name="education" id="mail" placeholder='Education' /><br /><br />
                    <input type="text" value={student.gender} onChange={handleChange} name="gender" id="mail" placeholder='Gender' /><br /><br />
                    <input type="number" value={student.contact} onChange={handleChange} name="contact" id="mail" placeholder='Contact' /><br /><br />
                    <input type="submit" name="" value="Create" id="" />
                </form>
            </div><br/>
        </>
    )
}

export default Student

// name, city, age, education, gender, contact


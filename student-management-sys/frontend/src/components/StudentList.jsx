import React, { useState, useEffect } from 'react'
import Admin from './Admin'
import axios from "axios";
import { Link } from 'react-router-dom'
import "../styles/studentlist.css"

const StudentList = () => {
    const [stu, setStu] = useState([]);
    const [flag, setFlag] = useState(false);

    function gettingStudent() {
        axios.get("http://localhost:4321/students").then((res) => {
            // console.log("res: ",res);
            const data = res.data.user;
            setFlag(true);
            console.log("data: ", data);
            setStu(data);
        })
    }

    useEffect(() => {
        gettingStudent();
    }, [])

    if (flag === false) {
        return (
            <>
                <Admin /><br />
                <div className='student_list_main_div'>
                    <div className="student_list">hi</div>
                    <div className="sort_student">
                        <h3>Sort By</h3>
                        <Link>Name</Link>
                        <Link>Age</Link>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <Admin /><br />
                <div className='student_list_main_div'>
                    <div className="student_list">
                        <div className='stu_div_2'>
                            <h3 style={{ width: '12.5%' }}>NAME</h3>
                            <h3 style={{ width: '10%' }}>AGE</h3>
                            <h3 style={{ width: '12.5%' }}>CITY</h3>
                            <h3 style={{ width: '12.5%' }}>EDUCATION</h3>
                            <h3 style={{ width: '12.5%' }}>GENDER</h3>
                            <h3 style={{ width: '12.5%' }}>CONTACT</h3>
                            <h3 style={{ width: '12.5%' }}>EDIT</h3>
                            <h3 style={{ width: '12.5%' }}>DELETE</h3>
                        </div>
                        {stu.map((obj) => (
                            <div key={obj._id} className='stu_div_1'>
                                <p style={{ width: '12.5%' }}>{obj.name}</p>
                                <p style={{ width: '10%' }}>{obj.age}</p>
                                <p style={{ width: '12.5%' }}>{obj.city}</p>
                                <p style={{ width: '12.5%' }}>{obj.education}</p>
                                <p style={{ width: '12.5%' }}>{obj.gender}</p>
                                <p style={{ width: '12.5%' }}>{obj.contact}</p>
                                <button style={{ width: '12.5%' }}>Edit</button>
                                <button style={{ width: '12.5%' }}>Delete</button>
                            </div>
                        ))}
                    </div>
                    <div className="sort_student">
                        <h3 className='sort_by'>Sort By</h3>
                        <Link className='name_sort'>Name</Link>
                        <Link className='name_sort'>Age</Link>
                    </div>
                </div>
                <br/>
            </>
        )
    }
}

export default StudentList

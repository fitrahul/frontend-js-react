import React, { useState, useEffect } from 'react'
import Admin from './Admin'
import axios from "axios";
import { Link } from 'react-router-dom'
import "../styles/studentlist.css"

const StudentAge = () => {
    const [stu, setStu] = useState([]);
    // const [flag, setFlag] = useState(false);
    const [flag1, setFlag1] = useState(false);

    function gettingStudent() {
        axios.get("http://localhost:4321/students/age/age").then((res) => {
            // console.log("res: ",res);
            const data = res.data.user;
            // setFlag(true);
            // console.log("data: ", data);
            setStu(data);
        })
    }

    const handleDelete = (ids) => {
        // console.log(ids);
        axios.delete(`http://localhost:4321/students/${ids}`).then((res) => {
            console.log("response: ", res);
            setFlag1(true);
        })
    }

    useEffect(() => {
        gettingStudent();
    }, [flag1])

    // useEffect(() => {
    //     gettingStudent();
    // }, [])

    if (stu === null) {
        return (
            <>
                <Admin /><br />
                <div className='student_list_main_div'>
                    <div className="student_list"></div>
                    <div className="sort_student">
                        <h3 className='sort_by'>SORT BY</h3>
                        <Link to="/studentname" className='name_sort'>Name</Link>
                        <Link to="/studentage" className='name_sort'>Age</Link>
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
                                <button style={{ width: '12.5%' }}><Link style={{ textDecoration: "none",color:"#000000" }} to={{
                                    pathname: `/studentpatch`,
                                    state: obj._id,
                                }}
                                >Edit</Link></button>
                                <button onClick={() => { handleDelete(obj._id) }} style={{ width: '12.5%',cursor: "pointer"  }}>Delete</button>
                            </div>
                        ))}
                    </div>
                    <div className="sort_student">
                        <h3 className='sort_by'>SORT BY</h3>
                        <Link to="/studentname" className='name_sort'>Name</Link>
                        <Link to="/studentage" className='name_sort'>Age</Link>
                    </div>
                </div>
                <br />
            </>
        )
    }
}

export default StudentAge

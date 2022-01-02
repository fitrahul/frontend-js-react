import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "../styles/adminlogin.css";
import Admin from './Admin';

const Contest = () => {
    const [contest, setContest] = useState({
        title: "",
        type: "",
        deadline: "",
        tag: "",
        time: ""
    })

    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name,type);
        setContest({
            ...contest,
            [name]: value
        })
        console.log("formdata", contest);
    };

    const contestform = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4321/contest",contest).then((res) => {
            // console.log(res);
            return history.push("/contestlist")
        })
        // console.log(contest);
        setContest({
            title: "",
            type: "",
            deadline: "",
            tag: "",
            time: ""
        });
    }

    return (
        <>
            <Admin/><br/>
            <div className='adminlogin_div'>
                <h2 style={{ padding: "10px" }}>Add Contest</h2>
                <form className='form_login' onSubmit={contestform}>
                    <input type="text" value={contest.title} onChange={handleChange} name="title" id="mail" placeholder='Title' /><br /><br />
                    <input type="text" value={contest.type} onChange={handleChange} name="type" id="mail" placeholder='Type' /><br /><br />
                    <input type="text" value={contest.deadline} onChange={handleChange} name="deadline" id="mail" placeholder='Deadline' /><br /><br />
                    <input type="text" value={contest.tag} onChange={handleChange} name="tag" id="mail" placeholder='Tag' /><br /><br />
                    <input type="text" value={contest.time} onChange={handleChange} name="time" id="mail" placeholder='Time' /><br /><br />
                    <input type="submit" name="" value="Create" id="" />
                </form>
            </div>
            <br/>
        </>
    )
}

export default Contest;

// title:React/Redux/Js/HTML/CSS,
// type ( DSA or Coding ),
// deadline:15 jan 2022,
// tag:new/Time Out,
// time:11:59pm

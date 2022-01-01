import React, { useState } from 'react';
import "../styles/adminlogin.css";

const Contest = () => {
    const [contest, setContest] = useState({
        title: "",
        type: "",
        deadline: "",
        tag: "",
        time: ""
    })

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
        console.log(contest);
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
            <br/>
            <div className='adminlogin_div'>
                <h2 style={{ padding: "10px" }}>Contest Page</h2>
                <form className='form_login' onSubmit={contestform}>
                    <input type="text" value={contest.title} onChange={handleChange} name="title" id="mail" placeholder='Title' /><br /><br />
                    <input type="text" value={contest.type} onChange={handleChange} name="type" id="mail" placeholder='Type' /><br /><br />
                    <input type="text" value={contest.deadline} onChange={handleChange} name="deadline" id="mail" placeholder='Deadline' /><br /><br />
                    <input type="text" value={contest.tag} onChange={handleChange} name="tag" id="mail" placeholder='Tag' /><br /><br />
                    <input type="text" value={contest.time} onChange={handleChange} name="time" id="mail" placeholder='Time' /><br /><br />
                    <input type="submit" onChange={handleChange} name="" value="save" id="" />
                </form>
            </div>
        </>
    )
}

export default Contest;

// title:React/Redux/Js/HTML/CSS,
// type ( DSA or Coding ),
// deadline:15 jan 2022,
// tag:new/Time Out,
// time:11:59pm

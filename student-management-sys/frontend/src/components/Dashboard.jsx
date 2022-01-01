import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../styles/dashboard.css"
import DashSort from './DashSort';

const Dashboard = () => {
    const [dash, setDash] = useState([]);
    const [flag,setFlag] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:4321/contest").then((res) => {
            const data = res.data.contest;
            setFlag(true);
            console.log(data);
            setDash(data);
        })
    },[])

    if (flag === false) {
        return (
            <div></div>
        )
    }
    else {
        return (
            <>
                <h2>Contests</h2>
                <DashSort /><br/>
                <div className='dash_div'>
                    <h3 style={{width:'20%'}}>TITLE</h3>
                    <h3 style={{width:'20%'}}>TYPE</h3>
                    <h3 style={{width:'20%'}}>DEADLINE</h3>
                    <h3 style={{width:'20%'}}>TAG</h3>
                    <h3 style={{width:'20%'}}>TIME</h3>
                </div>
                {dash.map((obj) => (
                    <div className='dash_div_1'>
                        <p style={{width:'20%'}}>{obj.title}</p>
                        <p style={{width:'20%'}}>{obj.type}</p>
                        <p style={{width:'20%'}}>{obj.deadline}</p>
                        <p style={{width:'20%'}}>{obj.tag}</p>
                        <p style={{width:'20%'}}>{obj.time}</p>
                    </div>
                ))}
            </>
        )
    }
}

export default Dashboard

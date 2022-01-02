import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../styles/country.css";

const Cntry = () => {
    var [text, setText] = useState("");
    var [name, SetName] = useState([]);

    var handleOnchange = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {
        if (text.length >= 2) {
            axios.get("http://localhost:3005/name").then((res) => {
                var cll = res.data;
                for (let i = 0; i < cll.length; i++) {
                    if (cll[i].country.toLowerCase().includes(text) && !name.includes(cll[i].country.toLowerCase())) {
                        console.log(cll[i].country);
                        SetName([...name, cll[i].country.toLowerCase()]);
                    }
                }
                // var data = res.data;
                // console.log(name);
            });
            console.log("name: ", name);
        }
    }, [text])

    return (
        <>
            <div className='country_div'>
                <input
                    type="text"
                    id='country_inp'
                    onChange={handleOnchange}
                    placeholder='Enter country name'
                />
            </div>
            {name.map((con) => (
                <div className='country_map'>{con}</div>
            ))}
        </>
    )
}

export default Cntry

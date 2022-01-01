import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../styles/country.css"

const Cntry = () => {
    var [text, setText] = useState("");
    var [name, SetName] = useState([]);

    var handleOnchange = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {
        if (text.length % 2 == 0 || text.length > 2) {
            axios.get("http://localhost:3001/name").then((res) => {
                var data = res.data;
                console.log(data);
            });
            console.log("name: ", name);
        }
    }, [text])

    return (
        <div className='country_div'>
            <input
                type="text"
                id='country_inp'
                onChange={handleOnchange}
                placeholder='Enter country name'
            />

        </div>
    )
}

export default Cntry

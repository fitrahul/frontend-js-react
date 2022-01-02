import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../styles/country.css"

const Country = () => {
    var [text, setText] = useState("");
    var [name, SetName] = useState([]);
    const [flag, SetFlag] = useState(true);

    var handleOnchange = (e) => {
        setText(e.target.value);
    }



    function main() {
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
    }

    function throrts(main, d) {
        if (flag) {
            main();
            SetFlag(false);
            setTimeout(() => {
                SetFlag(true);
            }, d)
        }
    }


    return (
        <>
            <div className='country_div'>
            <input
                type="text"
                id='country_inp'
                onInput={handleOnchange, throrts(main, 500)}
                placeholder='Enter country name'
            />
        </div>
        {name.map((con) => (
            <div>{con}</div>
        ))}
        </>
    )
}

export default Country


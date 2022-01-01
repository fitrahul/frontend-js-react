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

    function main () {
        // console.log(text);
        // if (text.length >= 1) {
        //     axios.get("http://localhost:3001/name").then((res) => {
        //         var cll = res.data;
        //         for (let i = 0; i < cll.length; i++) {
        //             if (cll[i].country.includes(text)) {
        //                 // console.log(cll[i].country);
        //                 SetName([...name,cll[i]]);
        //             }
        //         }
        //     });
        //     console.log("name: ",name);
        // }
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

    // useEffect(() => {
    //     console.log("text: ", text);
    //     console.log("name: ", name);
    // }, [text])

    return (
        <div className='country_div'>
            <input
                type="text"
                id='country_inp'
                onInput={handleOnchange, throrts(main, 2000)}
                placeholder='Enter country name' />
        </div>
    )
}

export default Country


// cll.forEach((obj) => {
                //     if (obj.country.includes(text)) {
                //         console.log(obj.country);
                //         SetName([...name, obj]);
                //     }
                // })
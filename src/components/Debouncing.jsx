import React, { useState, useEffect } from "react";

function Debouncing() {
    const [searchData, setSearchData] = useState("");
    useEffect(() => {
        let timeoutVal;
        if (searchData !== "") {
             timeoutVal = setTimeout(() => {
                alert("API call is done");
            }, 5000);
        }
        return (() => {
            clearTimeout(timeoutVal);
        })
    }, [searchData]);

    return (
        <>
            <p>Debouncing</p>
            <input type="text" placeholder="Please type here" onChange={(e) => { setSearchData(e.target.value) }}></input>
        </>
    )
}

export default Debouncing;
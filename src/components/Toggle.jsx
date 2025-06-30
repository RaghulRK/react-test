import React, { useState } from "react";
import ChildToggle from "./ChildToggle";
function Toggle() {
    const [toogle, setToggle] = useState("on");
    const updateToggle = (value) => {
        setToggle(value);
    }
    return (
        <>
            <h1>Toogle Functionality</h1>
            <p>{toogle}</p>
            <ChildToggle toogle={toogle} updateToggle={updateToggle}></ChildToggle>
        </>
    )
}

export default Toggle;
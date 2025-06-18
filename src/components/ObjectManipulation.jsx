import React, { useState } from "react";

function ObjectManipulation() {
    const [value, setValue] = useState([]);
    const UpdateObjects = (action) => {
        if (action === "add") {
            var obj = {
                name: "Raghul",
                age: 25
            }
            setValue((prevSate) => [...prevSate, obj]);
        } else if (action === "update") {
            setValue((prevSate) => prevSate.map((item, i) => {
                return { ...item, age: item.age + 1 }
            }));
        } else if (action === "delete") {
            setValue((prevSate) => prevSate.slice(0, -1))
        }
    }

    return (
        <>
            <h1>Object CRUD</h1>
            {
                value.length > 0 ? (
                    value.map((item, i) => (
                        <li key={i}>Name: {item.name} Age: {item.age}</li>
                    ))
                ) : (
                    <p>Please Add something</p>
                )
            }
            <button onClick={() => UpdateObjects("add")}>Add</button>
            <button onClick={() => UpdateObjects("update")}>Update</button>
            <button onClick={() => UpdateObjects("delete")}>Delete</button>
        </>
    )
}

export default ObjectManipulation;
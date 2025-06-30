import React from "react";
function ChildToggle({ toogle, updateToggle }) {
    return (
        <>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={toogle === "on"}
                        onChange={(e) => { updateToggle(e.target.checked === true ? "on" : "off")}}
                    ></input>
                </label>
            </div>
        </>
    )
}

export default ChildToggle;
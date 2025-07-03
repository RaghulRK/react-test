import React, { useState } from "react";

function Tab({ tabs }) {
    const [index, setIndex] = useState(0);
    return (
        <>
            <div>
                {
                    tabs.length > 0 ? (
                        <div>
                            <div>
                                {
                                    tabs.map((item, i) => (
                                        <button key={i} onClick={() => setIndex(i)} style={{
                                            marginRight: "0.5rem",
                                            padding: "0.5rem 1rem",
                                            backgroundColor: i === index ? "#007bff" : "#e0e0e0",
                                            color: i === index ? "#fff" : "#000",
                                            border: "none",
                                            borderRadius: "4px",
                                            cursor: "pointer"
                                        }}>{item.title}</button>
                                    ))
                                }
                            </div>
                            <div>
                                <p>{tabs[index]?.content}</p>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <p>No tabs is available</p>
                        </div>
                    )
                }
            </div >
        </>
    )
}

export default Tab;
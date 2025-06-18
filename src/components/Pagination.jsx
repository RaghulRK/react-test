import React, { useState, useEffect } from "react";

function Pagination() {
    const val = Array.from({ length: 100 }, (_, i) => i + 1);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState([]);
    const itemsPerPage = 10;
    useEffect(() => {
        if (currentPage > 0) {
            const lastIndex = currentPage * itemsPerPage;
            const firstIndex = lastIndex - itemsPerPage;
            setTotalItems(val.slice(firstIndex, lastIndex));
        }
    }, [currentPage]);
    return (
        <div>
            <h1>Pagination</h1>
            {
                totalItems.length > 0 ? (
                    totalItems.map((item, i) => (<li key={i}>
                        {item}
                    </li>))
                ) : (
                    <p>Loading List</p>
                )
            }
            <button onClick={() => setCurrentPage(currentPage - 1)}>Prev Page</button>
            <button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</button>
        </div>
    )
}

export default Pagination;
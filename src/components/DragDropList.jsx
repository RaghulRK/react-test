import React, { useState, useRef } from "react";

const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

function DragDropList() {
  const [items, setItems] = useState(initialItems);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const dragItem = useRef();

  const handleDragStart = (index) => {
    dragItem.current = index;
    setDraggingIndex(index);
  };

  const handleDragEnter = (index) => {
    setHoverIndex(index);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
    setHoverIndex(null);
  };

  const handleDrop = () => {
    const newItems = [...items];
    const draggedItem = newItems[dragItem.current];
    newItems.splice(dragItem.current, 1);
    newItems.splice(hoverIndex, 0, draggedItem);
    setItems(newItems);
    dragItem.current = null;
    handleDragEnd();
  };

  return (
    <div style={{ width: "250px", margin: "40px auto" }}>
      {items.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragEnd={handleDrop}
          style={{
            padding: "12px 16px",
            margin: "4px 0",
            backgroundColor:
              index === hoverIndex && index !== draggingIndex
                ? "#d0f0ff"
                : index === draggingIndex
                ? "#a0cfff"
                : "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "move",
            boxShadow:
              index === draggingIndex ? "0 0 10px rgba(0,0,0,0.2)" : "none",
            transition: "background-color 0.2s ease",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default DragDropList;

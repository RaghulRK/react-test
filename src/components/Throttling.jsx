import React, { useEffect, useRef } from "react";

function Throttling() {
  const lastExecution = useRef(0);

  const handleScroll = () => {
    const now = Date.now();
    if (now - lastExecution.current > 1000) {
      console.log("Scroll event handled at", new Date().toLocaleTimeString());
      lastExecution.current = now;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <p>Scroll down to trigger throttled scroll event (once per second)</p>
    </div>
  );
}

export default Throttling;

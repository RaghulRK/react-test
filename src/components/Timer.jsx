import React, { useState, useEffect } from 'react';

function TimerApp() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {

    if (pause) {
      setStart(false);
    }
    if (start) {
      setPause(false);
      var clearInt = setInterval(() => {
        setCount(count + 1);
      }, 1000)
    }
    return (
      () => {
        clearInterval(clearInt);
      }
    )
  }, [count, start]);

  return (
    <div>
      <div>
        <p> Stop Watch:</p>
      </div>
      <div>
        {count}
      </div>
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => setPause(true)}>Pause</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default TimerApp;

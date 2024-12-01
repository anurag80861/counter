import React, { useEffect, useState } from 'react';
import './Counter.css';

function Counter({ name }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter created ", name);

    return () => console.log("Counter destroyed", name);
  }, []);

  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div>
        <div id="name">{name}</div>
        <div id="counter">{count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <div id="message">{count > 10 ? "Threshold crossed!" : ""}</div>
    </div>
  );
}

export default Counter;
import React, { useEffect, useRef, useState } from 'react';
import './Counter.css';
import backend from '../services/backend';

function Counter({ name }) {
  const [count, setCount] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true)
  // const renderCount = useRef(0)
  // console.log("RenderCount", renderCount.current++)


  useEffect(() => {
    backend.connect(name).then(prevVal => setCount(prevVal));//that line help to store a prev value
    return () => backend.disconnect(name)
  }, []);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false)
      return;
    }

    backend.updateMap(count)
  }, [count])

  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);
  const sendMessage = () => backend.ping("Hii");

  return (
    <div>
      <div id="name">{name}</div>
      <div id="counter">{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={sendMessage}>Hii</button>
      <div id="message">{count > 10 ? "Threshold crossed!" : ""}</div>
    </div>
  );
}

export default Counter;
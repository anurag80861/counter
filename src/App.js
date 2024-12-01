import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

const counterList = [
  {id: 'A', name: "Counter A"},
  {id: 'B', name: "Counter B"},
  {id: 'C', name: "Counter C"},
];

function App() {
  const [toggle, setToggle] = useState(0);
  const listLength = counterList.length;
  const handleToggle = () => setToggle(toggle => (toggle + 1)%listLength);
  const obj = counterList[toggle];
  return <>
    <button onClick={handleToggle}>Toggle Counters</button>
    <Counter name={obj.name} key={obj.id} />
  </>;
}

export default App;
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(0);

  return(

    <div className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <br/>
      <button onClick={()=>setCount(count+1)}>Add Count</button>
      <button onClick={()=>setCount(0)}>Reset</button>

    </div>
  )




}

export default App;

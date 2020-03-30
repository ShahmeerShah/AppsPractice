import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [seconds,setSeconds] = useState(0);
  const [active,setActive] = useState(false);


  
  useEffect(()=>{
    
    if(active){
    var fun = setInterval(() => {
      setSeconds(seconds+1)
    }, 1000);
  }
    return ()=>clearInterval(fun)
  },[seconds,active])

  return(

    <div className="App">
      <h1>Timer</h1>
      <h2>{seconds}</h2>
      <br/>
      <button onClick={()=>setActive(active?false:true)}>{active?"Pause":"Start"}</button>
      <button onClick={()=>setSeconds(0)}>Reset</button>
      


    </div>
  )




}

export default App;

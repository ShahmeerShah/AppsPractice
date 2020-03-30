import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
//Seconds for Timer
  const [seconds,setSeconds] = useState(0);
// active is use for pausing timer 
  const [active,setActive] = useState(false);
// this state is an array in which we push noted times
  const [times,setTimes] = useState({note: []})


  
  useEffect(()=>{
    
    if(active){
    var fun = setInterval(() => {
      setSeconds(seconds+1)
    }, 1000);
  }
    return ()=>clearInterval(fun)
  },[seconds,active])


  const [value,setValue] = useState(0);

  useEffect(()=>{
    if(value>0){
      times.note.push(seconds)
      console.log(times.note);
    }
  },[value]);


  return(

    <div className="App">
      <h1>Timer</h1>
      <h2>{seconds}</h2>
      <br/>
      <button onClick={()=>setActive(active?false:true)}>{active?"Pause":"Start"}</button>
      <button onClick={()=>setSeconds(0)}>Reset</button>
      <button onClick={()=>setValue(value+1)}>Note Time</button>
      <br />
      <ul className="ulfortimer">
        {times.note.map((val)=>{
          return(
            <li>
              {`${val}`}
            </li>
          )
        })}
      </ul>
      <br/>
      <button onClick={()=>{times.note.length=0}}>Reset Noted Times</button>
      


    </div>
  )




}

export default App;

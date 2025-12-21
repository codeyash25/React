import React, { useRef, useState } from 'react'

const Timer = () => {
  const [count , setCount] =useState(0);
  const time = useRef(0);
  const startTimer = ()=>{
    time.current = window.setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  }

  const stopTimer = ()=>{
    if(time.current){
      clearInterval(time.current);
      time.current = null;
    }
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startTimer} >Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default Timer

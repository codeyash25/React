import React, { useEffect, useRef, useState } from 'react'

const Previous = () => {
  const [value , setvalue] = useState(0);
  const valref = useRef();
  useEffect(()=>{
    // console.log(value);
    valref.current = value;
    console.log(valref.current)
  },[value])
  const increment = ()=>{
    setvalue(prev => prev + 1);
  }
  return (
    <div>
      <h1>{value}</h1>
      <h1> UseRef value : {valref.current}</h1>
      <button onClick={increment}>Add </button>
    </div>
  )
}

export default Previous

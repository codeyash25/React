import React, { useMemo, useState } from 'react'

const App = () => {

  const [count , setCount] = useState(0);
  const [ num , setNum] =useState(1000);

  const heavy = useMemo (()=>{
    console.log("heay calculation calculatin here")
    let number = 0;
    for(let i = 0; i<=100000 ; i++){
      number += i;
    }
    return number + count
  } , [count])

  const addition = ()=>{
    setCount(prev => prev + 1);
  }
  const decrease = ()=>{
    setNum((num>0) ? prev => prev -1 : 0)
  }

  return (
    <div>
      <h1>{heavy}</h1>
      <button onClick={addition}>Add</button><h1>{count}</h1>
      <button onClick={decrease}>Remove</button><h1>{num}</h1>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import Print from './Components/Print';

const App = () => {
  
  const [data , setData] =useState();
  const [ inp , setInp]=useState();

  function changes(e){
    setInp(e.target.value);
  }

  let arr=[];
  function getvalue(){
    arr.push(inp);
    setData(arr);
    console.log(arr);
  }
  function remove(){
    setData('');
    arr.pop();
    console.log(arr);
  }
  return (
    <div>
      
      <textarea type="text" onChange={changes}  />
      <h1>{inp}</h1>
      <button onClick={getvalue} >Push</button>
      <button onClick={remove} >Remove</button>
      <Print val={data} />
    </div>
  )
}

export default App

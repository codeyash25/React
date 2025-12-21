import React from 'react'
import Sample from './components/sample';
const App = () => {
  function example (){
    console.log("im from example function");
  }
  return (
    <div> 
      <Sample fnc={example} />
    </div>
  )
}

export default App

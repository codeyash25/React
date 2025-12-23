import React, { useReducer } from 'react'
import Card from './Card';

const Status = () => {
  const initialState = {
    value : false,
  }
  function  reducerfn (state , action){
    switch (action.act){
      case "Change" : 
      return {value : !state.value}
      case "display" :
        return{value : !state.value}
      default :
      return state
    }
  }
  const[state , dispatchfn]= useReducer(reducerfn , initialState)
  return (
    <div>
      <button onClick={() => dispatchfn({act : "Change"})}>{state.value ? "LogOut" : "LogIn" }</button>
      <div onChange={() => dispatchfn({act : "display"})}  >
        {state.value ? <Card /> : " "}
      </div>
    </div>
  )
}

export default Status

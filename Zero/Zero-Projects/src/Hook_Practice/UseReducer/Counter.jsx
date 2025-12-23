import React, { useReducer } from "react";

const Counter = () => {
  let initialState = {
    count : 0,
  }
  function reducer (state, action) {
    switch (action.act) {
      case "increse":
        return {count : state.count + 1}
      case "decrese":  
        return {count : (state.count >0) ? state.count - action.value : 0}
      case "reset" : return {count : 0}
      default:
        state
    }
  }
  const [state , dispatch]=useReducer(reducer ,initialState )
  return (
    <div>
      <h1>Number : {state.count}</h1>
      <button onClick ={()=> dispatch({act : "increse" ,})}>Increment</button>
      <button onClick ={()=> dispatch({act : "decrese"  , value : 1})}>Decrement</button>
      <button onClick ={()=> dispatch({act : "reset"})}>Reset</button>
    </div>
  );
};

export default Counter;

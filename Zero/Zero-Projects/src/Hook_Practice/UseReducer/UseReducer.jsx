import React, { useReducer } from 'react'

const UseReducer = () => {   
  const [checked , toggle]= useReducer((checked)=>!checked , false)
  // initialState  dispatchfunction     reducerfunction      set a initialState 
    return (
      <div>
        <input type="checkbox"  onClick={toggle}/>
        {checked ? "Checked" : "UnChecked"}
      </div>
    )
}

export default UseReducer

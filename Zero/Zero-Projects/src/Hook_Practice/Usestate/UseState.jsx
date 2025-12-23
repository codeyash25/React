import React, { useState } from 'react'

const UseState = () => {
  const [checked , SetChecked]= useState(false)
  return (
    <div>
      <input type="checkbox"  onClick={()=>{SetChecked(!checked)}}/>
      {checked ? "Checked" : "UnChecked"}
    </div>
  )
}

export default UseState

import React, { useReducer } from 'react'

const Input = () => {

  const initialValue = {
    count: 0,
    isLoggedIn: false
  }

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "Increase": 
        return { ...state, count: state.count + 1 }
      case "ToggleLogin":
        
        return { ...state, isLoggedIn: !state.isLoggedIn }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducerFn, initialValue)

  return (
    <div style={{ padding: '20px' }}>
      <h2>Status: {state.isLoggedIn ? "✅ Logged In" : "❌ Logged Out"}</h2>
      
      <button onClick={() => dispatch({ type: "ToggleLogin" })}>
        {state.isLoggedIn ? "Logout Karein" : "Login Karein"}
      </button>

      <hr />

      <h3>Count: {state.count}</h3>
      <button 
        disabled={!state.isLoggedIn} 
        onClick={() => dispatch({ type: "Increase" })}
      >
        Add (Sirf Login hone par chalega)
      </button>
    </div>
  )
}

export default Input
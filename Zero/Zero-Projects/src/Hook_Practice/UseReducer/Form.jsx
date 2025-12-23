import React, { useReducer } from "react";

const Form = () => {
  const initialState = {
    inputData: "",
  };

  function reducerfunciton(state, action) {
    switch (action.type) {
      case "data":
        return {
          ...state,
          inputData: action.payload.data,
        };

      default:
        return state;
    }
  }

  
  const [state, dispatch] = useReducer(reducerfunciton, initialState);
  return (
    <div>
      <form>
        <input
          type="text" 
          value = {state.inputData} 
          onChange={(e) =>
            dispatch({
              type: "data",
              payload:{ data : e.target.value,}
            })
          }
          placeholder="ender your name  "
        />
      </form>
      <h1>{state.inputData}</h1>
    </div>
  );
};

export default Form;


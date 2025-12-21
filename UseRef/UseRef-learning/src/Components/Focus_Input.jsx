import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
  const inputRef = useRef(null);
  useEffect(()=>{
    inputRef.current.focus();
  },[])

  return (
    <div>
      <input ref={inputRef} type="text"  maxLength={10}/>
    </div>
  )
}

export default FocusInput

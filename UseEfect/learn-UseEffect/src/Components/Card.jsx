import React, { useState } from 'react'
import { useEffect } from 'react';

const Card = () => {
  const [data, setData] = useState([]);
  console.log(data);
  
  useEffect(()=>{
    let api = (fetch('https://jsonplaceholder.typicode.com/users'));
    api.then(resp => resp.json())
    .then(jdata =>setData(jdata))
  },[])
  return (
    <div>
      {data.map(user => <h1 key={user.name}>{user.name}.</h1> )}
    </div>
  )
}

export default Card

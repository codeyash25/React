import React from 'react'
import Cards from './Component/Cards'
import image from './folderimage.svg'

const App = () => {

  const arr = ["first","second","third","fourth","fifth","sixth"]

  return (
    <div className='parent'>
      {arr.map(function(e ,n){
        return <div key={n}><Cards folder={e} images={image}/> </div>
      })}
    </div>
  )
}

export default App

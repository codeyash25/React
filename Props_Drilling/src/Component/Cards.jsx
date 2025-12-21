import React from 'react'

const Cards = ({folder,images}) => {
  return (
      <div className="Cards">
        <img className='image' src={images} alt="" />
        <p>{folder}</p>
      </div>
  )
}

export default Cards

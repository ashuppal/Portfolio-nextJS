import React from 'react'

const Cards = ({imgUrl,title,description}) => {
  return (
    <div>
      <div className = " h-52 md:h-72"
      style ={{background:`url(${imgUrl})`, backgroundSize:"cover"}}>

      </div>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  )
}

export default Cards

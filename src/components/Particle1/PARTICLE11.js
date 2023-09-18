import React from 'react'

const PARTCLE11 = ({
    head,
    text,
    img,
    num
}) => {
  return (
    <div className='Particle_1'>
        <img className="polygon-14" src={img} alt="design" />
        <p className='changed'>{num}</p>
        <h4>{head}</h4>
        <p className='text'>{text}</p>
    </div>
  )
}

export default PARTCLE11
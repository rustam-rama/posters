import React from 'react'
import './style.css'
const Hero = ({title = '123', text = '4567', image}) => {

  return (
    <div className='hero' style={{backgroundImage: 
      `linear-gradient(to bottom, rgba(2, 2, 2, 0) 7%, rgba(2, 2, 2, 0) 27%, rgba(2, 2, 2, 0.9) 100%), url(${image})`}}>
      <div className='hero__content'>
        <div className='hero__text'>
          <h1 className='hero__title'>{title}</h1>
          <p className='hero__elipsis'>
            <span className='hero__description'>{text}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
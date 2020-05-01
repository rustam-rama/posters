import "./style.css";
import React from 'react'

import LogoLeft from 'assets/images/reactMovie_logo.png'
import logoRight from 'assets/images/tmdb_logo.svg'


const Header = ()=>{
  return(
  <header className="header">
    <div className="header-content">
      <img className="heaher-img header-img__left" src={LogoLeft} alt="logo" />
      <img className="heaher-img header-img__right" src={logoRight} alt="logo" />
    </div>
  </header>
  )
}

export default Header
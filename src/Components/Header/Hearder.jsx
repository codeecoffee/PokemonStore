import React from 'react'
import './style.css'
import logo from '../../img/Header.png'

const Header = () => {
  return(
    <section>
      <img src={logo} alt="PokeStore"/>
    </section>
  )
}

export default Header
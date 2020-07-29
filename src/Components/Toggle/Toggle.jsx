import React from 'react'
import "./style.css"
import getTypeFromUrl from '../../utils'

import { FaShoppingCart } from 'react-icons/fa'

const Toggle =(props) => {
  let bgColor = getTypeFromUrl() === "fire" ? "#1D201F" : "#EFCA08"

  return(
    <>
      <FaShoppingCart color="white" id="toggle" onClick={props.click} style={{backgroundColor: bgColor}}></FaShoppingCart>
      {/* <button id="toggle" onClick={props.click}>Cart Toggle</button> */}
    </>
  )
}

export default Toggle
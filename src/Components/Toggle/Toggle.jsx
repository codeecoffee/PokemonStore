import React from 'react'
import "./style.css"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaShoppingCart } from 'react-icons/fa'

const Toggle =(props) => {
  return(
    <>
      <FaShoppingCart id="toggle" onClick={props.click}></FaShoppingCart>
      {/* <button id="toggle" onClick={props.click}>Cart Toggle</button> */}
    </>
  )
}

export default Toggle
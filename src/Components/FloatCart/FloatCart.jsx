import React, { useState } from 'react'
import {CardRows} from 'react-bootstrap'


import './style.css'

const FloatCart = (props) => {
  const [sidebarClass, setSidebarClass] = useState(props.Cartcontainer)

  const closeHandler = (e) =>{
    e.preventDefault()
    setSidebarClass("Cartcontainer close")
    setTimeout(()=>{
      props.close()
    },1000)
  }

  return( 
    <div className="Cartcontainer">
      <div className="bttncontainer">
        <button>Cart</button>
        <button className="closebtn" onClick={closeHandler}> close</button>
      </div>
      <div className="Cardscontainer">
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div> 
      <div className="total">
        <h1>Total: $40.99</h1>
      </div>
      <div className="checkout">
        <button>checkout</button>
      </div>

    </div>
  )
}

export default FloatCart
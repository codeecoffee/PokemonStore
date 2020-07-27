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
      <button className="closebtn" onClick={closeHandler}> close</button>
      <div className="Cardscontainer">
      <h1>Aqui!</h1>
        
      </div> 
      <div className="total">
        <h1>Total</h1>
      </div>

    </div>
  )
}

export default FloatCart
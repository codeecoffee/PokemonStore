import React, { useState } from 'react'
import {CardRows} from 'react-bootstrap'
import { FaShoppingCart, FaTimesCircle } from 'react-icons/fa'
import {FloatCartItem} from '../'
import './style.css'

const FloatCart = ({Cartcontainer, purchase, close, insideCart}) => {
  const [cartContainerClass, setCartContainerClass] = useState(Cartcontainer)
  // console.log("insideCart ->", insideCart)
  const closeHandler = (e) =>{
    e.preventDefault()
    setCartContainerClass("Cartcontainer close")
    setTimeout(()=>{
      close()
    },500)
  }

  var total = purchase.reduce((sum,item)=>(sum=sum+item.price),0)
  var quantityOfItems = purchase.length

  return( 
    <div className="Cartcontainer">
      {/* <div className="bttncontainer"> */}
      <div className="closecontainer">
        <FaTimesCircle onClick={closeHandler}/>
      </div>
        <div className="carticoncontainer">
         <FaShoppingCart color="white" size="2rem"/>
        </div>
        
        {/* <button className="closebtn" onClick={closeHandler}> close</button> */}
     
      {/* </div> */}

      <div className="Cardscontainer">
        <ul>
          {purchase.map(pokemon =>(
              <>
                <li><FloatCartItem pokemon={pokemon}/></li>
                {/* <li>{pokemon.name}</li>
                <li>{pokemon.price}</li>
                <img alt={pokemon.name} src={pokemon.img}/> */}
              </>
            )
          )}
        </ul>
      </div> 
      <div className="total">
        <h1>Total: R${total}</h1>
      </div>
      <div className="checkout">
        <button>checkout</button>
      </div>

    </div>
  )
}

export default FloatCart
import React, { useState } from 'react'
import {CardRows} from 'react-bootstrap'


import './style.css'

const FloatCart = ({Cartcontainer, purchase, close, insideCart}) => {
  const [sidebarClass, setSidebarClass] = useState(Cartcontainer)
  // console.log("insideCart ->", insideCart)
  const closeHandler = (e) =>{
    e.preventDefault()
    setSidebarClass("Cartcontainer close")
    setTimeout(()=>{
      close()
    },1000)
  }
  // var total = total + purchase.map(pokemon=>(
  //   pokemon.price
  // ))
  var total = purchase.reduce((sum,item)=>(sum=sum+item.price),0)
  var quantityOfItems = purchase.length
  console.log(`the quantity of items is ${quantityOfItems}`)
  console.log(total)
  console.log("DENTRO DO FLOAT: ", purchase)
  return( 
    <div className="Cartcontainer">
      <div className="bttncontainer">
        <button>Cart</button>
        <button className="closebtn" onClick={closeHandler}> close</button>
      </div>
      <div className="Cardscontainer">
        <ul>
          {purchase.map(pokemon =>(
              <div className="teste-teste">
                <li>{pokemon.name}</li>
                <li>{pokemon.price}</li>
                <img alt={pokemon.name} src={pokemon.img}/>
              </div>
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
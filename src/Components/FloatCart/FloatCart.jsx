import React, { useState } from 'react'
import {CardRows} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { FaShoppingCart, FaTimesCircle } from 'react-icons/fa'
import {FloatCartItem, Modal} from '../'
import './style.css'

const FloatCart = ({Cartcontainer, purchase, close, insideCart}) => {
  const [cartContainerClass, setCartContainerClass] = useState(Cartcontainer)
  const [modalShow, setModalShow] = useState(false);

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

      <div className="Cardscontainer">
        <ul>
          {purchase.map(pokemon =>(
              <>
                <li><FloatCartItem pokemon={pokemon}/></li>
              </>
            )
          )}
        </ul>
      </div> 
      <div className="total">
        <h1>Total: R${total}</h1>
      </div>
      <div className="checkout">
        <Button variant="success" onClick={() => setModalShow(true)}>Finalizar</Button>{' '}
        {/* <button onClick={() => setModalShow(true)}>Finalizar</button> */}
        <Modal
        show={modalShow}
        total={total}
  
        onHide={() =>{
          setModalShow(false) 
        }}
        />
      </div>

    </div>
  )
}

export default FloatCart
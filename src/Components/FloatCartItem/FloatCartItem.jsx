import React from 'react'
import {MdRemoveCircle} from 'react-icons/md'
import './FloatCartItem.css'
const FloatCartItem = ({pokemon}) =>(
  <div className="itemcontainer">
    <div className="remove"></div>
    
    <div className="itemimg"><img alt={pokemon.name} src={pokemon.img}/></div>
    <div className="itemname">{pokemon.name}</div>
    <div className="itemprice">R${pokemon.price}</div>
    <div className="removebttn"><MdRemoveCircle/></div>
  </div>
)

export default FloatCartItem


/* 
    <li>{pokemon.name}</li>
    <li>{pokemon.price}</li>
    <img alt={pokemon.name} src={pokemon.img}/> */



import React, { useState, useEffect } from 'react'
import { Card, FloatCart } from '../index'
import {CardColumns} from 'react-bootstrap'
import './style.css'

const Cards = ({handlePurchase, pokemon}) => {

  return(
    <>
    <CardColumns className="Cards">
      {pokemon.slice(0, 51).map((pokemon)=>
        (<Card key={pokemon.id} pokemon={pokemon} handlePurchase={handlePurchase} insideCart={false}/>)
      )}
    </CardColumns>
    </>
  )
}

export default Cards
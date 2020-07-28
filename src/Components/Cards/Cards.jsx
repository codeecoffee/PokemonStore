import React, { useState, useEffect } from 'react'
import { Card, FloatCart } from '../index'
import {CardColumns} from 'react-bootstrap'
import './style.css'

const Cards = ({handlePurchase, pokemon}) => {

  return(
    <>
    <CardColumns className="Cards">
      {pokemon.slice(0, 50).map((pokemon)=>
        (<Card key={pokemon.id} pokemon={pokemon} handlePurchase={handlePurchase} insideCart={false}/>)
      )}
    </CardColumns>
    {/* <div className="loadmore">
        <button>Load More </button>
    </div> */}
    </>
  )
}

export default Cards
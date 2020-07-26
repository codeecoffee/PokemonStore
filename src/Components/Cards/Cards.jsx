import React from 'react'
import Card from '../Card/Card'
import {CardColumns} from 'react-bootstrap'
import './style.css'
const Cards = ({pokemon}) => {
  console.log(pokemon)
  return(
  <CardColumns className="Cards">
    {pokemon.slice(0, 50).map((pokemon)=>(
      <Card pokemon={pokemon}/>
      )

    )}
  </CardColumns>
  )
}

export default Cards
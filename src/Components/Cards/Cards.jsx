import React from 'react'
import { Card } from '../index'
import {CardColumns} from 'react-bootstrap'
import './style.css'

const Cards = ({pokemon}) => {
  return(
    <>
    <CardColumns className="Cards">
      {pokemon.slice(0, 50).map((pokemon)=>
        (<Card key={pokemon.id} pokemon={pokemon}/>)
      )}
    </CardColumns>
    {/* <div className="loadmore">
        <button>Load More </button>
    </div> */}
    </>
  )
}

export default Cards
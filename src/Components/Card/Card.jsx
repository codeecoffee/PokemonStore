import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './style.css'

const MoreDeets = ({handlePurchase, pokemon:{pokemon:{name, url}}}) => {
  function getIdFromUrl(url){
    return Number(url.split('/')[6])
  }
  let pokemonId = getIdFromUrl(url)

  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
  
  return(
    <div className="card-container">
        <Card style={{ width: '18rem' }}>
          <Card.Img 
            className="image"
            variant="top" 
            src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            R$ {pokemonId}
          </Card.Text>
          
          <Button onClick={()=>handlePurchase(name, pokemonId, img)}variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MoreDeets
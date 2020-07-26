import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './style.css'

const MoreDeets = ({pokemon:{pokemon:{name, url}}}) => {
  console.log(name)
  function transformUrl(url){
    return Number(url.split('/')[6])
  }
  return(
    <div className="card-container">
        <Card style={{ width: '18rem' }}>
          <Card.Img 
            className="image"
            variant="top" 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${transformUrl(url)}.png`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            R$ {(Math.random()*1000).toFixed(2)}
          </Card.Text>
          
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MoreDeets
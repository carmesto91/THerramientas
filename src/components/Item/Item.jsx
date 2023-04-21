import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Item.css'
import {Link} from 'react-router-dom'

export const Item  = ({id, descripcion, precio, image, categoria}) => {
  //pasamos mediante props, cada propiedad de nuestro producto (objetos)
  return (
    <div className='fila'>
    
  
  <Card style={{ width: '18rem', color:'darkblue'}}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>{id}</Card.Title>
      <Card.Title>{descripcion}</Card.Title>
      <Card.Title>${precio}</Card.Title>
      <Card.Title>Categoria: {categoria}</Card.Title>
      <Link to={`/detail/${id}`}>
      <Button variant="primary">Ver Detalles</Button>
      </Link>
    </Card.Body>
  </Card>
</div>

)
}

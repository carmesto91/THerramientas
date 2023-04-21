import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount.jsx'

export const ItemDetail  = ({id, descripcion, precio, image, categoria, detalle}) => {
  //pasamos mediante props, cada propiedad de nuestro producto (objetos)
  return (
    <div className='fila'>
    
  
  <Card style={{ width: '35rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>Codigo: {id}</Card.Title>
      <Card.Title>{descripcion}</Card.Title>
      <Card.Title>Precio: ${precio}</Card.Title>
      <Card.Title>Categoria: {categoria}</Card.Title>
      <Card.Title>Detalles: {detalle}</Card.Title>
      <ItemCount/>
      <Button variant="primary">
        Agregar al carrito
      </Button>
      
    </Card.Body>
  </Card>
</div>

)
}

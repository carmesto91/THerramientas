import React, { useContext, useState } from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount.jsx'
import { CartContext } from '../context/CartContext.jsx'
import './ItemDetail.css'
import Swal from 'sweetalert2'


export const ItemDetail  = ({id,name, descripcion, precio, image, categoria, detalle, stock}) => {
 
  const navigate = useNavigate()


  const volverHaciaAtras=() =>{
    navigate(-1)
  }
const {addToCart} = useContext(CartContext)

 const [counter, setCounter] = useState(0)
 
const sumarAlCarrito=() =>{
  const newItem ={
    id,
    descripcion,
    precio,
    image,
    categoria,
    counter,
    name
  }
  console.log(newItem)
  addToCart(newItem)
  Swal.fire({
    icon: 'success',
    title: 'Producto Agregado con exito al carrito',
    showConfirmButton: false,
    timer:1500
  })
}

  //pasamos mediante props, cada propiedad de nuestro producto (objetos)
  return (
    <div className='fila'>
    
  
  <Card style={{ width: '35rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>Codigo: {name}</Card.Title>
      <Card.Title>{descripcion}</Card.Title>
      <Card.Title>Precio: ${precio}</Card.Title>
      <Card.Title>Categoria: {categoria}</Card.Title>
      <Card.Title>Detalles: {detalle}</Card.Title>
      <ItemCount max={stock} modify={setCounter} cantidad={counter}/>
      <Button onClick={sumarAlCarrito}>
        Agregar al carrito
      </Button>
      
    </Card.Body>
    <Button onClick={volverHaciaAtras} className='btn btn-success volver'>volver Atras</Button>
    <Link to='/cart' className='btn btn-info ir'>
      Ir al carrito
    </Link>
  </Card>
</div>

)
}

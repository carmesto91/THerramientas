import React, { useContext } from 'react';
import {Button} from 'react-bootstrap'
import {BsFillTrashFill} from "react-icons/bs"
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

export const CartScreen = () => {
  
  const {carrito, precioTotal, removerItem, vaciarCarrito}= useContext(CartContext)
  return (
    
    <div className='container my-50'>
      {
        carrito.length ===0
        ?<>
        
        <h3>Carrito vacio</h3>
        <hr />
        <Link to='/' className='btn btn-success'> Volver a Comprar</Link>
        </>
        :<>
        <h3>Detalle de Compras</h3>
    <hr />
    {
      carrito.map((prod)=>(
  
  <div>
    
    <div className="listado">
        <p>Producto: {prod.descripcion}</p>
        <p>$ {prod.precio}</p>
        <p>Cantidad: {prod.counter}</p>
        <Button className='btn btn-danger' onClick={() => removerItem(prod.id)}>
            <BsFillTrashFill/>
        </Button>
        </div>    
        <hr />
    </div>

      ))
    }
    <strong>Precio total: ${precioTotal()}</strong>
   <hr />
   <Button className='btn btn-danger' onClick={vaciarCarrito}> Vaciar Carrito</Button>
   <Link className='btn btn-success' to='/checkout'>
   Terminar Compra</Link>

        </>
     
      }
      
</div>    
  )
}

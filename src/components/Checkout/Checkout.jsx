
import React, { useState, useContext } from 'react'
import {CartContext} from '../context/CartContext'
import {Link} from 'react-router-dom'
import firebase from "firebase"
import 'firebase/firestore'
import {getFirestore} from '../../firebase/config'
import Swal from 'sweetalert2'
import './Checkout.css'

export const Checkout = () => {
  
  const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
  
  
  const[email, setEmail] =useState("")
  
  const[nombre, setNombre] = useState("")

  const [apellido, setApellido] =useState("")

  const [telefono, setTelefono] = useState("")

  const handleSubmit =(e) =>{
    e.preventDefault()

    console.log("Email", email)
    console.log("Nombre", nombre)
    console.log("Apellido", apellido)
    console.log("Telefono", telefono)
  
    const orden ={
      buyer:{
        email,
        nombre,
        apellido,
        telefono
      },
      item:carrito,
      total_price: precioTotal(),
      data: firebase.firestore.Timestamp.fromDate(new Date())
    }
    console.log(orden)
   // hacemos una funcion para enviar la orden a firebase
   const db= getFirestore()
   const orders = db.collection('ordenes')
   orders.add(orden)
   .then((res)=>{
    Swal.fire({
      icon: 'success0',
      title: 'Su compra fue Realizada con Exito',
      text: `Guarde su numero de orden de compra${res.id}`,
      willClose:() =>{
        vaciarCarrito()
      }
    })
     
   })
   .finally(()=>{
    console.log('Operacion realizada con exito')
   })
    //actualizamos la cantidad en la base de datos
    carrito.forEach((item) => {
      const docRef = db.collection('productos').doc(item.id)
      docRef.get()
      .then((doc) =>{
        docRef.update({
          stock: doc.data().stock -item.counter

        })
        
      })
      
    });


  }

 


    return (
    <div >
        <h3>Terminar Compra</h3>
        <hr />
        
        <form onSubmit={handleSubmit}  className='container mt-3'>
        <div className='formulario'>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/></div>
        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" className="form-control"  onChange={(e) => setNombre(e.target.value)} value={nombre}/></div>
        <div className="form-group">
            <label htmlFor="apellido">Apellido</label>
            <input type="text" className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido}/></div>
        <div className="form-group">
            <label htmlFor="telefono">Telefono</label>
            <input type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} value={telefono}/></div>
            </div>
            <div className='botonCheck'>
            <button type='submit' className='btn btn-success'>Finalizar</button>
            <Link to='/cart' className='btn btn-info'>Volver al Carrito</Link>
            </div>
        </form>

    </div>
  )
}

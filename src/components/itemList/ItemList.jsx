import React from 'react'
import './ItemList.css'
import { Item } from '../Item/Item'


export const ItemList = ({productos=[]}) => {
  return (
    <div className='presentacion'>
        <h1>TODO HERRAMIENTAS!</h1>
        <h3>Nuestros Productos</h3>
        <hr/>
        <div className='fila'>
        {productos.map((item)=> <Item {...item} key={item.id} />)}

        </div>

    </div>
    
  )
}

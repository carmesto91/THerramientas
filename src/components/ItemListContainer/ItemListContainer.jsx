import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
//import { pedirProductos } from '../../helpers/pedirProductos.js'
import { ItemList } from '../itemList/ItemList'
import {ImSpinner2} from 'react-icons/im'
import { useParams } from 'react-router-dom'
import {getFirestore} from '../../firebase/config.js'

export const ItemListContainer = (props) => {
  
  const [items, setItems] =useState([])

  const [loading, setLoading ] = useState(false)
  
 
  const {categoryId} = useParams()


  useEffect(()=>{
    setLoading(true)
   const db =getFirestore();

      //const productos =  db.collection('productos')
      const productos = categoryId
      ?db.collection('productos').where('categoria', '==',categoryId)
      :db.collection('productos')
      productos.get()
    .then((res)=>{
      const newItem = res.docs.map((doc)=>{
        return {id: doc.id, ...doc.data()}

      })
        console.table(newItem)
        setItems(newItem)
    })
    .catch((error)=> console.log(error))
    .finally(() =>{
      setLoading(false)
    } )
 
  }, [categoryId, setLoading])
  
  
  
  
  return (
    <div> 
      {/* nuestro componente arranca con loading en true*/}
      {/*<h3>{props.saludo}</h3>*/}
     { loading ?<ImSpinner2/>
      :<ItemList productos={items}/>
   } </div>
   )
  }

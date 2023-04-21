import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { pedirProductos } from '../../helpers/pedirProductos.js'
import { ItemList } from '../itemList/ItemList'
import {ImSpinner2} from 'react-icons/im'
import { useParams } from 'react-router-dom'


export const ItemListContainer = (props) => {
  
  const [items, setItems] =useState([])

  const [loading, setLoading ] = useState(false)
  
  //const param = useParams()

  //console.log(param)
  
  const {categoryId} = useParams()


  useEffect(()=>{
    //efecto montaje, con un loading true
    setLoading(true)
    pedirProductos()
    .then((res)=>{
      //imprimimos resp y guardamos en hook
     if(categoryId){
      setItems(res.filter(prod => prod.categoria === categoryId))
     }else{
      setItems(res)
     }

      // console.log(res)
    })
    //consologueamos errores
    .catch((error)=> console.log(error))
    .finally(()=> {setLoading(false)})

  }, [categoryId])
  
  
  
  
  return (
    <div> 
      {/* nuestro componente arranca con loading en true*/}
      {/*<h3>{props.saludo}</h3>*/}
     { loading ?<ImSpinner2/>
      :<ItemList productos={items}/>
   } </div>
   )
  }

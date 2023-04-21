import {stock} from '../data/stock.js'

//funcion para obtener productos
export const pedirProductos = () => {
    return new Promise ((resolve, reject)=> {
        setTimeout(() =>{
          resolve(stock)
          reject("Rechazado")


        }, 500)


    })


  }
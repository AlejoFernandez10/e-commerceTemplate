import React from 'react'
import { UserAuth } from '../../context/CartContextProvider'
import HistorialItem from './HistorialItem'

const HistorialItemList = ({items}) => {

    const {user} = UserAuth()


    


  if(user.email === items.email){
        
    return(
        <div className=' rounded w-full bg-gray-50 flex flex-col  p-2'>
            
            {items.prods.map((prod)=>(
                
                
                <div key={prod.id}>

                    <HistorialItem
                     id={prod.id}
                     nombre={prod.nombre}
                     imagen={prod.imagen}
                     categoria={prod.categoria}
                     precio={prod.precio}
                     cantidad={prod.cantidad}   
                     />
                </div>
                
            ))}
        </div>
    )
  }
}

export default HistorialItemList
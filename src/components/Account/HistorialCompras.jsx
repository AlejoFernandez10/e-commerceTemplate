import React from 'react'

import { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs} from 'firebase/firestore'

import HistorialItemList from './HistorialItemList'

const HistorialCompras = () => {

  const [prods, setProds] = useState([])


  useEffect(()=>{

    const db = getFirestore();
    const prodsCollection = collection(db, "orden")
    
    getDocs(prodsCollection).then((snapshot)=>{

     const prods = snapshot.docs.map((prod)=> ({

       ...prod.data(),
       
     }))

     setProds(prods)
    })
    
   }, [])
    

   

    return(
      <div className='min-h-[100vh] w-full pt-[150px] flex  justify-center'>

        
      <div className='flex flex-col w-full max-w-[1000px]   '>
      <h2 className='text-3xl mb-3  text-center  w-full  text-transparent sm:p-4  bg-clip-text bg-gradient-to-r from-purple-500 to-pink-200 sm:text-left '>Historial de Compras</h2>
      <span className='mb-20 text-sm pl-1 text-center sm:text-left w-[80%] sm:w-full sm:pl-4  m-auto text-gray-700'>Mira el estado de tus productos, solicitá rembolsos y descubre nuevos productos</span>

      
      {prods.map((prod)=>(
        
        <div className='p-4'>
        <div className='max-w-[1000px] w-full flex justify-between items-center mb-6'>
          <span className='text-xl text-gray-600'> Orden #5437 </span>
          
            <span className= ' cursor-pointer text-sm text-purple-500 pr-2' >Solicitar Rembolso</span>
          
        </div>

          <HistorialItemList items={prod} />
        </div>


        ))}

          </div>

      </div>
        
      
    )
   
    
   
   
  

   
 
}

export default HistorialCompras
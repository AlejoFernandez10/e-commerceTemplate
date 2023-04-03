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

        
      <div className='flex flex-col w-full max-w-[1000px] pl-2 '>
      <h2 className='text-3xl  mb-20 text-center  sm:text-left'>Historial de Compras</h2>
      
      {prods.map((prod)=>(         

         <HistorialItemList items={prod} />

        ))}

          </div>

      </div>
        
      
    )
   
    
   
   
  

   
 
}

export default HistorialCompras
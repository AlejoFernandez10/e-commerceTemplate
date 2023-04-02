import React from 'react'

import { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs} from 'firebase/firestore'
import { UserAuth } from '../../context/CartContextProvider'
import { CartContext } from '../../context/CartContextProvider'

const Settings = () => {

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

   const {user} = UserAuth();
   console.log(user.uid)


   if(user.uid) {
     
     prods.map((prod)=>{
  
      if(prod.userId === user.uid){
        console.log(prod)
      }
     })
   }
  

  return (
    <div className='min-h-[100vh] w-full flex justify-center'>
        
    <section className='max-w-[1200px] pt-[100px] flex flex-col'>

    {/*   opciones   */}

            <h2 className='text-3xl mb-[70px]'>Historial de Compras</h2>

        

        
        
        
       
    </section>
    </div>
  )
}

export default Settings
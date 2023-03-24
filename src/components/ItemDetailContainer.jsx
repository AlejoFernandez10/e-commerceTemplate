import React from 'react'

import { useState, useEffect } from 'react'

import {collection, getDocs, getFirestore} from 'firebase/firestore'

import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {


  const [productos, setProductos] = useState([])
  

 
    useEffect(()=>{

     const db = getFirestore();
     const prodsCollection = collection(db, "productos")
     
     getDocs(prodsCollection).then((snapshot)=>{

      const prods = snapshot.docs.map((prod)=> ({

        ...prod.data(),
        id: prod.id
      }))

      setProductos(prods)
     })
     
    }, [])

    

  return (
    <div className='pt-[100px] w-full flex justify-center items-center'> 
        <ItemDetail prods={productos} />
    </div>
  )
}

export default ItemDetailContainer
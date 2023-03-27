import React from 'react'

import { useState, useEffect } from 'react'

import { getFirestore, getDocs, collection } from 'firebase/firestore'



import FeaturedItemsList from './CategoriesItemsList'

const CategoriesItemListContainer = () => {

    const [productosPopulares, setProductosPopulares] = useState()

    
  

  
  useEffect(()=>{

    const db = getFirestore();

    const itemsCollection = collection(db,"productos");

    getDocs(itemsCollection).then((snapshot) => {

      const docs = snapshot.docs.map((doc)=> ({
        ...doc.data(),
        id: doc.id
      }))
      setProductosPopulares(docs)
              
    })

  }, [])
    

  

  return (
    <div>
        <FeaturedItemsList itemsPopulares={productosPopulares} /> 
    </div>
  )
}

export default CategoriesItemListContainer
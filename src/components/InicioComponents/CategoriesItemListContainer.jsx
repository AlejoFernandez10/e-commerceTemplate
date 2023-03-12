import React from 'react'

import { useState, useEffect } from 'react'

import FeaturedItemsList from './CategoriesItemsList'

const CategoriesItemListContainer = () => {

    const [productosPopulares, setProductosPopulares] = useState()
  

  const getItems = async()=>{
    const response = await fetch('https://fakestoreapi.com/products')


    const responseJSON = await response.json();

    ;

    

    setProductosPopulares(responseJSON);

    
           
  } 
  
    useEffect(()=>{
      getItems()
      
    }, [])

    

  return (
    <div>
        <FeaturedItemsList itemsPopulares={productosPopulares} /> 
    </div>
  )
}

export default CategoriesItemListContainer
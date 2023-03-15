import React from 'react'

import { useState, useEffect } from 'react'

import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {


  const [productos, setProductos] = useState([])
  

  const getData = async()=>{
    const response = await fetch('https://fakestoreapi.com/products')


    const responseJSON = await response.json()

    setProductos(responseJSON)       
  } 
 
    useEffect(()=>{

      setTimeout(()=>{
        getData()
      }, 500)

    }, [])

    

  return (
    <div className='pt-[100px] w-full flex justify-center items-center'> 
        <ItemDetail prods={productos} />
    </div>
  )
}

export default ItemDetailContainer
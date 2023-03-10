import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemList from './ItemList'

const ItemListContainer = () => {

  const { category } = useParams();
  const [productos, setProductos] = useState()
  const [data, setData] = useState([])

  const getData = async()=>{
    const response = await fetch('https://fakestoreapi.com/products')


    const responseJSON = await response.json()

    setProductos(responseJSON)       
  } 
 
    useEffect(()=>{
      getData()
      
    }, [])


    /* if(category){
      getData.then(res=> setData(res.filter(prod => prod.category === category)))
    }
    else{
      getData.then(res => setData(res))
    } */
    


    return (
        <div className="bg-white">

          <ItemList productos={productos}/>
          
        </div>
      )
}

export default ItemListContainer
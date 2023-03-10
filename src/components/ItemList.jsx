import React from 'react'

import { useParams } from 'react-router-dom'

import Item from './Item'

const ItemList = ({ productos }) => {

    



    
    if(productos){
        return (
            <div >
                 <div className="w-100% flex flex-col justify-end items-end " >
              <div className=" mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 " style={{width:"800px"}}>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Catálogo</h2>
        
                <div className="mt-6 grid grid-cols-1 just gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                     { productos.map((prod)=>(
                        <Item 
                        id={prod.id}
                        title={prod.title}
                        
                        image={prod.image}
                        price={prod.price}
                        />
                ))
        
                }
        
                
        </div>    
                
        
              </div>
            </div>
                
            </div>
          )
        
    }

   
  
}

export default ItemList
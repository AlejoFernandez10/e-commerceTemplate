import React from 'react'



import Item from './Item'

const ItemList = ({ prods }) => {
   
  
    
    if(prods){
        return (
            <div >
                 <div className="w-100% flex flex-col justify-end items-end " >
              <div className=" mx-auto max-w-2xl py-16 px-4  sm:px-6 md:max-w-4xl lg:max-w-7xl lg:px-8 " >
                

              <div className="catalogo-container"></div>
                <div className="  grid grid-cols-1 place-items-center gap-y-14 gap-x-4 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 lg:gap-x-20  ">
                     { prods.map((prod)=>(
                        <Item 
                        id={prod.id}
                        nombre={prod.nombre}
                        categoria={prod.categoria}
                        imagen={prod.imagen}
                        precio={prod.precio}
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
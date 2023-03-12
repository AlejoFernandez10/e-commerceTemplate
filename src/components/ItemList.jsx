import React from 'react'



import Item from './Item'

const ItemList = ({ productos }) => {

    

  

    
    if(productos){
        return (
            <div >
                 <div className="w-100% flex flex-col justify-end items-end " >
              <div className=" mx-auto max-w-2xl py-16 px-4  sm:px-6 lg:max-w-7xl lg:px-8 " >
                

              <div className="catalogo-container"></div>
                <div className="  grid grid-cols-1 place-items-center gap-y-20 gap-x-4 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:gap-x-20  ">
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
import React from 'react'
import { Link } from 'react-router-dom'



const Item = ({id, nombre, imagen, precio}) => {

  
  return (
    <div>       
          
            
          <div key={id} className="group whitespace-normal relative hover:cursor-pointer rounded-[5px] w-[245px] shadow-lg ">
              <div className=" m-auto overflow-hidden  rounded-md   group-hover:opacity-75  lg:aspect-none lg:h-[8rem]">
               
                <Link to={`/item/${id}`}>                
                <img
                  src={imagen}
                  alt=""
                  className="h-[150px] m-auto  w-[210px] object-contain object-center lg:h-full lg:w-full transition duration-300 group-hover:scale-110" 
                /></Link>

              </div>
              <div className="w-[95%] m-auto relative flex h-[150px] justify-between flex-col text-left  p-5 pt-7 rounded-b-[10px]">
                <div>
                  <h3  className=" text-sm text-gray-600 py-3 text-[10px] ">
                    
                      
                      {nombre}
                    
                  </h3>
                  
                </div>                                                                                          
                
                <div  className="text-sm font-medium text-pink-600 flex justify-between"   >

                <p className='text-gray-900 font-semibold'>${precio}</p>  

                <span >   
                  Hasta 6 cuotas
                </span>

                
                 </div>
                
              </div>
            </div>
         
        
    </div>
  )
}

export default Item
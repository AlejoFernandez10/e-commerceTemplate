import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesItems = ({id, imagen , nombre, precio, discount}) => {


  

  return (
    <div>       
          
            <div key={id} className="group whitespace-normal relative hover:cursor-pointer rounded-[10px] w-[245px] ">
              <div className=" m-auto overflow-hidden  rounded-md bg-gray-50  group-hover:opacity-75  lg:aspect-none lg:h-[8rem]">
               
                <Link to={`/item/${id}`}>                
                <img
                  src={imagen}
                  alt=""
                  className="h-[150px] m-auto  w-[210px] object-contain object-center lg:h-full lg:w-full transition duration-300 group-hover:scale-110" 
                /></Link>

              </div>
              <div className="w-[95%] m-auto relative flex h-[150px] justify-between flex-col text-left bg-gray-50 p-4 rounded-b-[10px]">
                <div>
                  <h3  className=" text-sm text-gray-700 py-3 text-[10px] ">
                    
                      
                      {nombre}
                    
                  </h3>
                  
                </div>                                                                                          {/* SI HAY DESCUENTO.... */}                                                                                                                                                                                                                                                           {/* SI NO HAY DESCUENTO */}                                              
                <div  className="text-md font-medium text-pink-600 "><div className='w-[70%] h-auto'>{discount ?  <> <span className=' line-through opacity-60 '> ${precio} </span>  {Math.round(precio - (precio*0.3))}  <span className='w-[7ch] text-center text-white rounded-[5px] font-semibold text-sm  absolute right-0 bottom-5   bg-pink-700'>{`${discount}`}</span> </> : <> <span>${precio} </span> </> }  </div> </div>
              </div>
            </div>
         
        
    </div>
  )
}

export default CategoriesItems
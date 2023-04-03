import React from 'react'


const HistorialItem = ( {id, categoria, imagen, precio, nombre, cantidad} ) => {

    
    



    return(

        <div className=" flex flex-col   items-start gap-4   m-auto mb-12 sm:flex-row sm:max-w-[1200px] sm:justify-between "  key={id}>
           
           <div className='flex flex-col w-full  m-auto justify-center  items-center  sm:flex-row '>
            
                <img
                  srcSet={imagen}
                  alt=""
                  className=" h-[140px] w-[140px] mb-10 sm:mb-0 rounded object-contain sm:mr-2" 
                />

            <div className='w-full m-auto mt-0 max-w-[350px]  mb-1 sm:max-w-[1200px]'>
          <h3  className="text-sm text-gray-900  font-semibold">{nombre}</h3>

          <dl className="mt-1 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline text-sm mr-1">Cantidad:</dt>
              <dd className="inline text-sm">{cantidad}</dd>
            </div>

            <div className='mt-1'>
              <dt className="inline text-sm">Categoria: </dt>
              <dd className="inline text-sm ml-1">{categoria} </dd>
            </div>

            <div className='mt-1'>
             
              <dd className="inline  font-semibold text-sm ml-[5px]">${Math.round(precio)}</dd>
            </div>
          </dl>
        </div>
            </div>
        

            <div className='flex flex-col m-auto mt-4   w-full justify-self-end justify-center  gap-2  sm:gap-0 sm:items-end'>

            <button className=" bg-purple-600 rounded text-sm m-auto max-w-[350px] w-full py-2 px-14 text-white font-medium sm:px-1 sm:m-0 sm:max-w-[188px]" >
             
 
             Volver a comprar
            </button>

            <button className="border border-gray-800 text-sm rounded m-auto max-w-[350px] w-full py-2 px-14 text-gray-800 font-medium  sm:px-1 sm:m-0 sm:mt-2 sm:max-w-[188px]" >


                Comprar Similar
            </button>
  
                
            </div>            
        
           
      </div>
      
    )
  
}

export default HistorialItem
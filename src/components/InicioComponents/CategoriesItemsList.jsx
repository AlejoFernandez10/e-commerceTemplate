import React from 'react'
import CategoriesItems from './CategoriesItems'
import './categoriesItemsList.css'

import {MdChevronLeft, MdChevronRight, MdOutlineAttachMoney } from 'react-icons/md'
import {FaShippingFast } from 'react-icons/fa'
import {BiSupport } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import MasVendidos from './MasVendidos'
import ProdsDestacados from './ProdsDestacados'



const CategoriesItemsList = ({itemsPopulares}) => {

        const slideLeft = ()=>{
            let slider = document.getElementById(`slider`);
            slider.scrollLeft = slider.scrollLeft - 500
        }
    
        const slideRight = ()=>{
            let slider = document.getElementById(`slider`);
            slider.scrollLeft = slider.scrollLeft + 500
        }
    
        /* SECOND SLIDER */
        const slideLeft2 = ()=>{
            let slider = document.getElementById(`slider2`);
            slider.scrollLeft = slider.scrollLeft - 500
        }
    
        const slideRight2 = ()=>{
            let slider = document.getElementById(`slider2`);
            slider.scrollLeft = slider.scrollLeft + 500
        }



    
        

   
   

    if(itemsPopulares){

        return (

            
            <div className='inicio-prods-container w-full min-h-[100vh] bg-white'>

            <div className='min-h-[23vh] bg-gray-50 mb-[5rem] w-full flex justify-center '>

                <div className='grid place-items-center w-full sm:grid-cols-3 max-w-[1200px] relative'>  {/* ESTE DIV CENTRA */}
                
                    <div className='  flex items-center justify-center  m-auto pt-5 pb-5 '>
                         <div className='flex items-center w-[205px] justify-self-end '> <FaShippingFast size={60} color={"rgb(219,39,119)"} opacity={"0.8"}/> <span className='pl-5 text-gray-500'>Envio Gratis</span></div>
                    </div>

                        
                    <div className=' flex items-center justify-center m-auto  pt-5 pb-5 border-t-2 border-b-2 sm:border-t-0 sm:border-b-0 sm:border-r-2 sm:border-l-2  md:px-[15%] lg:px-[20%] ' >
                         <div className='flex items-center w-[205px]  '><MdOutlineAttachMoney size={60} color={"rgb(219,39,119)"} opacity={"0.8"}/> <span className='pl-2 text-gray-500'>Garantía 3 meses</span> </div>
                    </div>

                    <div className='flex items-center justify-center m-auto pt-5 pb-5'>
                         <div className='flex items-center w-[205px]  '><BiSupport size={60} color={"rgb(219,39,119)"} opacity={"0.8"}/> <span className='pl-3 text-gray-500'>Soporte 24/7</span> </div>
                    </div>
                    </div>
                
            
            </div>


                
            
            <div  className="  img-catalogo-container w-[full] min-h-[50vh]   grid grid-cols-1 gap-10  place-items-center  sm:w-[600px] sm:m-auto md:w-[745px] sm:gap-0 lg:w-[800px]" >
                
            <h2 className='text-center  justify-self-center sm:justify-self-start  ml-2 w-[15ch] text-[27px] md:text-[35px]  sm:mb-[30px] md:ml-8 lg:ml-14 text-gray-700  border-l-[3px] border-l-pink-500'>Buscar por categoría</h2>

                <div  className="gridSecondCol flex flex-col sm:flex-row gap-3  ">
                <Link to={'/catalogo'}><motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.4}} viewport={{once:true}} className='img-catalogo catalogo relative mb-7 shadow-xl sm:mb-0 h-[35vh] w-[300px] rounded-[5px] sm:h-[55.6vh]  sm:w-[280px]  md:w-[320px]   text-gray-50 hover:text-pink-600 ' ><p className='absolute  bottom-5 left-5 text-[25px] '>Ropa </p> </motion.div></Link>
                
                <div className=' '>
                    <Link to={'/catalogo/jewelery'} className=' shadow-2xl'><motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.4}} viewport={{once:true}} className='img-catalogo shadow-xl h-[35vh] w-[300px] jewelry mb-10 relative rounded-[5px]   sm:mb-3 sm:h-[27vh]  sm:min-w-[320px] sm:mr-5    text-gray-50  hover:text-pink-600'> <p className='absolute  bottom-5 left-5 text-[25px] '> Joyas </p> </motion.div></Link>
                    <Link to={`/catalogo/women`} ><motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.6}} viewport={{once:true}} className='img-catalogo mb-0 shadow-xl h-[35vh] w-[300px] women relative rounded-[5px] sm:h-[27vh] sm:min-w-[320px] sm:mr-5     text-gray-50  hover:text-pink-600'> <p className='absolute  bottom-5 left-5 text-[25px] '> Mujer</p> </motion.div></Link>
                </div>
                
                
                </div> 
                
                <Link to={`/catalogo/electronics`} ><motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.8}} viewport={{once:true}} className='img-catalogo shadow-2xl  h-[35vh] w-[300px] electronics relative rounded-[5px] sm:h-[30vh]   sm:w-[615px] sm:mr-5 md:h-[31vh] md:w-[650px] sm:mt-3   text-gray-50  hover:text-pink-600'> <p className='absolute  bottom-5 left-5 text-[25px] '> Tecnología</p> </motion.div></Link>

            </div>




                <div className=' flex max-w-[1210px] m-auto ' >
                    <h2 className='  mb-[40px]   mt-[100px] text-[26px] sm:text-[30px] md:text-[32px] text-gray-700 px-3 font-light border-l-4 border-pink-600 '> <span className='text-gray-700'>Productos populares</span></h2>       
                </div>
               
        
                            
                
                <motion.div  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.2}} viewport={{once:true}} className='relative flex  items-center min-h-[450px] max-w-[1300px] m-auto'>

                    
                    <MdChevronLeft className='opacity-70 cursor-pointer hover:opacity-100 bg-gray-300 rounded-[50%]'  onClick={slideLeft} size={40} />
                <div id='slider'  className='w-full h-full overflow-x-scroll flex whitespace-nowrap scroll-smooth  scrollbar-hide'>
                     
                     {itemsPopulares.map((item)=>(

                     <CategoriesItems
                         id={item.id}
                         nombre={item.nombre}
                         imagen={item.imagen}
                         categoria={item.categoria}                    
                         precio={item.precio}
                         
                         discount={'30% Off'}
                         />
                         
                     ))} 
             
         
                 </div>
                 <MdChevronRight className='opacity-70 cursor-pointer hover:opacity-100 bg-gray-300 rounded-[50%]' onClick={slideRight} size={40} />
                </motion.div>
                

                
                {/* MAS VENDIDOS  */}

                
                <MasVendidos />      



                
                <div className=' flex max-w-[1210px] m-auto' >
                    <h2 className=' mb-[40px]   mt-[100px] text-[26px] sm:text-[30px] md:text-[32px] text-gray-700 px-3  border-l-4 border-pink-600 '> <span className='text-gray-700'>Productos nuevos</span></h2>       
                </div>
        
                           {/* PRODUCTOS NUEVOS */} 
                
                <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:.5}} viewport={{once:true}} className='relative flex min-h-[400px] items-center max-w-[1300px] m-auto'>

                    
                    <MdChevronLeft className='opacity-70  cursor-pointer hover:opacity-100 bg-gray-300 rounded-[50%]' onClick={slideLeft2} size={40} />
                
                <div id='slider2'  className='w-full h-full overflow-x-scroll flex flex-row whitespace-nowrap scroll-smooth   scrollbar-hide'>
                     
                     {itemsPopulares.map((item)=>(

                     <CategoriesItems
                         id={item.id}
                         nombre={item.nombre}
                         imagen={item.imagen}
                         categoria={item.categoria}                    
                         precio={item.precio}
                         discount={''}
                                                  
                         />
                     ))} 
             
         
                 </div>
                 <MdChevronRight className='opacity-70 cursor-pointer hover:opacity-100 bg-gray-300 rounded-[50%] ' onClick={slideRight2} size={40} />
                </motion.div>


                <ProdsDestacados />
        
            </div>
          )
    }
  
}

export default CategoriesItemsList


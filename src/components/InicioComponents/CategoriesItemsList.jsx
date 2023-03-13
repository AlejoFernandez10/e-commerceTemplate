import React from 'react'
import CategoriesItems from './CategoriesItems'
import './categoriesItemsList.css'
import {MdChevronLeft, MdChevronRight } from 'react-icons/md'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



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

            
            <div className='inicio-prods-container w-full'>

            <div className='h-[30vh] bg-teal-50 mb-[6rem]'>

            </div>

            

            <div  className="  img-catalogo-container w-[full] min-h-[50vh]   grid grid-cols-1 gap-10 place-items-center sm:grid-cols-2 sm:w-[600px] sm:m-auto md:w-[745px] md:gap-0 lg:w-[800px]" >
                
            <Link to={'/catalogo'}><motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.5}} viewport={{once:true}} className='img-catalogo catalogo relative  h-[45vh] w-[300px] rounded-[10px] sm:h-[61.5vh]  sm:w-[280px] md:h-[65vh] md:w-[350px] lg:w-[370px] lg:h-[71.5vh]  text-gray-50 hover:text-teal-500 ' ><p className='absolute  bottom-5 left-5 text-[25px] '>Ropa </p> </motion.div></Link>

                <div  className="gridSecondCol">
                <Link to={'/catalogo/jewelery'} ><motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.5}} viewport={{once:true}} className='img-catalogo h-[45vh] w-[300px] jewelry mb-10 relative rounded-[10px]  sm:mb-3 sm:h-[30vh]  sm:min-w-[320px] sm:mr-5 md:h-[32vh] md:w-[360px] lg:w-[390px] lg:h-[35vh] text-gray-50  hover:text-teal-500'> <p className='absolute  bottom-5 left-5 text-[25px] '> Joyas </p> </motion.div></Link>
                <Link to={'/catalogo/electronics'} ><motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.5}} viewport={{once:true}} className='img-catalogo  h-[45vh] w-[300px] kids relative rounded-[10px] sm:h-[30vh] sm:min-w-[320px] sm:mr-5 md:h-[32vh] md:w-[360px] lg:w-[390px] lg:h-[35vh] text-gray-50  hover:text-teal-500'> <p className='absolute  bottom-5 left-5 text-[25px] '> Tecnología</p> </motion.div></Link>
                
                </div> 
                

            </div>




                <div className=' flex max-w-[1350px] m-auto' >
                    <h2 className='  mb-[80px]   mt-[120px] text-[26px] sm:text-[30px] md:text-[35px] text-gray-700 px-4 font-semibold border-l-4 border-pink-600 '>Productos  <span className='text-pink-600'>Populares</span></h2>       
                </div>
               
        
                            
                
                <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{duration:.5}} viewport={{once:true}} className='relative flex  items-center  max-w-[1500px] m-auto'>

                    
                    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                <div id='slider'  className='w-full h-full overflow-x-scroll flex whitespace-nowrap scroll-smooth gap-8  scrollbar-hide'>
                     
                     {itemsPopulares.map((item)=>(

                     <CategoriesItems
                         id={item.id}
                         title={item.title}
                         image={item.image}                    
                         price={item.price}
                         
                         discount={'30% Off'}
                         />
                     ))} 
             
         
                 </div>
                 <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
                </motion.div>
                
                
                <div className=' flex max-w-[1350px] m-auto' >
                    <h2 className=' mb-[80px]   mt-[100px] text-[26px] sm:text-[30px] md:text-[35px] text-gray-700 px-4 font-semibold border-l-4 border-pink-600 '>Recien  <span className='text-pink-600'>Llegados</span></h2>       
                </div>
        
                            
                
                <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:.5}} viewport={{once:true}} className='relative flex  items-center max-w-[1500px] m-auto'>

                    
                    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft2} size={40} />
                <div id='slider2'  className='w-full h-full overflow-x-scroll flex whitespace-nowrap scroll-smooth gap-8  scrollbar-hide'>
                     
                     {itemsPopulares.map((item)=>(

                     <CategoriesItems
                         id={item.id}
                         title={item.title}
                         image={item.image}                    
                         price={item.price}
                         discount={''}
                                                  
                         />
                     ))} 
             
         
                 </div>
                 <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight2} size={40} />
                </motion.div>
        
            </div>
          )
    }
  
}

export default CategoriesItemsList


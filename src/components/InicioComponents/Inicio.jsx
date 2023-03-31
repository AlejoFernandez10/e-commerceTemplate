import React from 'react'
import { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

/* import sliderFirstImg from '../../assets/slider-1.png' */

import CategoriesItemListContainer from './CategoriesItemListContainer'

import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Inicio = () => {

  const sliderItems = [
    {
      h2Content: "Headsets",
      discount:"50% Off",
      url:'https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-38.png',
      mt:'50px'
    },
    {
      h2Content: "Zapatillas",
      discount:"40% Off",
      url:'https://portotheme.com/html/wolmart/assets/images/demos/demo1/sliders/shoes.png'
      ,mt:'20px'
    },
    {      
      h2Content: "Smart Watch",
      discount:"30% Off",
      url:'https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-05.png'      
      ,mt:'0px'
    }
  ]


  const [currentIndex, setCurrentIndex]= useState(0);
  

  

  const autoSlide = ()=>{

    setTimeout(()=>{    
      const isLastSlide = currentIndex === sliderItems.length - 1;

      const newIndex = isLastSlide ? 0  : currentIndex + 1;
      setCurrentIndex(newIndex)
    }, 3000)
  }
  autoSlide()

  return (

    <div className='h-full w-full '>
    <motion.div  animate={{opacity:1}} initial={{opacity:0}} transition={{duration:1}}   className='relative w-[100%] h-[100vh]  m-auto transition duration-300    group rounded-[15px] bg-gradient-to-r from-pink-50 to-pink-200' > 

      <div   className='w-full h-full  rounder-2xl   duration-500 flex flex-col items-center  sm:flex-row justify-center  md:w-[100%] xl:w-[85%] xl:m-auto '>
        
        <div className=' h-[30%] flex flex-col  justify-end gap-3  md:w-[50%] md:m-auto   '>

          <div className='text-sm text-center text-pink-900 '>Tienda E-commerce</div>

          <div className='text-center text-5xl mb-10 w-[100%] font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-purple-300 sm:text-6xl md:text-7xl  md:text-center  lg:text-[80px] xl:text-[90px] transition duration-200' ><span></span> {sliderItems[currentIndex].h2Content}</div>
          
          <div  className='self-center  mb-10 text-gray-800' ><span className='pr-5 '>+ 100 productos</span> <Link className=' py-2 px-4   md:py-3 md:px-6 border bg-pink-500 rounded-[8px] text-gray-50  transition duration-200 md:self-center  hover:bg-pink-400' to={'/catalogo'}>Comprar!</Link></div>
        
        </div>
       
       <div  style={{backgroundImage:`url(${sliderItems[currentIndex].url}) `, marginTop:`${sliderItems[currentIndex].mt}` }} className='h-[30%] w-[85%] bg-center bg-contain bg-no-repeat sm:w-[50%] md:w-[50%] md:h-[40%] md:ml-auto md transition duration-200'  > </div>
       </div>


            

    </motion.div>

    

    <CategoriesItemListContainer />

    </div>
  )
}

export default Inicio
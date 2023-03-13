import React from 'react'
import { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

/* import sliderFirstImg from '../../assets/slider-1.png' */

import CategoriesItemListContainer from './CategoriesItemListContainer'

import { motion } from 'framer-motion'
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
      url:'https://media.gq.com.mx/photos/62559a140f3903db4b64cc53/16:9/w_2560%2Cc_limit/tenis-nike-air-jordan-homage-elegantes-lanzamiento.jpeg'
      ,mt:'20px'
    },
    {      
      h2Content: "Lentes de sol",
      discount:"30% Off",
      url:'https://images.unsplash.com/photo-1610904329458-2512c4748c8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'      
      ,mt:'0px'
    }
  ]


  const [currentIndex, setCurrentIndex]= useState(0);
  

  const prevSlide = () =>{
    const isFirstSlide = currentIndex === 0;   

    const newIndex = isFirstSlide ? sliderItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  const nextSlide=()=>{
    const isLastSlide = currentIndex === sliderItems.length - 1;

    const newIndex = isLastSlide ? 0  : currentIndex + 1;
    setCurrentIndex(newIndex)
    
  }

  

  return (

    <>
    <motion.div  animate={{scale:1}} initial={{scale:0}} transition={{duration:.7}}   className='w-[100%] h-[90vh] relative m-auto transition duration-300    group rounded-[15px] bg-gradient-to-r from-pink-50 to-pink-200' > 

      <div   className='w-full h-full  rounder-2xl   duration-500 flex flex-col items-center  sm:flex-row justify-center  md:w-[100%]'>
        
        <motion.div className=' h-[40%] flex flex-col  justify-end gap-3  md:w-[50%] md:m-auto  '>
          <div className='text-xs text-center text-pink-900 '>Tienda E-commerce</div>
          <div  className='text-center text-5xl mb-10 w-[100%] font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-purple-300 sm:text-6xl md:text-7xl  md:text-center  lg:text-[80px]  ' ><span></span> {sliderItems[currentIndex].h2Content}</div>
          
          <div  className='self-center  mb-10 text-gray-800' ><span className='pr-5 '>+ 30 productos</span> <Link className=' py-2 px-4   md:py-3 md:px-6 border bg-pink-500 rounded-[8px] text-gray-50 scale-100 hover:scale-105 transition duration-200 md:self-center ' to={'/catalogo'}>Catalogo</Link></div>
        </motion.div>
       
       <div style={{backgroundImage:`url(${sliderItems[currentIndex].url}) `, marginTop:`${sliderItems[currentIndex].mt}` }} className='h-[30%] w-[85%] bg-center bg-contain bg-no-repeat sm:w-[50%] md:w-[50%] md:h-[50%] md:ml-auto md  '  > </div>
       </div>

      
      
      {/* left-arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactLeft  onClick={prevSlide} size={20}/>
      </div>

      {/* right-arrow */}
      <div  className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactRight  onClick={nextSlide} size={20} />
      </div>
    </motion.div>


    <CategoriesItemListContainer />

    </>
  )
}

export default Inicio
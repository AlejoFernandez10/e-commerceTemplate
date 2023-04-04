import React, { useEffect } from 'react'
import { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

/* import sliderFirstImg from '../../assets/slider-1.png' */

import CategoriesItemListContainer from './CategoriesItemListContainer'


import { Link } from 'react-router-dom'
import shoes from '../../assets/slider/shoes.webp'
import reloj from '../../assets/slider/reloj.webp'
import auriculares from '../../assets/slider/auriculares.webp'

const Inicio = () => {

  const sliderItems = [
    {
      h2Content: "Auriculares",
      discount:"50% Off",
      url:`${auriculares}`,
      
      
    },
    {
      h2Content: "Zapatillas",
      discount:"40% Off",
      url:`${shoes}`,
      
      
    },
    {      
      h2Content: "Relojes",
      discount:"30% Off",
      url:`${reloj}`,
          
      
    }
  ]


  const [currentIndex, setCurrentIndex]= useState(0);
  const [autoSlide, setAutoSlide] = useState(true)
  const [resSlide, setResSlide] = useState(true)
  
  

  const slideRight = () => {
    const newIndex = (currentIndex + 1) % sliderItems.length;
    setCurrentIndex(newIndex);
  };

  const slideLeft = () => {
    const newIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    setCurrentIndex(newIndex);
  };
  


  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  

  const slide = (timer)=>{

      if(resSlide){
        setResSlide(false)
        setTimeout(()=>{
          const isLastSlide = currentIndex === sliderItems.length - 1;

        const newIndex = isLastSlide ? 0  : currentIndex + 1;
        setCurrentIndex(newIndex)
        }, timer)
      }
      
   
  }

  slide(4000)

  const restartSlide = (timer)=>{

    if(autoSlide){
      setAutoSlide(false)
      setTimeout(()=>{
        const isLastSlide = currentIndex === sliderItems.length - 1;

      const newIndex = isLastSlide ? 0  : currentIndex + 1;
      setCurrentIndex(newIndex)
      }, timer)
    }
    
 
}

   restartSlide(4000)
  





  return (

    <div className='h-full w-full '>
    <div     className='relative w-[100%] h-[100vh]  m-auto    group rounded-[15px] bg-gradient-to-r from-pink-50 to-pink-200' > 

    <BsChevronCompactLeft className='opacity-7 text-gray-700 cursor-pointer hover:opacity-100  rounded-[50%] absolute left-3 top-[60%] md:top-[45%] lg:opacity-70'  size={40} onClick={()=> slideLeft() & setAutoSlide(false) & setResSlide(true)}/>
       
      <div   className='w-full h-full  rounder-2xl  m-auto duration-500 flex flex-col items-center  md:flex-row justify-center   md:w-[90%] lg:w-[85%] xl:w-[80%] xl:m-auto '>
      
        <div className=' h-[25%] flex flex-col  justify-end md:h-[30%]   md:w-[50%] md:m-auto   '>

          <div className='text-sm text-center text-pink-900 '>Tienda E-commerce</div>

          <div className='text-center text-[50px] mb-5 w-[100%] font-extrabold text-transparent md:mb-10  bg-clip-text bg-gradient-to-r from-pink-500 to-purple-300 sm:text-7xl md:text-6xl  md:text-center  lg:text-[80px] xl:text-[90px]' ><span></span> {sliderItems[currentIndex].h2Content}</div>
          
          <div  className='self-center  mb-10 text-gray-800' ><span className='pr-5 '>+ 100 productos</span> <Link className=' py-2 px-4   md:py-3 md:px-6 border bg-pink-500 rounded-[8px] text-gray-50   md:self-center  hover:bg-pink-400' to={'/catalogo'}>Comprar!</Link></div>
        
        </div>
       
       <div  style={{backgroundImage:`url(${sliderItems[currentIndex].url}) ` }} className='h-[25%] w-[80%] mt-5 bg-center bg-contain bg-no-repeat sm:w-[40%] md:w-[46%] md:h-[30%] lg:h-[40%] lg:w-[50%] md:ml-auto '  > </div>
      
       </div>
       <BsChevronCompactRight className='opacity-7 text-gray-700 cursor-pointer   rounded-[50%] absolute right-3 bottom-[35%] md:bottom-[50%] lg:opacity-70' onClick={()=> slideRight() & setAutoSlide(false) & setResSlide(true) }  size={40} />
      
      
            

    </div>

    

    <CategoriesItemListContainer />

    </div>

   
  )
}

export default Inicio



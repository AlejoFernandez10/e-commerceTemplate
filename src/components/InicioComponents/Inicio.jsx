import React from 'react'
import { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

import CategoriesItemListContainer from './CategoriesItemListContainer'



const Inicio = () => {

  const sliderItems = [
    {
      url:'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80'
    },
    {
      url:'https://images.unsplash.com/photo-1524532787116-e70228437bbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    {
      url:'https://images.unsplash.com/photo-1610904329458-2512c4748c8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'      
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
    <div className='w-[100%] h-[90vh] relative m-auto    group rounded-[15px]' > 

      <div  style={{backgroundImage:`url(${sliderItems[currentIndex].url}) ` }} className='w-full h-full rounder-2xl bg-center bg-cover duration-500  '></div>

      {/* left-arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactLeft  onClick={prevSlide} size={30}/>
      </div>

      {/* right-arrow */}
      <div  className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactRight  onClick={nextSlide} size={30} />
      </div>
    </div>


    <CategoriesItemListContainer />

    </>
  )
}

export default Inicio
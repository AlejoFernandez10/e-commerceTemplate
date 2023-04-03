import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContextProvider';

import withReactContent from 'sweetalert2-react-content';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js'

const MySwal = withReactContent(swal)


const ItemCount = ({id, precio, imagen, nombre, categoria}) => {
    
  const [cart, setCart] = useContext(CartContext)
  const [count, setCount ] = useState(1);
  const [local, setLocal] = useState(``)

   
  const sumarCantidad = ()=>{

    if(count < 5 ){
      
      setCount(count + 1)
    }
  }

  const resCantidad = ()=>{
    if(count > 0){
      setCount(count - 1)
    }
  }


  const addToCart = ()=>{

    setCart((currentItems)=>{
      
      const isItem = currentItems.find((item) => item.id === id)

      

      if(isItem){

        return currentItems.map((item)=>{

          const newLocal = localStorage.setItem(`iId_${item.id}`, item.id)

          setLocal(newLocal)
          
          
          if(item.id === id){
            
            return{
              ... item,
               cantidad: item.cantidad + count,
               
               
              }
             
          }
          else{
            return item
          }
        });
      }else{
        return [... currentItems, {id, cantidad: count, precio, imagen, nombre, categoria}]
      }

    })

  }

  


  const prodAgregado= ()=>{
    MySwal.fire({
      position: 'center',
      icon: 'success',
      title: 'Product agregado!',
      showConfirmButton: false,
      timer: 1000
    })
  }


  return (
    <div className='flex gap-2'>
    <div className='w-[6rem] h-[2.8rem] flex justify-between items-center border border-pink-600 rounded-[5px] '>
        <button type='button' onClick={resCantidad} className="btn text-[35px] px-2 pb-[5px] text-pink-600"   >-</button>
        <span>{count}</span>
        <button  type='button' onClick={sumarCantidad}  className="btn text-[27px] px-2 text-pink-600"> + </button>
    
    </div>
    <div
     onClick={()=> addToCart()  & prodAgregado()}
     className="block cursor-pointer rounded bg-transparent border border-pink-600 px-5 py-3 text-xs font-medium text-black transition duration-200 hover:bg-pink-600 hover:text-white"
   >
     Add to Cart
   </div>
    </div>
  )
}

export default ItemCount
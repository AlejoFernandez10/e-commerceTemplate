import React from 'react'
import { useState } from 'react'
const ItemCount = () => {

    const [count, setCount ] = useState(1);



    

    



  return (
    <div className='w-[6rem] h-[2.5rem] flex justify-between items-center border border-pink-600 rounded-[5px] '>
        <button type='button' onClick={()=>{if(count > 1){setCount(count - 1)}}} className="btn text-[35px] px-2 pb-[5px] text-pink-600"   >-</button>
        <span>{count}</span>
        <button  type='button' onClick={()=>{if(count < 5){setCount(count + 1)}}}  className="btn text-[27px] px-2 text-pink-600"> + </button>
    </div>
  )
}

export default ItemCount
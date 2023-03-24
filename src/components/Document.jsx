import React from 'react'

import {useState, useEffect} from 'react'

import { useParams } from 'react-router-dom'

import {doc, getDoc, getFirestore} from 'firebase/firestore'



const Document = () => {

    const { id } = useParams()
    const [producto , setProducto] = useState([])


    useEffect(()=>{
      const db = getFirestore()

      const item = doc(db, "productos", `${id}` )

      getDoc(item).then((snapshot)=>{

        if(snapshot.exists()){
          const docs = snapshot.data();
          setProducto(docs)

        }

      })

    }, [])
    

  return (
    
    <div>

      {
        <div key={producto.id}>

            <h5>{producto.nombre}</h5>
            <p>{producto.descripcion}</p>
            <span>{producto.categoria}</span>
            <span>{producto.precio}</span>   


        </div>
      }
    </div>
  )
}

export default Document
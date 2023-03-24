import React from 'react'

import { useState, useEffect } from 'react'
import {collection, doc, getDocs, getFirestore} from 'firebase/firestore'





const Collections = () => {


    const [productos, setProductos] = useState([])

    useEffect(()=>{

        const db = getFirestore();

        const prodsCollection = collection(db, "productos");

        getDocs(prodsCollection)
        .then((snapshot) =>{
            const docs = snapshot.docs.map((doc )=> doc.data(), doc.id)
            setProductos(docs)
        })

    }, [])


  return (
    <div>

        {productos.map((prod)=>{
            <div>
                <h4>{prod.nombre} </h4>
                <img srcSet={prod.imagen} alt={prod.nombre} />
                <span>{prod.precio} </span>
            </div>
        })}
    </div>
  )
}

export default Collections
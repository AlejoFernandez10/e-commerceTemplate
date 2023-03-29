import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './itemListContainer.css'
import ItemList from './ItemList'

import {collection, getDocs, getFirestore } from 'firebase/firestore'



import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const { categoria } = useParams(); 

  const [loader, setLoader] = useState(true)


  useEffect(()=>{
    
    const db = getFirestore()
    const itemsCollection = collection(db, "productos");
    
    getDocs(itemsCollection).then((snapshot) => {

      const docs = snapshot.docs.map((doc)=> ({
        ...doc.data(),
        id: doc.id
      }))
      setProductos(docs)

      setLoader(false)
        
    })

    


  }, []) 
    

    const catFilter = productos.filter((producto) => producto.categoria === categoria)



    if(loader){
      return(
        <div className='h-[50vh] w-full flex flex-col justify-center items-center'>
          <span className='text-[30px] mt-[100px] w-12 h-12  border-4 border-purple-500 border-b-transparent rounded-[50%] inline-block box-border animate-spin'>
            
            </span>     
        </div>
      )
    }else{

      return (
        <div>
          <span id='catalogo'></span>
          <div className="banner  w-[full] h-[40vh] bg-teal-100 flex justify-center items-center"><p className='text-[40px] text-gray-50'>Catálogo</p></div>
          
          <div className=" min-h-[100vh] max-w-[1000px] w-full m-auto  flex flex-col justify-start items-center ">
  
           
  
            <div className="  flex flex-col mt-[80px] w-full justify-between items-center  sm:flex-row">

              <p className='text-sm text-center mb-8 pl-2  sm:mb-0'>Mostrando 1-20 de 100 resultados</p>

              {/* ------------- DROPDOWN ------------------*/}
            
            <div className='flex gap-1'>

            <Menu as="div" className="relative inline-block text-left   ">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-[5px] sm:px-5 sm:py-2 md:px-6 md:py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Categorias
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </Menu.Button>
        </div>
  
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to={`/catalogo/${`women`}`}
                    
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Women
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to={`/catalogo/${`men`}`}
                    
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Men
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to={`/catalogo/${`jewelery`}`}
                    
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Jewelery
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to={`/catalogo/${`electronics`}`}
                    
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Electronics
                  </Link>
                )}
              </Menu.Item>
              
            </div>
          </Menu.Items>
        </Transition>
            
            </Menu>


      {/* FILTRO POR COLOR */}
      
      <Menu as="div" className="relative inline-block text-left   ">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-[5px] sm:px-5 sm:py-2 md:px-6 md:py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Color
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </Menu.Button>
        </div>
  
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to={`/catalogo/${`women`}`}
                    
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Azul
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to={`/catalogo/${`men`}`}
                    
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Rojo
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to={`/catalogo/${`jewelery`}`}
                    
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    verde
                  </Link>
                )}
              </Menu.Item>
              
              
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* Filtro por PRECIO */}

      <Menu as="div" className="relative inline-block text-left   ">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-[5px] sm:px-5 sm:py-2 md:px-6 md:py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Precio
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </Menu.Button>
        </div>
  
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to={`/catalogo/${`women`}`}
                    
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    0-200
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to={`/catalogo/${`men`}`}
                    
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    200-400
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to={`/catalogo/${`jewelery`}`}
                    
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    +500
                  </Link>
                )}
              </Menu.Item>
              
              
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

            </div>
            
          </div>
  
            { categoria ? <ItemList prods={catFilter} /> : <ItemList prods={productos} />}
            
          </div>
          </div>
        )

    }
    
}

export default ItemListContainer
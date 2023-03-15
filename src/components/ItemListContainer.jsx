import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../styles/itemListContainer.css'
import ItemList from './ItemList'



import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const { category } = useParams(); 


    useEffect(()=>{
      const getData = async()=>{
        const response = await fetch('https://fakestoreapi.com/products')
    
    
        const responseJSON = await response.json()
    
        setProductos(responseJSON)       
      }
       
      getData()
     
    },[])
    

    const catFilter = productos.filter((prod) => prod.category == category)



    return (
      <div>
        <span id='catalogo'></span>
        <div className="banner  w-[full] h-[40vh] bg-teal-100 flex justify-center items-center"><p className='text-[40px] text-gray-50'>Catálogo</p></div>
        <div className="bg-white min-h-[100vh] max-w-[1000px] m-auto  flex flex-col justify-start items-center ">

         {/* ------------- DROPDOWN ------------------*/}

          <div className="  flex mt-[80px] w-full justify-end pr-[60px]">
          
          <Menu as="div" className="relative inline-block text-left  ">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
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
                <Link to={`/catalogo/${`women's clothing`}`}
                  
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
                <Link to={`/catalogo/${`men's clothing`}`}
                  
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

          </div>

          { category ? <ItemList productos={catFilter}/> : <ItemList productos={productos}/>}
          
        </div>
        </div>
      )
}

export default ItemListContainer
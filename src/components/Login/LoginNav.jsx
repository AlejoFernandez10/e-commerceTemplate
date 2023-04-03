import React, { useState } from 'react'


import {Transition} from '@headlessui/react'

import { Navigate } from 'react-router-dom'

import { UserAuth } from '../../context/CartContextProvider'

import { Fragment, useRef} from 'react'
import { Dialog} from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import { Link } from 'react-router-dom'




  

const LoginNav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const [open, setOpen] = useState(false)
  

  const cancelButtonRef = useRef(null);


  const {logout} = UserAuth()

  const handleLogout = async ()=>{

    try{
      await logout()
      Navigate('/')
    } catch(e){
      console.log(e.message)
    }
  }  

  
  

    return (
      <>
          
          <div className="dropdown-menu relative">
  
        <button onClick={() => setIsOpen(!isOpen)}>
  
          {selectedOption || <span 
                
                className="block border-b-4 border-transparent pb-4 px-5 pt-6  hover:border-pink-500"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
  
                <span className="sr-only"> Account </span>
              </span>} 
  
        </button>
        {isOpen && (
          <ul className='absolute rounded bg-gray-50 h-[5rem] w-[11rem] right-0 flex flex-col justify-center'>
  
              <li className='text-sm px-3 h-[50%] flex items-center hover:bg-gray-100'>
  
              <Link to={'/historialdecompras'} >
                 Historial de compras
              </Link>
  
              </li>
              
              <li className='text-sm px-3 w-full h-[50%] flex items-center hover:bg-gray-100 '>
                
                <button onClick={()=> setOpen(true)}>
                  Cerrar sesion
  
                  <Transition.Root show={open} as={Fragment}>
                 <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                   <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0"
                     enterTo="opacity-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                   >
                     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                   </Transition.Child>
  
                   <div className="fixed inset-0 z-10 overflow-y-auto">
                     <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                       <Transition.Child
                         as={Fragment}
                         enter="ease-out duration-300"
                         enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                         enterTo="opacity-100 translate-y-0 sm:scale-100"
                         leave="ease-in duration-200"
                         leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                         leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                       >
                         <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                           <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                             <div className="sm:flex sm:items-start">
                               <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                 <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                               </div>
                               <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                 <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                   Cerrar Sesion
                                 </Dialog.Title>
                                 <div className="mt-2">
                                   <p className="text-sm text-gray-500">
                                   Quieres cerrar sesion? Si lo haces no podras acceder a tu historial de compras
                                   </p>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                             <button
                               type="button"
                               className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                               onClick={() =>  handleLogout()}
                             >
                               Cerrar Sesion
                             </button>
                             <button
                               type="button"
                               className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                               onClick={()=> setOpen(false)}
                               ref={cancelButtonRef}
                             >
                               Cancelar
                             </button>
                           </div>
                         </Dialog.Panel>
                       </Transition.Child>
                     </div>
                   </div>
                 </Dialog>
              </Transition.Root>
                </button>
               
              </li>
            
          </ul>
        )}
      </div>
      </>
    )

  

  
}

export default LoginNav





import React from 'react'

import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContextProvider'
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js'

const MySwal = withReactContent(swal)

const CheckOut = () => {


    const [cart, setCart] = useContext(CartContext)

    
    
    
    

    let precioTotal = 0;
    
      cart.forEach(producto => {
          precioTotal += ( producto.precio * producto.cantidad)
      });
    


      const navigate = useNavigate()


    const pagoRealizado= ()=>{
        MySwal.fire({
          position: 'center',
          icon: 'success',
          title: 'Compra exitosa!',
          text:"Disfrute su producto!",
          showConfirmButton: false,
          timer:1300

        })
        setTimeout(()=>{
            navigate('/')
            setCart([])
        },1500)
        
      }




    
  return (

                    <section className='pt-[50px]'> 
                      <h1 className="sr-only">Checkout</h1>

                      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                        <div className="bg-gray-50 py-12 md:py-24">
                          <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                            <div className="flex items-center gap-4">
                              <span className="h-10 w-10 rounded-full bg-pink-500"></span>

                              <h2 className="text-2xl text-gray-700">Resumen:</h2>
                            </div>

                            <div>
                              <p className="text-2xl font-medium tracking-tight text-gray-900">
                                ${Math.round(precioTotal)}
                              </p>

                              <p className="mt-1 text-sm text-gray-600">Por la compra de : </p>
                            </div>

                            <div>
                              <div className="flow-root">
                                <ul className="-my-4 divide-y divide-gray-100">
                                  
                                    {cart.map((item)=>{

                                        return(
                                            <li className="flex items-center gap-4 py-4" key={item.id}>
                                        <img
                                        srcSet={item.imagen}
                                        className="h-20 w-16 rounded object-contain"
                                        />

                                        <div>
                                          <h3 className="text-sm text-gray-900">{item.nombre} </h3>

                                          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                            <div>
                                              <dt className="inline">Categoria: </dt>
                                              <dd className="inline"> {item.categoria} </dd>
                                            </div>

                                            <div>
                                              <dt className="inline">Precio:</dt>
                                              <dd className="inline font-semibold">${Math.round(item.precio)} </dd>

                                              <dt className="inline ml-2">Cantidad: </dt>
                                              <dd className="inline "> {item.cantidad} </dd>
                                            </div>
                                          </dl>
                                        </div>
                                  </li>
                                        )
                                    })}
                                 
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white py-12 md:py-24">
                          <div className="mx-auto max-w-lg px-4 lg:px-8">
                            <form className="grid grid-cols-6 gap-4">
                              <div className="col-span-3">
                                <label
                                  htmlFor="FirstName"
                                  className="block text-xs font-medium text-gray-700"
                                >
                                  Nombre
                                </label>

                                <input
                                  type="text"
                                  id="FirstName"
                                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                />
                              </div>

                              <div className="col-span-3">
                                <label
                                  htmlFor="LastName"
                                  className="block text-xs font-medium text-gray-700"
                                >
                                  Apellido
                                </label>

                                <input
                                  type="text"
                                  id="LastName"
                                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6">
                                <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
                                  Correo Electronico
                                </label>

                                <input
                                  type="email"
                                  id="Email"
                                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                />
                              </div>

                              <div className="col-span-6">
                                <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                                  Número de Teléfono
                                </label>

                                <input
                                  type="tel"
                                  id="Phone"
                                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                />
                              </div>

                              <fieldset className="col-span-6">
                                <legend className="block text-sm font-medium text-gray-700">
                                  Detalles de Tarjeta
                                </legend>

                                <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                  <div>
                                    <label htmlFor="CardNumber" className="sr-only"> Número de tarjeta </label>

                                    <input
                                      type="text"
                                      id="CardNumber"
                                      placeholder="Card Number"
                                      className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                                    />
                                  </div>

                                  <div className="flex -space-x-px">
                                    <div className="flex-1">
                                      <label htmlFor="CardExpiry" className="sr-only"> Fecha de Expiración </label>

                                      <input
                                        type="text"
                                        id="CardExpiry"
                                        placeholder="Expiry Date"
                                        className="relative w-full rounded-bl-md border-gray-200 focus:z-10 sm:text-sm"
                                      />
                                    </div>

                                    <div className="flex-1">
                                      <label htmlFor="CardCVC" className="sr-only"> Card CVC </label>

                                      <input
                                        type="text"
                                        id="CardCVC"
                                        placeholder="CVC"
                                        className="relative w-full rounded-br-md border-gray-200 focus:z-10 sm:text-sm"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </fieldset>

                              <fieldset className="col-span-6">
                                <legend className="block text-sm font-medium text-gray-700">
                                  País y código Postal
                                </legend>

                                <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                  <div>
                                    <label htmlFor="Country" className="sr-only">Pais</label>

                                    <select
                                      id="Country"
                                      className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                                    >
                                      <option>Argentina</option>
                                      <option>Chile</option>
                                      <option>Colombia</option>
                                      <option>Paraguay</option>
                                      <option>Bolivia</option>
                                      <option>Uruguay</option>
                                    </select>
                                  </div>

                                  <div>
                                    <label className="sr-only" htmlFor="PostalCode"> Código Postal </label>

                                    <input
                                      type="text"
                                      id="PostalCode"
                                      placeholder="ZIP/Post Code"
                                      className="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
                                    />
                                  </div>
                                </div>
                              </fieldset>

                              <div className="col-span-6">
                                <button onClick={(e)=> e.preventDefault() & pagoRealizado() }
                                  className="block w-full rounded-md bg-black p-2.5 text-sm text-center text-white transition hover:shadow-lg"
                                >
                                  Pagar
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </section>

      )
    }
    
    export default CheckOut
import React from 'react'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MasVendidos = () => {


  return (



    <section  className='mt-[100px] bg-gray-100'>
                    <motion.div initial={{y:200}} whileInView={{y:0}} transition={{duration:.5}} viewport={{once:true}}  className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:items-stretch">
                        <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8 shadow-xl ">
                          <div className="max-w-md mx-auto  ">
                            <header>
                              <h2 className="text-xl font-semibold text-gray-900 sm:text-3xl pl-[10px] border-l-[4px] border-purple-500 md:text-xxl md:text-left ">Más Vendidos</h2>

                              <p className="mt-4 text-gray-500 md:text-sm lg:text-[17px]">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                                rerum 
                              </p>
                            </header>

                            <Link
                              to={'/catalogo'}
                              className="inline-block px-12 py-3 mt-8 text-sm font-medium text-black  border border-purple-500 rounded transition duration-150 hover:bg-purple-500 hover:text-white"
                            >
                              Comprar
                            </Link>
                          </div>
                        </div>
                        
                        
                        <div className="md:col-span-2 lg:py-8">
                          <ul className="grid  grid-cols-1 sm:grid-cols-3  gap-4 " id='masVendidosUl'>

                         
                          <li>
                              <Link to={'/catalogo'} className="block group">
                              <div className='w-full overflow-hidden'>
                                <img
                                  src=" https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                                  alt=""
                                  className="object-cover w-full rounded aspect-square transition duration-150  scale-100 hover:scale-110"
                                />

                                </div>

                                <div className="relative bg-white  p-2 pt-3">
                                    <h3
                                      className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4 sm:text-sm "
                                    >
                                      Zapatillas Edicion Limitada
                                    </h3>

                                    <div className="mt-1.5 flex items-center justify-between text-gray-900 ">
                                      <p className="tracking-wide text-sm font-semibold ">$189.99</p>

                                      <p className="text-xs uppercase tracking-wide text-purple-600">3 Colores</p>
                                    </div>
                                  </div>
                              </Link>
                            </li>
                            
                            <li>
                              <Link to={'/catalogo'}  className="block group">
                              <div className='w-full overflow-hidden'>
                                <img
                                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                                  alt=""
                                  className="object-cover w-full rounded aspect-square transition duration-150  scale-100 hover:scale-110"
                                />

                                </div>

                                <div className="relative bg-white p-2 pt-3">
                                    <h3
                                      className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4 sm:text-sm"
                                    >
                                      Sport Watch
                                    </h3>

                                    <div className="mt-1.5 flex items-center justify-between text-gray-900">
                                      <p className="tracking-wide text-sm font-semibold ">$89.99</p>

                                      <p className="text-xs uppercase tracking-wide text-purple-600">3 Colores</p>
                                    </div>
                                  </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                </section>
  )
}

export default MasVendidos
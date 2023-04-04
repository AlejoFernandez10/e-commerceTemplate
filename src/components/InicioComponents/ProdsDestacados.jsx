import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


import {FaShippingFast } from 'react-icons/fa'
import {BiSupport } from 'react-icons/bi'
import {RiRefund2Line} from 'react-icons/ri'
import {GiReturnArrow} from 'react-icons/gi'

const ProdsDestacados = () => {


  return (

    <section   className='mt-[50px] bg-gray-100'>

                    <motion.div initial={{y:200}} whileInView={{y:0}} transition={{duration:.2}} viewport={{once:true}} className= "max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-1 gap-4 md:flex flex-col lg:items-stretch">


                        <div className="m-auto grid p-6 max-w-[1050px] w-full bg-gray-100 rounded place-content-start sm:p-8 sm:pt-2 sm:pb-0  ">
                          <div className="w-full   ">
                            <header>
                              <h2 className="text-xl font-semibold  text-gray-900 sm:text-3xl pl-[10px]  border-l-[4px] border-pink-500 md:text-xxl  ">Productos Destacados</h2>

                              <p className="mt-4 text-gray-500 md:text-sm lg:text-[17px]">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                                rerum 
                              </p>
                            </header>

                            
                          </div>
                        </div>
                        
                        
                        <div className="md:col-span-2 lg:py-8 flex flex-col items-center">
                          <ul className="grid  grid-cols-1 sm:grid-cols-2 w-full max-w-[1000px]  gap-4   m-auto md:gap-8" id='masVendidosUl'>

                         
                          <li>
                          <Link to={"/catalogo"} className="group block">

                                  <div className="relative w-full min-h-[300px]  md:min-h-[400px] ">
                                    <img
                                      src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                      alt=""
                                      className="absolute inset-0 h-full w-full object-cover opacity-100 rounded group-hover:opacity-0"
                                    />

                                    <img
                                      src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                      alt=""
                                      className="absolute inset-0 h-full w-full object-cover opacity-0 rounded group-hover:opacity-100"
                                    />
                                  </div>

                                  <div className="mt-3 p-2 pt-0">
                                    <h3
                                      className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                    >
                                      Small Headphones
                                    </h3>

                                    <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </p>
                                    <div className="mt-1.5 flex items-center justify-between text-gray-900 ">
                                      <p className="tracking-wide text-sm font-semibold ">$189.99</p>

                                      <p className="text-xs uppercase tracking-wide text-pink-600">3 Colores</p>
                                    </div>
                                  </div>
                                </Link>
                            </li>
                            
                            <li className='pt-20 sm:pt-[130px] '>

                              <Link to={"/catalogo"} className="group block">
                                  <div className="relative min-h-[300px] md:min-h-[400px] ">
                                    <img
                                      src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                                      alt=""
                                      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 rounded"
                                    />

                                    <img
                                      src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                                      alt=""
                                      className="absolute inset-0 h-full w-full object-cover opacity-0 rounded group-hover:opacity-100"
                                    />
                                  </div>

                                  <div className="mt-3 p-2 pt-0">
                                    <h3
                                      className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                    >
                                      Small Headphones
                                    </h3>

                                    <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </p>
                                    <div className="mt-1.5 flex items-center justify-between text-gray-900 ">
                                      <p className="tracking-wide text-sm font-semibold ">$109.99</p>

                                      <p className="text-xs uppercase tracking-wide text-pink-600">3 Colores</p>
                                    </div>
                                  </div>
                                </Link>

                            </li>
                          </ul>
                          <Link
                              to={'/catalogo'}
                              className="inline-block  px-12 py-3 mt-20 text-sm font-medium  text-black  border border-pink-500 rounded transition duration-150 hover:bg-pink-500 hover:text-white"
                            >
                              Comprar
                            </Link>
                        </div>

                        
                      </div>
                      
                    </motion.div>

                    <div className='w-full min-h-[10vh] flex flex-wrap max-w-[1200px] m-auto  justify-between p-3 mt-[50px] sm:mt-0'>

                    <div className='text-gray-500 flex items-center'><FaShippingFast size={50} color={"rgb(219,39,119)"} opacity={"0.6"} className='mr-3'/> <p>Delivery rápido y seguro</p>       </div>
                    <div className='text-gray-500 flex items-center'><GiReturnArrow size={50} color={"rgb(219,39,119)"} opacity={"0.6"} className='mr-3 '/> <p className='mr-3'>Devoluciones en 24hs</p> </div>
                    <div className='text-gray-500 flex items-center'><RiRefund2Line size={50} color={"rgb(219,39,119)"} opacity={"0.6"} className='mr-3'/> <p>Rembolsos</p>  </div>
                    <div className='text-gray-500 flex items-center'><BiSupport size={50} color={"rgb(219,39,119)"} opacity={"0.6"} className='mr-3'/> <p>Soporte de calidad</p> </div>

                    </div>

                    
                </section>
  )
}

export default ProdsDestacados
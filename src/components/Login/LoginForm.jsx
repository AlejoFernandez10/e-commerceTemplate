import React, { useEffect } from 'react'


import { LockClosedIcon } from '@heroicons/react/20/solid'
import formImg from '../../assets/formImg.webp'
import { Link, useNavigate } from 'react-router-dom'

import { UserAuth } from '../../context/CartContextProvider'

import { useState } from 'react'


import withReactContent from 'sweetalert2-react-content';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js'

const MySwal = withReactContent(swal)


export default function LoginForm() {


  const [loader, setLoader ] = useState(true);

  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("")
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const {signIn} = UserAuth()


    const handleSubmit = async (e)=>{
      e.preventDefault();

      setError('');

      try{
        await signIn(email, password)        
        
      } catch(e){
        setError(e.message)
        console.log(e.messsage)
      }

    }


  setTimeout(()=>{

    setLoader(false)

  },800)


 
  const alerta = ()=>{
    MySwal.fire({
      position: 'center',
      icon: 'success',
      title: 'Sesion iniciada!',
      text:"Redirigiendo para iniciar sesion...",
      showConfirmButton: false,
      timer: 2000
    })         

    setTimeout(()=>{
            
      navigate('/')
    },2000)
  }
  



  if(loader){
    return(
      <div className='h-[50vh] w-full flex flex-col justify-center items-center'>
        <span className='text-[30px] mt-[100px] w-12 h-12  border-4 border-purple-500 border-b-transparent rounded-[50%] inline-block box-border animate-spin'>
          
          </span>     
      </div>
    )

  }else{

    return (
      <div className='w-full flex flex-col  '>

      <section className="relative flex flex-wrap lg:h-screen lg:items-center  justify-center pt-10 w-full m-auto  ">

      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 " >

      <div  className='mb-4'>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          </div>
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Iniciar Sesión</h1>
    
          <p className="mt-4 text-gray-500">
            Inicia sesion para tener tus historial de compras disponible
          </p>
        </div>
    
        <form onSubmit={handleSubmit}  className="mx-auto mt-8 mb-0 max-w-md space-y-4">
          <div>
            
    
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Try: testuser@gmail.com"
                onChange={(e)=> setEmail(e.target.value)}
                autoComplete="off"
              />
    
              <span
                className="absolute inset-y-0 right-0 grid place-content-center px-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>
    
          <div>
            
    
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Try: testuser"
                onChange={(e)=> setPassword(e.target.value)}
                autoComplete="Off"
              />
    
              <span onClick={()=> setBolean(true)}
                className="absolute inset-y-0 right-0 grid place-content-center px-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>
    
          <div className="flex items-center justify-between">

            <p className="text-sm text-gray-500">No tenés cuenta? <Link className="underline text-purple-500"  to={'/signup'}>Crear cuenta</Link>
            </p>
    
            <button onClick={alerta}
              type="submit"
              className="inline-block rounded-lg bg-purple-500 px-5 py-3 text-sm font-medium text-white transition duration-200 hover:bg-purple-400"
            >
              Iniciar Sesion
            </button>
          </div>
        </form>
      </div>
    
      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          srcSet={formImg}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
    </div>
  )

  }
    
  }
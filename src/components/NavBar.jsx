
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CartContext } from '../context/CartContextProvider'
import { useContext } from 'react'
import CartLogo from '../assets/carrito.png'
import { Link } from 'react-router-dom'

import LoginNav from './Login/LoginNav'

import { UserAuth } from '../context/CartContextProvider'



export default function Navbar() {


const  {user, logout}  = UserAuth();

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Catalogo', href: '/catalogo', current: false },
  { name: 'Mis compras', href: `${user ? '/miscompras' : '/login' }`, current: false },
  { name: 'Nosotros', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}






    const [cart, setCart] = useContext(CartContext);

    



    const cantidad = cart.reduce((acumulador, actual) => {
      return acumulador + actual.cantidad;
    }, 0);




  return (
    <header className='w-full min-h-[30px] fixed z-[100]'>
    <Disclosure as="nav" className="bg-gray-50 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-pink-50  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center ml-[20%] justify-start sm:items-stretch sm:justify-start sm:ml-0">
                
                <Link to={'/'}>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="inline h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:inline"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                </Link>
                
                <div className="hidden sm:ml-6 sm:block w-full "> 
                  <div className="flex justify-center space-x-4 gap-2 ml-8">

                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-700 transition duration-200 scale-100  hover:scale-105 hover:text-pink-500',
                          '  mt-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              
              
              <Link to={'/cart'} className='flex'><img srcSet={CartLogo} alt="CartImg" /><span className=' h-[20px] w-[20px] text-center mb-3 text-white bg-pink-500 m-auto rounded-[50%]  text-[14px]'>{cantidad} </span></Link> 
                      

                 
                
                { user ? <LoginNav /> : <Link to={"/login"} className='border-[1px] border-purple-500 text-gray-700 px-3 py-1 ml-4 rounded-[5px] text-[14px] transition duration-200  hover:text-white hover:bg-purple-500'>Ingresar</Link>         }
                
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">

              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-pink-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>

            
          </Disclosure.Panel>
          
        </>
      )}
    </Disclosure>
    </header>
  )
}




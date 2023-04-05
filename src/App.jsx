import { CartContextProvider } from './context/CartContextProvider';



import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemList/ItemListContainer';

import './App.css';
import Inicio from './components/InicioComponents/Inicio';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import Document from './components/Document';
import LoginForm from './components/Login/LoginForm';
import Signup from './components/Login/Signup';
import Footer from './components/Footer';
import CheckOut from './components/Cart/CheckOut';

import HistorialCompras from './components/Account/HistorialCompras';

import ScrollToTop from './components/ScrollToTop';


function App() {

  const [loader, setloader] = useState(true);

  setTimeout(()=>{
    setloader(false)
  }, 2000)


  if(loader){
    return(
      <section className='h-[100vh] w-full flex items-center flex-col justify-center'>

        <div className='flex'>
        <img
            className="inline h-8 w-auto "
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
        />

        <p className=' text-3xl ml-4 mb-5 text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400'>Tu E-commerce</p>
        </div>
        <span className="loader w-[80%] max-w-[400px]"></span>
      </section>
      
    )
  }else{
    return (
    
   
      <CartContextProvider>
  
      <BrowserRouter >

      <ScrollToTop />

      
  
        <div className="App  ">
        
        <NavBar />
        
        
        <Routes>

          
  
            <Route exact path={'/'} element={<Inicio /> }></Route>
  
            <Route exact path={'/catalogo'} element={<ItemListContainer /> }></Route>
            
            <Route exact path={'/catalogo/:categoria'} element={<ItemListContainer /> }></Route>
  
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
  
            <Route exact path="/cart" element={<Cart />} />
  
            <Route exact path="/checkout" element={ <CheckOut /> } />
  
            <Route exact path={"/login"} element={<LoginForm /> } />
  
            <Route exact path={'/signup'} element={<Signup />} />

            <Route exact path={'/historialdecompras'} element={ <HistorialCompras />} />

            
            
        </Routes>
  
        
          
        </div>
        <Footer />
        
        <Document />
  
       
        </BrowserRouter>
      </CartContextProvider>
      
    )

  }
  
  
  
}

export default App

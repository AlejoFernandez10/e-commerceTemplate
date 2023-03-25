import { CartContextProvider } from './context/CartContextProvider';
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemList/ItemListContainer';

import './App.css';
import Inicio from './components/InicioComponents/Inicio';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Cart from './components/Cart/Cart';

import Document from './components/Document';
import LoginForm from './components/Login/LoginForm';

function App() {
  
  return (

    <CartContextProvider>

    <BrowserRouter>

      <div className="App  ">
      
      <NavBar />
      
      
      <Routes>

          <Route exact path={'/'} element={<Inicio /> }></Route>
          <Route exact path={'/catalogo'} element={<ItemListContainer /> }></Route>
          
          <Route exact path={'/catalogo/:categoria'} element={<ItemListContainer /> }></Route>

          <Route exact path="/item/:id" element={<ItemDetailContainer />} />

          <Route exact path="/cart" element={<Cart />} />

          <Route exact path={"/login"} element={<LoginForm /> } />
          
      </Routes>

      
        
      </div>
      
      <Document />

      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App

import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'
import './App.css';
import Inicio from './components/Inicio';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';

function App() {
  
  return (

    <BrowserRouter>

      <div className="App ">
      
      <NavBar />

      <Routes>

          <Route exact path={'/'} element={<Inicio /> }></Route>
          <Route exact path={'/catalogo'} element={<ItemListContainer /> }></Route>
          
          <Route exact path={'/catalogo/:category'} element={<ItemListContainer /> }></Route>

          <Route exact path="/item/:id" element={<ItemDetailContainer />} />

          <Route exact path="/cart" element={<Cart />} />
          
      </Routes>

      
        
      </div>

    </BrowserRouter>
  )
}

export default App

import './main.css';
import Navbar from './Componentes/Navbar';
import ItemListContainer from './Componentes/Productos/ItemListContainer';
import ItemDetailContainer from './Componentes/Productos/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Nosotros from './Componentes/Nosotros';
import Contacto from "./Componentes/Contacto";
import { CartProvider } from './Context/CardContext';
import Carrito from './Componentes/Carito';
import Inicio from './Componentes/Inicio/Inicio';
import Footer from './Componentes/Footer';

function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          {/* Barra */}
          <Navbar />
          {/* Main */}
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            {/* <Route path="/productos/:categoria" element={<ItemListContainer />} /> */}
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />}/>
          </Routes>
          {/* Footer */}
          <Footer></Footer>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
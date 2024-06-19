import React, { useContext } from 'react'
import { CartContext }       from '../Context/CardContext';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);
  
    const handleEliminarProducto = (idProducto) => {
      eliminarProducto(idProducto);
    };
  
    return (
      <div className="container">
        {carrito.length > 0 ? (
          <>
            {carrito.map((producto) => (
              <div key={producto.id}>
                <br />
                <h5>{producto.titulo}</h5>
                <p>Precio unit: ${producto.precio}</p>
                <p>Precio total: ${producto.precio * producto.cantidad}</p>
                <p>Cant: {producto.cantidad}</p>
                <button onClick={() => handleEliminarProducto(producto.id)}>Eliminar</button>
                <br />
              </div>
            ))}
            <h2>Precio total: ${precioTotal()}</h2>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
          </>
        ) : (
          <h2>El carrito está vacío</h2>
        )}
      </div>
    );
  };
  
  export default Carrito;

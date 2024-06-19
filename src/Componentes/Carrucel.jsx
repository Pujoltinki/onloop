// src/Componentes/Carrucel.jsx
import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Carrucel = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        // Mezclar los datos
        const shuffledData = data.sort(() => 0.5 - Math.random());
        // Seleccionar los primeros 8 elementos únicos
        const selectedItems = [];
        const ids = new Set();

        for (let item of shuffledData) {
          if (selectedItems.length === 8) break;
          if (!ids.has(item.id)) {
            selectedItems.push(item);
            ids.add(item.id);
          }
        }

        setItems(selectedItems);
      })
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  return (
    <div>
      <Carousel responsive={responsive}>
        {items.map((item) => (
          <div key={item.id} style={{ padding: '10px' }}>
            <img src={item.imagen} alt={item.titulo} style={{ width: '100%', height: 'auto' }} />
            <p style={{ textAlign: 'center' }}>{item.titulo}</p>
            <p style={{ textAlign: 'center' }}>${item.precio}</p>
            <div style={{ textAlign: 'center' }}>
              <Link className="ver-mas" to={`/item/${item.id}`}>Ver más</Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carrucel;

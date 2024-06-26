import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const toCapital = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Item = ({ producto }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: 'rgba(238, 238, 238)' }}>
      <CardMedia
        component="img"
        image={producto.imagen}
        alt={`image of ${producto.titulo}`}
        sx={{ height: '10rem', objectFit: 'contain' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '12rem' }}>
        <div>
          <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            {producto.titulo}
          </Typography>
          <Typography>Precio: ${producto.precio}</Typography>
          <Typography>Categoría: {toCapital(producto.categoria)}</Typography>
        </div>
        <Button
          component={Link}
          to={`/item/${producto.id}`}
          variant="contained"
          color="primary" // Establecer el color de fondo del botón
          sx={{ textAlign: 'center', display: 'block', marginTop: '0.5rem', width: '100%' }} // Asegurar ancho completo y estilos adicionales
        >
          Agregar al carrito
        </Button>
      </CardContent>
    </Card>
  );
};

export default Item;

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const toCapital = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatPrice = (price) => {
  return price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
};

const Item = ({ producto }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        backgroundColor: 'rgba(238, 238, 238)',
        height: '100%',
        padding: '1rem',
        '@media (max-width: 599px)': {
          padding: '0.5rem',
        },
      }}
    >
      <CardMedia
        component="img"
        image={producto.imagen}
        alt={`image of ${producto.titulo}`}
        sx={{
          height: '180px',
          objectFit: 'contain',
          '@media (max-width: 599px)': {
            height: '120px',
          },
        }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '1rem 0',
          '@media (max-width: 599px)': {
            padding: '0.5rem 0',
          },
        }}
      >
        <div>
          <Typography
            variant="h6"
            component="h4"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: '1.25rem',
              '@media (max-width: 599px)': {
                fontSize: '1rem',
              },
            }}
          >
            {producto.titulo}
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              '@media (max-width: 599px)': {
                fontSize: '0.875rem',
              },
            }}
          >
            Precio: {formatPrice(producto.precio)}
          </Typography>
          <Typography
            sx={{
              fontSize: '0.875rem',
              '@media (max-width: 599px)': {
                fontSize: '0.75rem',
              },
            }}
          >
            Categoría: {toCapital(producto.categoria)}
          </Typography>
        </div>
        <Button
          component={Link}
          to={`/item/${producto.id}`}
          variant="contained"
          color="primary"
          sx={{
            textAlign: 'center',
            display: 'block',
            marginTop: '0.5rem',
            width: '100%',
            padding: '0.5rem',
            '@media (max-width: 599px)': {
              padding: '0.25rem',
              fontSize: '0.875rem',
            },
          }}
        >
          Agregar al carrito
        </Button>
      </CardContent>
    </Card>
  );
};

export default Item;

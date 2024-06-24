import React from 'react';
import Item from './Item';
import { Grid } from '@mui/material';

const ItemList = ({ productos }) => {
  return (
    <Grid container spacing={2}>
      {productos.map((producto) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
          <Item producto={producto} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;

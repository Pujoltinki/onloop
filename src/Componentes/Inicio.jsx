import React from 'react';
import Banner from './Banner';
import { Grid, Typography } from '@mui/material';
import Carrucel from './Carrucel';
import MarcasInicio from './MarcasInicio';
import ForoInicio from './ForoInicio';

function Inicio() {
  return (
    <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid item xs={12}>
        <Banner />
      </Grid>
      <Grid item xs={12}>
      <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h3" component="h3" style={{ marginBottom: '20px', color: '#333' }}>
        Productos
      </Typography>
      <Carrucel />
      <Typography variant="h3" component="h3" style={{ marginTop: '20px', color: '#333' }}>
        Marcas
      </Typography>
      <MarcasInicio></MarcasInicio>
      <Typography variant="h3" component="h3" style={{ marginTop: '20px', color: '#333' }}>
        Blog
      </Typography>
      <ForoInicio></ForoInicio>
    </div>
      </Grid>
    </Grid>
  );
}

export default Inicio;

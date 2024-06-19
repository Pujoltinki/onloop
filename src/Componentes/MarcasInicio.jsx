import React from 'react';
import { IconButton, Stack } from '@mui/material';
import prolockers from '../Image/prolockers.png';
import milockers from '../Image/milockers.png';
import prosillas from '../Image/prosillas.png';
import starimport from '../Image/starimport.png';
import starpet from '../Image/starpet.png';

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
    marginBottom: '50px',
};

const iconButtonStyle = {
    width: '15vw',
    height: '15vw',
    backgroundColor: 'red',
    maxWidth: '200px',
    maxHeight: '200px',
};

const imageStyle = {
    width: '90%',
    height: '90%',
    objectFit: 'contain',
};

const MarcasInicio = () => {
    return (
        <div style={containerStyle}>
            <Stack direction="row" spacing={2}>
                <IconButton aria-label="Prolockers" style={iconButtonStyle}>
                    <img src={prolockers} alt="Prolockers" style={imageStyle} />
                </IconButton>
                <IconButton aria-label="Milockers" style={iconButtonStyle}>
                    <img src={milockers} alt="Milockers" style={imageStyle} />
                </IconButton>
                <IconButton aria-label="Prosillas" style={iconButtonStyle}>
                    <img src={prosillas} alt="Prosillas" style={imageStyle} />
                </IconButton>
                <IconButton aria-label="Starimport" style={iconButtonStyle}>
                    <img src={starimport} alt="Starimport" style={imageStyle} />
                </IconButton>
                <IconButton aria-label="Starpet" style={iconButtonStyle}>
                    <img src={starpet} alt="Starpet" style={imageStyle} />
                </IconButton>
            </Stack>
        </div>
    );
};

export default MarcasInicio;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Carito from './Compra/Carito';
import Onloop from '../Image/onloop.png';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #333;
  color: white;
`;

const LogoButton = styled(Link)`
  height: 95px;
  background-image: url(${Onloop});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
`;

const Menu = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(Button)`
  && {
    color: white;
    margin: 0 1rem;
    text-transform: none;
    font-size: 20px;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setIsOpen(newOpen);
  };

  const toggleMenuDrawer = (newOpen) => () => {
    setMenuOpen(newOpen);
  };

  const Carrito = (
    <Box sx={{ width: 250 }} role="presentation">
      <Grid container style={{ fontSize: '30px', textAlign: 'center', justifyContent: 'space-between', padding: '1rem' }}>
        Tu carro
        <Button onClick={toggleDrawer(false)} sx={{ color: 'black' }}><CloseIcon /></Button>
      </Grid>
      <Divider />
      <Carito toggleDrawer={toggleDrawer} />
    </Box>
  );

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleMenuDrawer(false)}>
      <List>
        {['Productos', 'Nosotros', 'Contacto'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Nav>
      <Hamburger onClick={toggleMenuDrawer(true)}>
        <MenuIcon style={{ color: 'white' }} />
      </Hamburger>
      <LogoButton to="/" />
      <Menu>
        <MenuItem component={Link} to="/productos">Productos</MenuItem>
        <MenuItem component={Link} to="/nosotros">Nosotros</MenuItem>
        <MenuItem component={Link} to="/contacto">Contacto</MenuItem>
      </Menu>
      <IconButton
        onClick={toggleDrawer(true)}
        style={{ color: 'black', padding: 8 }}
        aria-label="Carrito"
      >
        <ShoppingCartIcon style={{ width: '30px', height: '30px' }} />
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        {Carrito}
      </Drawer>
      <Drawer anchor="left" open={menuOpen} onClose={toggleMenuDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Nav>
  );
};

export default Navbar;

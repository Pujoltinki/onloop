import React from 'react';
import styled from 'styled-components';

const AltNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 1000; /* Asegúrate de que esté por encima de otros elementos */
`;

const AlternateNavbar = () => {
  return (
    <AltNav>
      <div>Alternate Navbar</div>
      {/* Aquí puedes agregar más elementos según sea necesario */}
    </AltNav>
  );
};

export default AlternateNavbar;

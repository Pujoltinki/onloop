import React from 'react';
import styled from 'styled-components';
import banner from '../Image/banner.jpg';

const BannerWrapper = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50vh;

  @media (max-width: 768px) {
    height: 30vh;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    height: 40vh;
  }

  @media (min-width: 1200px) {
    height: 50vh;
  }
`;

const Banner = () => {
  return <BannerWrapper />;
};

export default Banner;

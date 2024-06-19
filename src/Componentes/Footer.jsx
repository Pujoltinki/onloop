import { Box, Typography, Link, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box mt={5} py={3} bgcolor="#333" color="white" boxShadow={2} textAlign={isSmallScreen ? 'center' : 'center'}>
      <Typography variant="body2">
        © 2024 OnLoop. All rights reserved.
        {isSmallScreen ? (
          <>
            <br />
            <Link href="/terms" color="inherit">
              Terms of Service
            </Link>
            {' | '}
            <Link href="/privacy" color="inherit">
              Privacy Policy
            </Link>
          </>
        ) : (
          <span style={{ marginLeft: '16px' }}>
            <Link href="/terms" color="inherit">
              Terms of Service
            </Link>
            {' | '}
            <Link href="/privacy" color="inherit">
              Privacy Policy
            </Link>
          </span>
        )}
      </Typography>
      {!isSmallScreen && (
        <Typography variant="body2" style={{ marginTop: '8px' }}>
          Made with ❤️ by OnLoop
        </Typography>
      )}
    </Box>
  );
};

export default Footer;

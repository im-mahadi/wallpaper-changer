import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import img from '../images/app-start.png';

export default function StartPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/prompt');
    }, 3000);
  }, [navigate]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '95vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      id="start-page-container"
    >
      <img src={img} alt="logo" height="300" />
      <Typography
        variant="h4"
        color="white"
        fontWeight="600"
        fontFamily="cursive"
      >
        Desktop Background Changer
      </Typography>
    </Box>
  );
}

import { Backdrop, Button, CircularProgress, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function RandomPage() {
  const baseURI = 'https://api.unsplash.com';
  const clientID = 'vvPLo5xBjrkwuMzR9NfpyIT1QVY-SwDZWuXxLwiWAhE';

  const navigate = useNavigate();
  const [imageUrls, setImageUrls] = useState<string>('');
  const [open, setOpen] = useState(false);

  const fetchImage = async () => {
    const response = await fetch(
      `${baseURI}/photos/random?client_id=${clientID}`
    );
    const data = await response.json();
    setImageUrls(data.urls.regular);
  };

  useEffect(() => {
    if (imageUrls === '') {
      fetchImage();
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [imageUrls]);

  const navigateBack = () => {
    navigate('/prompt');
  };

  return (
    <Box>
      <IconButton onClick={() => navigateBack()}>
        <ArrowBackIcon sx={{ color: 'white' }} />
      </IconButton>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={imageUrls}
          style={{ borderRadius: '10px' }}
          alt="loading..."
          loading="lazy"
          width="900px"
          height="550px"
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <Button variant="contained" onClick={() => fetchImage()}>
            Fetch Image
          </Button>
          <Button variant="contained" color="success">
            Set Wallpaper
          </Button>
        </Box>
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => setOpen(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}

import { Backdrop, Button, CircularProgress, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

export default function SpecificPage() {
  const baseURI = 'https://api.unsplash.com';
  const clientID = 'vvPLo5xBjrkwuMzR9NfpyIT1QVY-SwDZWuXxLwiWAhE';

  const navigate = useNavigate();
  const location = useLocation();
  const [imageUrls, setImageUrls] = useState<string>('');
  const [open, setOpen] = useState(false);

  const fetchImage = useCallback(async () => {
    const randomNumber = Math.floor(Math.random() * 5);
    const randomNumber2 = Math.floor(Math.random() * 10);

    const response = await fetch(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      `${baseURI}/search/photos?orientation=landscape&page=${randomNumber}&query=${location.state.title}&client_id=${clientID}`
    );
    const data = await response.json();
    setImageUrls(data.results[randomNumber2].urls.regular);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  }, [location.state.title]);

  useEffect(() => {
    if (imageUrls === '') {
      fetchImage();
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [imageUrls, fetchImage]);

  return (
    <Box>
      <IconButton
        onClick={() => {
          navigate('/category');
        }}
      >
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

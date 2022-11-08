import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';

const baseURI = 'https://api.unsplash.com';
const clientID = 'vvPLo5xBjrkwuMzR9NfpyIT1QVY-SwDZWuXxLwiWAhE';

export default function HomePage() {
  const [imageUrls, setImageUrls] = useState<string>('');

  const fetchImage = async () => {
    const response = await fetch(
      `${baseURI}/photos/random?client_id=${clientID}`
    );
    const data = await response.json();
    setImageUrls(data.urls.regular);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
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
        alt="demo"
        width="900px"
        height="600px"
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
  );
}

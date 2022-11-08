import { Box } from '@mui/system';
import { IconButton, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import imageType from 'renderer/data/imageType';

export default function CategoryPage() {
  const navigate = useNavigate();

  const handleChoose = (title: string) => {
    navigate(`/specific`, { state: { title } });
  };

  return (
    <>
      <IconButton
        onClick={() => {
          navigate('/prompt');
        }}
      >
        <ArrowBackIcon sx={{ color: 'white' }} />
      </IconButton>

      <Box
        sx={{
          width: '100%',
          height: '100%',
          marginY: '5%',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }}
      >
        <Typography
          variant="h4"
          fontWeight="550"
          sx={{ color: 'white' }}
          textAlign="center"
        >
          Choose a category
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            width: '100%',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {imageType.map((item) => {
            return (
              <Paper
                elevation={10}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '180px',
                  marginBottom: '1rem',
                }}
                key={item.id}
                onClick={() => handleChoose(item.title)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  width="100%"
                  height="150px"
                />
                <Typography fontWeight="520" variant="subtitle1">
                  {item.title}
                </Typography>
              </Paper>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

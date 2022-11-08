import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import wallpaperType from 'renderer/data/wallpaperType';

export default function PromptPage() {
  const navigate = useNavigate();

  const handlePick = (id: number) => {
    if (id === 1) {
      navigate('/random');
    } else {
      navigate('/category');
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '95vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <Typography variant="h4" fontWeight="550" color="white">
        Pick one from them
      </Typography>
      ;
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        {wallpaperType.map((item) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={item.id}>
              <CardActionArea onClick={() => handlePick(item.id)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}

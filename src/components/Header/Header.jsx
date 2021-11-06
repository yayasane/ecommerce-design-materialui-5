import { Box, Typography } from '@mui/material'

const Header = () => {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        background: 'url(images/header.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
      }}
    >
      <Box
        component="div"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: '80vh',
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontFamily: 'cursive', fontWeight: 'bold', color: '#f8bbd0' }}
        >
          Find Your New Favorite
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontFamily: 'cursive', fontWeight: 'bold', color: '#f8bbd0' }}
        >
          Collection at Winter
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontFamily: 'cursive', fontWeight: 'bold', color: '#f8bbd0' }}
        >
          sale 2022
        </Typography>
      </Box>
    </Box>
  )
}

export default Header

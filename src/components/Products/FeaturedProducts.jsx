import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

const FeaturedProducts = () => {
  return (
    <Box sx={{ minHeight: '60vh', mr: 2, ml: 2, mt: -23 }}>
      {/* Featured Product */}
      <Grid sx={{ mb: 4 }} container spacing={2}>
        <Grid
          md={6}
          item
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <Box
            sx={{ width: { xs: '100%', lg: '40%' } }}
            component="img"
            src="images/products/f1.png"
          />
          <Box sx={{ paddingLeft: '10px', mt: { lg: 22, xs: 2 } }}>
            <Typography sx={{ fontWeight: 'bold' }} variant="h6">
              Winter suits 2021
            </Typography>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography
              sx={{ fontWeight: 'bold', color: '#ff4081' }}
              variant="h6"
            >
              $520.000
            </Typography>
            <Button variant="outlined" size="medium">
              Add to cart
            </Button>
          </Box>
        </Grid>
        <Grid
          md={6}
          item
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <Box
            sx={{ width: { xs: '100%', lg: '40%' } }}
            component="img"
            src="images/products/f2.png"
          />
          <Box sx={{ paddingLeft: '10px', mt: { lg: 22, xs: 2 } }}>
            <Typography sx={{ fontWeight: 'bold' }} variant="h6">
              Winter suits 2021
            </Typography>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography
              sx={{ fontWeight: 'bold', color: '#ff4081' }}
              variant="h6"
            >
              $520.000
            </Typography>
            <Button variant="outlined" size="medium">
              Add to cart
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* Product list */}
    </Box>
  )
}

export default FeaturedProducts

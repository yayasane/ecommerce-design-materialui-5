import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const DesktopCategory = () => {
  return (
    <Grid
      container
      spacing={2}
      justify="space-between"
      alignItems="center"
      sx={{ border: '1px solid #e0e0e0', mt: 8, mb: 4 }}
    >
      <Grid
        item
        md={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{ width: '40px' }}
          component="img"
          src="images/categories/babysitter.png"
        />
        <Typography>Babysitter</Typography>
      </Grid>

      <Grid
        item
        md={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{ width: '40px' }}
          component="img"
          src="images/categories/cinema.png"
        />
        <Typography>Movies</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{ width: '40px' }}
          component="img"
          src="images/categories/babysitter.png"
        />
        <Typography>Babysitter</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{ width: '40px' }}
          component="img"
          src="images/categories/fitness.png"
        />
        <Typography>Sports</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{ width: '40px' }}
          component="img"
          src="images/categories/hanger.png"
        />
        <Typography>Clothings</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{ width: '40px' }}
          component="img"
          src="images/categories/concert.png"
        />
        <Typography>Music</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{ width: '40px' }}
          component="img"
          src="images/categories/pets.png"
        />
        <Typography>Pets</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{ width: '40px' }}
          component="img"
          src="images/categories/restaraunt.png"
        />
        <Typography>Kitchen</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{ width: '40px' }}
          component="img"
          src="images/categories/observation.png"
        />
        <Typography>Travel</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{ width: '40px' }}
          component="img"
          src="images/categories/powerstation.png"
        />
        <Typography>Eletrical</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{ width: '40px' }}
          component="img"
          src="images/categories/nuclear.png"
        />
        <Typography>Power</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{ width: '40px' }}
          component="img"
          src="images/categories/babysitter.png"
        />
        <Typography>Babysitter</Typography>
      </Grid>
    </Grid>
  )
}

export default DesktopCategory

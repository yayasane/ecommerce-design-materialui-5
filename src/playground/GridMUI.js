import { Grid } from '@mui/material'
import React from 'react'

const GridMUI = () => {
  return (
    <Grid spacing={10} container>
      <Grid sx={{ backgroundColor: 'red' }} md={4} item>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam deleniti
        accusantium quod ipsum laborum, quis quas, ipsam quibusdam molestias
        obcaecati quae, vero distinctio. Architecto quam eius sunt in
        perspiciatis ducimus laudantium doloremque fugit perferendis delectus
        beatae magnam voluptatibus accusamus dolorem eligendi, nisi quasi, amet
        repellat sequi aut veritatis quos quibusdam?
      </Grid>
      <Grid sx={{ backgroundColor: 'green' }} md={4} item>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam deleniti
        accusantium quod ipsum laborum, quis quas, ipsam quibusdam molestias
        obcaecati quae, vero distinctio. Architecto quam eius sunt in
        perspiciatis ducimus laudantium doloremque fugit perferendis delectus
        beatae magnam voluptatibus accusamus dolorem eligendi, nisi quasi, amet
        repellat sequi aut veritatis quos quibusdam?
      </Grid>
      <Grid sx={{ backgroundColor: 'yellow' }} md={4} item>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam deleniti
        accusantium quod ipsum laborum, quis quas, ipsam quibusdam molestias
        obcaecati quae, vero distinctio. Architecto quam eius sunt in
        perspiciatis ducimus laudantium doloremque fugit perferendis delectus
        beatae magnam voluptatibus accusamus dolorem eligendi, nisi quasi, amet
        repellat sequi aut veritatis quos quibusdam?
      </Grid>
    </Grid>
  )
}

export default GridMUI

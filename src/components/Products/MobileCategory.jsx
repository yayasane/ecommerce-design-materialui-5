import { Autocomplete, TextField } from '@mui/material'
import React from 'react'

const data = []
const MobileCategory = () => {
  return (
    <Autocomplete
      sx={{ mt: 8, mb: 8 }}
      disablePortal
      options={data}
      renderInput={(params) => (
        <TextField {...params} label="Select Products" align="center" />
      )}
    />
  )
}

export default MobileCategory

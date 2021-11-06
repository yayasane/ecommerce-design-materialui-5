import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material'
import Box from '@mui/material/Box'
import { useState } from 'react'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const openMenu = Boolean(anchorEl)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = (e) => {
    setAnchorEl(null)
  }
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: '10px 0px',
          }}
          component="div"
        >
          {/* logo */}
          <Box>
            <IconButton>
              <ShoppingBagIcon sx={{ fontSize: '2.4rem' }} />
            </IconButton>
          </Box>
          {/* links */}
          <Box sx={{ display: 'flex' }}>
            <Typography
              sx={{ marginRight: '20px', cursor: 'pointer', color: '#616161' }}
            >
              Home
            </Typography>
            <Typography
              sx={{ marginRight: '20px', cursor: 'pointer', color: '#616161' }}
            >
              Brand
            </Typography>
            <Typography
              sx={{ marginRight: '20px', cursor: 'pointer', color: '#616161' }}
              aria-controls="category-menu"
              aria-haspopup="true"
              aria-expanded={(openMenu && 'true') || undefined}
              onClick={handleClick}
            >
              Categories
            </Typography>
            {/* Dropdown Items */}
            <Menu
              id="category-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Men</MenuItem>
              <MenuItem onClick={handleClose}>Women</MenuItem>
              <MenuItem onClick={handleClose}>Phones</MenuItem>
              <MenuItem onClick={handleClose}>Accessoires</MenuItem>
              <MenuItem onClick={handleClose}>Others</MenuItem>
            </Menu>
            <Typography
              sx={{ marginRight: '20px', cursor: 'pointer', color: '#616161' }}
            >
              Men
            </Typography>
            <Typography
              sx={{ marginRight: '20px', cursor: 'pointer', color: '#616161' }}
            >
              Women
            </Typography>
            <Typography
              sx={{ marginRight: '20px', cursor: 'pointer', color: '#616161' }}
            >
              FAQ
            </Typography>
          </Box>
          {/* button links */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              sx={{ backgroundColor: '#ff4081' }}
              variant="contained"
              disableElevation
            >
              Account
            </Button>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ShoppingBasketIcon color="action" />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

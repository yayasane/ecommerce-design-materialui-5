import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

const DrawerComponent = ({ toggleDrawer, openDrawer }) => {
  return (
    <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
      <List>
        <ListItem divider button onClick={toggleDrawer(false)}>
          <ListItemIcon>
            <ListItemText>Men</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={toggleDrawer(false)}>
          <ListItemIcon>
            <ListItemText>Women</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={toggleDrawer(false)}>
          <ListItemIcon>
            <ListItemText>Categories</ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default DrawerComponent

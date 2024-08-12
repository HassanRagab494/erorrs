import { useTheme } from '@emotion/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Create, Home, Logout, Person, Settings } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText , IconButton } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
const Drawerr = ({
  drawerWidth,
  setmeMode,
  noneOrlok,
  darwertype,
  setnoneOrlok,
  setdarwertype
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme =useTheme();
  const thameeee = useTheme()
  return (
    <Drawer
    sx={{
      display:{xs:noneOrlok,sm:"block"},
      bgcolor:thameeee.palette.hassan.main,
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant= {darwertype}
    anchor="left"
    open={true}
    onClose={() => {
      setdarwertype("permanent")
      setnoneOrlok("none")
    }}
>



    <List 
    sx={{
      bgcolor:thameeee.palette.hassan.main ,height:"100vh"
      }}>
    <ListItem sx={{display:"flex",justifyContent:"center", mb:"15px" }} disablePadding>
    <IconButton 
    sx={{ ml: 1 }} 
   onClick={() => {
    localStorage.setItem("currentMode",theme.palette.mode ==="light" ?"dark":"light")

    setmeMode(theme.palette.mode ==="light" ?"dark":"light")
    
   }}
     color="inherit">
        {theme.palette.mode === 'dark' ?  <Brightness4Icon 
        sx={{color:thameeee.palette.hassan.icon}} />:
          <Brightness7Icon 
          sx={{color:thameeee.palette.hassan.icon}} /> }
      </IconButton>
      </ListItem>
  
    <Divider />
          <ListItem sx={{
                bgcolor:location.pathname === "/"? thameeee.palette.hassan.red :null
              }} disablePadding>
            <ListItemButton  onClick={() => {
              navigate('/')
            }}>
              <ListItemIcon >
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem  sx={{
                bgcolor:location.pathname === "/Create"? thameeee.palette.hassan.red :null
              }} disablePadding>
            <ListItemButton  onClick={() => {
              navigate('/Create')
            }}>
              <ListItemIcon>
                <Create />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{
                bgcolor:location.pathname === "/profile"? thameeee.palette.hassan.red :null
              }} disablePadding>
            <ListItemButton  onClick={() => {
              navigate('/profile')
            }}>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  onClick={() => {
              navigate('/')
            }}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton  onClick={() => {
              navigate('/')
            }}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        
        </List>
</Drawer>
  );
}

export default Drawerr;

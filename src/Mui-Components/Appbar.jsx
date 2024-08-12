import React from 'react';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AppBar, Avatar, Link, IconButton,   } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Menu } from '@mui/icons-material';

const Appbar = ({
  drawerWidth,
  setnoneOrlok,
  setdarwertype
}) => {
  const thameeee = useTheme()
  return (
    <AppBar
  
      sx={{ml:{xs:0,sm:`${drawerWidth}px`},
          width: {sm:`calc(100% - ${drawerWidth}px)`}
          , bgcolor:thameeee.palette.hassan.main}}
      position="static">
    <Toolbar>
<IconButton aria-label="" sx={{display:{sm:"none"}}} 
onClick={() => {
  setnoneOrlok("block");
  setdarwertype("temporary")
}}>
  <Menu/>
</IconButton>
    <Link sx={{ flexGrow: 1 , "&:hover": {color:"red",fontSize:"20px"}
}} color='inherit' href="#" underline="none">
hassan
</Link>

<Typography mr={2} variant="body1" color="inherit">login</Typography>

<Avatar alt=" hassan" src="./img/WhatsApp Image 2024-06-26 at 7.22.24 PM.jpeg" />

    </Toolbar>
  </AppBar>
  );
}

export default Appbar;

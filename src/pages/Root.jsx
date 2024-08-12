import Drawerr from '../Mui-Components/Drawerr.';
import Appbar from '../Mui-Components/Appbar';

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import {  blueGrey, cyan, pink, yellow } from '@mui/material/colors';



const drawerWidth = 240;

const Root = () => {
  const [mode, setmeMode] = useState("light");
const darkTheme = createTheme({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
        hassan:{
        main:cyan[900],
        red:pink[500],
        icon:yellow["A200"],
        }
          
        }
      : {
          // palette values for dark mode
        
              hassan:{
      
        red:pink[900],
        icon:blueGrey[500],
        }
          
        }),
  },
});
 const [noneOrlok, setnoneOrlok] = useState("none");
 const [darwertype, setdarwertype] = useState("permanent");
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
    <div>
<Appbar
  drawerWidth={drawerWidth}
  setnoneOrlok={setnoneOrlok}
  setdarwertype={setdarwertype}
    />


  
  < Drawerr
      drawerWidth={drawerWidth}
      setmeMode={setmeMode}
      noneOrlok={noneOrlok}
      darwertype={darwertype}
      setnoneOrlok={setnoneOrlok} 
      setdarwertype={setdarwertype}/>
    <Box  sx={{

        ml:{sm:`${drawerWidth}px`},
      
       
        display:"flex",
        justifyContent:'center',
        mt:"66px"}}>
      <Outlet/>
      </Box>
    </div>
    </ThemeProvider>
  );


}

export default Root;

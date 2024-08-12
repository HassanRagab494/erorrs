
import { Box, Paper, Typography,  IconButton, useTheme } from '@mui/material';
import  './Home.css'
import React, { useState } from 'react';
import { Close } from '@mui/icons-material';
import { useEffect } from 'react';



const Home = () => {
  const [mydata, setmydata] = useState([]);
  useEffect(() => {  
    fetch("http://localhost:3100/mydata")
    .then((response)=>response.json())
    .then((data)=> setmydata(data));
  }, []);
  const thameeee = useTheme()
let totalprica=0
  return (
  <Box >
    {mydata.map((item) => {
    totalprica+=item.price
      return(
        <Paper sx={{
          // @ts-ignore
          bgcolor:thameeee.palette.hassan.main,
        position:'relative',
        width:'366px',
        display:"flex",
        justifyContent:"space-between",
        mt:"22px",
        mb:"22px",
        pt:"27px",
        pb:"7px",
        }}>
        <Typography
         sx={{
          ml:"16px",fontSize:"1.3em"
          }} 
          variant="h6" >
            {item.titl}
            </Typography>
    <Typography 
    sx={{
      mr:"33px",
      fontWeight:"500",
      fontSize:"1.4em",
      opacity:"0.8"
    }}
      variant="h6" >
      {item.price}
        </Typography>
    <IconButton
        onClick={() => {
          fetch(`http://localhost:3100/mydata/${item.id}`, { method: "DELETE" });
          const newArr = mydata.filter((myobject) => {
            return myobject.id !== item.id
          })
          setmydata(newArr)
        }}
  
     sx={{
      position:"absolute",
      top:"0",
      right:"0"
      }}>
      <Close/>
    </IconButton>
        </Paper>
        
      )
    })}
  
<Typography variant="h5" >total${totalprica}</Typography>

  </Box>

  );
  
}

export default Home;



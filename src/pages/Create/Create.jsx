
import { InputAdornment, TextField, Box, styled, Button, Input, Typography } from '@mui/material';
import './Create.css'
import React, { useState } from 'react';
import { purple } from '@mui/material/colors';
import {  ChevronRight, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  animation:"1s ",
  '&:hover': {
    backgroundColor: "transparent",
    color: purple[500],
    border:"2px solid  ",
  },
}));



const Create = () => {
  const [titl, settitl] = useState("");
  const [price, setprice] = useState(0);
  const navigate =useNavigate();
    const [textFile, setTextFile] = useState(null);
  return (
    <Box     noValidate
    autoComplete="off" sx={{width:"380px" }} component="form">
         <Input
               onChange={(eo) => {
                setTextFile(eo.target.value)
                }}
        type="file"
        // @ts-ignore
        accept=".txt"
        sx={{ display: 'none' }}
        id="file-upload"
      />
       <label htmlFor="file-upload">
        <Button variant="contained" component="span">
          اختر ملف
        </Button>
      </label>
      {textFile && (
        <Typography variant="body1" component="p" sx={{ mt: 2 }}>
          الملف المختار: {textFile.name}

        </Typography>
)}

      <TextField 
      onChange={(eo) => {
      settitl(eo.target.value)
      }}
      fullWidth
          label="user name"

          sx={{ mt: '22px', display:'block' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">
              <Person/>
          </InputAdornment>,
          }}
          variant="standard"
        />
      
            <TextField
            onChange={(eo) => {
            setprice(Number(eo.target.value));
            }}
            fullWidth
          label="With normal TextField"
    
          sx={{ mt:'22px', display:'block' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="standard"
        />
            <ColorButton  
            onClick={() => {
            fetch("http://localhost:3100/mydata",{
              method:'POST',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ price,titl,textFile }),
            }) 
            .then(() => {
              navigate("/")
            }) 
            }}
            sx={{mt:'22px'}} variant="contained"> submit<ChevronRight/>
</ColorButton>
    </Box>
  );
}

export default Create;



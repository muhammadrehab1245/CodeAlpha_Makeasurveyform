import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { useForm, Controller } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import Notecontext from '../context/Notecontext';
export const Formone = () => {

  const navigate = useNavigate()
  const context=useContext(Notecontext)
  const {user,updateUser}=context
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    defaultValues: {
      name:user.name,
      email:user.email,
    },
  });
  const onSubmit = (data) => {
   updateUser(data);

     navigate("/two")
  };
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <FormControl>
    <Stack width='35ch'>
          <FormLabel >
            <Typography color='black' sx={{ marginTop: 5 }} >Your Name
            </Typography></FormLabel>
    
          <TextField
  required={true}
          autoComplete="off"
            variant="outlined"
            name='name'
            id='name'
            defaultValue={''}
            {...register('name', {
              pattern: {
              value:   /^([^0-9]*)$/,
              message:'Name should not contain number'
              }  })}
          />
 {errors.name && <Typography color='red'>{errors.name.message}</Typography>}
          <FormLabel>
            <Typography color='black' sx={{ marginTop: 5 }} >Your email
            </Typography></FormLabel>
       
          <TextField
          type={"email"}
          autoComplete="off"
            variant="outlined"
            name='email'
            id='email'
            defaultValue={''}
            required={true}
            {...register('email')}
          />
        
 {errors.email && <Typography color='red'>{errors.email.message}</Typography>}
         
 </Stack>
          <Grid>

            <Button  sx={{backgroundColor:'#1e88e5',marginTop:3}} type="submit" variant="contained" size="small">
              Next
            </Button>
          </Grid>
          </FormControl>
      </form>

    </>
  )
}

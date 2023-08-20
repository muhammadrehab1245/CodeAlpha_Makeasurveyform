import React, { useContext } from 'react'
import { useForm, Controller } from "react-hook-form"
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BASE_API_URL } from '../utils/Constant';
import axios from 'axios';
import Notecontext from '../context/Notecontext';
export const Formlast = (props) => {
    const navigate = useNavigate()
    const {showalert}=props
    const context=useContext(Notecontext)
    let {user,resetUser,radioValue, updateRadioValue}=context
    const { control,register, handleSubmit,formState: { errors } } = useForm({
      defaultValues: {
        reasonsatisfy:user.reasonsatisfy,
        mostsatisfy: radioValue,
        leastsatisfy: radioValue,
        
      },
    });
    const handleChange = (event) => {
      updateRadioValue(event.target.value);
    };
  const onSubmit = async (data) => {
    try {
      await axios.post(`${BASE_API_URL}/register`, {
        ...user,
        ...data
      });
      resetUser()
      showalert('Form filled successfully','success')
      navigate('/')
      
    } catch (error) {
      if (error.response) {
        console.log('error', error.response.data);
        showalert(error.response.data,'error')
      }
    }
  }; 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <FormControl>
 <FormLabel id="demo-radio-buttons-group-label">
    <Typography mt={3} color='black'>What aspect of the product or service were you most satisfied by?</Typography></FormLabel>
    <Controller
             name="mostsatisfy"
             control={control}
             rules={{ required: true }}
             render={({ field }) => (
 <RadioGroup 
 value={radioValue}
 onChange={handleChange}
 {...register('mostsatisfy', { required: 'Select Any one of the option' })}
 {...field}
   aria-labelledby="demo-radio-buttons-group-label"
 >
    
    <FormControlLabel value="quality" control={<Radio />} label="Quality" />
   <FormControlLabel value="customerservice" control={<Radio />} label="Customer service" />
   <FormControlLabel value="price" control={<Radio />} label="Price" />
   <FormControlLabel value="firstuseexperience" control={<Radio />} label="First use experience" />
 </RadioGroup>
   )}
   />
   {errors.mostsatisfy && <Typography color='red'>{errors.mostsatisfy.message}</Typography>}
 <FormLabel id="demo-radio-buttons-group-label">
    <Typography mt={3} color='black'>What aspect of the product or service were you least satisfied by?</Typography></FormLabel>
    <Controller
             name="leastsatisfy"
             control={control}
             rules={{ required: true }}
             render={({ field }) => (
 <RadioGroup 

 {...register('leastsatisfy', { required: 'Select Any one of the option' })}
 {...field}
   aria-labelledby="demo-radio-buttons-group-label"
 >
    
   <FormControlLabel value="quality" control={<Radio />} label="Quality" />
   <FormControlLabel value="customerservice" control={<Radio />} label="Customer service" />
   <FormControlLabel value="price" control={<Radio />} label="Price" />
   <FormControlLabel value="firstuseexperience" control={<Radio />} label="First use experience" />
 </RadioGroup>
   )}
   />
   {errors.leastsatisfy && <Typography color='red'>{errors.leastsatisfy.message}</Typography>}
     <FormLabel id="demo-radio-buttons-group-label">
        <Typography color='black' sx={{marginTop:5}} >Explain Why
 </Typography></FormLabel>
 
      <TextField
        {...register('reasonsatisfy', {required: "Product name is required." }
        )}
           id="reasonsatisfy"
           label="Explanation"
           name='reasonsatisfy'
           multiline
           rows={7}
         />
          {errors.reasonsatisfy && <Typography color='red'>{errors.reasonsatisfy.message}</Typography>}
 <Grid mt={2}> 
 
 <Button  sx={{backgroundColor:'#1e88e5'}}  type="submit" variant="contained" size="small">
    Submit
  </Button>
 </Grid>
  </FormControl>
 
 </form>
  )
}

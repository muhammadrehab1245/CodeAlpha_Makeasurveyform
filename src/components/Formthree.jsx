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
import Notecontext from '../context/Notecontext';
export const Formthree = () => {
  const navigate = useNavigate()
  const context=useContext(Notecontext)
  let {user,updateUser,radioValue, updateRadioValue}=context
    const { control,register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
        reasonexpect:user.reasonexpect,
        productexpectations: radioValue,
      },
    });
    const handleChange = (event) => {
      updateRadioValue(event.target.value);
    };
  const onSubmit = (data) => {
    updateUser(data);
    navigate("/four")
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
   <FormControl>
<FormLabel id="demo-radio-buttons-group-label">
   <Typography mt={3} color='black'>Did our product or service meet your expectations?</Typography></FormLabel>
   <Controller
            name="productexpectations"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
<RadioGroup
 value={radioValue}
 onChange={handleChange}
   {...register('productexpectations', { required: 'Select Any one of the option' })}
 {...field}
  aria-labelledby="demo-radio-buttons-group-label"
>
   
  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
  <FormControlLabel value="no" control={<Radio />} label="No" />
</RadioGroup>
  )}
  
  />
     {errors.productexpectations && <Typography color='red'>{errors.productexpectations.message}</Typography>}
    <FormLabel id="demo-radio-buttons-group-label">
       <Typography color='black' sx={{marginTop:5}} >Explain Why
</Typography></FormLabel>

     <TextField
      {...register('reasonexpect', {required: "Reason is required." }
      )}
          id="reasonexpect"
          label="Explanation"
          name='reasonexpect'
          multiline
          rows={7}
  
        />
            {errors.reasonexpect && <Typography color='red'>{errors.reasonexpect.message}</Typography>}
<Grid mt={2}> 

<Button sx={{backgroundColor:'#1e88e5'}}  type="submit" variant="contained" size="small">
   Next
 </Button>
</Grid>
 </FormControl>

</form>
  )
}

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
export const Formfour = () => {
    const navigate = useNavigate()
    const context=useContext(Notecontext)
    let {user,updateUser,radioValue, updateRadioValue}=context
    const { control,register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
        recommend:radioValue,
        reasonrecommend: user.reasonrecommend,
      },
    });
    const handleChange = (event) => {
      updateRadioValue(event.target.value);
    };
  const onSubmit = (data) => {
    updateUser(data)
    navigate("/five")
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
   <FormControl>
<FormLabel id="demo-radio-buttons-group-label">
   <Typography mt={3} color='black'>Would you recommend this product or service to a friend?</Typography></FormLabel>
   <Controller
            name="recommend"
            control={control}
            render={({ field }) => (
<RadioGroup 
 onChange={handleChange}
 value={radioValue}
    {...register('recommend', { required: 'Select Any one of the option' })}
    {...field}
  aria-labelledby="demo-radio-buttons-group-label"
>
   
  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
  <FormControlLabel value="no" control={<Radio />} label="No" />
</RadioGroup>
  )}
  />
   {errors.recommend && <Typography color='red'>{errors.recommend.message}</Typography>}
    <FormLabel id="demo-radio-buttons-group-label">
       <Typography color='black' sx={{marginTop:5}} >Explain Why
</Typography></FormLabel>

     <TextField
          id="reasonrecommend"
          label="Explanation"
          name='reasonrecommend'
          multiline
          rows={7}
          {...register('reasonrecommend', {required: "Reason is required." }
          )}
        />
         {errors.reasonrecommend && <Typography color='red'>{errors.reasonrecommend.message}</Typography>}
<Grid mt={2}> 

<Button  sx={{backgroundColor:'#1e88e5'}}   type="submit" variant="contained" size="small">
   Next
 </Button>
</Grid>
 </FormControl>

</form>
  )
}

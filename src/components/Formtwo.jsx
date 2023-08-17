import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Grid, Typography } from '@mui/material';
import { useForm, Controller } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import Notecontext from '../context/Notecontext';
export const Formtwo = () => {

  const navigate = useNavigate()
  const context=useContext(Notecontext)
  let {user,updateUser,radioValue, updateRadioValue}=context

  const handleChange = (event) => {
    updateRadioValue(event.target.value);
  };
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    defaultValues: {
      productname:user.productname,
      productsatisfaction:radioValue,
    },
  });
  const onSubmit = (data) => {

   updateUser(data);

     navigate("/three")
  };

  return (
    <>
    
      <form onSubmit={handleSubmit(onSubmit)}>
 
            <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            <Typography color='black' sx={{ marginTop: 5 }} >Name of product or service
            </Typography></FormLabel>
          <TextField
          autoComplete="off"
            variant="outlined"
            name='productname'
            id='productname'
            defaultValue={''}
            {...register('productname', {required: "Product name is required." }
              )}
          />
 {errors.productname && <Typography color='red'>{errors.productname.message}</Typography>}
          <FormLabel id="demo-radio-buttons-group-label">
            <Typography mt={3} color='black'>Overall, how satisfied are you with the product or service?</Typography></FormLabel>
          <Controller
            name="productsatisfaction"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={radioValue}
        onChange={handleChange}
              {...register('productsatisfaction', { required: 'Select Any one of the option' })}
        
              {...field}
        
              >
                <FormControlLabel
              
                  value="very satisfied"
                  control={<Radio  />}
                  label="Very Satisfied"
                />
                <FormControlLabel

                  value="satisfied"
                  control={<Radio />}
                  label="Satisfied"
                />
                <FormControlLabel
       
                  value="neutral"
                  control={<Radio />}
                  label="Neutral"
                />
                <FormControlLabel
                  value="unsatisfied"
                  control={<Radio  />}
                  label="Unsatisfied"
                />
                <FormControlLabel

                  value="very unsatisfied"
                  control={<Radio />}
                  label="Very Unsatisfied"
                />
              </RadioGroup>
            )}
          />
          {errors.productsatisfaction && <Typography color='red'>{errors.productsatisfaction.message}</Typography>}
          <Grid>

            <Button sx={{backgroundColor:'#1e88e5'}} type="submit" variant="contained" size="small">
              Next
            </Button>
          </Grid>
   
          </FormControl>
      </form>

    </>
  )
}

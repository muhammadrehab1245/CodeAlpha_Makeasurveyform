import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
export const Progress = () => {
let location = useLocation();
  const firststep = location.pathname === '/';
  const secondstep = location.pathname === '/two';
  const thirdstep = location.pathname === '/three';
  const fourstep = location.pathname === '/four';
  const laststep = location.pathname === '/five';

  const Stepbutton = styled(Button)({
  borderRadius:20,
    '&:hover': {
      background: 'rgb(27,154,219)',
      background: ' linear-gradient(90deg, rgba(27,154,219,1) 30%, rgba(30,136,229,1) 71%)'
    }
  });
  
  return (
    <Grid justifyContent={'center'} container  spacing={10}>
      <Grid  xs={2} item>
        {  secondstep|| thirdstep||fourstep||laststep ?
      <Link to='/'>
    <Stepbutton sx={{backgroundColor:firststep?'#1e88e5':'grey'}} variant="contained" size="lg">
     1
  </Stepbutton> 
      </Link>
   
  : <Stepbutton sx={{backgroundColor:firststep?'#1e88e5':'grey'}} variant="contained" size="lg">
     1
     </Stepbutton>  }
      </Grid>
      <Grid item  xs={2}>
      {  thirdstep||fourstep||laststep ?
         <Link to='/two'>
     <Stepbutton sx={{backgroundColor:secondstep?'#1e88e5':'grey'}} variant="contained" size="lg">
    2
    </Stepbutton>
  </Link>:    <Stepbutton sx={{backgroundColor:secondstep?'#1e88e5':'grey'}} variant="contained" size="lg">
    2
  </Stepbutton> }
      </Grid>
      <Grid  xs={2} item>
      { fourstep||laststep ?
        <Link to='/three'>
    <Stepbutton sx={{backgroundColor:thirdstep?'#1e88e5':'grey'
       }} variant="contained" size="lg">
    3
  </Stepbutton>
  </Link> : <Stepbutton sx={{backgroundColor:thirdstep?'#1e88e5':'grey'}} variant="contained" size="lg">
    3
  </Stepbutton> }
      </Grid>
      <Grid  xs={2} item>
      { laststep ?
        <Link to='/four'>
    <Stepbutton sx={{backgroundColor:fourstep?'#1e88e5':'grey'
       }} variant="contained" size="lg">
    4
  </Stepbutton>
  </Link> : <Stepbutton sx={{backgroundColor:fourstep?'#1e88e5':'grey'}} variant="contained" size="lg">
    4
  </Stepbutton> }
      </Grid>
      <Grid  xs={2} item>
    <Stepbutton sx={{backgroundColor:laststep?'#1e88e5':'grey'}} variant="contained" size="lg">
    5
  </Stepbutton>
      </Grid>
  
  </Grid>
  )
}
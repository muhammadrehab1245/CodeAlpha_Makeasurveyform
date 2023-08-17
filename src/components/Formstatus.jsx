import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
export const Formstatus=(props)=> {
  const {alert}=props
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [state, setState] = React.useState({
    open: true,
    vertical: 'bottom',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;  

  const buttons = (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
         // onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}
        >
          Bottom-Center
        </Button>
      </Box>

  );

  return (
    alert &&
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        key={vertical + horizontal}
      >
        <Alert severity={alert.type} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

import { Typography } from '@mui/material'
import React from 'react'
import { Progress } from './Progress'
export const Header = () => {
  return (
    <>
    <Typography mb={5} mt={2} color='#1e88e5' variant="h2" component="h2">
    Follow Up Survey
  </Typography>
  <Progress/>
    </>
  )
}

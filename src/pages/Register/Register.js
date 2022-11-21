import React from 'react'

import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import LinaerStepper from '../../components/Register/LinearStepper';
function RegisterPage() {
  return (
    <div >
      <CssBaseline />
      <Container component={Box} p={8}>
        <Paper component={Box} p={6}>
          <LinaerStepper/>
        </Paper>
      </Container>
    </div>
  )
}

export default RegisterPage
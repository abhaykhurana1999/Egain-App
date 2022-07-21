import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="12vh" width="70vh"  margin="auto" border="2px solid" component="form">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Message"
          defaultValue="Hello World"
          inputProps={{ maxLength: 160 }}
        />
  
      </div>
    </Box>
  );
}
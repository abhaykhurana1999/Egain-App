import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

export default function Template() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="12vh" width="70vh"  margin="auto" border="2px solid" component="form">
      <div>
      <TextField
          id="outlined-password-input"
          label="Template"
          type="text"
           />
           <Button variant="contained">ShortenUrl</Button>
  
      </div>
    </Box>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import CustomerContact from './CustomerContact';

 function NativeSelectDemo(_props: any) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="12vh" width="70vh"  margin="auto" border="2px solid">
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {_props.text}
        </InputLabel>
        <NativeSelect
        required
        value={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={9123456789}>9123456789</option>
          <option value={9123456789}>9123456789</option>
          <option value={9123456789}>9123456789</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default NativeSelectDemo
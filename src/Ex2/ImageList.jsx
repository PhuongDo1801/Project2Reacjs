// npm install @mui/material @emotion/react @emotion/styled

import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import backgroundUrl from "../assets/background.png";
// import { borderRadius } from '@mui/system';

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <img className='avatar' src={backgroundUrl} alt="" />
      </Grid>
      <Grid item xs={4}>
        <img className='avatar' src={backgroundUrl} alt="" />
      </Grid>
      <Grid item xs={4}>
        <img className='avatar' src={backgroundUrl} alt="" />
      </Grid>
      {/* <Grid item xs={3}>
        <img className='avatar' src={backgroundUrl} alt="" />
      </Grid> */}
    </React.Fragment>
  );
}

export default function ImageList() {
  return (
    <Box mx={'auto'} my={20} sx={{ flexGrow: 1, borderRadius: '5px', width: 1000, border: '5px solid grey', }}>
      <Grid container spacing={1} p={1} sx = {{borderRadius: '1px', borderColor: 'primary.main'}}>
        <Grid container item spacing={1} px={'auto'} py={'auto'}>
          <FormRow />
        </Grid>
        <Grid container item spacing={1} px={'auto'} py={'auto'}>
          <FormRow />
        </Grid>
        {/* <Grid container item spacing={1}>
          <FormRow />
        </Grid> */}
      </Grid>
    </Box>
  );
}

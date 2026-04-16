import React from 'react';
import { Box, Grid } from '@mui/material';

import { DonateForm } from './DonateForm';
import { DonateQrBlock } from './DonateQrBlock';

export const DonateSection = () => (
  <Box
    sx={{
      py: { xs: 4, md: 10 },
      px: { xs: 1.5, sm: 4 },
      maxWidth: 1400,
      mx: 'auto',
    }}
  >
    <Grid
      container
      spacing={{ xs: 4, md: 8, lg: 10 }}
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid
        item
        xs={12}
        md={10}
        lg={5}
        sx={{
          position: { lg: 'sticky' },
          top: { lg: 100 },
          display: 'flex',
          justifyContent: 'center',
          mb: { xs: 2, md: 0 },
        }}
      >
        <DonateForm />
      </Grid>

      <Grid
        item
        xs={12}
        md={12}
        lg={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',

            maxWidth: { xs: '100%', md: 800, lg: 500 },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <DonateQrBlock />
        </Box>
      </Grid>
    </Grid>
  </Box>
);

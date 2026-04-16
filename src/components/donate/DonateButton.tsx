import React from 'react';
import { Button, ButtonProps } from '@mui/material';

export const DonateButton = (props: ButtonProps) => (
  <Button
    size="large"
    variant="contained"
    sx={{
      borderRadius: 3,
      textTransform: 'none',
      fontWeight: 700,

      px: { xs: 2, sm: 4 },
      py: 1.5,
      fontSize: { xs: 14, sm: 16 },
      backgroundColor: '#000000',
      color: '#FFFFFF',
    }}
    {...props}
  />
);

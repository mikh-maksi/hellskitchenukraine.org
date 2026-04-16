import React from 'react';
import { Box } from '@mui/material';

export const SelectArrowIcon: React.FC = (props) => (
  <Box
    component="span"
    {...props}
    sx={{
      right: -8,
      top: '50%',
      transform: 'translateY(-50%)',
      position: 'absolute',
      pointerEvents: 'none',
      fontSize: 20,
    }}
  >
    ▾
  </Box>
);

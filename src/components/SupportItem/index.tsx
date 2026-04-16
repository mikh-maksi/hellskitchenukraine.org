import React from 'react';
import { Grid, Link, Typography, useTheme } from '@mui/material';

interface SupportItemProps {
  link: string;
  text: string;
}

export const SupportItem: React.FC<SupportItemProps> = ({ link, text }) => {
  const theme = useTheme();

  return (
    <Grid alignItems="center" container justifyContent="center" sx={{ mb: 2 }}>
      <Grid
        item
        style={{
          background: theme.palette.yellowBlueGradient,
          borderRadius: '10px',
        }}
        sx={{ p: 2 }}
      >
        <Link
          href={link}
          target="_blank"
          style={{ color: theme.palette.black }}
        >
          <Typography
            paragraph
            sx={{ display: 'inline-block', m: 0, textAlign: 'center' }}
          >
            {text}
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

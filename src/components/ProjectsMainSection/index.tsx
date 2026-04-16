import React from 'react';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';

import { InfoComponent, InfoComponentSize } from '../InfoComponent';

interface ProjevtsMainSectionProps {
  buttonText?: string;
  copies: string[];
  title: string;
}

export const ProjectsMainSection: React.FC<ProjevtsMainSectionProps> = ({
  buttonText,
  copies,
  title,
}) => {
  const theme = useTheme();

  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  const renderMobile = () => {
    if (isLarge) return null;

    return (
      <InfoComponent
        buttonText={buttonText}
        copies={copies}
        size={InfoComponentSize.large}
        title={title}
      />
    );
  };

  const renderDesktop = () => {
    if (!isLarge) return null;

    return (
      <Grid container spacing={2}>
        <Grid item xs={copies.length ? 5 : 12}>
          <InfoComponent
            buttonText={buttonText}
            copies={[]}
            size={InfoComponentSize.large}
            title={title}
          />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={6} hidden={!copies.length}>
          <InfoComponent copies={copies} size={InfoComponentSize.large} />
        </Grid>
      </Grid>
    );
  };

  return (
    <Box sx={{ mb: { xs: 18, sm: 32, md: 54 } }}>
      {renderMobile()}
      {renderDesktop()}
    </Box>
  );
};

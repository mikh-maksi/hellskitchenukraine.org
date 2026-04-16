import React from 'react';
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';

import { ImageComponent } from '../ImageComponent';
import { InfoComponent } from '../InfoComponent';

interface AboutUsSectionProps {
  alt: string;
  buttonText: string;
  copies: string[];
  imagePath: string;
  imageMobPath: string;
  label: string;
  title: string;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  alt,
  buttonText,
  copies,
  imagePath,
  imageMobPath,
  label,
  title,
}) => {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Container
      maxWidth="lg"
      sx={{ pt: { xs: 12, md: 26 }, pb: { xs: 8, md: 16 } }}
    >
      <Grid
        alignItems="center"
        container
        justifyContent="center"
        spacing={2}
        sx={{ pb: { xs: 0, lg: 3 }, pt: 2 }}
      >
        <Grid item xs={12} md={6}>
          <InfoComponent
            buttonText={buttonText}
            copies={copies}
            label={label}
            title={title}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageComponent
            alt={alt}
            src={isTablet ? imagePath : imageMobPath}
            style={{ width: '100%' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

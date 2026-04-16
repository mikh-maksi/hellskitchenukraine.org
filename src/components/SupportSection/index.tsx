import React from 'react';
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';

import { SupportItem } from '../SupportItem';

interface SuppoprtSectionProps {}

export const SupportSection: React.FC<SuppoprtSectionProps> = () => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isWideScreen = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Container
      maxWidth={isWideScreen ? 'xl' : undefined}
      sx={{ my: isDesktop ? 22 : 8 }}
    >
      <Grid alignItems="center" container justifyContent="center" spacing={2}>
        <Grid item sm={12}>
          <SupportItem
            link="mailto:hellskitchen.ukraine@gmail.com"
            text="Paypal"
          />
        </Grid>
        <Grid item sm={12}>
          <SupportItem
            link="https://donatello.to/pekelna.kitchen"
            text="Donatello"
          />
        </Grid>
        <Grid item sm={12}>
          <SupportItem
            link="https://www.patreon.com/pekelna_kuhnya"
            text="Patreon"
          />
        </Grid>
        <Grid item sm={12}>
          <SupportItem
            link="https://buymeacoffee.com/hellskitchen.ukraine"
            text="Buymeacoffee"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

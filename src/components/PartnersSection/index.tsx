import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { ImageComponent } from '../ImageComponent';

interface PartnerSectionProps {}

interface contentItem {
  alt: string;
  src: string;
  srcMob: string;
}

export const PartnerSection: React.FC<PartnerSectionProps> = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  const imagesPath = '/images/partnersSection';

  const content: contentItem[] = [
    {
      alt: 'NOVA Ukraine logo',
      src: `${imagesPath}/web/novaUkraine.png`,
      srcMob: `${imagesPath}/mob/novaUkraine.png`,
    },
    {
      alt: 'World Central Kitchen logo',
      src: `${imagesPath}/web/worldCentralKitchen.png`,
      srcMob: `${imagesPath}/mob/worldCentralKitchen.png`,
    },
    {
      alt: 'Lion defence team logo',
      src: `${imagesPath}/web/lion.png`,
      srcMob: `${imagesPath}/mob/lion.png`,
    },
    {
      alt: 'Globe Ukraine logo',
      src: `${imagesPath}/web/globeUkraine.png`,
      srcMob: `${imagesPath}/mob/globeUkraine.png`,
    },
    {
      alt: 'Gvara logo',
      src: `${imagesPath}/web/gvara.png`,
      srcMob: `${imagesPath}/mob/gvara.png`,
    },
  ];

  const gridsSx = { mb: { xs: 5, md: 10 } };

  const renderLogos = () =>
    content.map((item) => (
      <Grid item xs={6} sm={3} md={2.3} key={item.src} sx={gridsSx}>
        <ImageComponent
          alt={item.alt}
          src={isTablet ? item.src : item.srcMob}
        />
      </Grid>
    ));

  return (
    <Box
      style={{ backgroundColor: theme.palette.lightBlue }}
      sx={{ pt: { xs: 8, md: 15 }, pb: { xs: 28, md: 29, xl: 32 } }}
    >
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: { md: 'space-between' } }}
        >
          <Grid item xs={12} sx={gridsSx}>
            <Typography variant="h2">
              {t('homePage.partnersSection.title')}
            </Typography>
          </Grid>
          {renderLogos()}
        </Grid>
      </Container>
    </Box>
  );
};

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';

import { ImageComponent } from '../ImageComponent';
import { InfoComponent, InfoComponentSize } from '../InfoComponent';

interface DonateSectionProps {}

export const DonateSection: React.FC<DonateSectionProps> = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isWideScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const isSmallTablet = useMediaQuery(theme.breakpoints.up(540));

  const localizationPath = 'homePage.donateSection';

  const boxStyle = {
    background: theme.palette.yellowBlueGradient,
    overflow: 'hidden',
  };

  const getImgStyles = () => {
    const styles: React.CSSProperties = {
      marginLeft: '-10%',
      width: isSmallTablet ? '100%' : '120%',
    };

    if (isSmallTablet) styles.marginLeft = '0';
    if (isDesktop) styles.marginLeft = '-30%';
    if (isLarge) styles.marginLeft = '-15%';
    if (isWideScreen) styles.marginLeft = '-35%';

    return styles;
  };

  return (
    <Box style={boxStyle}>
      <Container maxWidth={isDesktop ? 'lg' : 'sm'} sx={{ mt: 8 }}>
        <Grid alignItems="center" container justifyContent="center" spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            xl={7}
            sx={{ mb: 3, order: { xs: 0, md: 1 } }}
          >
            <InfoComponent
              buttonText={t(`${localizationPath}.buttonText`)}
              copies={[
                t(`${localizationPath}.copy`),
                t(`${localizationPath}.copy2`),
              ]}
              size={InfoComponentSize.big}
              title={t(`${localizationPath}.title`)}
            />
          </Grid>
          <Grid item md={6} xl={5}>
            <ImageComponent
              alt="Donate section photos"
              src={
                isDesktop
                  ? 'images/donateSection/web/donate_pic.png'
                  : 'images/donateSection/mob/donate_pic.png'
              }
              style={getImgStyles()}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

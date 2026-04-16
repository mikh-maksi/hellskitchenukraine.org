import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';

import { ImageComponent } from '../ImageComponent';
import {
  InfoComponent,
  InfoComponentAlign,
  InfoComponentSize,
} from '../InfoComponent';

interface HPMainSectionProps {}

export const HPMainSection: React.FC<HPMainSectionProps> = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isWideScreen = useMediaQuery(theme.breakpoints.up('xl'));

  const localizationPath = 'homePage.mainSection';

  const boxStyle = {
    background: theme.palette.yellowBlueGradient,
    overflow: 'hidden',
  };

  const imgStyle = {
    width: isWideScreen ? '120%' : '150%',
  };

  return (
    <Box style={boxStyle}>
      <Container
        maxWidth={isWideScreen ? 'xl' : undefined}
        sx={{ mt: 3, mb: isDesktop ? 22 : 8 }}
      >
        <Grid alignItems="center" container justifyContent="center" spacing={2}>
          <Grid item lg={2} hidden={!isLarge}>
            <ImageComponent
              alt="Main article left side photo"
              src="images/mainSection/photo_main_left.png"
              style={{ ...imgStyle, marginLeft: isWideScreen ? 0 : '-60%' }}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={10} lg={8} xl={7} sx={{ mb: 8 }}>
            <InfoComponent
              buttonText={t(`${localizationPath}.buttonText`)}
              copies={[t(`${localizationPath}.copy`)]}
              size={InfoComponentSize.large}
              textAlign={InfoComponentAlign.center}
              title={t(`${localizationPath}.title`)}
            />
          </Grid>
          <Grid item lg={2} hidden={!isLarge}>
            <ImageComponent
              alt="Main article right side photo"
              src="images/mainSection/photo_main_right.png"
              style={{ ...imgStyle, marginLeft: isWideScreen ? '-30%' : '20%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

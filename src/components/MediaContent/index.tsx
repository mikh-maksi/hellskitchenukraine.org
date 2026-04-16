import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import MediaDesk from '../MediaDesk';

interface MediaContent {
  alt: string;
  imageUrl: string;
  withBorderBLRadius?: boolean;
  withBorderBRRadius?: boolean;
  withBorderTLRadius?: boolean;
  withBorderTRRadius?: boolean;
}

export const MediaContent: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down(540));
  const isSmallTablet = useMediaQuery(theme.breakpoints.between(540, 709));
  const isTablet = useMediaQuery(theme.breakpoints.between(709, 894));
  const isLargeTablet = useMediaQuery(theme.breakpoints.between(894, 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.between('md', 1228));
  const isBigDesktop = useMediaQuery(theme.breakpoints.between(1228, 'lg'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  const mediaContents: MediaContent[] = [
    {
      alt: 'Media 1+1',
      imageUrl: '/images/media/1+1.png',
      withBorderTLRadius: true,
    },
    {
      alt: 'Media DW',
      imageUrl: '/images/media/dw@.png',
      withBorderTRRadius: isMobile,
    },
    {
      alt: 'Media TCH',
      imageUrl: '/images/media/tch.png',
      withBorderTRRadius: isSmallTablet,
    },
    {
      alt: 'Media DOU',
      imageUrl: '/images/media/dou.png',
      withBorderBRRadius: isTablet || isDesktop || isLarge,
      withBorderTRRadius: isTablet || isDesktop || isLarge,
    },
    {
      alt: 'Media Suspilne Kharkiv',
      imageUrl: '/images/media/suspilne_kharkiv.png',
      withBorderBLRadius: isTablet || isDesktop || isLarge,
      withBorderBRRadius: isLargeTablet || isBigDesktop,
      withBorderTRRadius: isLargeTablet || isBigDesktop,
    },
    {
      alt: 'Media Suspilne News',
      imageUrl: '/images/media/suspilne_news.png',
      withBorderBLRadius: isLargeTablet,
      withBorderBRRadius: isMobile || isSmallTablet,
    },
    {
      alt: 'Media Freedom',
      imageUrl: '/images/media/freedom.png',
      withBorderBLRadius: isMobile || isSmallTablet,
      withBorderBRRadius: true,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 40, mb: 20 }}>
      <Grid container>
        <Grid item xs={12} lg={4}>
          <Typography variant="h2" sx={{ mb: { xs: 5, md: 10 } }}>
            {t('homePage.mediaSection.title')}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Grid container sx={{ ml: 0.25, mt: 0.25, pr: { xs: 0.1, sm: 0 } }}>
            {mediaContents.map((media) => (
              <Grid item key={media.alt}>
                <MediaDesk
                  alt={media.alt}
                  imageUrl={media.imageUrl}
                  withBorderBLRadius={media.withBorderBLRadius}
                  withBorderBRRadius={media.withBorderBRRadius}
                  withBorderTLRadius={media.withBorderTLRadius}
                  withBorderTRRadius={media.withBorderTRRadius}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

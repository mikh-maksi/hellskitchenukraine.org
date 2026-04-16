import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
/* eslint-disable import/no-unresolved */
import { SwiperSlide } from 'swiper/react';

import { ImageComponent } from '../ImageComponent';
import SwiperSlider from '../Slider';

import styles from './styles.module.css';

const slidersUrl: string[] = [
  '/recognitionImage1.png',
  '/recognitionImage2.png',
  '/recognitionImage3.png',
  '/recognitionImage4.png',
  '/recognitionImage5.png',
  '/recognitionImage6.png',
  '/recognitionImage7.png',
];

export const RewardsSection: React.FC = () => {
  const { t } = useTranslation();
  const theme: Theme = useTheme();

  const isDesktop: boolean = useMediaQuery(theme.breakpoints.up('sm'));

  const sliderImgBasePath: string = `/images/rewardsSection/${isDesktop ? 'web' : 'mobile'}`;

  return (
    <Box
      sx={{ pb: 40, pt: 15 }}
      style={{ background: theme.palette.lightBlue }}
    >
      <Container maxWidth="lg" style={{ overflow: 'hidden' }}>
        <SwiperSlider
          breakpoints={{
            [theme.breakpoints.values.xs]: {
              slidesPerView: 2.5,
            },
            [theme.breakpoints.values.sm]: {
              slidesPerView: 3.5,
            },
            [theme.breakpoints.values.md]: {
              slidesPerView: 2.5,
            },
            [theme.breakpoints.values.lg]: {
              slidesPerView: 3.5,
            },
            [theme.breakpoints.values.xl]: {
              slidesPerView: 4.3,
            },
          }}
          navigation
          loop
          title={t('homePage.rewardsSection.title')}
          className={styles.slider}
        >
          {slidersUrl.map((imageUrl: string) => (
            <SwiperSlide key={`${sliderImgBasePath}${imageUrl}`}>
              <Box
                sx={{
                  alignContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <ImageComponent
                  alt={t(`${imageUrl}`)}
                  src={`${sliderImgBasePath}${imageUrl}`}
                />
              </Box>
            </SwiperSlide>
          ))}
        </SwiperSlider>
      </Container>
    </Box>
  );
};

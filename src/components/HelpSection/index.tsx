import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Grid,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
/* eslint-disable import/no-unresolved */
import { SwiperSlide } from 'swiper/react';

/* eslint-enable import/no-unresolved */
import { ImageCard } from '../ImageCard';
import { ImageComponent } from '../ImageComponent';
import SwiperSlider from '../Slider';

import styles from './styles.module.css';

interface CardContent {
  localizationPath: string;
  imageUrl: string;
}

interface SliderContent {
  text: string;
  imageUrl: string;
}

const slidersContent: SliderContent[] = [
  {
    text: 'homePage.helpSection.sliders.psychiatricClinic3',
    imageUrl: '/pic_help.png',
  },
  {
    text: 'homePage.helpSection.sliders.holyTrinity',
    imageUrl: '/pic_help-1.png',
  },
  {
    text: 'homePage.helpSection.sliders.clinic4',
    imageUrl: '/pic_help-2.png',
  },
  {
    text: 'homePage.helpSection.sliders.childrensHospice',
    imageUrl: '/pic_help-3.png',
  },
  {
    text: 'homePage.helpSection.sliders.mentalHealthClinic',
    imageUrl: '/pic_help-4.png',
  },
  {
    text: 'homePage.helpSection.sliders.stateEmergencyService',
    imageUrl: '/pic_help-5.png',
  },
  {
    text: 'homePage.helpSection.sliders.kononenkoClinic',
    imageUrl: '/pic_help-6.png',
  },
  {
    text: 'homePage.helpSection.sliders.sytenkoInstitute',
    imageUrl: '/pic_help-7.png',
  },
];

const cardContent: CardContent[] = [
  {
    localizationPath: 'homePage.helpSection.section1',
    imageUrl: '/images/helpSection/image67.png',
  },
  {
    localizationPath: 'homePage.helpSection.section2',
    imageUrl: '/images/helpSection/image68.png',
  },
  {
    localizationPath: 'homePage.helpSection.section3',
    imageUrl: '/images/helpSection/image69.png',
  },
];

export const HelpSection: FC = () => {
  const { t } = useTranslation();
  const theme: Theme = useTheme();
  const isDesktop: boolean = useMediaQuery(theme.breakpoints.up('sm'));

  const sliderImgBasePath: string = `/images/logos/${isDesktop ? 'web' : 'mobile'}`;

  const renderCard: FC<CardContent> = ({
    localizationPath,
    imageUrl,
  }: CardContent) => (
    <Grid item xs={12} sm={6} md={4} key={t(`${localizationPath}.title`)}>
      <ImageCard
        title={t(`${localizationPath}.title`)}
        imageUrl={imageUrl}
        text={t(`${localizationPath}.text`)}
        withBorder
      />
    </Grid>
  );

  return (
    <Box
      className={styles.section}
      style={{ background: theme.palette.lightBlue }}
    >
      <Container maxWidth="lg" style={{ overflow: 'hidden' }}>
        <SwiperSlider
          breakpoints={{
            [theme.breakpoints.values.xs]: {
              slidesPerView: 2.5,
            },
            [theme.breakpoints.values.sm]: {
              slidesPerView: 3.2,
            },
            [theme.breakpoints.values.md]: {
              slidesPerView: 4,
            },
            [theme.breakpoints.values.lg]: {
              slidesPerView: 6,
            },
            [theme.breakpoints.values.xl]: {
              slidesPerView: 7,
            },
          }}
          navigation
          loop
          title={t('homePage.helpSection.slidersTitle')}
          className={styles.slider}
          spaceBetween={16}
        >
          {slidersContent.map(({ text, imageUrl }: SliderContent) => (
            <SwiperSlide key={text}>
              <Box
                sx={{
                  alignContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <ImageComponent
                  alt={t(`${text}`)}
                  src={`${sliderImgBasePath}${imageUrl}`}
                />
                <Typography variant="body1" sx={{ mt: 3, textAlign: 'center' }}>
                  {t(`${text}`)}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </SwiperSlider>
        <Grid container spacing={2}>
          {cardContent.map(renderCard)}
        </Grid>
      </Container>
    </Box>
  );
};
export default HelpSection;

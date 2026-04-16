import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  CardActions,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { ButtonComponent, ButtonSize } from '../ButtonComponent';
import { NewsComponent, NewsComponentSize } from '../NewsComponent';

interface ContentItem {
  datePath: string;
  imgPath?: string;
  imgMobPath?: string;
  size?: NewsComponentSize;
  titlePath: string;
}
interface NewsSectionProps {}

export const NewsSection: React.FC<NewsSectionProps> = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const content: ContentItem[] = [
    {
      datePath: 'homePage.newsSection.section1.date',
      titlePath: 'homePage.newsSection.section1.title',
    },
    {
      datePath: 'homePage.newsSection.section2.date',
      titlePath: 'homePage.newsSection.section2.title',
    },
    {
      datePath: 'homePage.newsSection.section3.date',
      imgMobPath: 'images/newsSection/mob/news3.jpg',
      imgPath: 'images/newsSection/web/news3.jpg',
      size: NewsComponentSize.medium,
      titlePath: 'homePage.newsSection.section3.title',
    },
    {
      datePath: 'homePage.newsSection.section4.date',
      imgMobPath: 'images/newsSection/mob/news4.jpg',
      imgPath: 'images/newsSection/web/news4.jpg',
      size: NewsComponentSize.large,
      titlePath: 'homePage.newsSection.section4.title',
    },
  ];

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const renderContentItem = (index: number) => (
    <Box key={t(content[index].titlePath)} sx={{ pb: 3 }}>
      <NewsComponent
        date={t(content[index].datePath)}
        imgMobPath={content[index].imgMobPath}
        imgPath={content[index].imgPath}
        size={content[index].size}
        title={t(content[index].titlePath)}
      />
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: isDesktop ? 16 : 8 }}>
      <Grid alignItems="center" container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h2" sx={{ mb: isDesktop ? 10 : 5 }}>
            {t(`homePage.newsSection.title`)}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {renderContentItem(0)}
              {renderContentItem(1)}
              {renderContentItem(2)}
            </Grid>
            <Grid item xs={12} md={6}>
              {renderContentItem(3)}
            </Grid>
          </Grid>
          <CardActions sx={{ mt: isDesktop ? 5 : 2 }}>
            <ButtonComponent
              size={ButtonSize.large}
              textButton={t('homePage.newsSection.buttonText')}
              withRightArrow
            />
          </CardActions>
        </Grid>
      </Grid>
    </Container>
  );
};

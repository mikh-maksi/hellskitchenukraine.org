import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

import { AboutUsSection } from '../../components/AboutUsSection';
import { BannerSection } from '../../components/BannerSection';
import { DonateSection } from '../../components/DonateSection';
import { MediaContent } from '../../components/MediaContent';
import TeamSection from '../../components/TeamSection';
import { withHeaderFooter } from '../../hoc/withHeaderFooter';

interface ProjectsProps {
  isBlue?: boolean;
}

const Projects: React.FC<ProjectsProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <TeamSection />
      <AboutUsSection
        alt="About us"
        buttonText={t('homePage.aboutUs.buttonText')}
        copies={[t('homePage.aboutUs.copy'), t('homePage.aboutUs.copy2')]}
        imagePath="/images/aboutUsSection/web/photo_about_us.png"
        imageMobPath="/images/aboutUsSection/mob/photo_about_us.png"
        label={t('homePage.aboutUs.label')}
        title={t('homePage.aboutUs.title')}
      />
      <MediaContent />
      <Box sx={{ pt: 20, pb: 30 }}>
        <BannerSection
          imageMobPath="images/bannerSection/mob/emblem.jpg"
          imagePath="images/bannerSection/web/emblem.jpg"
          localizationPath="homePage.bannerSection.section2"
        />
      </Box>
      <DonateSection />
    </>
  );
};

export default withHeaderFooter(Projects);

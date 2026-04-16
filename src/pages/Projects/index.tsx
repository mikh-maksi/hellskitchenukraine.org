import React, { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Tab, Tabs, useTheme } from '@mui/material';

import { AboutUsSection } from '../../components/AboutUsSection';
import { BannerSection } from '../../components/BannerSection';
import { CoordinatorSection } from '../../components/CoordinatorSection';
import { DonateSection } from '../../components/DonateSection';
import { ProjectsMainSection } from '../../components/ProjectsMainSection';
import { a11yProps, TabsComponent } from '../../components/TabsComponent';
import { withHeaderFooter } from '../../hoc/withHeaderFooter';

interface ProjectsProps {
  isBlue?: boolean;
}

const Projects: React.FC<ProjectsProps> = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const { t } = useTranslation();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabStyle = { textTransform: 'none' } as CSSProperties;

  return (
    <Box sx={{ background: theme.palette.blueGradient, width: '100%' }}>
      <Container maxWidth="lg">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            aria-label="Projects tabs"
            onChange={handleChange}
            value={value}
            variant="scrollable"
          >
            <Tab
              label={t('projectsPage.tab1.label')}
              style={tabStyle}
              {...a11yProps(0)}
            />
            <Tab
              label={t('projectsPage.tab2.label')}
              style={tabStyle}
              {...a11yProps(1)}
            />
            <Tab
              label={t('projectsPage.tab3.label')}
              style={tabStyle}
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabsComponent index={0} value={value}>
          <ProjectsMainSection
            buttonText={t('projectsPage.tab1.mainSection.buttonText')}
            copies={[
              t('projectsPage.tab1.mainSection.copy1'),
              t('projectsPage.tab1.mainSection.copy2'),
              t('projectsPage.tab1.mainSection.copy3'),
              t('projectsPage.tab1.mainSection.copy4'),
            ]}
            title={t('projectsPage.tab1.mainSection.title')}
          />
          <CoordinatorSection
            imagePath="/images/coordinatorSection/web/tab1.png"
            imageMobPath="/images/coordinatorSection/mob/tab1.jpg"
            label={t('projectsPage.tab1.coordinator.label')}
            photoPath="/images/coordinatorSection/web/photo1.png"
            photoMobPath="/images/coordinatorSection/mob/photo1.png"
            title={t('projectsPage.tab1.coordinator.title')}
          />
          <Box
            sx={{
              background: theme.palette.white,
              pt: { xs: 4, sm: 18, md: 30 },
              ml: '50%',
              width: '100vw',
            }}
            style={{ overflow: 'hidden', transform: 'translateX(-50%)' }}
          >
            <AboutUsSection
              alt="About us"
              buttonText={t('homePage.tab1.aboutUs.buttonText')}
              copies={[t('projectsPage.tab1.aboutUs.copy1')]}
              imagePath="/images/aboutUsSection/web/tab1.png"
              imageMobPath="/images/aboutUsSection/mob/tab1.png"
              label={t('projectsPage.tab1.aboutUs.label')}
              title={t('projectsPage.tab1.aboutUs.title')}
            />
          </Box>
          <Box sx={{ pt: 20, pb: 30 }}>
            <BannerSection
              imageMobPath="images/bannerSection/mob/window.jpg"
              imagePath="images/bannerSection/web/window.jpg"
              localizationPath="homePage.bannerSection.section1"
            />
          </Box>
        </TabsComponent>
        <TabsComponent value={value} index={1}>
          <ProjectsMainSection
            buttonText={t('projectsPage.tab2.mainSection.buttonText')}
            copies={[
              t('projectsPage.tab2.mainSection.copy1'),
              t('projectsPage.tab2.mainSection.copy2'),
              t('projectsPage.tab2.mainSection.copy3'),
              t('projectsPage.tab2.mainSection.copy4'),
            ]}
            title={t('projectsPage.tab2.mainSection.title')}
          />
          <CoordinatorSection
            imagePath="/images/coordinatorSection/web/tab2.png"
            imageMobPath="/images/coordinatorSection/mob/tab2.jpg"
            label={t('projectsPage.tab2.coordinator.label')}
            photoPath="/images/coordinatorSection/web/photo2.png"
            photoMobPath="/images/coordinatorSection/mob/photo2.png"
            title={t('projectsPage.tab2.coordinator.title')}
          />
          <Box
            sx={{
              background: theme.palette.white,
              pt: { xs: 4, sm: 18, md: 30 },
              ml: '50%',
              width: '100vw',
            }}
            style={{ overflow: 'hidden', transform: 'translateX(-50%)' }}
          >
            <AboutUsSection
              alt="About us"
              buttonText={t('homePage.aboutUs.buttonText')}
              copies={[
                t('projectsPage.tab2.aboutUs.copy1'),
                t('projectsPage.tab2.aboutUs.copy2'),
              ]}
              imagePath="/images/aboutUsSection/web/tab2.png"
              imageMobPath="/images/aboutUsSection/mob/tab2.png"
              label={t('projectsPage.tab2.aboutUs.label')}
              title={t('projectsPage.tab2.aboutUs.title')}
            />
          </Box>
          <Box sx={{ pt: 20, pb: 30 }}>
            <BannerSection
              imageMobPath="images/bannerSection/mob/emblem.jpg"
              imagePath="images/bannerSection/web/emblem.jpg"
              localizationPath="homePage.bannerSection.section2"
            />
          </Box>
        </TabsComponent>
        <TabsComponent value={value} index={2}>
          <ProjectsMainSection
            buttonText={t('projectsPage.tab3.mainSection.buttonText')}
            copies={[]}
            title={t('projectsPage.tab3.mainSection.title')}
          />
          <CoordinatorSection
            imagePath="/images/coordinatorSection/web/tab3.jpg"
            imageMobPath="/images/coordinatorSection/mob/tab3.jpg"
            label={t('projectsPage.tab3.coordinator.label')}
            photoPath="/images/coordinatorSection/web/photo3.png"
            photoMobPath="/images/coordinatorSection/mob/photo3.png"
            title={t('projectsPage.tab3.coordinator.title')}
          />
          <Box
            sx={{
              background: theme.palette.white,
              pt: { xs: 4, sm: 18, md: 30 },
              ml: '50%',
              width: '100vw',
            }}
            style={{ overflow: 'hidden', transform: 'translateX(-50%)' }}
          >
            <AboutUsSection
              alt="About us"
              buttonText={t('homePage.aboutUs.buttonText')}
              copies={[
                t('projectsPage.tab3.aboutUs.copy1'),
                t('projectsPage.tab3.aboutUs.copy2'),
              ]}
              imagePath="/images/aboutUsSection/web/tab3.png"
              imageMobPath="/images/aboutUsSection/mob/tab3.png"
              label={t('projectsPage.tab3.aboutUs.label')}
              title={t('projectsPage.tab3.aboutUs.title')}
            />
          </Box>
          <Box sx={{ pt: 20, pb: 30 }}>
            <BannerSection
              imageMobPath="images/bannerSection/mob/window.jpg"
              imagePath="images/bannerSection/web/window.jpg"
              localizationPath="homePage.bannerSection.section1"
            />
          </Box>
        </TabsComponent>
      </Container>
      <DonateSection />
    </Box>
  );
};

export default withHeaderFooter(Projects);

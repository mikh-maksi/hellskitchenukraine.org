import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Grid, Typography } from '@mui/material';

import TeamMemberCard from '../TeamMemberCard';

interface Socials {
  facebookLink?: string;
  instagramLink?: string;
  linkedInLink?: string;
}

interface TeamMember {
  localizationPath: string;
  photoUrl: string;
  socials: Socials;
}

const teamMembers: TeamMember[] = [
  {
    localizationPath: 'aboutPage.teamSection.section1',
    photoUrl: '/images/ourTeam/egor.png',
    socials: {
      facebookLink: 'https://www.facebook.com/material.ui/',
      instagramLink: 'https://www.instagram.com/',
      linkedInLink: 'https://www.linkedin.com/feed/',
    },
  },
  {
    localizationPath: 'aboutPage.teamSection.section2',
    photoUrl: '/images/ourTeam/gnat.png',
    socials: {
      facebookLink: 'https://www.facebook.com/material.ui/',
      instagramLink: 'https://www.instagram.com/',
      linkedInLink: 'https://www.linkedin.com/feed/',
    },
  },
  {
    localizationPath: 'aboutPage.teamSection.section3',
    photoUrl: '/images/ourTeam/luda.png',
    socials: {
      facebookLink: 'https://www.facebook.com/material.ui/',
      instagramLink: 'https://www.instagram.com/',
      linkedInLink: 'https://www.linkedin.com/feed/',
    },
  },
  {
    localizationPath: 'aboutPage.teamSection.section4',
    photoUrl: '',
    socials: {
      facebookLink: 'https://www.facebook.com/material.ui/',
      instagramLink: 'https://www.instagram.com/',
      linkedInLink: 'https://www.linkedin.com/feed/',
    },
  },
  {
    localizationPath: 'aboutPage.teamSection.section5',
    photoUrl: '',
    socials: {
      facebookLink: 'https://www.facebook.com/material.ui/',
      instagramLink: 'https://www.instagram.com/',
      linkedInLink: 'https://www.linkedin.com/feed/',
    },
  },
  {
    localizationPath: 'aboutPage.teamSection.section6',
    photoUrl: '',
    socials: {
      facebookLink: 'https://www.facebook.com/material.ui/',
      instagramLink: 'https://www.instagram.com/',
      linkedInLink: 'https://www.linkedin.com/feed/',
    },
  },
];

const TeamSection: FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: 16 }}>
      <Typography variant="h3" gutterBottom sx={{ mb: '90px' }}>
        {t('aboutPage.teamSection.title.label')}
      </Typography>
      <Grid container spacing={2}>
        {teamMembers.map(({ localizationPath, photoUrl, socials }) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            key={t(`${localizationPath}.name`)}
          >
            <TeamMemberCard
              facebookLink={socials.facebookLink}
              instagramLink={socials.instagramLink}
              linkedInLink={socials.linkedInLink}
              name={t(`${localizationPath}.name`)}
              photoUrl={photoUrl}
              position={t(`${localizationPath}.position`)}
              text={t(`${localizationPath}.text`)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TeamSection;

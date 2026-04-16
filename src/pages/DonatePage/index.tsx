import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';

import { DonateSection } from '../../components/donate/DonateSection';
import { withHeaderFooter } from '../../hoc/withHeaderFooter';

const DonatePage: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        background: theme.palette.yellowBlueGradient,
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={4}
          sx={{
            py: { xs: 6, md: 10 },
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Box sx={{ maxWidth: '800px' }}>
            <Typography
              variant="h3" // Трохи збільшив для акценту, як на дизайні
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              {t('donatePage.page.title')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                opacity: 0.8,
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              {t('donatePage.page.description')}
            </Typography>
          </Box>

          <Box sx={{ width: '100%' }}>
            <DonateSection />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default withHeaderFooter(DonatePage);

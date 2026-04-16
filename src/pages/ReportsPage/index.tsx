import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';

import { ReportsList } from '../../components/ReportList/ReportsList';
import { withHeaderFooter } from '../../hoc/withHeaderFooter';

const ReportsPage: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        background: theme.palette.yellowBlueGradient,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} sx={{ py: { xs: 4, md: 6 } }}>
          <Box>
            <Typography variant="h4" gutterBottom>
              {t('reportsPage.page.title')}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              {t('reportsPage.page.descriptionText')}
            </Typography>
          </Box>

          <ReportsList />
        </Stack>
      </Container>
    </Box>
  );
};

export default withHeaderFooter(ReportsPage);

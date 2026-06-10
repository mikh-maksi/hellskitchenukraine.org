import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

import { QrCard } from './QrCard';

export const DonateQrBlock = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 6 },
          textAlign: 'center',
          fontWeight: 800,
          fontSize: { xs: '1.75rem', md: '2.125rem' },
        }}
      >
        {t('donatePage.qr.title')}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row', lg: 'column' },
          gap: { xs: 3, md: 4, lg: 3 },
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <QrCard title={t('donatePage.qr.privat')} img="/qr/privat.png" />
        <QrCard title={t('donatePage.qr.mono')} isPlaceholder />
      </Box>
    </Box>
  );
};

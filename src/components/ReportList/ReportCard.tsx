import React from 'react';
import { useTranslation } from 'react-i18next';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import {
  Button,
  Card,
  CardContent,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';

import type { ReportType } from './reportTypes/report';

interface ReportCardProps {
  year: number;
  reports: {
    activity?: string;
    financial?: string;
  };
}

export const ReportCard: React.FC<ReportCardProps> = ({ year, reports }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const renderButton = (
    type: ReportType,
    label: string,
    icon: React.ReactNode,
  ) => {
    const filePath = reports[type];
    if (!filePath) {
      return (
        <Tooltip title={t('reportsPage.card.comingSoon')}>
          <span>
            <Button
              variant="outlined"
              disabled
              startIcon={icon}
              sx={{ textTransform: 'none' }}
            >
              {t('reportsPage.card.inProgress')}
            </Button>
          </span>
        </Tooltip>
      );
    }

    const href = `/${filePath}`;

    return (
      <Button
        variant="outlined"
        color="primary"
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        startIcon={icon}
        sx={{ textTransform: 'none' }}
      >
        {label}
      </Button>
    );
  };

  return (
    <Card
      elevation={0}
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        backgroundColor: theme.palette.white,
        backdropFilter: 'blur(2px)',
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {year} {t('reportsPage.card.year')}
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          {renderButton(
            'activity',
            t('reportsPage.card.activity'),
            <DescriptionOutlinedIcon />,
          )}

          {renderButton(
            'financial',
            t('reportsPage.card.financial'),
            <AccountBalanceOutlinedIcon />,
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

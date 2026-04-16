import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ResultsData } from '../types';

import styles from './styles.module.css';

export interface ResultContentProps extends ResultsData {}
export const ResultContent: FC<ResultContentProps> = ({
  data,
  description,
  imageUrl,
}: ResultContentProps) => {
  const { t } = useTranslation();
  const theme: Theme = useTheme();
  const isDesktop: boolean = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box className={styles.container}>
      <img alt={t(description)} className={styles.icon} src={imageUrl} />
      <Typography
        style={{
          color: theme.palette.blue,
          fontSize: isDesktop ? '64px' : '48px',
          fontWeight: theme.typography.fontWeightBold,
        }}
      >
        {data}
      </Typography>
      <Typography paragraph variant="body1">
        {t(description)}
      </Typography>
    </Box>
  );
};
export default ResultContent;

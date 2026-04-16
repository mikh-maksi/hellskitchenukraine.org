import React, { useMemo } from 'react';
import { Stack } from '@mui/material';

import { ReportCard } from './ReportCard';
import { reportsData } from './reportTypes/report';

export const ReportsList: React.FC = () => {
  const years = useMemo(
    () =>
      Object.keys(reportsData)
        .map(Number)
        .sort((a, b) => b - a),
    [],
  );

  return (
    <Stack spacing={3}>
      {years.map((year) => (
        <ReportCard key={year} year={year} reports={reportsData[year]} />
      ))}
    </Stack>
  );
};

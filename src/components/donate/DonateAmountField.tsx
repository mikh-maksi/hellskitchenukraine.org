import React from 'react';
import { Box, InputBase, Stack, Typography, useTheme } from '@mui/material';

interface DonateAmountFieldProps {
  amount: string;
  currency: 'UAH';
  onAmountChange: (value: string) => void;
  error?: boolean;
}

export const DonateAmountField: React.FC<DonateAmountFieldProps> = ({
  amount,
  currency,
  onAmountChange,
  error = false,
}) => {
  const theme = useTheme();

  const formatDisplay = (val: string) =>
    val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  const handleAmountChange = (value: string) => {
    const rawValue = value.replace(/\s/g, '');
    if (!/^\d*$/.test(rawValue)) return;

    if (rawValue.length <= 7) {
      onAmountChange(rawValue);
    }
  };

  return (
    <Box
      sx={{
        py: 1.5,
        mb: 3,
        borderBottom: `1px dotted ${error ? theme.palette.error.main : 'rgba(0,0,0,0.2)'}`,
        transition: '0.2s',
        '&:focus-within': {
          borderBottomStyle: 'solid',
          borderBottomColor: 'common.black',
        },
      }}
    >
      <Stack direction="row" alignItems="flex-end" width="100%" spacing={1}>
        <InputBase
          fullWidth
          value={formatDisplay(amount)}
          placeholder="0"
          inputMode="numeric"
          onChange={(e) => handleAmountChange(e.target.value)}
          sx={{
            fontSize:
              amount.length > 5 ? { xs: 32, sm: 48 } : { xs: 48, sm: 64 },
            fontWeight: 800,
            transition: 'font-size 0.2s ease',
            '& input': { px: 0 },
          }}
        />

        <Typography
          variant="h4"
          fontWeight={800}
          sx={{
            color: 'text.primary',
            minWidth: 'fit-content',
          }}
        >
          {currency}
        </Typography>
      </Stack>
    </Box>
  );
};

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Button, Container, Typography, useTheme } from '@mui/material';

import { PaymentDetails } from '../../components/PaymentDetails/PaymentDetails';
import { withHeaderFooter } from '../../hoc/withHeaderFooter';
import { WAYFORPAY_REASON_CODES } from '../../utils/payment-errors';

const ThankYouPageComponent: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [copied, setCopied] = useState(false);

  const status = searchParams.get('status');
  const isSuccess = status === 'success';
  const orderId = searchParams.get('order');
  const amount = searchParams.get('amount');
  const currency = searchParams.get('currency');
  const reasonCode = searchParams.get('reason') || 'unknown';

  const isPending = reasonCode === '1101';

  let titleKey = 'payment.errorTitle';
  let descKey = 'payment.errorDesc';
  let primaryBtnKey = 'payment.btnRetry';

  if (isSuccess) {
    titleKey = 'payment.successTitle';
    descKey = 'payment.successDesc';
    primaryBtnKey = 'payment.btnMain';
  } else if (isPending) {
    titleKey = 'payment.pendingTitle';
    descKey = 'payment.pendingDesc';
    primaryBtnKey = 'payment.btnMain';
  }

  const reasonKey = isSuccess
    ? undefined
    : WAYFORPAY_REASON_CODES[reasonCode] || WAYFORPAY_REASON_CODES.unknown;

  const handleCopy = () => {
    if (orderId) {
      navigator.clipboard.writeText(orderId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getStatusIcon = () => {
    if (isSuccess) {
      return (
        <CheckCircleOutlineIcon
          sx={{ fontSize: 70, color: 'success.main', mb: 2 }}
        />
      );
    }
    if (isPending) {
      return (
        <AccessTimeIcon sx={{ fontSize: 70, color: 'warning.main', mb: 2 }} />
      );
    }
    return (
      <ErrorOutlineIcon sx={{ fontSize: 70, color: 'error.main', mb: 2 }} />
    );
  };

  return (
    <Box
      sx={{
        background: theme.palette.yellowBlueGradient,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ py: { xs: 6, sm: 10 }, textAlign: 'center' }}>
          <Box sx={{ mb: 3 }}>
            {getStatusIcon()}

            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {t(titleKey)}
            </Typography>

            <Typography
              variant="body1"
              sx={{ mt: 1, color: 'text.secondary', px: 2 }}
            >
              {t(descKey)}
            </Typography>
          </Box>

          <PaymentDetails
            isSuccess={isSuccess}
            isPending={isPending}
            orderId={orderId}
            amount={amount}
            currency={currency}
            reasonText={reasonKey ? t(reasonKey) : undefined}
            onCopy={handleCopy}
            copied={copied}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
            }}
          >
            <Button
              component={RouterLink}
              to="/"
              variant="contained"
              size="large"
              sx={{ minWidth: 200, py: 1.5 }}
            >
              {t(primaryBtnKey)}
            </Button>

            {!isSuccess && !isPending && (
              <Button
                component={RouterLink}
                to="/"
                variant="outlined"
                size="large"
                sx={{ minWidth: 200 }}
              >
                {t('payment.btnBack')}
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export const SuccessPage = withHeaderFooter(ThankYouPageComponent);

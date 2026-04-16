import React from 'react';
import { useTranslation } from 'react-i18next';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
  alpha,
  Box,
  Divider,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';

interface PaymentDetailsProps {
  isSuccess: boolean;
  isPending?: boolean;
  orderId: string | null;
  amount: string | null;
  currency: string | null;
  reasonText?: string;
  onCopy: () => void;
  copied: boolean;
}

export const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  isSuccess,
  isPending,
  orderId,
  amount,
  currency,
  reasonText,
  onCopy,
  copied,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const getStatusColor = () => {
    if (isSuccess) return theme.palette.success.main;
    if (isPending) return theme.palette.warning.main;
    return theme.palette.error.main;
  };

  const getStatusText = () => {
    if (isSuccess) return t('payment.statusSuccess');
    if (isPending) return t('payment.statusPending');
    return t('payment.statusError');
  };

  const statusColor = getStatusColor();

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, sm: 4 },
        mb: 4,
        textAlign: 'left',
        borderRadius: 5,
        position: 'relative',
        overflow: 'hidden',

        background: `linear-gradient(135deg, ${alpha('#ffffff', 0.7)} 0%, ${alpha('#ffffff', 0.4)} 100%)`,
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        border: '1px solid',
        borderColor: alpha('#ffffff', 0.5),
        boxShadow: `
          0 4px 24px -1px ${alpha('#000', 0.05)},
          0 20px 40px -8px ${alpha(theme.palette.primary.main, 0.12)}
        `,

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: `linear-gradient(180deg, ${alpha('#fff', 0.4)} 0%, transparent 100%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          color: 'text.secondary',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: 1.5,
          fontSize: '0.65rem',
          mb: 3,
          opacity: 0.8,
        }}
      >
        {t('payment.detailsTitle')}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            color: alpha(theme.palette.text.primary, 0.7),
          }}
        >
          {t('payment.statusLabel')}
        </Typography>
        <Box
          sx={{
            fontWeight: 800,
            color: statusColor,
            px: 2,
            py: 0.7,
            borderRadius: '12px',
            fontSize: '0.75rem',
            letterSpacing: 0.5,
            bgcolor: alpha(statusColor, 0.12),
            border: '1px solid',
            borderColor: alpha(statusColor, 0.2),
            boxShadow: `0 4px 12px ${alpha(statusColor, 0.1)}`,
            textTransform: 'uppercase',
          }}
        >
          {getStatusText()}
        </Box>
      </Box>

      {!isSuccess && reasonText && (
        <Box
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 3,
            bgcolor: alpha(statusColor, 0.05),
            borderLeft: `4px solid ${statusColor}`,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: statusColor,
              fontWeight: 700,
              display: 'block',
              mb: 0.5,
              textTransform: 'uppercase',
            }}
          >
            {t('payment.reasonLabel')}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'text.primary', fontWeight: 600 }}
          >
            {reasonText}
          </Typography>
        </Box>
      )}

      {amount && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            mb: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: alpha(theme.palette.text.primary, 0.6),
            }}
          >
            {t('payment.amountLabel')}
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                lineHeight: 1,
                background: `linear-gradient(45deg, ${theme.palette.text.primary} 30%, ${alpha(theme.palette.text.primary, 0.7)} 90%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {amount}
              <Typography
                component="span"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  ml: 0.5,
                  WebkitTextFillColor: 'initial',
                  color: 'text.secondary',
                }}
              >
                {currency}
              </Typography>
            </Typography>
          </Box>
        </Box>
      )}

      <Divider
        sx={{ my: 3, borderColor: alpha(theme.palette.common.black, 0.06) }}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: alpha('#000', 0.04),
          p: 2,
          borderRadius: 4,
          transition: 'all 0.2s',
          '&:hover': { bgcolor: alpha('#000', 0.06) },
        }}
      >
        <Box>
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              fontWeight: 700,
              display: 'block',
              mb: 0.5,
            }}
          >
            {t('payment.orderLabel')}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Monospace',
              fontWeight: 700,
              letterSpacing: 0.5,
            }}
          >
            {orderId || '—'}
          </Typography>
        </Box>
        {orderId && (
          <Tooltip
            title={copied ? t('payment.copied') : t('payment.copyTooltip')}
          >
            <IconButton
              onClick={onCopy}
              size="small"
              sx={{
                bgcolor: '#fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
                },
                transition: 'all 0.2s',
              }}
            >
              <ContentCopyIcon fontSize="small" sx={{ fontSize: 16 }} />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Paper>
  );
};

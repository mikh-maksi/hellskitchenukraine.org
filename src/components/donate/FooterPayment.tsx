import React from 'react';
import { Box, Container, Link, Stack, Typography } from '@mui/material';

const PAYMENT_LOGOS = [
  {
    name: 'Visa',
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
    height: 18,
  },
  {
    name: 'Mastercard',
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
    height: 28,
  },
  {
    name: 'WayForPay',
    src: 'https://wayforpay.com/img/wfp_logo.svg',
    height: 16,
  },
];

export const FooterPayment = () => (
  <Box
    component="footer"
    sx={{ py: 6, borderTop: '1px solid rgba(255,255,255,0.1)', mt: 'auto' }}
  >
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
      >
        {/* Юридичні посилання — ОБОВ'ЯЗКОВО для WayForPay */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 3 }}
          alignItems="center"
        >
          <Link
            href="/public-offer"
            sx={{
              color: 'text.secondary',
              fontSize: '13px',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main' },
            }}
          >
            Публічна оферта
          </Link>
          <Link
            href="/privacy-policy"
            sx={{
              color: 'text.secondary',
              fontSize: '13px',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main' },
            }}
          >
            Політика конфіденційності
          </Link>
          <Link
            href="/refund-policy"
            sx={{
              color: 'text.secondary',
              fontSize: '13px',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main' },
            }}
          >
            Умови повернення
          </Link>
        </Stack>

        {/* Платіжні логотипи */}
        <Stack direction="row" spacing={3} alignItems="center">
          {PAYMENT_LOGOS.map((logo) => (
            <Box
              key={logo.name}
              component="img"
              src={logo.src}
              alt={logo.name}
              sx={{
                height: logo.height,
                filter: 'grayscale(100%) opacity(0.6)',
                transition: '0.3s',
                '&:hover': { filter: 'grayscale(0%) opacity(1)' },
              }}
            />
          ))}
        </Stack>
      </Stack>

      <Typography
        variant="caption"
        display="block"
        textAlign="center"
        sx={{ mt: 4, opacity: 0.5, color: 'text.secondary' }}
      >
        © {new Date().getFullYear()} Благодійна Організація. Всі права
        захищені.
      </Typography>
    </Container>
  </Box>
);

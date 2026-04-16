import React from 'react';
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Grid,
  Link,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { LINKS } from '../../assets/constants';
import { ButtonComponent, ButtonSize, ButtonVariant } from '../ButtonComponent';
import { LanguageToggle } from '../LanguageToggle';
import { Logo } from '../Logo';
import { NAVIGATION_FOOTER_MENU } from '../Navigation/constants';
import { NavLink } from '../Navigation/NavLink';
import { SocialNavbar } from '../SocialNavbar';

export const Footer: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const isSmallTablet = useMediaQuery(theme.breakpoints.up(540));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isBigDesktop = useMediaQuery(theme.breakpoints.up(1280));

  const typographyStyles = { fontSize: 18 };

  const contactTextStyles = {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.2,
  };

  const complianceLinkStyles = {
    color: theme.palette.gray,
    textDecoration: 'none',
    fontSize: 14,
    transition: 'color 0.2s ease',
    '&:hover': { color: theme.palette.white, textDecoration: 'underline' },
  };

  const renderLine = () => (
    <Box
      sx={{
        borderBottom: `1px solid ${theme.palette.lightGray}`,
        width: '100%',
      }}
    />
  );

  const renderLogo = () => (
    <Box sx={{ minWidth: '164px', width: '164px' }}>
      <Logo isWhite />
    </Box>
  );

  const renderPaymentCompliance = () => (
    <Grid item xs={12} sx={{ mt: { xs: 4, md: 6 } }}>
      {renderLine()}
      <Stack spacing={4} sx={{ pt: 4, pb: 4 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 4 }}
            alignItems="center"
          >
            <Link
              href="/docs/public_offer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={complianceLinkStyles}
            >
              {t('footer.publicOffer')}
            </Link>
            <Link
              href="/docs/privacy_policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={complianceLinkStyles}
            >
              {t('footer.privacyPolicy')}
            </Link>
            <Link
              href="/docs/refund_policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={complianceLinkStyles}
            >
              {t('footer.refundPolicy')}
            </Link>
          </Stack>

          <Box
            component="img"
            src="/payment-icons/payment-image.png"
            alt="Payment Methods"
            sx={{
              height: 28,
              width: 'auto',
              filter: 'brightness(0) invert(1)',
              opacity: 0.6,
              objectFit: 'contain',
              transition: 'opacity 0.3s, filter 0.3s',
            }}
          />
        </Stack>

        <Typography
          variant="caption"
          sx={{
            color: theme.palette.gray,
            opacity: 0.6,
            textAlign: { xs: 'center', md: 'left' },
            fontSize: 11,
            lineHeight: 1.6,
            maxWidth: '1000px',
          }}
        >
          БЛАГОДІЙНА ОРГАНІЗАЦІЯ «БЛАГОДІЙНИЙ ФОНД «ПЕКЕЛЬНА КУХНЯ» | ЄДРПОУ:
          44662030 | Україна, 61070, м. Харків, вул. Академіка Проскури, буд 40,
          оф. 1
        </Typography>
      </Stack>
    </Grid>
  );

  const renderContactInfo = () => {
    const gridSizes = isBigDesktop ? { xs: 4 } : { xs: 12, md: 5 };
    return (
      <Grid item {...gridSizes} sx={{ mt: isBigDesktop ? 1 : 4 }}>
        <ButtonComponent
          size={ButtonSize.small}
          textButton={t('navigation.support')}
          variant={ButtonVariant.white}
          withRightArrow
        />

        <Typography
          component="a"
          href="tel:+380687512751"
          sx={{
            mt: 4,
            display: 'block',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'opacity 0.2s',
            '&:hover': { opacity: 0.7 },
            ...contactTextStyles,
          }}
        >
          +380 68 751 2 751
        </Typography>

        <Typography
          component="a"
          href="mailto:pekelna.kitchen@gmail.com"
          sx={{
            mt: 1.5,
            display: 'block',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'opacity 0.2s',
            '&:hover': { opacity: 0.7 },
            ...contactTextStyles,
          }}
        >
          pekelna.kitchen@gmail.com
        </Typography>

        <Typography
          variant="caption"
          sx={{ mt: 4, display: 'block', opacity: 0.5 }}
        >
          © 2024 Hell's Kitchen
        </Typography>
      </Grid>
    );
  };

  const renderMobile = () => {
    if (isSmallTablet) return null;
    return (
      <>
        <Grid item xs={6}>
          {renderLogo()}
        </Grid>
        <Grid item xs={6} sx={{ mt: 1, textAlign: 'end' }}>
          <LanguageToggle isDark />
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <SocialNavbar
            isWhite
            instagramLink={LINKS.instagramLink}
            facebookLink={LINKS.facebookLink}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          {renderLine()}
        </Grid>
        <Grid item xs={12} sx={{ ml: -1, mt: 3 }}>
          {NAVIGATION_FOOTER_MENU.map((path) => (
            <MenuItem key={path} sx={{ mb: 2 }}>
              <NavLink isWhite paragraphStyles={typographyStyles} path={path} />
            </MenuItem>
          ))}
        </Grid>
      </>
    );
  };

  const renderSmallTablet = () => {
    if (!isSmallTablet || isBigDesktop) return null;
    return (
      <>
        <Grid item xs={3}>
          {renderLogo()}
        </Grid>
        <Grid item xs={6} sx={{ mt: 1, textAlign: 'center' }}>
          <LanguageToggle isDark />
        </Grid>
        <Grid item xs={3} sx={{ mt: 3 }}>
          <SocialNavbar
            isWhite
            instagramLink={LINKS.instagramLink}
            facebookLink={LINKS.facebookLink}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          {renderLine()}
        </Grid>
        <Grid item xs={5} md={3.5} sx={{ ml: -1, mt: 3 }}>
          {NAVIGATION_FOOTER_MENU.slice(0, 4).map((path) => (
            <MenuItem key={path} sx={{ mb: 2 }}>
              <NavLink isWhite paragraphStyles={typographyStyles} path={path} />
            </MenuItem>
          ))}
        </Grid>
        <Grid item xs={7} md={3.5} sx={{ ml: 0, mt: 3 }}>
          {NAVIGATION_FOOTER_MENU.slice(4).map((path) => (
            <MenuItem key={path} sx={{ mb: 2 }}>
              <NavLink isWhite paragraphStyles={typographyStyles} path={path} />
            </MenuItem>
          ))}
        </Grid>
      </>
    );
  };

  const renderBigDesktop = () => {
    if (!isBigDesktop) return null;
    return (
      <>
        <Grid item xs={2.5} lg={3} xl={2.5}>
          {renderLogo()}
          <Box sx={{ mt: 6 }}>
            <LanguageToggle isDark />
          </Box>
          <Box sx={{ mt: 6 }}>
            <SocialNavbar
              isWhite
              instagramLink={LINKS.instagramLink}
              facebookLink={LINKS.facebookLink}
            />
          </Box>
        </Grid>
        <Grid item xs={2.5} lg={2} xl={2.5} sx={{ ml: -1, mt: 1 }}>
          {NAVIGATION_FOOTER_MENU.slice(0, 4).map((path) => (
            <MenuItem key={path} sx={{ mb: 2 }}>
              <NavLink isWhite paragraphStyles={typographyStyles} path={path} />
            </MenuItem>
          ))}
        </Grid>
        <Grid item xs={2.5} lg={3} sx={{ ml: 0, mt: 1 }}>
          {NAVIGATION_FOOTER_MENU.slice(4).map((path) => (
            <MenuItem key={path} sx={{ mb: 2 }}>
              <NavLink isWhite paragraphStyles={typographyStyles} path={path} />
            </MenuItem>
          ))}
        </Grid>
      </>
    );
  };

  return (
    <footer
      style={{
        backgroundColor: theme.palette.black,
        color: theme.palette.white,
      }}
    >
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Grid
          container
          justifyContent={isLarge ? 'start' : 'space-between'}
          spacing={2}
        >
          {renderMobile()}
          {renderSmallTablet()}
          {renderBigDesktop()}
          {renderContactInfo()}
          {renderPaymentCompliance()}
        </Grid>
      </Container>
      <Marquee style={{ backgroundColor: 'transparent', padding: '10px 0' }}>
        <Typography
          paragraph
          sx={{ color: theme.palette.darkYellow, mb: 0, fontSize: 14 }}
        >
          {t('navigation.textRibbon')}
        </Typography>
      </Marquee>
    </footer>
  );
};

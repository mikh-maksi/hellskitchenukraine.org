import React from 'react';
import {
  CircularProgress,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

interface AnnouncementSectionProps {
  inProgress?: boolean;
  text: string;
}

export const AnnouncementSection: React.FC<AnnouncementSectionProps> = ({
  inProgress = false,
  text,
}) => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isWideScreen = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Container
      maxWidth={isWideScreen ? 'xl' : undefined}
      sx={{ my: isDesktop ? 22 : 8 }}
    >
      <Grid alignItems="center" container justifyContent="center" spacing={2}>
        <Grid item>
          <Typography
            paragraph
            sx={{ display: 'inline-block', m: 0, textAlign: 'center' }}
          >
            {text}
          </Typography>
        </Grid>
      </Grid>
      {inProgress && (
        <Grid
          alignItems="center"
          container
          justifyContent="center"
          sx={{ mt: 6 }}
        >
          <Grid item>
            <CircularProgress color="inherit" />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

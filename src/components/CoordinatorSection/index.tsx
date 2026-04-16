import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { ImageComponent } from '../ImageComponent';

interface CoordinatorSectionProps {
  imageMobPath: string;
  imagePath: string;
  label: string;
  photoPath: string;
  photoMobPath: string;
  title: string;
}

export const CoordinatorSection: React.FC<CoordinatorSectionProps> = ({
  imageMobPath,
  imagePath,
  label,
  photoPath,
  photoMobPath,
  title,
}) => {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const getHeight = () => {
    if (isDesktop) return '800px';

    if (isTablet) return '400px';

    return '200px';
  };

  const getPhotoSize = () => {
    if (isDesktop) return '164px';

    if (isTablet) return '100px';

    return '64px';
  };

  const getBoxStyle = () =>
    ({
      background: `url(${isDesktop ? imagePath : imageMobPath}) right top`,
      backgroundSize: 'cover',
      height: getHeight(),
      overflow: 'hidden',
      margin: '0 auto',
    }) as React.CSSProperties;

  return (
    <Box sx={{ display: 'relative' }}>
      <Container
        sx={{
          color: theme.palette.white,
          position: 'absolute',
          px: 0,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      >
        <Box style={getBoxStyle()}>
          <Container sx={{ mt: { xs: 14, sm: 36, md: 76 } }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Box
                  sx={{
                    bgcolor: theme.palette.darkYellow,
                    borderRadius: '50%',
                  }}
                >
                  <ImageComponent
                    alt="manager photo"
                    style={{
                      height: getPhotoSize(),
                      width: getPhotoSize(),
                    }}
                    src={isTablet ? photoPath : photoMobPath}
                  />
                </Box>
              </Grid>
              <Grid item xs={8.5}>
                <Typography variant="h5" sx={{ mb: { xs: 0, sm: 1 } }}>
                  {title}
                </Typography>
                <Typography>{label}</Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

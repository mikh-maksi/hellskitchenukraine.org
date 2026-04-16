import React from 'react';
import { Box, CardMedia, useMediaQuery, useTheme } from '@mui/material';

interface MediaDeskProps {
  alt: string;
  imageUrl: string;
  withBorderBLRadius?: boolean;
  withBorderBRRadius?: boolean;
  withBorderTLRadius?: boolean;
  withBorderTRRadius?: boolean;
}

const MediaDesk: React.FC<MediaDeskProps> = ({
  alt,
  imageUrl,
  withBorderBLRadius,
  withBorderBRRadius,
  withBorderTLRadius,
  withBorderTRRadius,
}) => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  const borderStyle = `2px solid ${theme.palette.gray}`;
  const borderRadius = '10px';

  const getWidth = () => {
    if (isLarge) return '210px';

    if (isDesktop) return '234px';

    return '167px';
  };

  return (
    <Box
      sx={{
        border: borderStyle,
        borderBottomLeftRadius: withBorderBLRadius ? borderRadius : 0,
        borderBottomRightRadius: withBorderBRRadius ? borderRadius : 0,
        borderTopLeftRadius: withBorderTLRadius ? borderRadius : 0,
        borderTopRightRadius: withBorderTRRadius ? borderRadius : 0,
        height: isDesktop ? '160px' : '104px',
        marginLeft: -0.25,
        marginTop: -0.25,
        overflow: 'hidden',
        position: 'relative',
        width: getWidth(),
      }}
    >
      <CardMedia
        alt={alt}
        component="img"
        image={imageUrl}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isDesktop ? '178px' : '122px',
          height: '56px',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};

export default MediaDesk;

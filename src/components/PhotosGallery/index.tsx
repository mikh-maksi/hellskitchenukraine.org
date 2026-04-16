import React from 'react';
import Marquee from 'react-fast-marquee';
import { Box, useMediaQuery, useTheme } from '@mui/material';

import { ImageComponent } from '../ImageComponent';

interface PhotosGalleryProps {}
interface ContentItem {
  alt: string;
  src: string;
  width: number;
  widthMob: number;
}

const content: ContentItem[] = [
  {
    alt: 'flag',
    src: 'images/photosGallery/web/flag.jpg',
    width: 212,
    widthMob: 117,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/bread.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'cooks',
    src: 'images/photosGallery/web/cooks.jpg',
    width: 212,
    widthMob: 117,
  },
  {
    alt: 'volunteers',
    src: 'images/photosGallery/web/volunteers.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'badge',
    src: 'images/photosGallery/web/badge.jpg',
    width: 212,
    widthMob: 117,
  },
  {
    alt: 'volunteer',
    src: 'images/photosGallery/web/volunteer.jpg',
    width: 468,
    widthMob: 258,
  },
];

export const PhotosGallery: React.FC<PhotosGalleryProps> = () => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const renderPhotos = () =>
    content.map(({ alt, src }) => (
      <Box
        key={alt}
        style={{
          height: isDesktop ? '320px' : '186px',
          marginRight: '20px',
          position: 'relative',
        }}
      >
        <ImageComponent
          alt={alt}
          key={alt}
          src={src}
          style={{
            height: 'calc(100% - 20px)',
            marginRight: '12px',
          }}
          withBorder
        />
      </Box>
    ));

  return (
    <Marquee
      style={{ margin: `${isDesktop ? '-160px' : '-94px'} 0` }}
      speed={10}
    >
      {renderPhotos()}
    </Marquee>
  );
};

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
    src: 'images/photosGallery/web/Slideshow01.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow02.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow03.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow04.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow05.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow06.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow07.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow08.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow09.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow10.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow11.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow12.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow13.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow14.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow15.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow16.jpg',
    width: 468,
    widthMob: 258,
  },
  {
    alt: 'bread',
    src: 'images/photosGallery/web/Slideshow17.jpg',
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

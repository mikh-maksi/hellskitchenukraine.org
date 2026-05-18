import React, { CSSProperties } from 'react';
import { CardMedia, useTheme } from '@mui/material';

interface ImageCardProps {
  alt: string;
  className?: string;
  src: string;
  style?: CSSProperties;
  withBorder?: boolean;
  lnk?:string;
}

export const ImageComponent: React.FC<ImageCardProps> = ({
  alt,
  className,
  src,
  style,
  withBorder,
  lnk,
}) => {
  const theme = useTheme();

  const borderStyles = {
    border: `10px solid ${theme.palette.white}`,
    borderRadius: '8px',
    objectFit: 'cover',
    width: 'calc(100% - 20px)',
  };

  const getStyle = () => {
    if (style) {
      if (withBorder) {
        return { ...style, ...borderStyles } as CSSProperties;
      }

      return style;
    }

    if (withBorder) return borderStyles as CSSProperties;

    return undefined;
  };

  return (
    <div><a href={lnk}
  target="_blank"
  rel="noopener noreferrer"><CardMedia
      alt={alt}
      className={className}
      component="img"
      src={src}
      style={getStyle()}
    /></a></div>
  );
};

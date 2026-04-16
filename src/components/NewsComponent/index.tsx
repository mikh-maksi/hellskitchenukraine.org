import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export enum NewsComponentSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface NewsComponentProps {
  date: string;
  imgPath?: string;
  imgMobPath?: string;
  size?: NewsComponentSize;
  title: string;
}

export const NewsComponent: React.FC<NewsComponentProps> = ({
  date,
  imgMobPath,
  imgPath,
  size = NewsComponentSize.small,
  title,
}) => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const cardStyles = {
    backgroundColor: theme.palette.lightBlue,
    borderRadius: '10px',
  };

  const getCardStyles = () => {
    const styles: React.CSSProperties = {
      ...cardStyles,
    };

    if (size === NewsComponentSize.medium) {
      if (isDesktop) styles.height = '440px';
      else styles.height = '324px';
    }
    if (size === NewsComponentSize.large) {
      if (isDesktop) styles.height = '840px';
      else styles.height = '670px';
    }

    if (imgPath) {
      styles.backgroundImage = `url(${isDesktop ? imgPath : imgMobPath})`;
      styles.backgroundSize = 'cover';
      styles.backgroundPosition = 'center';
      styles.color = theme.palette.white;
      styles.display = 'flex';
      styles.flexDirection = 'column';
      styles.justifyContent = 'flex-end';
    }

    return styles;
  };

  const getTypographyStyles = () => {
    if (size === NewsComponentSize.large) return undefined;

    const styles: React.CSSProperties = {
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 2,
    };

    return styles;
  };

  return (
    <Card>
      <CardContent style={getCardStyles()}>
        <Typography gutterBottom style={getTypographyStyles()} variant="h6">
          {title}
        </Typography>
        <Typography>{date}</Typography>
      </CardContent>
    </Card>
  );
};

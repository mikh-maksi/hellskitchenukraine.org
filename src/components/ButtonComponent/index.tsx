import React from 'react';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { Button, useMediaQuery, useTheme } from '@mui/material';

import { ROUTES_PATH } from '../../Router/constants';

export enum ButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum ButtonVariant {
  black = 'black',
  yellow = 'yellow',
  white = 'white',
}

export interface ButtonComponentProps {
  size: ButtonSize;
  textButton?: string;
  variant?: ButtonVariant;
  withLeftArrow?: boolean;
  withRightArrow?: boolean;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  size,
  textButton,
  variant = ButtonVariant.black,
  withLeftArrow,
  withRightArrow,
}) => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const getFontSize = () => {
    const defaultSize = '18px';

    if (size === ButtonSize.large && isDesktop) return '22px';

    return defaultSize;
  };

  const getPadding = () => {
    const defaultSize = '10px 28px';

    if (size === ButtonSize.small) return '7px 12px';

    if (size === ButtonSize.large && isDesktop) return '14px 30px';

    return defaultSize;
  };

  const getButtonStyle = () => {
    const styles: React.CSSProperties = {
      borderRadius: '10px',
      fontSize: getFontSize(),
      padding: getPadding(),
      textTransform: 'none' as const,
    };

    if (variant === ButtonVariant.black) {
      styles.color = theme.palette.black;
      styles.border = `2px solid ${theme.palette.black}`;
    }

    if (variant === ButtonVariant.yellow) {
      styles.color = theme.palette.darkYellow;
      styles.border = `2px solid ${theme.palette.darkYellow}`;
    }

    if (variant === ButtonVariant.white) {
      styles.color = theme.palette.white;
      styles.border = `2px solid ${theme.palette.white}`;
    }

    return styles;
  };

  const iconStyle = {
    fontSize: '26px',
  };

  return (
    <Button
      style={getButtonStyle()}
      component={Link}
      to={ROUTES_PATH.donate}
      variant="outlined"
      startIcon={withLeftArrow && <WestIcon style={iconStyle} />}
      endIcon={withRightArrow && <EastIcon style={iconStyle} />}
    >
      {textButton}
    </Button>
  );
};

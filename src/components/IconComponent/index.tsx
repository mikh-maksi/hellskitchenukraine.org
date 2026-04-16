import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { useTheme } from '@mui/material';

export enum IconSize {
  'S28' = '28px',
  'S40' = '40px',
}

interface IconComponentProps {
  className?: string;
  Icon: SvgIconComponent;
  size?: IconSize;
  isWhite?: boolean;
}

export const IconComponent: React.FC<IconComponentProps> = ({
  className,
  Icon,
  size = IconSize.S28,
  isWhite,
}) => {
  const theme = useTheme();

  return (
    <Icon
      className={className}
      style={{
        color: isWhite ? theme.palette.white : theme.palette.icon,
        fontSize: size,
      }}
    />
  );
};

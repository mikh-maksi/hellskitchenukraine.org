import React from 'react';
import { useTranslation } from 'react-i18next';
import { ToggleButton, ToggleButtonGroup, useTheme } from '@mui/material';

interface LanguageToggleProps {
  isDark?: boolean;
  isVertical?: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  isDark,
  isVertical,
}) => {
  const { i18n } = useTranslation();
  const theme = useTheme();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string,
  ) => i18n.changeLanguage(nextView);

  const activeTextColor = isDark ? theme.palette.black : theme.palette.white;
  const activeBgColor = isDark ? theme.palette.gray : theme.palette.black;
  const textColor = isDark ? theme.palette.white : theme.palette.black;

  const getActiveBtnStyle = (value: string) => ({
    backgroundColor: i18n.language === value ? activeBgColor : 'transparent',
    borderRadius: '12px',
    color: i18n.language === value ? activeTextColor : textColor,
  });

  return (
    <ToggleButtonGroup
      orientation={isVertical ? 'vertical' : 'horizontal'}
      value={i18n.language}
      exclusive
      onChange={handleChange}
      style={{
        border: `2px solid ${activeBgColor}`,
        borderRadius: '12px',
      }}
    >
      <ToggleButton
        value="uk"
        aria-label="list"
        style={{
          ...getActiveBtnStyle('uk'),
          margin: isVertical ? '2px 2px 0 2px' : '2px 0 2px 2px',
          textTransform: 'none',
        }}
      >
        Ua
      </ToggleButton>
      <ToggleButton
        value="en"
        aria-label="module"
        style={{
          ...getActiveBtnStyle('en'),
          margin: isVertical ? '0 2px 2px 2px' : '2px 2px 2px 0',
          textTransform: 'none',
        }}
      >
        En
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

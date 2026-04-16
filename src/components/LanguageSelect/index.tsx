import React from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem, Select, type SelectChangeEvent } from '@mui/material';

interface LanguageSelectProps {}

export const LanguageSelect: React.FC<LanguageSelectProps> = () => {
  const { i18n } = useTranslation();

  const handleChange = async (event: SelectChangeEvent) => {
    await i18n.changeLanguage(event.target.value);
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      displayEmpty
      sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      }}
    >
      <MenuItem value="uk">Ua</MenuItem>
      <MenuItem value="en">En</MenuItem>
    </Select>
  );
};

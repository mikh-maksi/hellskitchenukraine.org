import React from 'react';
import { useTranslation } from 'react-i18next';

import { MENU_ROUTES } from '../../Router/constants';
import { ImageComponent } from '../ImageComponent';
import { InternalLink } from '../InternalLink';

interface LogoProps {
  isWhite?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ isWhite }) => {
  const { i18n } = useTranslation();

  const LOGO_SRC: { [key: string]: string } = {
    en: isWhite ? '/images/logo_eng_white.png' : '/images/logo_eng.png',
    uk: isWhite ? '/images/logo_white.png' : '/images/logo.png',
  };

  return (
    <InternalLink to={MENU_ROUTES.Home}>
      <ImageComponent
        alt="Logo Hell's Kitchen Ukraine"
        src={LOGO_SRC[i18n.language]}
      />
    </InternalLink>
  );
};

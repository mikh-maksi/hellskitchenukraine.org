import React from 'react';
import { useTranslation } from 'react-i18next';

import { AnnouncementSection } from '../../components/AnnouncementSection';
import { withHeaderFooter } from '../../hoc/withHeaderFooter';

interface NotFoundPageProps {
  isBlue?: boolean;
}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  const { t } = useTranslation();

  return <AnnouncementSection text={t('notFoundPage.text')} />;
};

export default withHeaderFooter(NotFoundPage);

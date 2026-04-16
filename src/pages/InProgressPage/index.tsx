import React from 'react';
import { useTranslation } from 'react-i18next';

import { AnnouncementSection } from '../../components/AnnouncementSection';
import { withHeaderFooter } from '../../hoc/withHeaderFooter';

interface InProgressPageProps {
  isBlue?: boolean;
}

const InProgressPage: React.FC<InProgressPageProps> = () => {
  const { t } = useTranslation();

  return <AnnouncementSection text={t('inProgressPage.text')} inProgress />;
};

export default withHeaderFooter(InProgressPage);

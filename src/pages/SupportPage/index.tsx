import React from 'react';

import { SupportSection } from '../../components/SupportSection';
import { withHeaderFooter } from '../../hoc/withHeaderFooter';

interface SupportPageProps {
  isBlue?: boolean;
}

const SupportPage: React.FC<SupportPageProps> = () => <SupportSection />;

export default withHeaderFooter(SupportPage);

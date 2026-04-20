import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ScrollToTop } from '../components/scrolltotop/ScrollToTop';
import AboutPage from '../pages/AboutPage';
import DonatePage from '../pages/DonatePage';
import HomePage from '../pages/HomePage';
import InProgressPage from '../pages/InProgressPage';
import NotFoundPage from '../pages/NotFoundPage';
import Projects from '../pages/Projects';
import ReportsPage from '../pages/ReportsPage';
import { SuccessPage } from '../pages/SuccessPage';
import SupportPage from '../pages/SupportPage';
import { ROUTES_PATH } from './constants';

const AppRoutes: React.FC = (): JSX.Element => (
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path={ROUTES_PATH.home} element={<HomePage />} />
      <Route path={ROUTES_PATH.projects} element={<Projects isBlue />} />
      <Route path={ROUTES_PATH.about} element={<AboutPage isBlue />} />
      <Route path={ROUTES_PATH.support} element={<SupportPage isBlue />} />
      {/* <Route path={ROUTES_PATH.news} element={<InProgressPage isBlue />} /> */}
      {/* <Route
        path={ROUTES_PATH.cooperation}
        element={<InProgressPage isBlue />}
      /> */}
      {/* <Route path={ROUTES_PATH.contact} element={<InProgressPage isBlue />} /> */}
      <Route
        path={ROUTES_PATH.userAgreement}
        element={<InProgressPage isBlue />}
      />
      <Route path={ROUTES_PATH.reports} element={<ReportsPage />} />
      <Route path={ROUTES_PATH.donate} element={<DonatePage />} />
      <Route path={ROUTES_PATH.success} element={<SuccessPage />} />
      <Route path="*" element={<NotFoundPage isBlue />} />
    </Routes>
  </Router>
);

export default AppRoutes;

import React, { type ComponentType, type ReactElement } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

interface WithHeaderFooterProps {
  isBlue?: boolean;
}

export function withHeaderFooter<T extends WithHeaderFooterProps>(
  WrappedComponent: ComponentType<T>,
) {
  const WithHeaderFooterComponent = (props: T): ReactElement => (
    <>
      <Header isBlue={props?.isBlue} />
      <WrappedComponent {...props} />
      <Footer />
    </>
  );

  return WithHeaderFooterComponent;
}

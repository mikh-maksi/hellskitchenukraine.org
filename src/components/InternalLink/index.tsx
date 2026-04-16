import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { MENU_ROUTES, ROUTES_PATH } from '../../Router/constants';

import styles from './styles.module.css';

interface InternalLinkProps {
  children?: ReactNode;
  style?: React.CSSProperties;
  to: MENU_ROUTES;
}

export const InternalLink: React.FC<InternalLinkProps> = ({
  children,
  style,
  to,
}) => (
  <Link className={styles.link} key={to} style={style} to={ROUTES_PATH[to]}>
    {children}
  </Link>
);

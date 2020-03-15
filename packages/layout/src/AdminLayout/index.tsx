import React from 'react';

import { AdminLayoutBody } from './Body';
import { AdminLayoutFooter } from './Footer';
import { AdminLayoutHeader } from './Header';

import styles from './styles.module.scss';

export type AdminLayoutProps = {
  children: React.ReactFragment;
};

export const AdminLayout = (props: AdminLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      {props.children}
    </div>
  );
}

AdminLayout.Body = AdminLayoutBody;
AdminLayout.Footer = AdminLayoutFooter;
AdminLayout.Header = AdminLayoutHeader;

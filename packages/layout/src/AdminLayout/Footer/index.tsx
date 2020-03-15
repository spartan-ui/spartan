import React from 'react';

import styles from './styles.module.scss';

export type AdminLayoutFooterProps = {};

export const AdminLayoutFooter: React.FC<AdminLayoutFooterProps> = (props) => {
  return (
    <header className={styles.footer}>
      {props.children}
    </header>
  )
}

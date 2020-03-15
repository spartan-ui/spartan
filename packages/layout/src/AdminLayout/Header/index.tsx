import React from 'react';

import styles from './styles.module.scss';

export type AdminLayoutHeaderProps = {};

export const AdminLayoutHeader: React.FC<AdminLayoutHeaderProps> = (props) => {
  return (
    <header className={styles.header}>
      {props.children}
    </header>
  )
}

import React from 'react';

import styles from './styles.module.scss';

export type AdminLayoutBodyProps = {};

export const AdminLayoutBody: React.FC<AdminLayoutBodyProps> = (props) => {
  return (
    <main className={styles.body}>
      {props.children}
    </main>
  );
}

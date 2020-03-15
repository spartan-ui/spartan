import React from 'react';

import styles from './styles.module.scss';

export type FooterProps = {
  tagline: string;
  version: string;
};

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.tagline}>
        <span>{props.tagline}</span>
      </div>
      <div className={styles.version}>
        <span>{props.version}</span>
      </div>
    </footer>
  );
};

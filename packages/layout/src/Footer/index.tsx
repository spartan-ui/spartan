import React from 'react';

import styles from './styles.module.scss';

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = (props) => {
  return <footer className={styles.footer}>{props.children}</footer>;
};

import React from 'react';
import { NavbarBrand as BootstrapNavbarBrand } from 'react-bootstrap';

import styles from './styles.module.scss';

export type NavbarBrandProps = React.ComponentProps<typeof BootstrapNavbarBrand>;

export const NavbarBrand = (props: NavbarBrandProps) => {
  return (
    <BootstrapNavbarBrand className={styles.navbarBrand} {...props} />
  )
};

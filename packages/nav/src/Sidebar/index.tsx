import React from 'react';
import { ListGroup } from 'react-bootstrap';

import { SidebarItem } from './SidebarItem';
import { SidebarLink } from './SidebarLink';
import styles from './styles.module.scss';

export type SidebarProps = {
  children: React.ReactFragment;
  isVisible?: boolean;
};

export const Sidebar = (props: SidebarProps) => {
  const classNames = [
    styles.sidebar,
    'list-unstyled',
    // @TODO Clean this up
    !props.isVisible || false ? 'is-visible-desktop' : '',
  ].join(' ');

  return (
    <ListGroup className={classNames} variant="flush">
      {props.children}
    </ListGroup>
  );
};

Sidebar.Item = SidebarItem;
Sidebar.Link = SidebarLink;

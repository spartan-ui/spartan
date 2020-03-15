import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { NavLink, RouteProps } from 'react-router-dom';

import styles from './styles.module.scss';

export type SidebarLinkProps = Pick<RouteProps, 'exact' | 'path'> & Pick<FontAwesomeIconProps, 'icon'> & {
  title: string;
  isHidden?: boolean;
};

/**
 * <SidebarLink> is a specialized version of <SidebarItem> that
 * integrates with `react-router-dom` directly.
 *
 */
export const SidebarLink: React.FC<SidebarLinkProps> = (props) => {

  if (props.isHidden) {
    return null;
  }

  return (
    <ListGroupItem
      action
      as={NavLink}
      className={styles.sidebarLink}
      exact={props.exact}
      to={{ pathname: props.path as string }}
    >
      <span className={styles.sidebarLinkIcon}>
        <FontAwesomeIcon
          fixedWidth
          icon={props.icon}
        />
      </span>
      <span className={styles.sidebarLinkTitle}>
        {props.title}
      </span>
    </ListGroupItem>
  );
}

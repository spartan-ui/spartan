import React from 'react';
import { ListGroupItem, ListGroupItemProps } from 'react-bootstrap';

export type SidebarItemProps = ListGroupItemProps & {};

export const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  return (
    <ListGroupItem {...props} />
  );
}

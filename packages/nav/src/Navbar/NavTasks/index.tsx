import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav, NavDropdown} from 'react-bootstrap';

import { FlexboxAlignmentTypes } from '../../common';

export type NavTasksProps = {
  alignment: FlexboxAlignmentTypes;
};

export const NavTasks: React.FC<NavTasksProps> = (props) => {

  return (
    <Nav className={props.alignment}>
      <NavDropdown alignRight id="navTasks" title={<FontAwesomeIcon icon={faTasks}/>}>
        <NavDropdown.Item href="#/action-1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#/action-2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#/action-3">Something else</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

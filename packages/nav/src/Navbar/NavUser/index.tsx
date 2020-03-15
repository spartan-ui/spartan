import { faUserCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Image, Nav, NavDropdown, Row } from 'react-bootstrap';

import { FlexboxAlignmentTypes } from '../../common';

export type NavUserProps = {
  alignment: FlexboxAlignmentTypes;
};

export const NavUser: React.FC<NavUserProps> = (props) => {
  return (
    <Nav className={props.alignment}>
      <NavDropdown alignRight id="navUser" title={<Image src="https://placehold.it/20x20" rounded/>}>
        <NavDropdown.Item href="#/action-1">
          <Row>
            <Col md={3}><FontAwesomeIcon icon={faUserCog}/></Col>
            <Col md={9}>Account</Col>
          </Row>
        </NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item href="#/action-2">
          <Row>
            <Col md={3}><FontAwesomeIcon icon={faSignOutAlt}/></Col>
            <Col md={9}>Logout</Col>
          </Row>
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

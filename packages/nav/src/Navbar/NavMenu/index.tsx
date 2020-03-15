import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup, Nav } from 'react-bootstrap';

import { FlexboxAlignmentTypes } from '../../common';

export type NavMenuProps = {
  alignment: FlexboxAlignmentTypes;
};

export const NavMenu: React.FC<NavMenuProps> = (props) => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Nav className={props.alignment} activeKey="/home">
      {
        isSearchOpen
          ? null
          : (
            <>
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </>
          )
      }

      <Button variant="outline-success" onClick={() => {
        setIsSearchOpen(!isSearchOpen);
      }}>
        <FontAwesomeIcon icon={faSearch}/>
      </Button>
      {
        isSearchOpen
          ? (
            <Form inline>
              <InputGroup>
                <FormControl
                  autoFocus
                  placeholder=""
                  aria-label="Search query"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" onClick={() => {
                    setIsSearchOpen(!isSearchOpen);
                  }}>
                    <FontAwesomeIcon icon={faTimes}/>
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          )
          : null
      }
    </Nav>
  );
}

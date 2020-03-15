import { AdminLayout, Footer } from '@spartan-ui/layout';
import { NavbarBrand, Sidebar } from '@spartan-ui/nav';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Image, Navbar } from 'react-bootstrap';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import '@spartan-ui/layout/dist/styles.css';
import '@spartan-ui/nav/dist/styles.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <AdminLayout.Header>
          <Navbar bg="dark" variant="dark" expand="md">
            <NavbarBrand as={NavLink} to="/">
              <Image
                alt="Endemol Shine Group"
                height="26"
                style={{ marginRight: '1rem' }}
                src={logo}
              />
              <span>
                Spartan Dashboard
              </span>
            </NavbarBrand>
            <Navbar.Toggle onClick={() => { console.log('123') }} />
          </Navbar>
        </AdminLayout.Header>
        <AdminLayout.Body>
          <Sidebar isVisible={true}>
            <Sidebar.Link
              title="Link"
              exact={true}
              path={"/"}
              icon={faHome}
            />
            <Sidebar.Item>
              Item
            </Sidebar.Item>
          </Sidebar>
          <Route path={"/"} exact={true} component={() => { return (<div>Home Page</div>) }} />
          <Route path={"/foo"}></Route>
        </AdminLayout.Body>
        <AdminLayout.Footer>
          <Footer
            tagline={`© ${new Date().getFullYear()} Endemol Shine Group`}
            version={"0.0.1"}
          />
        </AdminLayout.Footer>
      </AdminLayout>
    </BrowserRouter>
  )
}

export default App;

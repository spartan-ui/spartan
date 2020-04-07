import { AdminLayout, Footer } from '@spartan-ui/layout';
import { NavbarBrand, Sidebar } from '@spartan-ui/nav';
import { Select } from '@spartan-ui/select';
import { DataGrid } from '@spartan-ui/Datagrid';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Col, Image, Navbar, Row } from 'react-bootstrap';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import {AllCommunityModules} from "@ag-grid-community/all-modules";

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import '@spartan-ui/layout/dist/styles.css';
import '@spartan-ui/nav/dist/styles.css';
import '@spartan-ui/datagrid/dist/styles.css';

import './App.css';


let columnDefinitions = [
  { headerName: "Behemoth Name", field: "name" },
  { headerName: "Behemoth Type", field: "type" },
];
let data = [
  { name: "Skarn", type: "terra" },
  { name: "Charrog", type: "blaze" },
];

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Row>
        <Col>
          <Select
            value={"shut up"}
          />
        </Col>
      </Row>
    </div>
  );
}


// Datagrid example
const DataGridPage = () => {
  return (
          <DataGrid
            columnDefs={columnDefinitions}
            rowData={data}
            modules={AllCommunityModules}
          />
  );
}

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
            <Navbar.Toggle onClick={() => {
              console.log('123')
            }}/>
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
          <Route path={"/"} exact={true} component={Home}/>
          <Route path={"/datagrid"} component={DataGridPage}/>
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

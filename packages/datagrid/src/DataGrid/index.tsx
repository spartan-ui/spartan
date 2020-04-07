import { AgGridReact, AgGridReactProps } from '@ag-grid-community/react';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import styles from './styles.module.scss';

export type DataGridProps = AgGridReactProps;

export const DataGrid: React.FC<DataGridProps> = (props) => {
  return (
    <Container className="h-100" fluid>
      <Row className="h-100">
        <Col className="d-flex flex-column">
          <section
            role="grid"
            className={['ag-theme-balham', styles.dataGrid].join(' ')}
          >
            <AgGridReact
              defaultColDef={{
                resizable: true,
                sortable: true,
                filter: true,
              }}
              getRowClass={(params) => {
                if (params.node.rowIndex % 2 === 0) {
                  return 'highlight-row';
                }

                return '';
              }}
              suppressFieldDotNotation={true}
              {...props}
            />
          </section>
        </Col>
      </Row>
    </Container>
  );
};

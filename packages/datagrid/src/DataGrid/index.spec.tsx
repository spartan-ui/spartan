import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { render } from '@testing-library/react';
import React from 'react';

import { DataGrid } from './';

const columnDefinitions = [
  { headerName: 'Behemoth Name', field: 'name' },
  { headerName: 'Behemoth Type', field: 'type' },
];

const data = [
  { name: 'Skarn', type: 'terra' },
  { name: 'Charrog', type: 'blaze' },
];

describe('<DataGrid />', () => {
  it('should render datagrid', async () => {
    const { getByText, getAllByRole } = render(
      <DataGrid
        columnDefs={columnDefinitions}
        rowData={data}
        modules={AllCommunityModules}
      />,
    );

    // Test that our custom class exists
    const [gridElement] = getAllByRole('grid');
    expect(gridElement).toBeInTheDocument();
    expect(gridElement).toHaveClass('ag-theme-balham dataGrid');

    // Test that element exists
    const cellElement = getByText('Skarn');
    expect(cellElement.className).toContain('ag-cell-value');
  });
});

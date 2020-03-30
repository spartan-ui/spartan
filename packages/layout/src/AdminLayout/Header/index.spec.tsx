import { render } from '@testing-library/react';
import React from 'react';

import { AdminLayoutHeader } from './';

describe('<AdminLayoutHeader />', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <AdminLayoutHeader>Header Content</AdminLayoutHeader>,
    );
    const headerElement = getByText('Header Content');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass('header');
  });
});

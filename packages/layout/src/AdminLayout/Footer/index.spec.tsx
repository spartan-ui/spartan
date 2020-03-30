import { render } from '@testing-library/react';
import React from 'react';

import { AdminLayoutFooter } from './';

describe('<AdminLayoutFooter />', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <AdminLayoutFooter>Footer Content</AdminLayoutFooter>,
    );
    const footerElement = getByText('Footer Content');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass('footer');
  });
});

import { render } from '@testing-library/react';
import React from 'react';

import { AdminLayout } from './index';

describe('<AdminLayoutFooter />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<AdminLayout>Empty Layout</AdminLayout>);
    const layoutElement = getByText('Empty Layout');
    expect(layoutElement).toBeInTheDocument();
    expect(layoutElement).toHaveClass('wrapper');
  });
});

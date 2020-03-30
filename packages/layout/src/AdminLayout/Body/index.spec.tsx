import { render } from '@testing-library/react';
import React from 'react';

import { AdminLayoutBody } from './';

describe('<AdminLayoutBody />', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <AdminLayoutBody>Body Content</AdminLayoutBody>,
    );
    const bodyElement = getByText('Body Content');
    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveClass('body');
  });
});

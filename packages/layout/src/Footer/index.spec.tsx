import { render } from '@testing-library/react';
import React from 'react';

import { Footer } from './';

describe('<Footer />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Footer>Footer</Footer>);

    const footerElement = getByText('Footer');
    expect(footerElement).toHaveClass('footer');
  });
});

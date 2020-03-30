import { render } from '@testing-library/react';
import React from 'react';

import { Footer } from './';

describe('<Footer />', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Footer tagline="Spartan UI" version="1.0.0" />,
    );
    const copyrightElement = getByText(/spartan/i);
    expect(copyrightElement).toBeInTheDocument();
    const versionElement = getByText(/1\.0\.0/i);
    expect(versionElement).toBeInTheDocument();
  });
});

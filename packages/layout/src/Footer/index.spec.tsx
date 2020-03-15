import { render } from '@testing-library/react';
import React from 'react';

import { Footer } from './index';

describe('<Footer />', () => {
  it('renders', () => {
    const { getByText } = render(
      <Footer
        tagline="Endemol Shine Group"
        version="1.0.0"
      />
    );
    const copyrightElement = getByText(/endemol shine group/i);
    expect(copyrightElement).toBeInTheDocument();
    const versionElement = getByText(/1\.0\.0/i);
    expect(versionElement).toBeInTheDocument();
  });
});

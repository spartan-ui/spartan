import React from 'react';
import ReactDOM from 'react-dom';
import { AdminLayout } from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdminLayout>""</AdminLayout>, div);
  ReactDOM.unmountComponentAtNode(div);
});

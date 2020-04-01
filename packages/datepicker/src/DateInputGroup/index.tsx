import React from 'react';
import { InputGroup } from 'react-bootstrap';

export const DateInputGroup: React.FC<{}> = (props) => {
  const { children, ...otherProps } = props;

  return <InputGroup {...otherProps}>{children}</InputGroup>;
};

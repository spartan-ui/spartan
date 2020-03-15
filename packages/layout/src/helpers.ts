import React from 'react';
import { BsPrefixProps, ReplaceProps } from 'react-bootstrap/helpers';

// export type AddStyleProps<P> = Pick<HTMLAttributes<P>, 'className' | 'style'> & P;

export type AddAsProp <
  As extends React.ElementType,
  P = {}
> = ReplaceProps<As, BsPrefixProps<As> & P>

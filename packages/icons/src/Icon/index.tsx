import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type IconProps = FontAwesomeIconProps;

export const Icon: React.FC<IconProps> = (props) => {
  return (
    <FontAwesomeIcon icon={props.icon} />
  );
}

import React from 'react';
import { FormControl } from 'react-bootstrap';
import ReactSelect from 'react-select';
import { Props as StateManagerProps } from 'react-select/src/stateManager';
import { Props as ReactSelectProps } from 'react-select/src/Select';

export type SelectProps<T = {}> = ReactSelectProps<T> & StateManagerProps<T>;

export const Select = (props: SelectProps) => {
  return (
    // The following ignore is due to a bug in `react-bootstrap` - it
    // should use the type of value from `<Select>` instead of trying
    // to use the type of value from `<FormControl>`
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    <FormControl
      as={ReactSelect}
      style={{
        padding: 0,
      }}
      styles={{
        container: () => {
          return {
            border: 'none',
            borderRadius: '0.25rem',
            padding: 0,
          };
        },
        control: (provided: React.CSSProperties) => {
          return {
            ...provided,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          };
        },
      }}
      {...props}
    />
  );
};

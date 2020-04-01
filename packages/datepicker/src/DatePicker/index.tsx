import React from 'react';
import {
  FormControl,
  OverlayProps,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';
import DayPicker, { DayPickerProps } from 'react-day-picker';

import { DateInputGroup } from '../DateInputGroup';

import 'react-day-picker/lib/style.css';
import styles from './styles.module.scss';

export type DatePickerProps = {
  dayPickerProps: DayPickerProps;
  value: string | Date | undefined;
} & Pick<OverlayProps, 'placement'>;

export const DatePicker: React.FC<DatePickerProps> = (props) => {
  const popover = (
    <Popover
      id="popover-basic"
      style={{ maxWidth: 'unset', boxShadow: '0 5px 5px rgba(0, 0, 0, 0.2)' }}
    >
      <Popover.Content>
        <DayPicker {...props} />
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      placement={props.placement}
      overlay={popover}
      rootClose
    >
      <DateInputGroup>
        <FormControl
          readOnly
          className={styles.datePicker}
          value={props.value ? props.value.toString() : ''}
          style={{ backgroundColor: '#fff', textAlign: 'center' }}
        />
      </DateInputGroup>
    </OverlayTrigger>
  );
};

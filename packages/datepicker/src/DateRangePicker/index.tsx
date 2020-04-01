import React, { useState } from 'react';
import {
  FormControl,
  OverlayTrigger,
  OverlayProps,
  Popover,
} from 'react-bootstrap';
import DayPicker, { DayModifiers, DayPickerProps } from 'react-day-picker';

import { DateInputGroup } from '../DateInputGroup';
import { calculateNextDateRange } from '../Helpers';

import 'react-day-picker/lib/style.css';
import styles from './styles.module.scss';

export type DateRangePickerProps = {
  dayPickerProps: DayPickerProps;
  textInputValue: string;
} & Pick<OverlayProps, 'placement'>;

export type DateRange = {
  from: Date;
  to: Date;
};

const RenderOverlay = (props: DateRangePickerProps) => {
  const [rangeStartDay, rangeSetStartDay] = useState<Date>(new Date());
  const [rangeEndDay, rangeSetEndDay] = useState<Date>(new Date());
  const [defaultRange, setDefaultRange] = useState<DateRange>({
    from: rangeStartDay,
    to: rangeEndDay,
  });

  const rangeHandleDayClick = (day: Date, modifiers: DayModifiers) => {
    if (modifiers.disabled) return;
    setDefaultRange(calculateNextDateRange(day, defaultRange));
    rangeSetStartDay(defaultRange.from);
    rangeSetEndDay(defaultRange.to);
  };

  const defaultModifiers = {
    start: defaultRange.from,
    end: defaultRange.to,
  };

  return (
    <Popover
      id="popover-basic"
      style={{ maxWidth: 'unset', boxShadow: '0 5px 5px rgba(0, 0, 0, 0.2)' }}
    >
      <Popover.Content>
        <DayPicker
          className={'Selectable'}
          numberOfMonths={4}
          onDayClick={props.dayPickerProps.onDayClick || rangeHandleDayClick}
          selectedDays={
            props.dayPickerProps.selectedDays || [
              defaultRange.from,
              defaultRange,
            ]
          }
          modifiers={props.dayPickerProps.modifiers || defaultModifiers}
          {...props.dayPickerProps}
        />
      </Popover.Content>
    </Popover>
  );
};

export const DateRangePicker: React.FC<DateRangePickerProps> = (
  props: DateRangePickerProps,
) => {
  return (
    <OverlayTrigger
      trigger="click"
      placement={props.placement}
      overlay={RenderOverlay(props)}
      rootClose
    >
      <DateInputGroup>
        <FormControl
          readOnly
          className={styles.dateRangePicker}
          value={props.textInputValue}
          style={{ backgroundColor: '#fff', textAlign: 'center' }}
        />
      </DateInputGroup>
    </OverlayTrigger>
  );
};

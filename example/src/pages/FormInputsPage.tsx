import {DatePicker, DateRangePicker} from '@spartan-ui/datepicker';
import React, {useState} from 'react';
import {DayModifiers} from 'react-day-picker';
import { Col, Row } from 'react-bootstrap';

import './styles.css';

export const FormInputsPage = () => {

  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const handleDayClick = (day: Date, modifiers: DayModifiers, e: React.MouseEvent<HTMLDivElement>) => {
    setSelectedDay(day);
  };

  const dayPickerProps = {
    onDayClick: handleDayClick,
    selectedDays: [selectedDay]
  };

  return (
    <div>
      <h1>Date Picker</h1>
      <Row>
        <Col>
          <DatePicker
            dayPickerProps={dayPickerProps}
            placement={'bottom'}
            value={new Date()}
          />
        </Col>
        <Col>
          <DateRangePicker
            dayPickerProps={{}}
            placement={'bottom'}
            textInputValue={'Pick a date'}
          />
        </Col>
      </Row>
    </div>
  )
};

import dateFnsIsEqual from 'date-fns/isEqual';

import { DateRange } from '../DateRangePicker/index';

export const calculateNextDateRange = (day: Date, currentRange: DateRange) => {
  const range = currentRange;

  // if you click an already selected day set both to that day
  // this is useful when you need to move the overall selection
  if (dateFnsIsEqual(day, range.from) || dateFnsIsEqual(day, range.to)) {
    return { from: day, to: day };
  }

  // checks to decide which end of the selection to move
  if (day < range.from) range.from = day;
  if (day > range.from) range.to = day;

  // do not allow null dates
  if (range.from === null) range.from = new Date();
  if (range.to === null) range.to = new Date();

  return range;
};

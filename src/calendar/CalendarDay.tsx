import React, { FunctionComponent } from 'react';
import moment from 'moment';
import uuid from 'uuid';

import Interface from './interfaces/CalendarDay.interface';
import { DataObj } from './interfaces/Calendar.interface';
import './styles/CalendarDay.scss';

const CalendarDay: FunctionComponent<Interface> = (props: Props) => {
  const {
    day,
    targetDay,
    handleState,
    targetMonth,
    onClickDay,
    dayComponent,
    data,
    dayContainerClassName,
    dayDataListClass,
    dayDataListItemClass,
    colorPastDates,
  } = props;

  const dayData = data && data.filter(item => item.day === day);
  const active = day && day === targetDay ? 'calendarActiveDate' : '';
  const activeNumber = day === targetDay ? 'calendarActiveDateNumber' : '';
  const date = moment(targetMonth).add(day - 1, 'days');
  const newDate = date.format('YYYY-MM-DD');
  const now = moment();
  const check = date.diff(now, 'days');
  const passed = day && !!colorPastDates && check < 0 ? colorPastDates : '';

  const handleData = () =>
    dayData.map(item => (
      <li
        data-test="dayDataListItem"
        key={`day-item-${item.day}-${uuid()}`}
        className={`dayDataItem ${dayDataListItemClass}`}
      >
        {item.component ? item.component : item.title}
      </li>
    ));

  return (
    <div
      data-test="calendarDayContainer"
      onClick={() => {
        handleState({ targetDay: day, targetDateString: newDate });
        onClickDay && onClickDay(day, dayData);
      }}
      className={`calendarDayContainer ${active} ${dayContainerClassName}`}
      style={{ backgroundColor: passed }}
    >
      {day && (
        <p data-test="calendarNum" className={`calendarNum ${activeNumber}`}>
          {day}{' '}
        </p>
      )}
      {dayComponent}
      {dayData && (
        <ul
          data-test="dayDataList"
          className={`dayDataList ${dayDataListClass}`}
        >
          {dayData.length ? handleData() : ''}
        </ul>
      )}
    </div>
  );
};

export default CalendarDay;

interface Props {
  day: number;
  targetMonth: string;
  targetDay: number;
  targetDateString: string;
  handleState: (data: object) => void;
  onClickDay?: (day: number, dayData: any) => void;
  dayComponent: object;
  data?: DataObj[];
  dayContainerClassName?: string;
  dayDataListClass?: string;
  dayDataListItemClass?: string;
  colorPastDates?: string;
}

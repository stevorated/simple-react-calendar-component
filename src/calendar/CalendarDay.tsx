import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';
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
    colorActiveDate,
  } = props;

  const dayData = data && data.filter(item => item.day === day);
  const active = day && day === targetDay ? 'calanderActiveDate' : '';
  const activeNumber = day === targetDay ? 'calanderActiveDateNumber' : '';
  const date = dayjs(targetMonth).add(day - 1, 'day');
  const newDate = date.format('YYYY-MM-DD');
  const now = dayjs();
  const check = date.isBefore(now);
  const passed = day && !!colorPastDates && check ? colorPastDates : '';

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
      data-test2={`${active}`}
      onClick={() => {
        handleState({ targetDay: day, targetDateString: newDate });
        onClickDay && onClickDay(day, dayData);
      }}
      style={{ backgroundColor: active.length ? colorActiveDate : passed }}
      className={`calendarDayContainer ${active} ${dayContainerClassName}`}
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
  colorActiveDate?: string;
}

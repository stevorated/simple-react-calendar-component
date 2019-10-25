import React from 'react';
import Calendar, { DataObj } from '../../index';
import renderer from 'react-test-renderer';
import { findByTestAttr, data, findByTestCustom } from '../test-utils';
import { mount } from 'enzyme';

let component;
const title = 'ya alla';

const setupRenderer = (props = {}) => {
  return renderer.create(
    <Calendar
      targetDay={1}
      targetDateString="2019-10-01"
      targetMonth="2019-10-01"
      {...props}
    />
  );
};

const setupMountRender = (props = {}) => {
  return mount(
    <Calendar
      targetDay={1}
      targetDateString="2019-10-01"
      targetMonth="2019-10-01"
      {...props}
    />
  );
};

describe('<Calendar />', () => {
  test('should match snapshot', () => {
    let rendered = setupRenderer({});
    const tree = rendered.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should match snapshot with data and titles', () => {
    let rendered = setupRenderer({ data, title, showMonth: true });
    const tree = rendered.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should shallow render correctly with minimal props', () => {
    component = setupMountRender({});
    const calendarContainer = findByTestAttr(component, 'calendarContainer');
    const calendarTitle = findByTestAttr(component, 'calendarTitle');
    const monthTitle = findByTestAttr(component, 'monthTitle');
    const calendarHeaders = findByTestAttr(component, 'calendarHeaders');

    expect(calendarContainer.length).toBe(1);
    expect(calendarTitle.length).toBe(1);
    expect(calendarTitle.text()).toBe('');
    expect(monthTitle.length).toBe(0);
    expect(calendarHeaders.length).toBe(1);
  });

  test('should shallow render correctly with minimal props and titles', () => {
    component = setupMountRender({
      title,
      showMonth: true,
    });
    const calendarTitle = findByTestAttr(component, 'calendarTitle');
    const monthTitle = findByTestAttr(component, 'monthTitle');

    expect(calendarTitle.length).toBe(1);
    expect(calendarTitle.text()).toBe(title);
    expect(calendarTitle.props().className).toBe('calendarTitle' + ' ');

    expect(monthTitle.length).toBe(1);
    expect(monthTitle.props().className).toBe('monthTitle' + ' ');
  });

  test('should shallow render custom title classes', () => {
    const titleContainerClass = 'exampleTitleContainerClass';
    const monthTitleClass = 'exampleMonthTitleClass';
    const containerClassName = 'exampleClassContainer';
    const rowContainerClassName = 'exampleClassRow';
    const dayContainerClassName = 'exampleClassDay';
    const dayDataListClass = 'exampleDayDataListClass';
    const dayDataListItemClass = 'exampleDayDataListItemClass';
    const daysHeaderContainerClass = 'exampleDaysHeaderContainerClass';
    const daysTitleContainerClass = 'exampleDaysTitleContainerClass';

    component = setupMountRender({
      title,
      data,
      showMonth: true,
      titleContainerClass,
      monthTitleClass,
      containerClassName,
      rowContainerClassName,
      dayContainerClassName,
      dayDataListClass,
      dayDataListItemClass,
      daysHeaderContainerClass,
      daysTitleContainerClass,
    });
    const calendarContainer = findByTestAttr(component, 'calendarContainer');
    const calendarRowContainer = findByTestAttr(
      component,
      'calendarRowContainer'
    );
    const calendarDayContainer = findByTestAttr(
      component,
      'calendarDayContainer'
    );
    const calendarTitle = findByTestAttr(component, 'calendarTitle');
    const monthTitle = findByTestAttr(component, 'monthTitle');
    const dayDataList = findByTestAttr(component, 'dayDataList');
    const dayDataListItem = findByTestAttr(component, 'dayDataListItem');
    const calendarDaysContainer = findByTestAttr(
      component,
      'calendarDaysContainer'
    );
    const calendarHeaderContainer = findByTestAttr(
      component,
      'calendarHeaderContainer'
    );

    expect(calendarDaysContainer.first().props().className).toBe(
      'calendarDaysContainer' + ' ' + daysHeaderContainerClass
    );

    expect(calendarHeaderContainer.first().props().className).toBe(
      'calendarHeaderContainer' + ' ' + daysTitleContainerClass
    );

    expect(calendarContainer.props().className).toBe(
      'calendarContainer' + ' ' + containerClassName
    );
    expect(calendarRowContainer.first().props().className).toBe(
      'calendarRow' + ' ' + rowContainerClassName
    );
    expect(calendarDayContainer.first().props().className).toBe(
      'calendarDayContainer' + ' ' + ' ' + dayContainerClassName
    );
    expect(calendarTitle.length).toBe(1);
    expect(calendarTitle.text()).toBe(title);
    expect(calendarTitle.props().className).toBe(
      'calendarTitle' + ' ' + titleContainerClass
    );

    expect(dayDataList.first().props().className).toBe(
      'dayDataList' + ' ' + dayDataListClass
    );

    expect(dayDataListItem.first().props().className).toBe(
      'dayDataItem' + ' ' + dayDataListItemClass
    );

    expect(monthTitle.length).toBe(1);
    expect(monthTitle.props().className).toBe(
      'monthTitle' + ' ' + monthTitleClass
    );
  });

  test('should shallow render October correct row, days and days with dates', () => {
    component = setupMountRender({});
    const calendarRow = findByTestAttr(component, 'calendarRow');
    const calendarRowContainer = findByTestAttr(
      component,
      'calendarRowContainer'
    );
    const calendarDay = findByTestAttr(component, 'calendarDay');
    const calendarNum = findByTestAttr(component, 'calendarNum');

    expect(calendarRow.length).toBe(5);
    expect(calendarRowContainer.length).toBe(5);
    expect(calendarDay.length).toBe(35);
    expect(calendarNum.length).toBe(31);
  });

  test('should shallow render February correct row, days and days with dates', () => {
    component = setupMountRender({
      targetDay: 1,
      targetDateString: '2019-02-01',
      targetMonth: '2019-02-01',
    });
    const calendarRow = findByTestAttr(component, 'calendarRow');
    const calendarRowContainer = findByTestAttr(
      component,
      'calendarRowContainer'
    );
    const calendarDay = findByTestAttr(component, 'calendarDay');
    const calendarNum = findByTestAttr(component, 'calendarNum');
    const dayDataList = findByTestAttr(component, 'dayDataList');

    expect(calendarRow.length).toBe(5);
    expect(calendarRowContainer.length).toBe(5);
    expect(calendarDay.length).toBe(35);
    expect(calendarNum.length).toBe(28);
    expect(dayDataList.length).toBe(0);
  });

  test('should render data prop correctly', () => {
    component = setupMountRender({
      data,
    });
    const dayDataList = findByTestAttr(component, 'dayDataList');
    const dayDataListItem = findByTestAttr(component, 'dayDataListItem');

    expect(dayDataList.length).toBe(35);
    expect(dayDataListItem.length).toBe(data.length);
  });

  test('should render active day class with color', () => {
    component = setupMountRender({ colorActiveDate: 'blue' });
    const activeDay = findByTestCustom(
      component,
      'data-test2',
      'calanderActiveDate'
    );
    expect(activeDay.props().style).toEqual({
      backgroundColor: 'blue',
    });
  });
});

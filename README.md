# Simple React Calendar TypeScript
======

an **easy** to use react calander component.
just 2 required props and you're on your way.
easy classNames and optional custom classes
just add an array with two values and now the calander will be automaticly rendered with the data.

## Installation

```javascript

npm install simple-react-calendar-ts

```

## Simple Use

```javascript

import Calendar, { DataObj } from 'simple-react-calendar-ts';
  state = {
    targetDay: 1,
    targetMonth: 2019-10-01
  }

  handleState = (data) => {
    this.setState(data)
  }

  <Calander
    targetDay={this.state.targetDay}
    targetMonth={this.state.targetMonth}
    title="My Custom Header"
    titleContainerClass="exampleTitleContainerClass"
    showMonth={true}
    monthTitleClass="exampleMonthTitleClass"
    onClickDay={(day: number, data: DataObj) =>
      console.log('onClick', day, data)
    }
    data={data}
    handleState={this.handleState}
    width="92%"
    containerClassName="exampleClassContainer"
    rowContainerClassName="exampleClassRow"
    dayContainerClassName="exampleClassDay"
    dayDataListClass="exampleDayDataListClass"
    dayDataListItemClass="exampleDayDataListItemClass"
    daysHeaderContainerClass="exampleDaysHeaderContainerClass"
    daysTitleContainerClass="exampleDaysTitleContainerClass"
    colorActiveDate="palegoldenrod"
    colorPastDates="#f1f1f1"
  />

  ```

#### or 

[Go to Full Example Repo](https://github.com/stevorated/simple-react-calendar-ts-example)

## Props

| name                     | Required? | Type, Description                                                       |
| :----------------------- |:--------- |:----------------------------------------------------------------------- |
| targetDay                | Required  | number, day in focus                                                    |
| targetMonth              | Required  | string, month to show                                                   |
| title                    | Optional  | string, inner calendar title                                            |
| showMonth                | Optional  | boolean, show month in Calendar                                         |
| handleState              | Optional  | (data: object) => void, control state                                   |
| onClickDay               | Optional  | (day: number, dayData: any) => void, function to fire when day clicked  |
| dayComponent             | Optional  | object, html object to be rendered in each day                          |
| data                     | Optional  | DataObj (name export), data to be rendered into calendar by day         |
| width                    | Optional  | string, width or main calendar container                                |
| containerClassName       | Optional  | string, main calendar container custom css class                        |
| rowContainerClassName    | Optional  | string, custom css class for rows                                       |
| dayContainerClassName    | Optional  | string, custom css class for day container                              |
| dayDataListClass         | Optional  | string, custom css class for data prop rendering                        |
| dayDataListItemClass     | Optional  | string, custom css class for data prop item rendering                   |
| daysHeaderContainerClass | Optional  | string, custom css class for day headers row                            |
| daysTitleContainerClass  | Optional  | string, custom css class for day header                                 |
| titleContainerClass      | Optional  | string, custom css class for inner calendar title                       |
| monthTitleClass          | Optional  | string, custom css class for month title                                |
| colorPastDates           | Optional  | string, custom color for past dates                                     |
| colorActiveDate          | Optional  | string, custom color for active date                                    |

## Cantact Us

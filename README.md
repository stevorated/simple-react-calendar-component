# Simple React Calendar TypeScript

an **easy** to use react calander component.
just 2 required props and you're on your way.
easy classNames and optional custom classes
just add an array with two values and now the calander will be automaticly rendered with the data.

## Installation

```javascript

npm install simple-react-calendar-ts

```
--
--

## Simple Use

```javascript

import Calendar, { DataObj } from 'simple-react-calendar-ts';
  state = {
    targetDay: 1,
    targetMonth: '2019-10-01'
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

  const data: DataObj[] = [
  {
    day: 1,
    title: 'item 1',
  },
  {
    day: 1,
    title: 'item 2',
  },
  {
    day: 1,
    title: 'item 3',
  },
  {
    day: 2,
    title: 'item 4',
  },
  {
    day: 2,
    title: 'item 5',
  },
  {
    day: 2,
    title: 'item 6',
  },
];

  ```

#### or 

[Go to Full Example Repo](https://github.com/stevorated/simple-react-calendar-ts-example)
--
--

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

## License
--
--
--

Copyright © 2019 <stevorated (Shirel Garber)>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
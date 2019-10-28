# Simple React Calendar TypeScript

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

## Props

| name                     | Required? | Type, Description                                                       |
| :----------------------- |:----------------------------------------------------------------------- |:--------- | 
| targetDay                | number, day in focus                                                    | Required  | 
| targetMonth              | string, month to show                                                   | Required  | 
| title                    | string, inner calendar title                                            | Optional  | 
| showMonth                | boolean, show month in Calendar                                         | Optional  | 
| handleState              | (data: object) => void, control state                                   | Optional  | 
| onClickDay               | (day: number, dayData: any) => void, function to fire when day clicked  | Optional  | 
| dayComponent             | object, html object to be rendered in each day                          | Optional  | 
| data                     | DataObj (name export), data to be rendered into calendar by day         | Optional  | 
| width                    | string, width or main calendar container                                | Optional  | 
| containerClassName       | string, main calendar container custom css class                        | Optional  | 
| rowContainerClassName    | string, custom css class for rows                                       | Optional  | 
| dayContainerClassName    | string, custom css class for day container                              | Optional  | 
| dayDataListClass         | string, custom css class for data prop rendering                        | Optional  | 
| dayDataListItemClass     | string, custom css class for data prop item rendering                   | Optional  | 
| daysHeaderContainerClass | string, custom css class for day headers row                            | Optional  | 
| daysTitleContainerClass  | string, custom css class for day header                                 | Optional  | 
| titleContainerClass      | string, custom css class for inner calendar title                       | Optional  | 
| monthTitleClass          | string, custom css class for month title                                | Optional  | 
| colorPastDates           | string, custom color for past dates                                     | Optional  | 
| colorActiveDate          | string, custom color for active date                                    | Optional  | 

## License

Copyright © 2019 <stevorated (Shirel Garber)>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
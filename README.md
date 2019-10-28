# Simple React Calendar TypeScript
======

an **easy** to use react calander component.
just 2 required props and you're on your way.
easy classNames and optional custom classes
just add an array with two values and now the calander will be automaticly rendered with the data.

## Install

npm install simple-react-calendar-ts

## Simple Use

[Go to Full Example Repo](https://github.com/stevorated/simple-react-calendar-ts-example)

#### or 

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